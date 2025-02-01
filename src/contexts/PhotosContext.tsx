import { useState, useEffect, createContext } from "react";

export const PhotosContext = createContext(null);

interface Photo {
    src: {
        original: string;
    },
    avg_color: string,
    alt: string
}

export const PhotosProvider = ({children}) => {
const clientId = import.meta.env.VITE_CLIENT_ID;
    const endPoint = 'https://api.pexels.com/v1/';

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [photosLoading, setPhotosLoading] = useState<boolean>(true);
    const [randomPhoto, setRandomPhoto] = useState<object | null>(null);
    const [randomPhotoLoading, setRandomPhotoLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const goToNxtPage = () => setPage(prevPage => prevPage + 1);
    const goToPrevPage = () => { if (page > 1) setPage(prevPage => prevPage - 1) };
    const goToPage = (page: number) => setPage(page);

    useEffect(() => {
        fetchImages('', page);
    }, [page]);

    const buildURL = (baseURL: string, params: Record<string, string | number>) => {
        const url = new URL(baseURL);
        const searchParams = new URLSearchParams(params as Record<string, string>);
        url.search = searchParams.toString();
        return url.toString();
    };

    const fetchImages = async (query: string = '', page: number = 1, perPage: number = 10) => {
        const params = {
            page,
            per_page: perPage,
        };

        if (query) params.query = query;

        const url = buildURL(`${endPoint}curated`, params);

        setPhotosLoading(true);

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: clientId,
                }
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data.photos);
                setPhotos(data.photos);
                // console.log(photos);
                setPhotosLoading(false);
            }
        } catch (error) {
            console.log(error);
            setPhotosLoading(false);
        }
    };

    const fetchRandomImage = async () => {
        setRandomPhotoLoading(true);

        try {
            const response = await fetch(`${endPoint}curated`, {
                headers: {
                    Authorization: clientId,
                }
            });

            if (response.ok) {
                const data = await response.json();

                const photos = data.photos;

                if (photos.length > 0) {
                    const randomIndex = Math.floor(Math.random() * photos.length);

                    setRandomPhoto(photos[randomIndex]);
                    setRandomPhotoLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setRandomPhotoLoading(true);
        }
    };

    const values = {
        photos,
        randomPhoto,
        fetchImages,
        fetchRandomImage,
        photosLoading,
        randomPhotoLoading,
        page,
        goToNxtPage,
        goToPrevPage,
        goToPage
    };

    return <PhotosContext.Provider value={values}>{children}</PhotosContext.Provider>
}
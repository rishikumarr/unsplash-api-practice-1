import { useState } from "react";

const usePhotos = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const endPoint = 'https://api.unsplash.com/';

    const [photos, setPhotos] = useState(null);
    const [photosLoading, setPhotosLoading] = useState<boolean>(true);

    const [randomPhoto, setRandomPhoto] = useState(null);
    const [randomPhotoLoading, setRandomPhotoLoading] = useState<boolean>(true);

    const buildURL = (baseURL:string, params: Record<string, string | number>) => {
        const url = new URL(baseURL);
        const searchParams = new URLSearchParams(params as Record<string, string>);
        url.search = searchParams.toString();
        return url.toString();
    }
    
    const fetchImages = async(query:string='', page:number=1, perPage:number= 10) => {
        const params = {
            page,
            per_page: perPage,
            client_id:clientId,
        };

        if(query) params.query = query;

        const url = buildURL(`${endPoint}photos`, params);

        setPhotosLoading(true);

        console.log(url);
        
        try{
            const response = await fetch(url);
            if(response.ok){
                const data = await response.json();
                setPhotos(data);
                setPhotosLoading(false);
            }
        }
        catch(error){
            console.log(error);
            setPhotosLoading(true);
        }
    }

    const fetchRandomImage = async()=> {
        const params = {
            client_id:clientId,
        }

        const url = buildURL(`${endPoint}photos/random/`, params);

        setRandomPhotoLoading(true);

        console.log(url);

        try{
            const response = await fetch(url);

            if(response.ok){
                const data = await response.json();
                setRandomPhoto(data);
                setRandomPhotoLoading(false);
            }
        }
        catch(error){
            console.log(error);
            setPhotosLoading(true);
        }
    }

    return {
        photos,
        randomPhoto,
        fetchImages,
        fetchRandomImage,
        photosLoading,
        randomPhotoLoading
    }
}

export default usePhotos;

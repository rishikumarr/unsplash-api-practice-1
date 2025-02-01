interface Photo {
    src: {
        original: string;
    },
    avg_color: string,
    alt: string
}

interface ImgContainerProps {
    photo : Photo;
}

const ImgContainer = ({photo}:ImgContainerProps) => {
    // console.log(photo);
    const {src, alt:imgTitle, avg_color:color} = photo;

    return (
        <div className='img-container h-52 rounded-md bg-slate-300 border-2 border-slate-300 hover:border-slate-500 cursor-pointer inset-shadow-2xs hover:shadow-2xl shadow-slate-900/10 hover:scale-105 transition-all relative'>
            <span className="w-8 h-8 absolute z-[3] rounded-full border-2 border-slate-200" style={{backgroundColor: color}}></span>
            <img src={src.original} alt={imgTitle} title={imgTitle} className="w-full h-full rounded-md object-cover relative"/>
        </div>
    );
}

import usePhotos from "../contexts/usePhotos";

const ImgLoadingContainer = () => {
    return (
        <div className='loading-img-container relative min-h-52 rounded-md bg-slate-300 border border-slate-300 hover:border-slate-500 cursor-pointer inset-shadow-2xs hover:shadow-2xl shadow-slate-900/10 hover:scale-105 transition-all overflow-hidden'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

const ImgsContainer = () => {
    const {photos, photosLoading} = usePhotos();

    return(
        <div className='imgs-container gap-6 mx-auto max-h-[30em] overflow-y-scroll p-4'>
              {
                photosLoading ?
                [...Array(10)].map((_, index) => <ImgLoadingContainer key={index}/>) : photos?.map((photo, index) => <ImgContainer photo={photo} key={`photo-id-${index}`}/>)
              }
        </div>
    );
}

export default ImgsContainer;
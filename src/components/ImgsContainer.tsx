// const ImgContainer = () => {
//     return (
//         <div className='img-container min-h-52 rounded-md bg-slate-300 border border-slate-400 hover:border-slate-500 cursor-pointer inset-shadow-2xs hover:shadow-2xl shadow-slate-900/10 hover:scale-105 transition-all'></div>
//     );
// }

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
    return(
        <div className='imgs-container gap-6 mx-auto max-h-[30em] overflow-y-scroll p-4'>
              {
                [...Array(10)].map((_, index) => <ImgLoadingContainer key={index}/>)
              }
        </div>
    );
}

export default ImgsContainer;
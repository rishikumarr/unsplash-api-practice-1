import usePhotos from "../contexts/usePhotos";

const Pagination = () => {
    const {page, goToNxtPage, goToPrevPage, goToPage} = usePhotos();

    const pages = Array.from({ length: 3 }, (_, i) => Math.max(1, page + i));

    return (
        <div>
              <div className='w-fit flex gap-2 items-center mx-auto my-0 mt-2 px-1.5 py-1'>
                <button className='min-w-26 bg-gradient-to-br from-slate-400 to-slate-700 px-6 py-1.5 text-sm text-white rounded-full cursor-pointer prev scale-90' onClick={goToPrevPage}>Previous</button>
                <ul className='flex gap-2 mx-4'>
                  {
                    pages.map((thisPage, index) => <li key={index} onClick={()=>goToPage(thisPage)} className={`border border-slate-300 hover:border-slate-400 w-8 h-8 flex items-center justify-center cursor-pointer bg-slate-300/60 hover:border-2 hover:bg-slate-300 rounded-full inset-shadow-2xs hover:shadow-lg text-slate-700 hover:text-slate-900 transition-all ${(thisPage === page) && 'border-2 border-slate-400 bg-slate-300 shadow-lg text-slate-900'}`}>{thisPage}</li>)
                  }
                </ul>
                <button className='min-w-26 bg-gradient-to-br from-slate-400 to-slate-700 px-6 py-1.5 text-sm text-white rounded-full cursor-pointer nxt scale-90' onClick={goToNxtPage}>Next</button>
              </div>
            </div>
    );
}

export default Pagination;
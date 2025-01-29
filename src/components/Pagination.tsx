const Pagination = () => {
    return (
        <div>
              <div className='w-fit flex gap-2 items-center mx-auto my-0 mt-2 px-1.5 py-1'>
                <button className='min-w-26 bg-gradient-to-br from-slate-400 to-slate-700 px-6 py-1.5 text-sm text-white rounded-full cursor-pointer border border-slate-600 prev scale-90'>Previous</button>
                <ul className='flex gap-2 mx-4'>
                  <li className='border border-slate-300 hover:border-slate-400 w-8 h-8 flex items-center justify-center cursor-pointer bg-slate-300/60 hover:bg-slate-300 rounded-full inset-shadow-2xs hover:shadow-lg text-slate-700 hover:text-slate-900 transition-all'>1</li>
                  <li className='border border-slate-300 hover:border-slate-400 w-8 h-8 flex items-center justify-center cursor-pointer bg-slate-300/60 hover:bg-slate-300 rounded-full inset-shadow-2xs hover:shadow-lg text-slate-700 hover:text-slate-900 transition-all'>2</li>
                  <li className='border border-slate-300 hover:border-slate-400 w-8 h-8 flex items-center justify-center cursor-pointer bg-slate-300/60 hover:bg-slate-300 rounded-full inset-shadow-2xs hover:shadow-lg text-slate-700 hover:text-slate-900 transition-all'>3</li>
                </ul>
                <button className='min-w-26 bg-gradient-to-br from-slate-400 to-slate-700 px-6 py-1.5 text-sm text-white rounded-full cursor-pointer border border-slate-600 nxt scale-90'>Next</button>
              </div>
            </div>
    );
}

export default Pagination;
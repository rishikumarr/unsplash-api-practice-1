const TaskBar = () => {
    return(
        <div className='w-fit mx-auto my-0'>
            <ul className='flex gap-2 flex-wrap mx-4'>
              <li className='cursor-pointer bg-gradient-to-br from-slate-300 to-slate-600 rounded-full border-slate-50 shadow-sm shadow-slate-300 hover:border-slate-400 flex items-center justify-center p-0.5'><span className='bg-white px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all rounded-full uppercase'>#Photography</span></li>
              <li className='cursor-pointer bg-gradient-to-br from-slate-300 to-slate-600 rounded-full border-slate-50 shadow-sm shadow-slate-300 hover:border-slate-400 flex items-center justify-center p-0.5'><span className='bg-white px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all rounded-full uppercase'>#Video Games</span></li>
              <li className='cursor-pointer bg-gradient-to-br from-slate-300 to-slate-600 rounded-full border-slate-50 shadow-sm shadow-slate-300 hover:border-slate-400 flex items-center justify-center p-0.5'><span className='bg-white px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all rounded-full uppercase'>#Animals</span></li>
              <li className='cursor-pointer bg-gradient-to-br from-slate-300 to-slate-600 rounded-full border-slate-50 shadow-sm shadow-slate-300 hover:border-slate-400 flex items-center justify-center p-0.5'><span className='bg-white px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all rounded-full uppercase'>#Wallpaper</span></li>
              <li className='cursor-pointer bg-gradient-to-br from-slate-300 to-slate-600 rounded-full border-slate-50 shadow-sm shadow-slate-300 hover:border-slate-400 flex items-center justify-center p-0.5'><span className='bg-white px-3 py-1 text-xs font-bold text-slate-500 hover:text-slate-700 transition-all rounded-full uppercase'>#Aurora</span></li>
            </ul>
          </div>
    );
}

export default TaskBar;
const HeroSection = () => {
    return(
        <div className='w-full min-h-64 flex flex-col items-center justify-center gap-8 intro-bg text-slate-100 relative'>
          <h3 className='font-bold text-3xl mx-6 text-center'>Surf through our image gallery...</h3>
          <input type="search" placeholder='Search for image' className='shadow-lg bg-slate-50/70 backdrop-blur-lg px-4 py-2 w-[80%] min-w-3xs max-w-lg min-h-12 text-base rounded-full outline-0 text-slate-700 font-semibold absolute -bottom-6 border-slate-50 border-3'/>
        </div>
    );
}

export default HeroSection;
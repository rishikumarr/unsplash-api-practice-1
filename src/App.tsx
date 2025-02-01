import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainContainer from './components/MainContainer';
import TaskBar from './components/TaskBar';
import { PhotosProvider } from './contexts/PhotosContext';

function App() {
  return (
    <div className='w-full min-h-svh bg-slate-300'>
      <PhotosProvider>
        <div className='max-w-7xl min-h-svh border-l border-r border-slate-400 shadow-xl bg-slate-200 mx-auto my-0'>
          <Header/>
          <HeroSection/>
          <div className='mt-10 flex flex-col'>
            <TaskBar/>
            <MainContainer/>
          </div>
        </div>
      </PhotosProvider>
    </div>
  )
}

export default App

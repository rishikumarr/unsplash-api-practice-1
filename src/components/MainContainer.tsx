import ImgsContainer from "./ImgsContainer";
import Pagination from "./Pagination";

const MainContainer = () => {
    return(
        <div className='m-4'>
            <ImgsContainer/>
            <Pagination/>
          </div>
    );
}

export default MainContainer;
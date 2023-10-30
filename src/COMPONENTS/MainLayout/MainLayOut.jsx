import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>
           <h1>This is MainLayOut </h1> 
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;
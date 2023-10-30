import Navbar from "../Nav and Foot/Navbar";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="w-11/12 mx-auto">
           <h1>This is dashBoard</h1> 
           <Navbar></Navbar>
           <main>
           <div className="grid grid-cols-12 min-h-screen">
            <div className=" col-span-3 bg-red-300 h-full flex flex-col p-4 ">
             <h1 className="border border-stone w-full  my-2 p-2 text-xl font-bold">Menu</h1>
             < NavLink to='/das' className="border border-stone w-full  my-2 p-2 text-xl font-bold">Home</NavLink>
             < NavLink to='/das/add-product' className="border border-stone w-full  my-2 p-2 text-xl font-bold">Add Product </NavLink>
             < NavLink to='/das/manage-product' className="border border-stone w-full  my-2 p-2 text-xl font-bold">Manage Product </NavLink>
             < NavLink to='/das/add-category' className="border border-stone w-full  my-2 p-2 text-xl font-bold">Add Category </NavLink>
             < NavLink to='/das/manage-category' className="border border-stone w-full  my-2 p-2 text-xl font-bold">Manage  Category  </NavLink>
            </div>
            <div  className=" col-span-9 bg-green-300 h-full">
                <Outlet></Outlet>
            </div>

           </div>        
           </main>
           
        </div>
    );
};

export default Dashboard;

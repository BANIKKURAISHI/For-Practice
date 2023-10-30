import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Error from "./Error";
import Home from "../MainPage/Home";
import Dashboard from "../Dashboard/Dashboard";
import DashBoardHome from "../Dashboard/DashBoardHome";
import AddProduct from "../Dashboard/Page/AddProduct";
import ManageProducts from "../Dashboard/Page/ManageProducts";
import Update from "../Dashboard/Page/Update";
import Log from "../MainPage/Log";
import Reg from "../MainPage/Reg";

import Privet from "../PrivateRoute/Privet";


const myCreateRoute =createBrowserRouter([{
    path:'/',
    errorElement:<Error></Error>,
    element:<MainLayOut></MainLayOut>,
    children:[{
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/in',
        element:<Log></Log>
        },
        {
            path:'/up',
            element:<Reg></Reg>
        }
],
    
    
},
{
    path:'/das',
    element:<Dashboard></Dashboard>,
    children:[{
        path:'/das',
        element:<DashBoardHome></DashBoardHome>
    },
    {
        path:'/das/add-product',
        element:<AddProduct></AddProduct>
    },
    {
        path:'/das/manage-product',
        element:<Privet><ManageProducts></ManageProducts></Privet>,
        loader:()=>fetch('http://localhost:5000/food')
    },

    {
        path:'/das/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
    },
   

]
},


])



export default myCreateRoute
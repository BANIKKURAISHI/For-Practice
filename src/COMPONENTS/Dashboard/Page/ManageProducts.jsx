//import { useLoaderData } from "react-router-dom";

import useFood from "../Hooks/useFood";
import SingleFood from "./SingleFood";

//import { useQuery } from "@tanstack/react-query";


const ManageProducts = () => {
 
  const {data,isLoading,isFetching,refetch}=useFood()
  console.log(isLoading,isFetching)
  if(isLoading==true){
    return <span className="loading loading-spinner loading-lg"></span>
 }
    return (
        <div className="grid grid-col-3 ">
            <h1>Total  items foods{data.length} </h1>
            <div>
            {
                data.map(product=><SingleFood key={product._id} refetch={refetch} value={product}></SingleFood>)
            }
            </div> 
        </div>
    );
};

export default ManageProducts;

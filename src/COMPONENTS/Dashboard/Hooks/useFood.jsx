import { useQuery } from "@tanstack/react-query";


const useFood = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey:['food'],
        queryFn:async()=>{
        const food= await fetch('http://localhost:5000/food')
        return await food.json()
        }
       
      })
      return {data,isLoading,isFetching,refetch}
  };

export default useFood;
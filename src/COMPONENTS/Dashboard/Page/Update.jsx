import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const load=useLoaderData() 
    const navigation =useNavigation()
    console.log(navigation)
    if(navigation.loading==="loading"){
    return    <loading></loading>
    }
    const {_id,name,photo,category,price,rating,color}=load
    
    console.log(load)
const updateProductButton=async(e)=>{
    e.preventDefault()
    const form=e.target
    const name =form.name?.value||"not-given"
    const photo =form.photo?.value||"not-given"
    const category=form.category?.value||"not-given"
    const price =form.price?.value||"not-given"
    const rating=form.rating?.value||"not-given"
    const color =form.color?.value||"not-given"
    const textArea =form.textArea?.value||"not-given"
    const information= {name,photo,category,price,rating,color,textArea}
    console.log(information)
//////////////////step-------111111111111111111111111111111111111
  const response=await axios.put(`http://localhost:5000/food/${_id}`,information)
  
   const data=await response.data
 console.log(data)
   if(data.modifiedCount>0){
    Swal.fire({
      title: "Success",
      text: "You product Update successfully!",
      type: "success",
      confirmButtonText: "Cool"
    });
   }
        
}


    return (
        <div>
            <form onSubmit={updateProductButton} className="card-body">
            <div>
            <h1 className="text-3xl text-center font-bold my-6">Update PRODUCT</h1>
            </div>
              <div className="flex gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter your Product name"
                  className="input flex-1 p-3 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter your product photo"
                  className="input flex-1 p-3  input-bordered"
                  required
                />
              </div> 
              
              </div>
              <div className="flex gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter your area name"
                  className="input flex-1 p-3 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter your Youtube Link"
                  className="input flex-1 p-3  input-bordered"
                
                />
              </div> 
              
              </div>
              <div className="flex gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Enter some tags"
                  className="input flex-1 p-3 input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Color</span>
                </label>
                <input
                  type="color"
                  name="color"
                  defaultValue={color}
                  placeholder="Enter your product color"
                  className="input flex-1 p-3 w-52 input-bordered"
                
                />
              </div> 
              
              </div>




              
             
             
              <input type="submit" className="btn btn-outline btn-success w-[420px]" value="Update product" />
            </form>
        </div>
    );
};

export default Update;
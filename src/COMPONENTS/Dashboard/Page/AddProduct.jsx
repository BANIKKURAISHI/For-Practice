import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
const addProductButton=(e)=>{
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
    const uri ='http://localhost:5000/food'
    // ---------------step11111111111111111111111111111111111
//    fetch(uri,{
//     method:"POST",
//     headers:{"content-Type":"application/json"},
//     body:JSON.stringify(information)
//    })
//    .then(res=>res.json())
//    .then(data=>console.log(data))
////////////step222222222222222222222222222222222222222222222222222222
axios.post(uri,information)
.then(res=>{
  if(res?.data?.insertedId){
  Swal.fire({
    title: "Success",
    text: "You product added successfully!",
    type: "success",
    confirmButtonText: "Cool"
  });
}})
  ////step------33333333333333333333333333333333333333333333


}




  return (
    <div>
      <h1>Add product</h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
        
          <div className="card flex-shrink-0 max-w-sm ">
            <form onSubmit={addProductButton} className="card-body">
            <div>
            <h1 className="text-3xl text-center font-bold my-6">ADD YOUR PRODUCT</h1>
            </div>
              <div className="flex gap-2 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  placeholder="Enter your product color"
                  className="input flex-1 p-3 w-52 input-bordered"
                
                />
              </div> 
              
              </div>




              <textarea name="textArea" className="textarea w-[420px] my-4  textarea-bordered" placeholder="Enter your product information"></textarea>
             
             
              <input type="submit" className="btn btn-outline btn-success w-[420px]" value="Add product" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

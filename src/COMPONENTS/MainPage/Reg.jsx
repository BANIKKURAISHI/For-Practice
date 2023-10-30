import { Link } from "react-router-dom";
import Navbar from "../Nav and Foot/Navbar";
import { AuthContext } from "../PrivateRoute/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const Reg =()=> {
    const {registrationButton}=useContext(AuthContext)

    const regButton=(e)=>{
    e.preventDefault()
 
    // const form=new FormData(e.currentTarget)
    // const name=form.get('name')
    // const email=form.get('email')
    // const password=form.get('password')
    const form=e.target
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value


    const userDetails={name,email,password}
    console.log(userDetails)
   
        registrationButton(email,password)
        .then(result=> {
          const user =result.user;
          console.log(user)
          Swal.fire({
            title: "Success",
            text: "You product added successfully!",
            type: "success",
            confirmButtonText: "Cool"
          });
          })
          .catch(error => {
            const errorCode = error.code;
           
           if(error){
            Swal.fire({
              title: "error",
              text:`${errorCode} `,
              type: "success",
              confirmButtonText: "Cool"
            });}
          })

    }  
    
  return (
    <div>
         <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={regButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
            <button className="btn btn-outline btn-warning" >Already have an account <Link to='/in' className=" text-blue-500">Login</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;

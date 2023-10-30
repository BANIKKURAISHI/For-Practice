import { Link } from "react-router-dom";
import Navbar from "../Nav and Foot/Navbar";
import Swal from "sweetalert2";
import { useContext } from 'react';
import { AuthContext } from "../PrivateRoute/AuthProvider";
import axios from "axios";


const Log = () => {
  const {loginButton}=useContext(AuthContext)

  const loginWithButton=(e)=>{
    e.preventDefault()
 
    // const form=new FormData(e.currentTarget)
    // const name=form.get('name')
    // const email=form.get('email')
    // const password=form.get('password')
    const form=e.target

    const email=form.email.value
    const password=form.password.value


     const userDetails={email,password}
     console.log(userDetails)
   
       loginButton(email,password)
        .then(result=> {
          const logUser =result.user;
          console.log(logUser)
          const user={email}
          Swal.fire({
            title: "Success",
            text: "You product added successfully!",
            type: "success",
            confirmButtonText: "Cool"
          });
        //  fetch('http://localhost:5000/jwt',{
        //   method:"POST",
        //   credentials: 'include',
        //   headers:{"content-type":"application/json"},
        //   body:JSON.stringify({email:email})   //{email} that is right too
        //  })
        //  .then(res=>res.json())
        //  .then(data=>{console.log(data)})
      axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
      .then(res=>{
        console.log(res.data)
      })



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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginWithButton} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button className="btn btn-outline btn-warning ">New here <Link to='/up' className=" text-blue-500">Register</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;

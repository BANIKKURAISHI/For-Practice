

import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleFood = ({value,refetch}) => {
    const {_id,name,photo,category,price}=value ||{}

    const deleteHandleButton =()=>{
      ////////////////step-----111111111111111111111111111
 
      // Swal.fire({
      //   title: 'Are you sure?',
      //   text: "You won't be able to Delete this!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     fetch(`http://localhost:5000/food/${_id}`,{
      //       method:"Delete"
      //     })
      //     .then(res=>res.json())
      //     .then(data=>{
      //       console.log(data)
      //       if(data.deletedCount>0)
      //       Swal.fire(
      //         'Deleted!',
      //         'Your file has been deleted.',
      //         'success'
      //       )
      //     })
      //   }
      // })
     
    
    //////////step------22222222222222222222222222222222222222222222222222 
    Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to Delete this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/food/${_id}`)
          .then(res=>{
            if(res?.data?.deletedCount>0){
             Swal.fire(
               'Deleted!',
               'Your file has been deleted.',
               'success'
             )
             refetch()
           }
         })
        }})
    


      
       
     
    }

   
  return (
    <div>
      <div className="card w-[600px] lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Album"
            className='w-96'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button onClick={deleteHandleButton} className="btn btn-primary">DELETE</button>
          </div>
          <div className="card-actions justify-end">
          <Link to={`/das/update/${_id}`}><button  className="btn btn-primary">UPDATE</button></Link>    
          {/* <button onClick={()=>goTo(`/das/update/${_id}`)}  className="btn btn-primary">UPDATE</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
SingleFood.propTypes={
    value:PropTypes.object,
    refetch:PropTypes.hooks
}
export default SingleFood;

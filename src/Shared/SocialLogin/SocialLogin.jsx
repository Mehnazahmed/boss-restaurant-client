import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SocialLogin = () => {
  const [axiosSecure] = useAxiosSecure();
    const navigate =useNavigate()
    const location =useLocation()
    const from =location.state?.from?.pathname || '/';
    const {googleSignIn}=useAuth();
    const handleGoogleSignIn=()=>{
     googleSignIn()
     .then(result=>{
        const loggedInUser =result.user;
        console.log(loggedInUser);
        const saveUser ={name:loggedInUser.displayName,email:loggedInUser.email}
        // axiosSecure.post('/users',saveUser)
        //   .then(data=>{
        //    console.log(data.data)
        //     if(data.data.insertedId){
             
        //       Swal.fire({
        //         title: "user profile updated!",
        //         showClass: {
        //           popup: "animate__animated animate__fadeInDown",
        //         },
        //         hideClass: {
        //           popup: "animate__animated animate__fadeOutUp",
        //         },
        //       });
        //       navigate(from,{replace:true});

        //     }
        //   })
         fetch("http://localhost:5000/users", {
         method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
           navigate(from,{replace:true});
          });
        
     });
    }
    return (
      <div>
        <div className='divider'></div>
        <div className='w-full text-center my-4'>
         <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
       <FaGoogle></FaGoogle>
      </button>
       </div>
      </div>
    );
};

export default SocialLogin;
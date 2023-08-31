import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../components/Loader/Loader";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
const imgHostKey=import.meta.env.VITE_img_uploadkey;
const UpdateItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu] =useMenu()
    const menuItem = useLoaderData();
  console.log(menuItem._id);
  //useNavigation is used when using loader
  const navigation = useNavigation();
if( navigation.state === "loading"){
   return <Loader></Loader>
 }


    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const imgHostingUrl =`https://api.imgbb.com/1/upload?key=${imgHostKey}`
    const onSubmit = data =>{
      console.log(data);
      const image =data.image[0]
      const formData = new FormData();
      formData.append('image',image);
      fetch(imgHostingUrl,{
       method:'POST',
       body:formData
      })
      .then(res=>res.json())
      .then(imgdata=>{
       console.log(imgdata)
       if(imgdata.success){
         const imgUrl = imgdata.data.url;
         const {name,price,category,recipe}=data;
         //note:parseFloat price as it is in string formet 
         const updateItem={name,price:parseFloat(price),category,recipe,image:imgUrl}
         console.log(updateItem);
         axiosSecure.patch(`/menu/${menuItem._id}`,updateItem)
         .then(data=>{
          console.log('updated item',data.data)
          if(data.data.modifiedCount>0){
             reset()
             Swal.fire({
               position: 'top',
               icon: 'success',
               title: 'successfully updated!!',
               showConfirmButton: false,
               timer: 1500
             })
           }
         })
 
 
       }
      });
      
 
     
     };
  
  return (
    <div className="w-full p-8 ">
      <Helmet>
        <title>Bistro Boss | Update Item</title>
      </Helmet>
      <SectionTitle
        subHeading="what's new"
        heading="Add An Item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="border-2 p-8 bg-slate-100 rounded-md mt-10">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full "
            {...register("name", {required: true, maxLength: 80})}
          />
        </div>
        <div className="flex ">
        <div className="form-control w-1/2 ">
          <label className="label">
            <span className="label-text font-bold">Category*</span>
          </label>
          <select 
          className="select select-bordered"
          {...register("category", { required: true })}
          >
            <option disabled selected>
              Category
            </option>
            <option>pizza</option>
            <option>soup</option>
            <option>salad</option>
            <option>drinks</option>
            <option>dessert</option>
            <option>desi</option>
          </select>
        </div>
        <div className="form-control w-1/2 ms-4  ">
          <label className="label">
            <span className="label-text font-bold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("price", { required: true })}
          />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
         <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">Item Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-ghost w-full max-w-xs "
            {...register("image", { required: true })}
          />
        </div> 
        <input className="btn btn-sm btn-warning bg-yellow-700 mt-4 w-1/4" type="submit" value="Update Item"  />
      </form>
    </div>
  );
};

export default UpdateItem;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const [isAdmin] =useAdmin()
  const { name, recipe, image, price,_mid } = item;
  const [,refetch]=useCart();
  const navigate=useNavigate();
  const location =useLocation();
  const {user}=useAuth();
  
  const handleAddToCart =item=>{
    console.log(item);
    if(user && user.email){
      const cartItem ={menuItemId:_mid,name,image,price,email:user.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          refetch();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Added Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      
       
      }
        
      })
    }
    else{
      Swal.fire({
        title: 'Please login to order food',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log in!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}});
        }
      })
    }
  }

  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-[280px] ">
        <img src={image} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">{price}</p>
      <div className="card-body flex items-center text-center">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button onClick={()=>handleAddToCart(item)} className="btn text-yellow-700 hover:btn-neutral uppercase border-0 border-b-4 border-yellow-700">add to cart</button>
          {
            isAdmin? <Link to={`/dashboard/updateitem/${item._id}`}><button className="btn text-yellow-700 hover:btn-neutral uppercase border-0 border-b-4 border-yellow-700 ms-2">Update</button></Link>:<></>
          }
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

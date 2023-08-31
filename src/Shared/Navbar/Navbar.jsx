import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } =useAuth();
  const [cart]=useCart();
  const [isAdmin]=useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navItems = (
    <>
      <li className="uppercase text-sm ">
        <Link to="/">home</Link>
      </li>
      <li className="uppercase text-sm">
        <a>Contact Us</a>
      </li>
      
      <li className="uppercase text-sm">
        <Link to="/menu">Our menu</Link>
      </li>
      <li className="uppercase text-sm">
        <Link to="/shop/salad">Our shop</Link>
      </li>
      {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 

            <>
             <li><Link to="/dashboard/userhome">Dashboard</Link></li>
            <Link to="/dashboard/mycart">
            <button className="btn gap-2">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></>
            
           
      }
      
      

      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="btn  btn-ghost">
              Log Out
            </button>
          </li>
          <li>
            <span className="text-lg">{user?.uid?.displayName}</span>
          </li>
        </>
      ) : (
        <>
          <li className="uppercase text-sm">
            <Link to="/login">log in</Link>
          </li>
        </>
      )}
     
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-slate-800  text-white max-w-screen-xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 "
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost uppercase text-lg font-bold hover:text-red-400">
            Bistro Boss
            <br /> Restaurent
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import loaderImg from "../../assets/others/cupcake-dribbble.gif";

const Loader = () => {
    return (
        <div className='flex-col  items-center w-full'>
            <img src={loaderImg} alt="" srcset="" />
            <Link to='/login'><button className='btn btn-accent'>Please Log In First!!</button></Link>
        </div>
    );
};

export default Loader;
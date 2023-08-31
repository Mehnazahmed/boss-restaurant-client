import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorImg from '../../../src/assets/404.gif';

const ErrorPage = () => {
    return (
        <div className='flex-col justify-center'>
           <img src={errorImg} alt="" srcset="" /> 
          <Link to='/'> <button className="btn btn-sm btn-warning bg-yellow-700 mt-4 w-1/4 "><FaHome></FaHome> Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;
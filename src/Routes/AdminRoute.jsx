import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
const AdminRoute = ({children}) => {
    const {user,loading} =useAuth();
    const [isAdmin,isAdminLoadig]=useAdmin();
    const location =useLocation();
    if(loading || isAdminLoadig){
        return <Loader></Loader>
    }
    if(user && isAdmin){
        return children;
    }
    return (
        <Navigate to='/' state={{from:location}}></Navigate>
       
    );
};
export default AdminRoute;
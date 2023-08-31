import React from "react";
import { Helmet } from "react-helmet";
import {
  FaBook,
  FaCalendarAlt,
  FaCommentAlt,
  FaHome,
  FaList,
  FaMailBulk,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaWallet
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  //TODO:
  // const isAdmin = true;
  const [isAdmin] =useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center my-10 mx-6">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome />
                 Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils/>
                 Add An Item
                 
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/updateitem/:id">
                  <FaList />
                  Update Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaBook/>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser/>
                 All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart />
                  My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymenthistory">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  <FaCommentAlt />
                  add a review
                </NavLink>
              </li>
              
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaList />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaMailBulk />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

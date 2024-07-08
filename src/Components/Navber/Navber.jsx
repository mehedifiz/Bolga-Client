import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../Auth/Authprovider";
import defaultImg from '../../assets/avater.svg';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);

  const getLinkStyles = ({ isActive }) => ({
    color: isActive ? "white" : "gray",
    backgroundColor: isActive ? "#3730A3" : "transparent",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    textDecoration: "none",
  });

  const links = (
    <>
      <li>
        <NavLink to="/" style={getLinkStyles}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/post-blog" style={getLinkStyles}>Post Blog</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/my-blogs" style={getLinkStyles}>
            My Blogs
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/register" style={getLinkStyles}>Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" style={getLinkStyles}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
        logOut()
        .then(data=>{
          toast.success("LogOut Successfully !", {
            position: "top-center"
          });
        })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Blogaa</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {user && (
          <>
            <button onClick={handleLogout} className="font-semibold btn bg-orange-400 hover:bg-orange-500 btn-sm">
              Logout
            </button>
            <div className="space-y-2">
              <img src={user?.photoURL ? user.photoURL : defaultImg} alt="User Profile" className="w-16 rounded-full" />
              <h2 className="text-center font-semibold">{user?.displayName ? user.displayName : user.email}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

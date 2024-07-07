import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getLinkStyles = (isActive) => ({
    color: isActive ? "white" : "gray",
    backgroundColor: isActive ? "Indigo" : "transparent",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    textDecoration: "none",
  });

  const links = (
    <>
      <li>
        <NavLink to="/" style={({ isActive }) => getLinkStyles(isActive)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/post-blog" style={({ isActive }) => getLinkStyles(isActive)}>
          Post Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-blogs" style={({ isActive }) => getLinkStyles(isActive)}>
          My Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" style={({ isActive }) => getLinkStyles(isActive)}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" style={({ isActive }) => getLinkStyles(isActive)}>
          Login
        </NavLink>
      </li>
    </>
  );

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
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

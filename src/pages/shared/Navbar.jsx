import { NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import logo from "../../assets/carzane.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ea001e] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ea001e] underline" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ea001e] underline" : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="lg:mt-10 bg-white lg:mx-16 lg:rounded-2xl lg:drop-shadow-2xl">
      <div className="flex justify-between items-center pl-6 lg:pr-10 py-4 lg:py-8">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-3xl font-extrabold">
            <CgMenuLeft></CgMenuLeft>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-40
              md:w-52 font-medium text-black"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <img className="w-44 md:w-44 lg:w-64" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-bold text-xl text-black">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

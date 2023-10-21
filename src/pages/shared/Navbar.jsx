import { CgMenuLeft } from "react-icons/cg";
import logo from "../../assets/carzane.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          to="/addProducts"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ea001e] underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ea001e] underline" : ""
          }
        >
          My Cart
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
    </>
  );

  return (
    <nav className="lg:mt-10 bg-white lg:mx-16 lg:rounded-2xl lg:drop-shadow-2xl">
      <div className="flex justify-between items-center pl-6 lg:pr-16 py-4 lg:py-8">
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
            <div className="mt-4">
              {user && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                    </div>
                    <div>
                      <span className="block font-semibold text-sm text-center">
                        {user.displayName}
                      </span>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline text-[#ea001e]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </ul>
        </div>
        <div>
          <img className="w-44 md:w-44 lg:w-64" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-bold text-xl text-black">
            {navLinks}
          </ul>
        </div>
        <div className={`hidden lg:block`}>
          {user && (
            <>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                </div>
                <div>
                  <span className="block font-semibold text-sm text-center">
                    {user.displayName}
                  </span>
                </div>
                <div>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-md btn-outline text-[#ea001e]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

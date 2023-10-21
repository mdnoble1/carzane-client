import { NavLink } from "react-router-dom";
import logo from "../assets/carzane5.png"

const Footer = () => {
  return (
    <footer className="bg-black mt-8 lg:mt-12 rounded-t-3xl">
      <section className="container mx-auto">
        <div className="md:flex lg:flex items-center justify-between">
          <h3 className="text-4xl lg:text-5xl text-white text-center md:text-left lg:text-left mb-10 pt-10 my-8 lg:my-16 md:pl-16 lg:pl-0">
            Drive On - Carzane
          </h3>
          <div className="flex justify-center">
            <NavLink to="/login">
              <button className="font-bold text-xl text-white bg-[#ea001e] py-3 px-6 lg:px-10 rounded-lg hover:bg-red-400 hover:text-black mb-10 md:mt-16 lg:mt-24 md:mr-16 lg:mr-0">
                Login
              </button>
            </NavLink>
          </div>
        </div>
        <div className="border border-[#ea001e] mb-10 lg:mb-20 w-10/12 lg:w-full mx-auto">
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-start">
          {/* Left part */}
          <div>
            <div className="mb-10 flex justify-center lg:justify-start">
              <img className="w-40 md:w-44 lg:w-52" src={logo} alt="" />
            </div>
          </div>
          {/* Middle part */}
          <div className="flex items-center justify-evenly text-white text-lg list-none hover:cursor-pointer mt-2">
            <li>ABOUT US</li>
            <li>COMPANY</li>
            <li>SUPPORT</li>
          </div>
          {/* Right part */}
          <div className="mt-10 lg:mt-2 lg:ml-72 lg:mb-28 text-center lg:text-left">
            <NavLink to="/register">
              <h4 className="text-white text-lg hover:cursor-pointer mb-6">
                GET IN TOUCH
              </h4>
            </NavLink>
            <input
              className="px-6 py-3 rounded-lg bg-red-950 mb-3 text-white"
              type="text"
              name=""
              id=""
              placeholder="Your Email Here..."
            />
            <br />
            <div className="mb-10">
              <NavLink to="/register">
                <button className="font-bold text-xl text-white bg-[#ea001e] py-2 px-6 lg:px-10 rounded-lg hover:bg-red-400 hover:text-black">
                  Register
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <p className="text-white">&copy; mdnoble.wd@gmail.com</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

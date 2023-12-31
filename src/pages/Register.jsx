import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: "Password Must Contain 6 Characters",
        icon: 'error',
        confirmButtonText: "Let's Try Agin"
      })
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: "Password Must Contain an Uppercase",
        icon: 'error',
        confirmButtonText: "Let's Try Agin"
      })
      return;
    } else if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-].*/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: "Password Must Contain a Special Character",
        icon: 'error',
        confirmButtonText: "Let's Try Agin"
      })
      return;
    }

    // create user in firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="lg:pb-12 drop-shadow-2xl">
        <div className="lg:w-2/5 bg-[#ea001e] mx-auto pt-16 lg:pt-32 lg:p-1 lg:rounded-b-md lg:mt-12">
      <div className="py-12 lg:py-32 bg-white rounded-t-3xl rounded-b-sm lg:mt-12">
        <h2 className="font-semibold text-4xl text-black text-center mb-12">
          Register Your Account
        </h2>
        <div className="border border-[#ea001e] w-11/12 lg:w-3/4 mx-auto mb-6"></div>
        <form onSubmit={handleRegister} className="card-body lg:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Give Your Photo URL"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="input input-bordered rounded-lg bg-gray-100 w-full"
                required
              />
              <span
                className="absolute top-4 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <input type="checkbox" name="terms" id="" required />
            <p>Accept Term & Conditions</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="font-semibold text-black text-center">
            Already a Member ? Please{" "}
            <NavLink to="/login" className="text-[#ea001e]">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;

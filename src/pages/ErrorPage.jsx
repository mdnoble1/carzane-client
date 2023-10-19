import { Link } from "react-router-dom";
import error from "../assets/error.png"
import { IoCarSportSharp } from 'react-icons/io5';

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center text-2xl lg:text-4xl">
      <div>
        <img className="w-10/12 mx-auto" src={error} alt="" />
        <h1 className="mt-4">Oops! You seem to be lost!!</h1>
        <br />
        <Link to="/">
            <button className="btn btn-outline mt-6 lg:text-lg text-[#ea001e]">Lets Drive You Back To Home<IoCarSportSharp className="text-xl lg:text-2xl"></IoCarSportSharp></button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
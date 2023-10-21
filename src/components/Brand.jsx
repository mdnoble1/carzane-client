import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {


  const { brandName, image } = brand;

  


  return (
    <NavLink to={`/brands/${brandName}`}>
      <div className="w-48 rounded-b-xl border-black border-b-2  drop-shadow-2xl mx-auto hover:cursor-pointer hover:border-[#ea001e] hover:border-2 text-black hover:text-[#ea001e]">
      <div>
        <img className="w-fit mx-auto mb-4 mt-2 rounded-t-2xl" src={image} alt="brandImage" />
      </div>
      <div className="text-center font-bold text-2xl mb-6">
        <h2>{brandName}</h2>
      </div>
    </div>
    </NavLink>
  );
};

export default Brand;

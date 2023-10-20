/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { productName, brandName, type, price, rating, image } = product;

  return (
    <div className="mx-auto border border-gray-400 hover:border-[#ea001e] bg-white p-2 rounded-md text-center ">
      <img className="w-96 rounded-t-md mb-8" src={image} alt="" />
      <h2 className="font-semibold text-2xl">Model : {productName}</h2>
      <h2 className="font-semibold text-xl">Brand : {brandName}</h2>
      <h2 className="font-medium text-gray-600 mb-6">Category : {type}</h2>
      <div className="flex items-center justify-between px-10 mb-6">
        <p className="font-bold text-[#ea001e]">Price : {price}Lakh</p>
        <div>
          <Rating
            emptySymbol={
              <FaRegStar className="text-[#ea001e] text-xl"></FaRegStar>
            }
            fullSymbol={<FaStar className="text-[#ea001e] text-xl"></FaStar>}
            initialRating={rating}
            readonly
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-16 mb-4">
        <button className="btn rounded-lg font-semibold text-xl normal-case  text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
          Details
        </button>
        <Link to="/addProducts">
          <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;

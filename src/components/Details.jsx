/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { NavLink, useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();


  // console.log(detail);

  return (
    <div className="py-16">
      <div className="w-10/12 lg:w-1/2 mx-auto border border-gray-400 hover:border-[#ea001e] bg-white p-2 rounded-md text-center ">
        <img className="rounded-t-md mb-8" src={detail.image} alt="" />
        <h2 className="font-semibold text-2xl lg:text-3xl mb-2">
          Model : {detail.productName}
        </h2>
        <h2 className="font-semibold text-xl lg:text-2xl mb-2">
          Brand : {detail.brandName}
        </h2>
        <h2 className="font-medium text-gray-600 mb-6 lg:w-10/12 mx-auto lg:text-xl">
          <span className="font-bold text-black">Description</span> :{" "}
          {detail.description}
        </h2>
        <div className="flex items-center justify-between lg:w-3/4 mx-auto mb-6">
          <p className="font-bold text-[#ea001e] lg:text-xl">
            Price : {detail.price} Crore
          </p>
          <div>
            <Rating
              emptySymbol={
                <FaRegStar className="text-[#ea001e] text-xl lg:text-2xl"></FaRegStar>
              }
              fullSymbol={<FaStar className="text-[#ea001e] text-xl lg:text-2xl"></FaStar>}
              initialRating={detail.rating}
              readonly
            />
          </div>
        </div>
        <div className="mb-4">
          <NavLink to="/cart">
            <button className="btn rounded-lg font-semibold text-xl normal-case  text-white bg-[#ea001e] hover:bg-red-400 hover:text-black">
              Add to Cart
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Details;

import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const BrandsName = () => {
  const loadedBrands = useLoaderData();

  return (
    <div>
      <h2 className="text-center font-bold text-4xl lg:text-6xl text-[#ea001e] my-4">Diverse Car Brands at Your Fingertips <br />  with Carzane</h2>
      <div className="md:w-3/4 lg:w-1/2 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 lg:py-16">
        {loadedBrands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default BrandsName;

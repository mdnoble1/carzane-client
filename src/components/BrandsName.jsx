import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const BrandsName = () => {

    const loadedBrands = useLoaderData();
    
return (
        <div className="md:w-3/4 lg:w-1/2 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 py-10 lg:py-16">
            {
                loadedBrands.map(brand => <Brand key={brand._id} brand={brand}></Brand> )
            }
        </div>
    );
};

export default BrandsName;
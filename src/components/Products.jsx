import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();

    // const id = useParams()
    // console.log(typeof(id))

    return (
        <div className="lg:w-1/2 mx-auto grid lg:grid-cols-2 gap-16 py-16">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import BrandsName from "../components/BrandsName";
import AddProducts from "../components/AddProducts";
import Products from "../components/Products";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details";
import Cart from "../pages/Cart";
import UpdateProduct from "../components/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/brands",
                element: <BrandsName></BrandsName>
            },
            {
                path: "/addProducts",
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: "/brands/:brandName",
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:5000/products`)
            },
            {
                path: "/products/:id",
                element: <Details></Details>,
                loader: ( {params} ) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ( {params} ) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
]);

export default router;
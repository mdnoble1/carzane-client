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
                loader: () => fetch('https://carzane-server-pcp4fh07l-md-nobles-projects.vercel.app/brands')
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
                loader: () => fetch(`https://carzane-server-pcp4fh07l-md-nobles-projects.vercel.app/products`)
            },
            {
                path: "/products/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ( {params} ) => fetch(`https://carzane-server-pcp4fh07l-md-nobles-projects.vercel.app/products/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ( {params} ) => fetch(`https://carzane-server-pcp4fh07l-md-nobles-projects.vercel.app/products/${params.id}`)
            }
        ]
    }
]);

export default router;
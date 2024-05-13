import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Forgetpassword from '../pages/Forgetpassword';
import SignUp from '../pages/SignUp';
import CategoryList from '../components/CategoryList';
import ProductDetails from '../pages/ProductDetails';


const router = createBrowserRouter([

    {
        path : "/",
        element : <App/>,
        children : [
            {
                path: "",
                element : <Home />
            },
            {
                path: "/login",
                element : <Login />
            },
            {
                path: "/forget-password",
                element: <Forgetpassword />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "product-category",
                element: <CategoryList />
            },
            {
                path : "product/:id",
                element : <ProductDetails />
            },
            
        ]
    }




]);


export default router;
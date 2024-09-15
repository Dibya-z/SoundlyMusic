
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Song from "./Song";

const route = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/signup",
        element : <SignUp/>
    },
    {
        path : "/signin",
        element : <SignIn/>
    },
    {
        path : "/song/:id",
        element: <Song/>
    },
    
]);
export default function Main(){

    return <RouterProvider router={route}/>
}
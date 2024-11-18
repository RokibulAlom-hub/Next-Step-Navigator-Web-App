import { Await, createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/error-page";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import About from "../Layouts/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('/Services.json')
        },
        {
          path:'/details/:id',
          element:<DetailsPage></DetailsPage>,
          loader:async({params}) => {
            const res= await fetch('/Services.json')
            const data = await res.json();
            
            const singleData = data.find(d => d.id == params.id)
            console.log(singleData);
            
            return{singleData}
          }
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:"/About",
          element:<About></About>
        }
      ]
    },
  ]);
  export default router
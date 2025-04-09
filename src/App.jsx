
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import ProductDetails from "./Components/ProductsDetails/ProductDetails";
import Checkout from "./Components/Checkout/Checkout";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import AuthView from './Components/AuthView/AuthView';
import NotFound from './Components/NotFound/NotFound';



function App() {

  const routes = createBrowserRouter([
    {path:"" , element:<Layout/> , children:[
      {index: true , element:<ProtectedRoutes><Home/></ProtectedRoutes>},
      {path: 'shop' , element:<ProtectedRoutes><Shop/></ProtectedRoutes>},
      {path:'cart' , element:<ProtectedRoutes><Cart/></ProtectedRoutes>},
      {path:'shop/:id' , element:<ProtectedRoutes><ProductDetails/></ProtectedRoutes>},
      {path:'checkout' , element:<ProtectedRoutes><Checkout/></ProtectedRoutes>},

      {path:'signup' , element:<AuthView><Signup/></AuthView>},
      {path:'login' , element:<AuthView><Login/></AuthView>},

      {path:'*' , element:<NotFound/>}
    ]} 
  ])

  return (
    <>
      <RouterProvider router={routes}/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick={false}
          pauseOnHover
          theme="dark"
        />
      
    </>
  );
}

export default App



//memo@gmail.com
//Memo12345
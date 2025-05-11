
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Componetus/Header';
import Footer from './Componetus/Footer';
import Return from './Pages/Return';
import Cart from './Pages/Cart'
import Profile from './Pages/Profile';
import Header2 from './Componetus/Header2';
import DATA from './Pages/DATA';
import Kitchenessentials from './Pages/Kitchenessentials'
import Inspire from './Pages/Inspire';
import More from './Pages/More';
import Addmore from './Pages/Addmore';
import HomeData from './HomeData';
import Product from './Prodcut';
import YourB from './Pages/YourB';
// import Singleproduct from './Singleprodcut';
import CartProvider from './Componetus/CartContext';
import SingleProduct from './Singleprodcut';
// import HomeBanner from './Pages/HomeBanner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children:[
      {
        index:true,
        element: <Home />
      },{
        path:"/Return",
        element:<Return />
      },{
        path:"/Cart",
        element:<Cart/>
      },{
        path:"/Profile",
        element: <Profile/>
      },
      {
        path:"/Header2",
        element: <Header2/>
      },
      {
        path:"/DATA",
        element: <DATA/>
      },
      {
        path:"/Kitchenessentials",
        element: <Kitchenessentials/>
        
      },{
        path:"/inspire",
        element:<Inspire/>
      },
      ,{
        path:"/More",
        element: <More />
      },{
        path:"/Addmore",
        element: <Addmore/>
      },{
        path:"/",
        element: <HomeData />
      },
      ,{
        path : "/product/:id",element: <SingleProduct />
      },
      
      
      {
        path:"/YourB",
        element: <YourB/>
      },
           {
      path:"*",
      element: <NotFound/>
      },
    ],
  },
]);
















function App() {
  return (
       <CartProvider>
    <RouterProvider router={router} />
       </CartProvider>
  )
}

export default App
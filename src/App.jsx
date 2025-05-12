
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './First';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Componetus/Header';
import Footer from './Componetus/Footer';
import Return from './Pages/Return';
import Cart from './Pages/Cart'
// import Profile from './Pages/Profile';
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
import{AuthProvider}  from './Componetus/AuthContext';
import Login from './Login';
import Register from './Register';
// import HomeBanner from './Pages/HomeBanner';
import ProtectedRoute from './Componetus/ProtectedRoute';
// import Wishlist from './Wishlist';
import Profile from './Pages/Profile'
import HomeData2 from './Pages/HomeData2';
import { WishlistProvider } from './Componetus/WishlistContext';
import WishlistPage from './Wishlist'

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
        path: "/Cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Header",
        element: <Header/>
      }
      ,{
        path:"/Login",
        element: <Login/>
      },
      {
        path:"/Header2",
        element: <Header2/>
      },{
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        ),
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
        path:"/HomeData",
        element: <HomeData />
      },
      ,{
        path : "/product/:id",element: <SingleProduct />
      },{
        path: "/Register",
        element: <Register/>
      },{
        path:"/HomeData2",
        element: <HomeData2/>
      },
      
      
      {
        path:"/YourB",
        element: <YourB/>
      },
      {
        path: "/Profile",
        element: (
      <ProtectedRoute>
          <Profile />
      </ProtectedRoute>
        )
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
    <AuthProvider>
      
      <WishlistProvider>
       <CartProvider>
    <RouterProvider router={router} />
       </CartProvider>
         </WishlistProvider>
       </AuthProvider>
  )
}

export default App
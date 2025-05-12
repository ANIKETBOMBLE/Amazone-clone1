import instance from "../Componetus/axios";
import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";



function HomeData2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getData();
  }, []);
                        // https://fakestoreapi.in/api/products
  async function getData() {
    setLoading(true);

	const res = await instance.get("https://fakestoreapi.in/api/products");
	console.log(res.data.products);
	setProducts(res.data.products);
      setLoading(false)

  }
  
   if (loading)
    return (
      <div role="status" className="min-h-screen flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-35 h-48 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

  
  
return (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-5 p-2 gap-4    cursor-pointer">
      
      {products.map((product) => (
        
        <Link to={`/product/${product.id}`} key={product.id} className="block">

          <div
            className="w-[25%] min-w-[250px] h-90 m-2 p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              className="w-full h-40 object-contain mb-4"
              src={product.image}
              alt={product.title}
            />
            <h3 className="text-sm font-semibold text-center line-clamp-2 mb-2 text-sky-500 hover:underline">
              {product.title}
            </h3>
            <div className="text-orange-400 flex mr-39">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <div className="flex justify-between gap-2">
              <span className="w-10 h-7 px-2 outline-none text-rose-500 font-thin cursor-pointer">
                -{product.discount}%
              </span>
              <p className="text-black text-lg font-normal cursor-pointer">
                <span className="text-xs align-text-top">₹</span> {product.price}
                <span className="text-xs align-text-top">00</span>
              </p>
            </div>
            <div className="flex flex-col mt-2">
              <p className="rounded bg-pink-600 text-white px-1 w-33 text-x">
                Limited time deal
              </p>
              <p className="text-gray-400 text-xs">M.R.P ₹***</p>
              <p className="text-xs">
                Get it by Monday, FREE Delivery by Amazon
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
);
  
}

export default HomeData2;

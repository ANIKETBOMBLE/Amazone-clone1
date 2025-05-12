import instance from "../Componetus/axios";
import { useState, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";



function HomeData2() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getData();
  }, []);
                        // https://fakestoreapi.in/api/products
  async function getData() {

	const res = await instance.get("https://fakestoreapi.com/api/products");
	console.log(res.data.products);
	setProducts(res.data.products);
  }

  
  
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

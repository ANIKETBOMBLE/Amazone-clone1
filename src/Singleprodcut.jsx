// SingleProduct.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "./Componetus/axios";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const res = await instance.get(`https://fakestoreapi.in/api/products/${id}`);
      setProduct(res.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  if (!product) return <p className="p-4">Loading...</p>;

  return (
   <div className="p-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8">
  
  <div className="flex justify-center items-center w-full md:w-1/2">
    <img
      src={product.image}
      alt={product.title}
      className="w-72 h-72 object-contain rounded"
    />
  </div>


  <div className="w-full md:w-1/2 flex flex-col justify-start gap-4">
    <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
    <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

    <div className="mt-2">
      <p className="text-rose-500 font-semibold text-sm mb-1">- {product.discount || 4}%</p>
      <p className="text-2xl font-bold text-green-700">₹{product.price}.00</p>
    </div>

    <p className="bg-pink-600 text-white text-sm w-fit px-3 py-1 rounded">
      Limited time deal
    </p>

    <p className="text-gray-400 text-sm">M.R.P ₹***</p>
    <p className="text-sm">
      Get it by <span className="font-semibold">Monday</span>, FREE Delivery by Amazon
    </p>

   
    <div className="flex gap-4 mt-4">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
        Add to Cart
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  </div>
</div>

  );
}

export default SingleProduct;

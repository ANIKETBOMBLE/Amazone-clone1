import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "./Componetus/axios";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useCart } from "./Componetus/CartContext";
import { useAuth } from "./Componetus/AuthContext";
import { useWishlist } from "./Componetus/WishlistContext";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { handleAddToCart } = useCart();
  const { handleAddToWishlist } = useWishlist();

  const navigate = useNavigate();
  const db = getFirestore();
  const { user } = useAuth(); 

  useEffect(() => {
    getProduct(id);
  }, [id]);

  async function getProduct(id) {
    try {
      const res = await instance.get(`https://fakestoreapi.in/api/products/${id}`);
      console.log(res.data.product);
      setProduct(res.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

 async function handleAddToCollection(collectionName, product) {
    if (!user) {
      navigate("/Login");
      return;
    }

   try {
      const docRef = doc(db, collectionName, `${user.uid}_${product.id}`);
      await setDoc(docRef, { ...product, userId: user.uid });
      
      if(collectionName === "Cart"){
        handleAddToCart(product);
      }
      if (collectionName === "Wishlist") {
  handleAddToWishlist(product); 
}
      
      console.log(`${product.title} added to ${collectionName}`);
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
    }
  }

  if (!product) return <p className="p-4 text-center text-2xl text-black">Loading...</p>;

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
            <p className="text-2xl font-bold text-black">₹{product.price}.00</p>
          </div>

          <p className="bg-pink-600 text-white text-sm w-fit px-3 py-1 rounded">
            Limited time deal
          </p>

           <p className="text-gray-400 text-sm">M.R.P ₹***</p>
           <p className="text-sm">
           Get it by <span className="font-semibold">Monday</span>, FREE Delivery by Amazon
           </p>
          
        
        
        
     
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded"
          onClick={() => handleAddToCollection("Cart", product)}
          
        >
          
          Add to Cart
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => handleAddToCollection("Wishlist", product)}
          
        >
          Add to WishList 
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;




       
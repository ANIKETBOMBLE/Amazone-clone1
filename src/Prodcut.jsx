import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
function Product({ product }) {
  return (
    <div className="product w-[23%] h-72 p-2 my-6 relative bg-white rounded-2xl drop-shadow-2xl">
      <Link to={`/product/${product.id}`}>
        <img
          className="w-full h-1/2 object-contain"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="h-1/2">
        <h3>{product.title}</h3>
    <span>{product.discount}</span>
        <p className="font-bold text-2xl absolute w-full left-4 bottom-4">
          ${product.price}
        </p>
        
      </div>
    </div>
  );
}

export default Product;

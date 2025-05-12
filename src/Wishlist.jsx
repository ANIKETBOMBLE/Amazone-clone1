import { useWishlist } from "./Componetus/WishlistContext";
import { Link } from "react-router-dom";
function WishlistPage() {
  const { wishlist, handleRemoveFromWishlist } = useWishlist();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="border-b py-4 flex justify-between">
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>₹{item.price}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded"
              onClick={() => handleRemoveFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default WishlistPage

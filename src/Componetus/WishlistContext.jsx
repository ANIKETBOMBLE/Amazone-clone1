import { createContext, useContext, useState } from "react";

const wishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function handleAddToWishlist(product) {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  }

  function handleRemoveFromWishlist(productId) {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }

  return (
    <wishlistContext.Provider
      value={{ wishlist, handleAddToWishlist, handleRemoveFromWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(wishlistContext);
}

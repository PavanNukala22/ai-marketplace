"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleClick = () => {
    console.log("Button clicked");

    addToCart(product);

    router.push("/cart");
  };


  
  return (
    <button
      onClick={handleClick}
      className="bg-orange-600 text-white px-8 py-4 rounded-lg"
    >
      Add To Cart
    </button>
  );
}
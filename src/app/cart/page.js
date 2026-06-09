"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const {
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

  const total = cartItems.reduce(
  (sum, item) =>
    sum + item.price * (item.quantity || 1),
  0
);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div>
  <h2 className="text-xl font-semibold">
    {item.name}
  </h2>

  <p className="text-orange-600">
    ₹{item.price} × {item.quantity}
  </p>

  <div className="flex items-center gap-3 mt-2">
    <button
      onClick={() => decreaseQuantity(item.id)}
      className="bg-gray-300 px-3 py-1 rounded"
    >
      -
    </button>

    <span>{item.quantity || 1}</span>

    <button
      onClick={() => increaseQuantity(item.id)}
      className="bg-gray-300 px-3 py-1 rounded"
    >
      +
    </button>
  </div>
</div>

                <button
                onClick={() => removeFromCart(index)} 
                className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
  <h2 className="text-3xl font-bold mb-4">
    Total: ₹{total}
  </h2>

  <Link href="/checkout">
    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
      Proceed to Checkout
    </button>
  </Link>
</div>
        </>
      )}
    </div>
  );
}
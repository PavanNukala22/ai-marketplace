"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
  if (!name || !email || !phone || !address) {
    alert("Please fill all fields");
    return;
  }

  clearCart();

  localStorage.removeItem("cart");

  router.push("/order-success");
};


  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Customer Form */}
        <div className="space-y-4">
          <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-3 rounded"
/>

          <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-3 rounded"
/>

          <input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border p-3 rounded"
/>

          <textarea
  placeholder="Shipping Address"
  rows="5"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  className="w-full border p-3 rounded"
/>
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mb-3"
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
          onClick={handlePlaceOrder}
  className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
>
  Place Order
</button>
        </div>

      </div>
    </div>
  );
}
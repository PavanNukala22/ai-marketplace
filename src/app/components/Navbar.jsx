"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cartItems } = useCart();
  return (
    <nav className="flex justify-between items-center p-5 shadow">

      <h1 className="text-2xl font-bold">
        CraftConnect AI
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/cart">Cart ({cartItems.length}) </Link>
        <Link href="/login">Login</Link>
        
      </div>

    </nav>
  );
}
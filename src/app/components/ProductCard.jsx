import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      <div className="relative h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h3 className="text-xl font-semibold">
        {product.name}
      </h3>

      <p className="text-orange-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <Link href={`/products/${product.id}`}>
    <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg">
    View Details
  </button>
</Link>
    </div>
  );
}


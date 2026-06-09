import { products } from "../../data/products";
import Image from "next/image";
import AddToCartButton from "../../components/AddToCartButton";


export default async function ProductDetail({ params }) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-10 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative 'h-125' ">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-3xl text-orange-600 font-bold mb-6">
            ₹{product.price}
          </p>

          <p className="text-gray-700 mb-8">
            {product.description}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
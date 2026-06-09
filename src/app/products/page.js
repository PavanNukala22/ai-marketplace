import { products } from "../data/products";
import ProductCard from "../components/ProductCard";


export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-10 py-10">

      <h1 className="text-5xl font-bold mb-8">
        All Products
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </main>
  );
}
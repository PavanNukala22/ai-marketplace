import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
const categories = [
  "Handicrafts",
  "Handlooms",
  "Jewellery",
  "Paintings",
  "Tribal Art",
  "Bamboo Products",
];

export default function Categories() {
  return (
    <section className="py-16 px-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="border rounded-xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
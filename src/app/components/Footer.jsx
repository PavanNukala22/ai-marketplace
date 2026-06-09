export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">
            CraftConnect AI
          </h3>
          <p className="text-gray-400">
            Connecting artisans and rural enterprises
            with customers worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Categories
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>Handicrafts</li>
            <li>Handlooms</li>
            <li>Jewellery</li>
            <li>Paintings</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            Contact
          </h4>

          <p className="text-gray-400">
            support@craftconnect.ai
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        © 2026 CraftConnect AI. All rights reserved.
      </div>
    </footer>
  );
}
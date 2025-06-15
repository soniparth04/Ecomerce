import React from "react";
import "./index.css";

function App() {
  const categories = [
    { name: "Men", img: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Women", img: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Kids", img: "https://plus.unsplash.com/premium_photo-1691872437686-541ff54828d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Beauty", img: "https://plus.unsplash.com/premium_photo-1678377959909-3542d8096fa5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center  ">
        <h1 className="text-xl font-bold text-pink-600">Myntra</h1>
        <ul className="hidden md:flex text-sm font-medium text-gray-700">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME & LIVING</li>
          <li>BEAUTY</li>
        </ul>
        <div className="ml-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="border px-3 py-1  rounded-lg text-sm w-64"
        />
        </div>
      </nav>
        <h1 className="text-l font-bold text-Black-600 p-4">For AWS Amplify deploy</h1>

      {/* Hero Banner */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1707329194702-9380d587bbc1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Categories */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="text-center">
              <img src={cat.img} alt={cat.name} className="rounded-xl" />
              <p className="mt-2 font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="p-6 bg-pink-50">
        <h2 className="text-2xl font-bold mb-4">Big Offers</h2>
        <div className="flex overflow-x-auto gap-4">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/photo-1570170615381-62c299188814?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt={`Offer ${i}`}
              className="rounded-lg shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="border p-2 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={`https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={`Product ${i}`}
                className="w-full rounded-md"
              />
              <p className="mt-2 font-semibold">Product {i}</p>
              <p className="text-sm text-gray-500">₹{999 + i * 10}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>© 2025 </p>
      </footer>
    </div>
  );
}

export default App;

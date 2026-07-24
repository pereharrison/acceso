import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:5000/products";

    const getProducts = async () => {
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 px-6 py-6">
      <h1 className="text-3xl font-bold text-[#D3E8EA]">
        List of All Products
      </h1>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-xl"
          >
            <h2 className="mb-2 text-xl font-bold">{prod.name}</h2>

            <p className="mb-4 text-sm text-gray-600 line-clamp-2">
              {prod.desc}
            </p>

            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Price:</span> ${prod.price}
              </p>
              <p>
                <span className="font-semibold">Sale:</span> ${prod.salesPrice}
              </p>
              <p>
                <span className="font-semibold">Shipping:</span> $
                {prod.shippingTax}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

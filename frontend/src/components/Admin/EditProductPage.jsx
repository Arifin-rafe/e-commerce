import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    collections: "",
    category: "",
    gender: "",
    colors: [],
    sizes: [],
    material: "",
    brand: "",
    countInStock: 0,
    sku: "",
    images: [
      {
        url: "https://picsum.photos.150?random=1",
      },
      {
        url: "https://picsum.photos.150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      {/* Implement Edit Product Form Here */}
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form action="">
        {/* name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;

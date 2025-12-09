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
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        {/* description */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            name="description"
            value={productData.description}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>
        {/* price */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        {/* countInStock */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        {/* sku */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        {/*sizes*/}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Sizes(comma separated)</label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        {/*color*/}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Colors(comma-separated)</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        {/*images*/}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Image URLs (comma-separated)</label>
          <input
            type="text"
            name="images"
            value={productData.images.map((image) => image.url).join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                images: e.target.value.split(",").map((url) => ({ url: url.trim() })),
              })
            }
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/* <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button> */}
      </form>
    </div>
  );
};

export default EditProductPage;

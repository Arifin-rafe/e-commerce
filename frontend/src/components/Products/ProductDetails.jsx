import React from "react";

const selectedProduct = {
  id: 1,
  name: "Jacket Product",
  price: 19.99,
  brand:"Sailor",
  originalPrice: 29.99,
  description: "This is a sample product description.",
  sizes: ["S", "M", "L", "XL"],
  material: "Cotton",
  colors: ["Red", "Blue"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Product Image 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Product Image 2",
    },
  ],
};
const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-xl text-gray-600 font-bold mb-1">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice} `}
            </p>
            <p className="text-xl text-gray-500">${selectedProduct.price}</p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity :</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 border rounded bg-gray-200">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 border rounded bg-gray-200">
                  +
                </button>
              </div>
            </div>
            <button className="w-full bg-black text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-800 ">
              Add to Cart
            </button>
            <div className=" mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 ">Brand</td>
                    <td className="py-2 ">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-2 ">Material</td>
                    <td className="py-2 ">{selectedProduct.material}</td>
                  </tr>
                  {/* Add more characteristics as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

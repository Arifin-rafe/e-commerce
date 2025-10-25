import React from "react";

const selectedProduct = {
  id: 1,
  name: "Jacket Product",
  price: 19.99,
  originalPrice: 29.99,
  description: "This is a sample product description.",
  sizes: ["S", "M", "L", "XL"],
  material: "Cotton",
  color: ["Red", "Blue", "Green"],
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
            <p className="mt-4 text-gray-600">{selectedProduct.description}</p>
            <div className="mt-6">
              <p className="text-gray-700">Color:</p>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

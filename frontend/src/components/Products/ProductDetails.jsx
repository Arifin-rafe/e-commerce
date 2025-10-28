import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";
const selectedProduct = {
  id: 1,
  name: "Jacket Product",
  price: 19.99,
  brand: "Sailor",
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
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if(action === "plus") setQuantity((prev) => prev + 1);
    if(action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    if(!selectedSize || !selectedColor){
      toast.error("Please select size and color before adding to cart.",{
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!",{
        duration: 1000,
      });
      setIsButtonDisabled(false);
    },500);
  }

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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
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
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
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
                    onClick={() => setSelectedSize(size)}
                    key={size}
                    className={`px-4 py-2  rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity :</p>
              <div className="flex items-center space-x-4 mt-2">
                <button onClick={()=> handleQuantityChange("minus")} className="px-2 py-1 border rounded bg-gray-200">
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button onClick={()=> handleQuantityChange("plus")} className="px-2 py-1 border rounded bg-gray-200">
                  +
                </button>
              </div>
            </div>
            <button onClick={handleAddToCart} className="w-full bg-black text-white py-2 px-6 rounded-lg font-semibold hover:bg-gray-800 ">
              Add to Cart
            </button>
            <div className=" mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1 ">Brand</td>
                    <td className="py-1 ">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 ">Material</td>
                    <td className="py-1 ">{selectedProduct.material}</td>
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

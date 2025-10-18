import React, { use, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const newArrivals = [
    {
      _id: 1,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 2,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 3,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 4,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 5,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 6,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 7,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
    {
      _id: 8,
      name: "Stylish jacket",
      price: 12.99,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish jacket",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, magni?",
    },
  ];

  const handleMouseDown =(e)=>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }
  const handleMouseMove = (e)=>{
    if(!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;

  }
  const handleMouseUpOrLeave = (e)=>{
    setIsDragging(false);
    
  }

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  // update scroll button
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  });
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Discover our latest arrivals, freshly added to keep you on trend.
        </p>
        {/* scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-600 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={()=>scroll("right")}
          disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-600 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* scrollable content */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="text-lg font-medium">{product.name}</h4>
                <p className="mt-1">$ {product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

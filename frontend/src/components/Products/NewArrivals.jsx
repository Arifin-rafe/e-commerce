import React from "react";

const NewArrivals = () => {
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
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <p className="text-gray-600 mb-8 text-lg">Discover our latest arrivals, freshly 
            added to keep you on trend.
        </p>
        {/* scroll buttons */}
        <div className="absolute"></div>
      </div>
    </section>
  );
};

export default NewArrivals;

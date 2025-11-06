import React, { useEffect, useState } from 'react'

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=5" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=6" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=7" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=8" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=9" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=10" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=11" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 24.99,
          images: [{ url: "https://picsum.photos/300/300?random=12" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  },[]);
  return (
    <div className="">CollectionPage</div>
  )
}

export default CollectionPage
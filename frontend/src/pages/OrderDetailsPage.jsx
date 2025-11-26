import { use, useState } from "react";
import { useParams } from "react-router-dom";
const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useffect(() => {
    //fetch order details by id
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Pay Pal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA"
      },
      orderItems:[
        {
          productId: "1",
          name: "Jacket",
          color: "black",
          size: "M",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "shirt",
          color: "black",
          size: "M",
          price: 150,
          quantity: 2,
          image: "https://picsum.photos/150?random=2",
        },
      ]
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return <div>OrderDetailsPage</div>;
};

export default OrderDetailsPage;

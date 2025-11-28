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
        country: "USA",
      },
      orderItems: [
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
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;

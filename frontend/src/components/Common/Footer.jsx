import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-4">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">newsletter</h3>
          <p className="text-gray-500 mb-4">
            be the first to hear about out new products
          </p>
          <p>sign up and get 20% off</p>
          {/* news letter form */}
          <form action=""></form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

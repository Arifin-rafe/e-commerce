import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {name: "Alice", email: "alice@example.com", role: "Admin" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Default role
    
  });
  return <div>UserManagement</div>;
};

export default UserManagement;

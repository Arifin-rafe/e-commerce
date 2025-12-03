import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {name: "Alice", email: "kVp6T@example.com", role: "Admin" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });
  return <div>UserManagement</div>;
};

export default UserManagement;

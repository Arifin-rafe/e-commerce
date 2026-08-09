import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//helper function to load cart from local storage
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [] };
};

// helper function to save cart to local storage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// fetch cart for a user or guest
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValueue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        {
          params: { userId, guestId },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// add item to cart for a user or guest
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, guestId, userId, size, color },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        {
          productId,
          quantity,
          guestId,
          userId,
          size,
          color,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// update item in cart for a user or guest
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    { productId, quantity, guestId, userId, size, color },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        {
          productId,
          quantity,
          size,
          color,
          guestId,
          userId,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// remove item from cart for a user or guest
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        data: {productId, guestId, userId, size, color},
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

//merge guest cart with user cart
export const mergeCart = createAsyncThunk("cart/mergeCart", async({guestId,user},{rejectWithValue})
=>{
  try {
    const reponse = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
      {guestId, user},
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem()}`
        }
      }
    );
  } catch (error) {
    
  }
})
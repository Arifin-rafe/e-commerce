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
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
      {guestId, user},
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] }
      localStorage.removeItem("cart")
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
      })
    .addCase(fetchCart.fulfiled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      })
    .addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch cart";
    })
    .addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
      })
    .addCase(addToCart.fulfiled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      })
    .addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to add to cart";
    })
    .addCase(updateCartItemQuantity.pending, (state) => {
      state.loading = true;
      state.error = null;
      })
    .addCase(updateCartItemQuantity.fulfiled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      })
    .addCase(updateCartItemQuantity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to update item quantity";
    })
    .addCase(removeFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
      })
    .addCase(removeFromCart.fulfiled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      })
    .addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to remove item";
    })
    .addCase(mergeCart.pending, (state) => {
      state.loading = true;
      state.error = null;
      })
    .addCase(mergeCart.fulfiled, (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
      })
    .addCase(mergeCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to merge cart";
    });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
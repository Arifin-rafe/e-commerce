import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//async thunk for fetching products by collection and optional features
export const fetchProductsByFilters = createAsyncThunk(
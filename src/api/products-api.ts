import axios from "axios"
import type { IProduct } from "../types/products"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk<IProduct[]>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://test-api.myata-flowers.ru/products')
      return res.data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)
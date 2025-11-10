import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IProduct, ProductsState } from "../../types/products"
import { fetchProducts } from "../../api/products-api"
import { v4 as uuidv4 } from "uuid"
import { saveToLocalStorage } from "../../utils/lacalStorage"

const initialProducts = (() => {
  const stored = localStorage.getItem('products')
  if (!stored) return []
  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
})()

const initialState: ProductsState = {
  products: initialProducts,    
  status: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: 'favoriets',
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = state.products.find(p => p._id === action.payload)
      if (product) product.isFavorite = !product.isFavorite
      saveToLocalStorage(state.products)
    },
    toggleDelete: (state, action) => {
      const product = state.products.find(p => p._id === action.payload)
      if (product) product.deleted = true
      saveToLocalStorage(state.products)
    },
    createProduct: (state, action: PayloadAction<IProduct>) => {
      const newProduct = { ...action.payload, _id: uuidv4(), }
      state.products.push(newProduct)
      saveToLocalStorage(state.products)
    },
    resetProducts: (state) => { 
      state.products = []; localStorage.removeItem('products') 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.map(p => ({ ...p, deleted: false }))
        saveToLocalStorage(state.products)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  }
})

export const { toggleFavorite, toggleDelete, createProduct, resetProducts } = productsSlice.actions
export default productsSlice.reducer

import type { IProduct } from "../types/products"

export const saveToLocalStorage = (state: IProduct[]) => {
  localStorage.setItem('products', JSON.stringify(state))
}
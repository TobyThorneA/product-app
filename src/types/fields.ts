import type { RegisterOptions } from "react-hook-form"
import type { IProduct } from "./products"

export type FieldConfig = {
  id: keyof IProduct
  label: string
  placeholder?: string
  type?: string
  as?: "input" | "textarea"
  rules?: RegisterOptions<IProduct, keyof IProduct>
}
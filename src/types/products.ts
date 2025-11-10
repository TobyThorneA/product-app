export interface IProduct {
  _id?:string
  name: string
  price: number
  oldPrice: number
  description: string
  imageUrl: string
  isFavorite?: boolean
  deleted?: boolean
}

export interface ProductsState {
  products: IProduct[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

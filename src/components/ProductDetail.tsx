import { Heart } from "lucide-react"
import type { IProduct } from "../types/products"
import type React from "react"
import { useAppDispatch } from "../appStore/hooks"
import { toggleFavorite } from "../appStore/slices/productsSlice"

const ProductDetail: React.FC<{ product: IProduct }> = ({ product }) => {
  const dispatch = useAppDispatch()
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-10">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6"
      />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <button onClick={() => dispatch(toggleFavorite(product._id))}>
          <Heart
            className={product.isFavorite ? "w-7 h-7 text-red-500" : "w-7 h-7 text-gray-400"}
            fill={product.isFavorite ? "red" : "transparent"}
          />
        </button>
      </div>
            <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl font-semibold text-red-500">{product.price} ₽</span>
        <span className="text-gray-400 line-through text-lg">{product.oldPrice} ₽</span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>
    </div>
  )
}
export default ProductDetail
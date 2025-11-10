import { Heart, Trash2 } from "lucide-react"
import type { IProduct } from "../types/products"
import { useAppDispatch } from "../appStore/hooks"
import { toggleFavorite, toggleDelete } from "../appStore/slices/productsSlice"
import { useNavigate } from "react-router-dom"

const ProductItem: React.FC<IProduct> = ({
  _id,
  name,
  price,
  oldPrice,
  description,
  imageUrl,
  isFavorite,
}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div
      className="
        flex flex-col rounded-2xl overflow-hidden bg-white
        shadow-md hover:shadow-lg transition-all cursor-pointer
        w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[260px] self-start
      "
      onClick={() => navigate(`/products/${_id}`)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-40 sm:h-48 md:h-52 lg:h-56 object-cover w-full"
      />

<div className="flex flex-col flex-1 p-4 gap-2">
  <h3 className="text-base sm:text-lg font-semibold line-clamp-2 text-gray-800">
    {name}
  </h3>

  <div className="flex items-center gap-2">
    <span className="text-red-500 font-semibold text-sm sm:text-base">
      {price} ₽
    </span>
    {oldPrice && (
      <span className="text-gray-400 line-through text-xs sm:text-sm">
        {oldPrice} ₽
      </span>
    )}
  </div>

  <p
    className="text-gray-600 text-xs sm:text-sm line-clamp-3 overflow-hidden h-[3.6rem] sm:h-[4.2rem] flex-shrink-0"
    title={description}
  >
    {description}
  </p>


        <div
          className="flex justify-between items-center pt-2 border-t border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="transition-transform hover:scale-110"
            onClick={() => dispatch(toggleFavorite(_id))}
          >
            <Heart
              className="w-6 h-6"
              strokeWidth={2}
              color={isFavorite ? "#ef4444" : "#9ca3af"}
              fill={isFavorite ? "#ef4444" : "transparent"}
            />
          </button>

          <button
            className="transition-transform hover:scale-110"
            onClick={() => dispatch(toggleDelete(_id))}
          >
            <Trash2 className="w-6 h-6 text-gray-400 hover:text-gray-600 transition" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem



import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../appStore/hooks"
import ProductDetail from "../components/ProductDetail"
import { useEffect } from "react"

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = useAppSelector(state => state.products.products.find(p => p._id === id))

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate(-1)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [navigate])

  if (!product)
    return (
      <div className="p-6 text-center">
        <button className="btn-secondary mb-4" onClick={() => navigate(-1)}>
          ← Назад
        </button>
        <h2 className="text-gray-600 text-lg">Товар не найден</h2>
      </div>
    )

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 overflow-auto z-50"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="btn-secondary mb-4" onClick={() => navigate(-1)}>
          ← Назад
        </button>
        <ProductDetail product={product} />
      </div>
    </div>
  )
}

export default ProductDetailPage

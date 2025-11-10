import { useNavigate } from "react-router-dom"
import CreateProduct from "../components/CreateProduct"
import { useEffect } from "react"

const CreateProductPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate(-1)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [navigate])

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 overflow-auto z-50"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            ← Назад
          </button>
        </div>
        <CreateProduct />
      </div>
    </div>
  )
}

export default CreateProductPage

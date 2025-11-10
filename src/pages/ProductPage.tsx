import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../appStore/hooks"
import { fetchProducts } from "../api/products-api"
import { resetProducts } from "../appStore/slices/productsSlice"
import ProductItem from "../components/ProductItem"
import AppButton from "../components/AppButton"

const ProductPage = () => {
  const dispatch = useAppDispatch()
  const [showFavorites, setShowFavorites] = useState(false)
  const { status, error, products } = useAppSelector((state) => state.products)

  useEffect(() => {
    if (status === "idle" && products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, status, products.length])

  const filteredProducts = products.filter((p) => !p.deleted)
  const visibleProducts = showFavorites
    ? filteredProducts.filter((p) => p.isFavorite)
    : filteredProducts

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4 sm:p-6 lg:p-8">
      
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-3 mb-8">
        <AppButton to="/" variant="secondary">На главную</AppButton>

        <AppButton
          variant={showFavorites ? "secondary" : "favorite"}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Показать все" : "Избранное"}
        </AppButton>

        <AppButton to="/create-product" variant="success">Добавить продукт</AppButton>

        <AppButton
          variant="warning"
          onClick={() => {
            dispatch(resetProducts());
            dispatch(fetchProducts());
          }}
        >
          Сбросить хранилище
        </AppButton>
      </div>

      {status === "loading" && (
        <p className="text-center text-blue-500 mb-4">Загрузка...</p>
      )}
      {status === "failed" && (
        <p className="text-center text-red-500 mb-4">Ошибка: {error}</p>
      )}

      {visibleProducts.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center text-gray-500 text-center">
          {showFavorites ? (
            <p className="text-lg mb-3">Нет избранных товаров 😔</p>
          ) : (
            <>
              <p className="text-lg mb-3">Товаров пока нет...</p>
              <AppButton to="/create-product" variant="primary">Добавить первый товар</AppButton>
            </>
          )}
        </div>
      ) : (
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-5 
          justify-items-center
          flex-1
        ">
          {visibleProducts.map((product) => (
            <ProductItem key={product._id} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductPage

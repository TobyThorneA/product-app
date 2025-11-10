import { Route, Routes } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CreateProductPage from "./pages/CreateProductPage"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-4xl">
      <Routes>
        <Route path={'/'} element={< HomePage />}/>
        <Route path={'/products'} element={< ProductPage />}/>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App

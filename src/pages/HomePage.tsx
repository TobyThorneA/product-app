import AppButton from "../components/AppButton"

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        Добро пожаловать
      </h1>
      <AppButton to="/products" variant="primary">Перейти к продуктам</AppButton>
    </div>
  )
}

export default HomePage

import AppButton from "../components/AppButton"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
        Такой страницы не существует... (404)
      </h1>
      <AppButton to="/" variant="primary">На главную</AppButton>
    </div>
  )
}

export default NotFoundPage
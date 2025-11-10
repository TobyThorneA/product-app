import { useState } from "react"
import { useAppDispatch } from "../appStore/hooks"
import type { IProduct } from "../types/products"
import { createProduct } from "../appStore/slices/productsSlice"
import { useForm } from "react-hook-form"
import { FormField } from "../components/FormField"
import { fields } from "../utils/productFormConfig"
import FormSubmitButton from "./FormSubmitButton"

const CreateProduct = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<IProduct>({
    mode: "onChange",
  })

  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const onSubmit = (data: IProduct) => {
    try {
      dispatch(createProduct(data))
      reset()
      setMessage("Форма успешно отправлена! ✅")
    } catch {
      setMessage("Ошибка при отправке 😢")
    } finally {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
          Добавление продукта
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 text-sm sm:text-base text-black"
        >
          {fields.map((field) => (
            <FormField
              key={field.id}
              id={field.id}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              as={field.as}
              registration={register(field.id as keyof IProduct, field.rules as any)}
              error={errors[field.id as keyof IProduct]}
            />
          ))}
          
          {<FormSubmitButton isValid={isValid}/>}

        </form>

        {showMessage && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg text-sm animate-fade-in">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}

export default CreateProduct


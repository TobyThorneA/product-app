import type React from "react"

interface SubmitButtonProps {
  isValid: boolean,
}

const FormSubmitButton: React.FC<SubmitButtonProps> = ({ isValid }) => {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`w-full py-2 rounded-lg font-medium transition
        ${isValid
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
    >
      {isValid ? "Создать продукт" : "Заполните все поля"}
    </button>
  )
}
export default FormSubmitButton
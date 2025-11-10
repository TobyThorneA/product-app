import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface FormFieldProps {
  id: string
  label: string
  placeholder?: string
  registration: UseFormRegisterReturn
  error?: FieldError
  type?: string
  as?: "input" | "textarea"
}

export const FormField = ({
  id,
  label,
  placeholder,
  registration,
  error,
  type = "text",
  as = "input",
}: FormFieldProps) => {
  const commonClasses = `w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 
    ${error ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"}`

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-gray-600 mb-1 text-sm font-medium">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          className={`${commonClasses} min-h-[80px] resize-none`}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={commonClasses}
          {...registration}
        />
      )}

      {error && (
        <p className="absolute text-xs text-red-500 mt-1">{error.message}</p>
      )}
    </div>
  )
}

import type { FieldConfig } from "../types/fields";
import { isNumber } from "./validation";

export const fields: FieldConfig[] = [
  {
    id: "name",
    label: "Название продукта",
    placeholder: "Введите название",
    rules: {
      required: "Имя обязательно",
      minLength: { value: 3, message: "Минимум 3 символа" },
    },
  },
  {
    id: "imageUrl",
    label: "Ссылка на фото",
    placeholder: "https://example.com/photo.jpg",
    rules: { required: "Ссылка обязательна" },
  },
  {
    id: "price",
    label: "Цена (новая)",
    placeholder: "Введите цену",
    type: "text",
    rules: {
      required: "Поле обязательно",
      validate: isNumber,
      min: { value: 1, message: "Должно быть > 0" },
    },
  },
  {
    id: "oldPrice",
    label: "Старая цена",
    placeholder: "Введите старую цену",
    type: "text",
    rules: {
      validate: isNumber,
      min: { value: 1, message: "Должно быть > 0" },
    },
  },
  {
    id: "description",
    label: "Описание продукта",
    placeholder: "Введите описание...",
    as: "textarea",
    rules: {
      required: "Поле обязательно",
      minLength: { value: 10, message: "Минимум 10 символов" },
    },
  },
] as const
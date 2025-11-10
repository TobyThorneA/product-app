export const isNumber = (v: unknown): true | string => {
  if (v === undefined || v === null || v === "") return "Введите число";
  return !isNaN(Number(v)) ? true : "Введите число";
}
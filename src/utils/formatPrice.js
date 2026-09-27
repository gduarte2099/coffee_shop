export const formatPrice = (value) =>
  "Gs. " + Number(value || 0).toLocaleString("es-PY");
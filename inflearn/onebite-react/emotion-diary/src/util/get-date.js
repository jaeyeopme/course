export const getDate = (date) => {
  return date.toISOString().split('T')[0]
}

export const getFullDate = date => {
  if (!date) return null;
  const subDate = new Date(date);
  return `${ subDate.getDate() }-${ subDate.getMonth() }-${ subDate.getFullYear() }`
};
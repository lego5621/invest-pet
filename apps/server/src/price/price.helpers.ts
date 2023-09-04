export const getQuoteDate = () => {
  const currentDate = new Date();

  // Вычитаем 2 года
  currentDate.setFullYear(currentDate.getFullYear() - 2);

  // Форматируем дату в "YYYY-MM-DD" формат
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

import axios from 'axios';

// особистий API_KEY
const API_KEY = '42159732-a54f57e537715c3d1f59422b1';

// функція для отримання даних за запитом
export const fetchUsers = async (inputValue, page) => {
  // обєкт з налаштуваннями параметрів запиту
  const params = new URLSearchParams({
    page: page,
    per_page: 15,
    q: inputValue,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  return await axios.get(url);
};

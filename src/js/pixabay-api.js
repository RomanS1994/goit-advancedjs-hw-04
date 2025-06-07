import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Настройки бібліотеки згідно з макетом
iziToast.settings({
  position: 'topRight',
  messageColor: '#FAFAFB',
  iconColor: '#FAFAFB',
  backgroundColor: '#B51B1B',
});

// особистий API_KEY
const API_KEY = '42159732-a54f57e537715c3d1f59422b1';

// функція для отримання даних за запитом
export const fetchUsers = async inputValue => {
  // обєкт з налаштуваннями параметрів запиту
  const params = new URLSearchParams({
    q: inputValue,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  const response = await axios.get(url);
  if (!response.data.total) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  } else {
    return response.data.hits;
  }
};

//---------------------------------------------
/************ HTTP-запити ************/
import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '42159732-a54f57e537715c3d1f59422b1';
const BASE_URL = 'https://pixabay.com/api/';

async function getApiData(value, page) {
  const params = {
    key: API_KEY,
    q: value /** те, що вводить користувач */,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    if (response.data.total) {
      return response;
    } else {
      iziToast.error({
        title: 'Oops!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      }); //якщо повернувся порожній масив
    }
  } catch (error) {
    console.error(error.message); // помилка зі сторони сервера
  }
}

export { getApiData };

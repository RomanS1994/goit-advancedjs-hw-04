import { createMarkup } from '/js/render-functions.js';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

iziToast.settings({
  position: 'topRight',

  messageColor: '#FAFAFB',
  iconColor: '#FAFAFB',
  backgroundColor: '#B51B1B',
});

const API_KEY = '42159732-a54f57e537715c3d1f59422b1';

export function getData(inputValue) {
  const params = new URLSearchParams({
    q: inputValue,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${params}`;

  showLoader();

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (!data.total) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      } else {
        createMarkup(data.hits);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
}

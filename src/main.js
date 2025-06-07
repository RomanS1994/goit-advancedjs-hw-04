import { fetchUsers } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  list: document.querySelector('.gallery'),
};
const { loader, form, list } = refs;

/*** додаткові функції для кращої читабельності ***/
function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}
function clearGallery() {
  list.innerHTML = '';
}
// ініціалізація бібліотеки SimpleLightbox
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  clearGallery();
  event.preventDefault();
  const inputValue = event.target.elements[0].value.trim();
  if (!inputValue) {
    return;
  }
  showLoader();

  fetchUsers(inputValue)
    .then(data => {
      if (data) {
        createMarkup(data);
        gallery.refresh();
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      hideLoader();
    });

  form.reset();
}

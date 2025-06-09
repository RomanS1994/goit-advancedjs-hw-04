import { fetchUsers } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
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

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  list: document.querySelector('.gallery'),
  btnMore: document.querySelector('.more'),
};
const { loader, form, list, btnMore } = refs;

/*** додаткові функції для кращої читабельності ***/
function showLoader() {
  loader.classList.remove('hidden');
}
function hiddenLoader() {
  loader.classList.add('hidden');
}
function showBtn() {
  btnMore.classList.remove('hidden');
}
function hiddenBtn() {
  btnMore.classList.add('hidden');
}

function clearGallery() {
  list.innerHTML = '';
}
// ініціалізація бібліотеки SimpleLightbox
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let inputValue = '';
let page = 1;
let getCards = 15;

function handlerSubmit(event) {
  event.preventDefault();
  page = 1;
  inputValue = event.target.elements[0].value.trim();
  if (!inputValue) {
    return;
  }
  clearGallery();
  showLoader();

  fetchUsers(inputValue, page)
    .then(({ data }) => {
      if (!data.total) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      } else if (data.totalHits <= 15) {
        const markup = createMarkup(data.hits);
        refs.list.innerHTML = markup; // вставляє в дом розмітку однією операцією
        gallery.refresh();
        hiddenBtn();
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        const markup = createMarkup(data.hits);
        refs.list.innerHTML = markup; // вставляє в дом розмітку однією операцією
        gallery.refresh();
        showBtn();
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      hiddenLoader();
    });

  form.reset();
}

function handlerClick() {
  if (!inputValue) {
    return;
  }
  page += 1;
  getCards += 15;

  showLoader();
  fetchUsers(inputValue, page)
    .then(({ data }) => {
      if (data.totalHits <= getCards) {
        const markup = createMarkup(data.hits);
        list.insertAdjacentHTML('beforeend', markup); // вставляє в дом розмітку однією операцією
        gallery.refresh();
        hiddenBtn();
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
        });

        return;
      } else {
        const markup = createMarkup(data.hits);
        list.insertAdjacentHTML('beforeend', markup); // вставляє в дом розмітку однією операцією
        gallery.refresh();

        // Логіка прокручування сторінки
        const card = document.querySelector('.card');

        let rect = card.getBoundingClientRect();
        // console.log(rect);

        window.scrollBy({
          top: rect.height * 2,
          behavior: 'smooth',
        });
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => {
      hiddenLoader();
    });
}

form.addEventListener('submit', handlerSubmit);
btnMore.addEventListener('click', handlerClick);

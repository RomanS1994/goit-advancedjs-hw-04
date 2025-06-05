import { getData } from './js/pixabay-api.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements[0].value.trim();

  form.reset();

  if (!inputValue) {
    return;
  }

  getData(inputValue).then(() => {
    gallery.refresh();
  });
}

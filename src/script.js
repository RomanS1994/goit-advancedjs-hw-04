import { getApiData } from './image_api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  form: document.querySelector('.search-form'),
  container: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
  guard: document.querySelector('.js-guard'),
};
const { form, container, loadMore } = elements;

//---------------------------------------------
/************ enable SimpleLightbox ************/
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
  animationSpeed: 600,
});

//---------------------------------------------
form.addEventListener('submit', handlerSubmit);
loadMore.addEventListener('click', handlerLoadMore);
let page = 1;
let value = '';
let uploadedImages = 0;

async function handlerSubmit(evt) {
  evt.preventDefault();
  uploadedImages = 0;
  container.textContent = '';
  loadMore.classList.add('is-hidden');
  const { value } = evt.target.elements.searchQuery;

  try {
    const response = await getApiData(value, page);
    // console.log(response);
    const { hits } = response.data;
    if (value.trim()) {
      iziToast.success({
        title: 'Ok!',
        message: `Hooray! We found ${response.data.totalHits} images.`,
        position: 'topRight',
      });
      container.insertAdjacentHTML('beforeend', createMarcup(hits));
      lightbox.refresh();
      loadMore.classList.remove('is-hidden');
      uploadedImages += hits.length;
      // console.log(uploadedImages);
    } else {
      iziToast.error({
        title: 'Oops!',
        message: 'Please enter a search query to find images.',
        position: 'topRight',
      });
    }
  } catch (error) {
    console.dir(error.message);
  }
  form.reset();
}

function createMarcup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <div class="photo-card">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy " /></a>
  <div class="info">
      <p class="info-item">
          <b>Likes: </b>${likes}
      </p>
          <p class="info-item">
      <b>Views </b>${views}
      </p>
      <p class="info-item">
          <b>Comments </b>${comments}
      </p>
      <p class="info-item">
          <b>Downloads
         </b>${downloads}
      </p>
  </div>
</div>
  `
    )
    .join('');
}

async function handlerLoadMore() {
  page++;
  const response = await getApiData(value, page);
  const { hits, totalHits } = response.data;
  container.insertAdjacentHTML('beforeend', createMarcup(hits));
  console.log(response);
  uploadedImages += hits.length;

  console.log(uploadedImages);

  if (uploadedImages >= totalHits) {
    loadMore.classList.add('is-hidden');
    iziToast.error({
      title: 'Oops!',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }
}
//---------------------------------------------
/** додати вибір */

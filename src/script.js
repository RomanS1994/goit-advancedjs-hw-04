import { getApiData } from './image_api';

const elements = {
  form: document.querySelector('.search-form'),
  container: document.querySelector('.gallery'),
};
const { form, container } = elements;

form.addEventListener('submit', handlerSubmit);
let page = 2;
function handlerSubmit(evt) {
  evt.preventDefault();

  const { value } = evt.target.elements.searchQuery;
  console.log(value);

  getApiData(value, page).then(resp =>
    container.insertAdjacentHTML('beforeend', createMarcup(resp.data.hits))
  );
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
        `<div class="photo-card">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
      <p class="info-item">
          <b>Likes: ${likes}</b>
      </p>
          <p class="info-item">
      <b>Views: ${views}</b>
      </p>
      <p class="info-item">
          <b>Comments: ${comments}</b>
      </p>
      <p class="info-item">
          <b>Downloads: ${downloads}</b>
      </p>
  </div>
</div>
  `
    )
    .join('');
}

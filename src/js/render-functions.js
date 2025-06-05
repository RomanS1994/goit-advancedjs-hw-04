const refs = {
  list: document.querySelector('.gallery'),
  form: document.querySelector('.form'),
};

export function createMarkup(dataList) {
  const markup = dataList
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="card">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="description-list">
          <li class="description-item">
            <h2 class="description-title">Likes</h2>
            <p class="description-text">${likes}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Views</h2>
            <p class="description-text">${views}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Comments</h2>
            <p class="description-text">${comments}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Downloads</h2>
            <p class="description-text">${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');
  refs.list.innerHTML = markup;
}

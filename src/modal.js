const elements = {
  form: document.querySelector('.search-form'),
  loadMoreVar: document.querySelector('#column1'),
  infiniteScroll: document.querySelector('#column2'),
  container: document.querySelector('.modal-content'),
  guard: document.querySelector('.js-guard'),
  loadMore: document.querySelector('.load-more'),
};
const { form, loadMoreVar, infiniteScroll, container, guard, loadMore } =
  elements;

loadMoreVar.addEventListener('click', handlerLoadMoreOpen);
function handlerLoadMoreOpen() {
  container.classList.add('is-hidden');
  form.classList.remove('is-hidden');
  guard.classList.add('is-hidden');
  //   guard.remove()
}

infiniteScroll.addEventListener('click', handlerScrollOpen);
function handlerScrollOpen() {
  container.classList.add('is-hidden');
  form.classList.remove('is-hidden');
  loadMore.remove();
}

export { handlerScrollOpen, handlerLoadMoreOpen };

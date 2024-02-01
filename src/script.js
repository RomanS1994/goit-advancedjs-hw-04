const form = document.querySelector('.search-form');
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const { value } = evt.target.elements.searchQuery;
  console.log(value);
}

//---------------------------------------------
/************ HTTP-запити ************/

const APY_KEY = '42159732-a54f57e537715c3d1f59422b1';
const BASE_URL = 'https://pixabay.com/api/';

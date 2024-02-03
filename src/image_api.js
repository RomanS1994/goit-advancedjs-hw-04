//---------------------------------------------
/************ HTTP-запити ************/
import axios from 'axios';

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
  const response = await axios.get(BASE_URL, { params });
  return response;
  // try {
  //   const response = await axios.get(BASE_URL, { params });
  //   console.log(response);
  // } catch (error) {
  //   console.error(error.message);
  // }
}

export { getApiData };

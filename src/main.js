import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = inputEl.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(data.hits);
        formEl.reset();
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Oops! Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});

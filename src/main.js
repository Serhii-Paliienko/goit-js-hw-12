import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-more');
const randomKeywords = [
  'nature',
  'animals',
  'travel',
  'food',
  'technology',
  'people',
  'architecture',
  'beauty',
  'babies',
];

let page = 1;
let query = '';
let totalHits = 0;
const PER_PAGE = 15;

formEl.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);
document.addEventListener('DOMContentLoaded', loadRandomImages);

async function loadRandomImages() {
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const defaultQuery =
      randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    query = defaultQuery;

    const firstPageData = await getImagesByQuery(query, 1);
    totalHits = firstPageData.totalHits;
    const maxPages = Math.ceil(totalHits / PER_PAGE);

    page = Math.floor(Math.random() * maxPages) + 1;
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    if (page * PER_PAGE < totalHits) {
      showLoadMoreButton();
    }
  } catch (err) {
    console.error(err);
    iziToast.error({
      message: 'Error loading random images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onSearch(e) {
  e.preventDefault();
  query = inputEl.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    iziToast.success({
      message: `${totalHits} images found`,
      position: 'topRight',
    });

    if (totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      message: 'Error loading. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    formEl.reset();
  }
}

async function onLoadMore() {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    if (page * PER_PAGE >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    smoothScroll();
  } catch (err) {
    iziToast.error({
      message: 'Error loading additional images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (!firstCard) return;
  const { height: cardHeight } = firstCard.getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

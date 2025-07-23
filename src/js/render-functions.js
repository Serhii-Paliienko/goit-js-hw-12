import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
    </a>
    <ul class="info">
    <li class="info-item">
      <svg class="icon icon-likes" viewBox="0 0 24 24" width="20" height="20">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 
                 2.09C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <p>${likes}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-views" viewBox="0 0 24 24" width="20" height="20">
        <path d="M12 6a9.77 9.77 0 0 0-9.71 
                 8A9.77 9.77 0 0 0 12 22a9.77 
                 9.77 0 0 0 9.71-8A9.77 
                 9.77 0 0 0 12 6zm0 14a7.77 
                 7.77 0 0 1-7.71-6A7.77 
                 7.77 0 0 1 12 8a7.77 7.77 
                 0 0 1 7.71 6A7.77 7.77 0 0 1 12 20zm0-10a4 
                 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 
                 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
      </svg>
      <p>${views}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-comments" viewBox="0 0 24 24" width="20" height="20">
        <path d="M21 6h-2v9H7v2h9l5 5V6zM17 
                 2H3c-1.1 0-2 .9-2 2v14l4-4h12c1.1 
                 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
      <p>${comments}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-downloads" viewBox="0 0 24 24" width="20" height="20">
        <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 
                 7 7-7z"/>
      </svg>
      <p>${downloads}</p>
    </li>
  </ul>
  </li>
  `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
export function showLoader() {
  loaderEl.classList.remove('hidden');
}
export function hideLoader() {
  loaderEl.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

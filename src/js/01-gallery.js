// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}"
      />
    </a>
  </div>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', galleryItem);

galleryList.addEventListener('click', onImgClick);

function onImgClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();
  let gallery = new SimpleLightbox('.gallery a');
  console.log(gallery);
}

import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);


function createGalleryMarkup(photos) {
    return photos.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`
    }).join("");
};
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
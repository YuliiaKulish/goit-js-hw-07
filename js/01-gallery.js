import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(photos) {
    return photos.map(({preview, original, description}) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                    </a>
                </div>`
    }).join("");
};

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(evt) {
    
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }
    console.log(evt.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)
    instance.show();
    
    galleryContainer.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
galleryList.addEventListener('click', handlerClick)


function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`).join('')
}
function handlerClick(evt) {
   evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }
    
    const targetImage = evt.target.closest('.gallery__item');
    if (!targetImage) return;
     
    const largeImageUrl = targetImage.querySelector('a.gallery__link').getAttribute('href');
    console.log(largeImageUrl);
const instance = basicLightbox.create(`
         <img src="${largeImageUrl}" width=100% height=100%>
   `);
   instance.show()
}



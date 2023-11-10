import { galleryItems } from "./gallery-items.js";

// Change code below this line

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"/>
      </a>
      </li>`
    )
    .join("");
}

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

/* console.log(galleryItems); 
const groupOfLiImages = document.createDocumentFragment();

galleryItems.forEach((img) => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");
  const linkElement = document.createElement("a");

  imgElement.src = img.preview;
  linkElement.href = img.original;
  imgElement.alt = img.description;
  imgElement.dataset.source = img.original;

  linkElement.append(imgElement);
  liElement.append(linkElement);
  groupOfLiImages.append(liElement);

  liElement.classList.add("gallery__item");
  linkElement.classList.add("gallery__link");
  imgElement.classList.add("gallery__image");
});

gallery.append(groupOfLiImages); */

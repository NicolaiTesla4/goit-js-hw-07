import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const groupOfLiImages = document.createDocumentFragment();

const showImg = (img) => {
  if (img.target.nodeName != "IMG") {
    return;
  }
  const imgToShow = basicLightbox.create(
    `<img src= "${img.target.dataset.source}">`
  );

  imgToShow.show(() => {
    const closeWithEscape = (img) => {
      if (img.key == "Escape")
        imgToShow.close(() => {
          document.removeEventListener("keydown", closeWithEscape);
        });
    };
    document.addEventListener("keydown", closeWithEscape);
  });
};

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
  linkElement.addEventListener("click", (evt) => evt.preventDefault());
  imgElement.classList.add("gallery__image");
});

console.log(galleryItems);
gallery.append(groupOfLiImages);
gallery.addEventListener("click", showImg);

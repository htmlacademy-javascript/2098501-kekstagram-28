const userPhotosList = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosListFragment = document.createDocumentFragment();
const imgFiltersElement = document.querySelector('.img-filters');

const renderThumbnails = (photo) => {
  photo.forEach(({ url, comments, likes }) => {
    const photoElement = userPictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photosListFragment.appendChild(photoElement);
  });
  userPhotosList.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
  userPhotosList.appendChild(photosListFragment);
  imgFiltersElement.classList.remove('img-filters--inactive');
};

export { renderThumbnails };



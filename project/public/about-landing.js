const navPicture = document.querySelector('.nav-pic-container');
const leftArrow = document.querySelector('.fa-arrow-left');
// const rightArrow = document.querySelector('.fa-arrow-right');

const addClickEvent = (element, eventFunction) => {
  element.addEventListener('click', () => {
    eventFunction();
  });
};

const addClassName = (element, className) => {
  element.classList.add(className);
};

addClickEvent(leftArrow, () => addClassName(navPicture, 'picture2'));
// leftArrow.addEventListener('click', function () {
//   //   let clicked = 0;
//   for (let i = 0; i < 5; i++) {
//     navPicture.classList.add(`picture${i}`);
//     console.log(i);
//   }
// });

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");
const leftPerspective = [
  { x: -10, y: 0, z: -4 },
  { x: -20, y: 0, z: -8 },
  { x: -30, y: 0, z: -12 },
  { x: -40, y: 0, z: -16 },
  { x: -50, y: 0, z: -20 },
  { x: 10, y: 0, z: -4 },
];
const rightPerspective = [
  { x: 10, y: 0, z: -4 },
  { x: 20, y: 0, z: -8 },
  { x: 30, y: 0, z: -12 },
  { x: 40, y: 0, z: -16 },
  { x: 50, y: 0, z: -20 },
  { x: -10, y: 0, z: -4 },
];

const opacity = [1, 2, 3, 4, 5, 0];

const translateImage = (target, p, opacity) => {
  target.style.transform = `translate3d(${p.x}rem,${p.y}rem,${p.z}rem)`;
  target.style.opacity = opacity;
};

const animateImages = (c, perspective) => {
  const counter = parseInt(c.dataset.counter);
  translateImage(c, perspective[counter - 1], opacity[counter]);
  c.dataset.counter = counter === 6 ? 1 : counter + 1;
};

const loop = () => {
  setInterval(() => {
    leftCards.forEach((card, i) => {
      animateImages(card, leftPerspective);
    });
    rightCards.forEach((card, i) => {
      animateImages(card, rightPerspective);
    });
  }, 1000);
};

loop();

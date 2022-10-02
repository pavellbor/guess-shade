export function getRandomInt(min, max) {
  const updatedMin = Math.ceil(min);
  const updatedMax = Math.floor(max);

  return Math.floor(Math.random() * (updatedMax - updatedMin + 1)) + updatedMin;
}

export function getElementMinSize(element) {
  const { clientHeight, clientWidth } = element;

  return Math.min(clientHeight, clientWidth);
}

export function getSquareCounts(squaresNumberOnOneSide) {
  return Math.pow(squaresNumberOnOneSide, 2);
}

export function getRandomColor() {
  const hslDeg = getRandomInt(0, 360);

  return `hsl(${hslDeg}deg 80% 40% / 100%)`;
}

export function plural(forms, n) {
  let idx;

  if (n % 10 === 1 && n % 100 !== 11) {
    idx = 0;
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    idx = 1;
  } else {
    idx = 2;
  }

  return forms[idx] || '';
}

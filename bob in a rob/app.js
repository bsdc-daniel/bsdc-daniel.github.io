console.log('pokemon app')
const box = document.querySelector('#box')
for (i = 1; i <= 10000; i++) {

const newImg = document.createElement('img')
newImg.src = 
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`




box.appendChild(newImg); }
const carsList = [
    {type:"BMW", model:"316", colour:"blue"},
    {type:"fiat", model:"500", colour:"red"},
    {type:"audi", model:"focus", colour:"orange"},
    {type:"ford", model:"ka", colour:"white"},
    {type:"BMW", model:"316", colour:"silver"},

];

const carsSection = document.getElementById('cars')
console.log(carsSection)

for (i = 0; i < 6; i++) {
    const newCar = document.createElement('tr')
    newCar.innerHTML = `<td>${carsList[i].type}</td><td>${carsList[i].model}</td><td>${carsList[i].hp}</td><td>${carsList[i].colour}</td>`
    
    carsSection.appendChild(newCar);
}




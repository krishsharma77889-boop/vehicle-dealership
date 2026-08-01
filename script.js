const vehicles = [
  { id: 1, type: "car", name: "Sports Sedan", price: "$17,000", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500" },
  { id: 2, type: "bike", name: "Motorcycle", price: "$16,995", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500" },
  { id: 3, type: "car", name: "Luxury Coupe", price: "$22,500", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=500" }
];

const grid = document.getElementById("vehicle-grid");

function renderVehicles(list) {
  grid.innerHTML = list.map(v => `
    <div class="card">
      <img src="${v.img}" alt="${v.name}">
      <div class="card-body">
        <h3>${v.name}</h3>
        <p class="price">${v.price}</p>
        <button class="card-btn">Shortlist</button>
      </div>
    </div>
  `).join('');
}

renderVehicles(vehicles);
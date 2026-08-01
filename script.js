const vehicles = [
  { id: 1, type: "car", category: "sedan", name: "Sports Sedan", price: "$17,000", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500" },
  { id: 2, type: "car", category: "suv", name: "Luxury SUV", price: "$35,000", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500" },
  { id: 3, type: "bike", category: "cruiser", name: "Classic Cruiser", price: "$16,995", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500" },
  { id: 4, type: "bike", category: "sport", name: "Sport Bike", price: "$12,000", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500" }
];

const categories = {
  car: ["sedan", "suv", "hatchback"],
  bike: ["cruiser", "sport"]
};

const grid = document.getElementById("vehicle-grid");
const filterBtn = document.getElementById("filter-btn");
const filterModal = document.getElementById("filter-modal");
const closeModal = document.getElementById("close-modal");
const vehicleType = document.getElementById("vehicle-type");
const categoryWrapper = document.getElementById("category-wrapper");
const vehicleCategory = document.getElementById("vehicle-category");
const applyFiltersBtn = document.getElementById("apply-filters");

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

// Modal Toggle
filterBtn.addEventListener("click", () => filterModal.classList.remove("hidden"));
closeModal.addEventListener("click", () => filterModal.classList.add("hidden"));

// Dynamic Category Options based on Vehicle Type
vehicleType.addEventListener("change", (e) => {
  const type = e.target.value;
  if (type === "all") {
    categoryWrapper.classList.add("hidden");
  } else {
    categoryWrapper.classList.remove("hidden");
    vehicleCategory.innerHTML = `<option value="all">All ${type}s</option>` + 
      categories[type].map(c => `<option value="${c}">${c.toUpperCase()}</option>`).join('');
  }
});

// Apply Filter Logic
applyFiltersBtn.addEventListener("click", () => {
  const selectedType = vehicleType.value;
  const selectedCategory = vehicleCategory.value;

  let filtered = vehicles;

  if (selectedType !== "all") {
    filtered = filtered.filter(v => v.type === selectedType);
  }

  if (selectedType !== "all" && selectedCategory !== "all") {
    filtered = filtered.filter(v => v.category === selectedCategory);
  }

  renderVehicles(filtered);
  filterModal.classList.add("hidden");
});

renderVehicles(vehicles);
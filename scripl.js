// Toggle settings menu
document.getElementById("settingsBtn").addEventListener("click", () => {
  const menu = document.getElementById("settingsMenu");
  menu.classList.toggle("hidden");
});

// Show product details
function showDetails(product) {
  const detailSection = document.getElementById("details");
  const detailText = document.getElementById("detailText");

  let description = "";
  if (product === "Laptop") {
    description = "High-performance laptop with 16GB RAM, 512GB SSD. Price: $800.";
  } else if (product === "Shoes") {
    description = "Comfortable running shoes, available in multiple sizes. Price: $50.";
  } else if (product === "Headphones") {
    description = "Noise-cancelling headphones with Bluetooth connectivity. Price: $120.";
  }

  detailText.textContent = description;
  detailSection.classList.remove("hidden");
}

// Close product details
function closeDetails() {
  document.getElementById("details").classList.add("hidden");
}

const initApp = () => {
  console.log("initApp is running!");
  
};


document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".carContainer")) {
    loadVehicles();
  }

  if (document.querySelector(".vehicleInfo")) {
    loadVehicleInfo();
  }
});

const loadVehicles = async () => {
  const response = await fetch("http://localhost:3000/vehicles");
  const vehicles = await response.json();

  const container = document.querySelector(".carContainer");

  vehicles.forEach((vehicle) => {
    const carDiv = document.createElement("div");
    carDiv.innerHTML = `<p><strong>${vehicle.manufacturer}</strong>`;
    carDiv.classList.add("carDiv");

    carDiv.addEventListener("click", () => {
      window.location.href = "vehicle-detail.html";
    });
    container.appendChild(carDiv);
  });
};

const loadVehicleInfo = async () => {
  const response = await fetch("http://localhost:3000/vehicles");
  const vehicles = await response.json();

  const container = document.querySelector(".vehicleInfo");

  vehicles.forEach((vehicle) => {
    const carDiv = document.createElement("div");
    carDiv.innerHTML = `<p><strong>${vehicle.manufacturer}</strong>:<li>Model - ${vehicle.model}</li><li>Model Year - ${vehicle.modelYear}</li><li>Mile Age - ${vehicle.mileAge}</li><li>Value - ${vehicle.value}</li>`;
    carDiv.classList.add("carDiv");
    carDiv.addEventListener("click", () => {
      window.location.href = "vehicle-detail.html";
  });
  container.appendChild(carDiv);
  });
};

document.addEventListener("DOMContentLoaded", initApp);

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

// // const initApp = () => {
// //   console.log("initApp is running!");
// //   loadVehicles();
// // };

// // const loadVehicles = async () => {
// //   console.log("Loading vehicles");
// //   const vehicles = await fetch("http://localhost:3000/vehicles");
// //   if (vehicles.ok) {
// //     const result = await vehicles.json();
// //     console.log(result);

// //     const carContainer = document.querySelector(".carContainer");

// //     result.forEach((vehicle) => {
// //       console.log(
// //         vehicle.id,
// //         vehicle.manufacturer,
// //         vehicle.model,
// //         vehicle.modelYear,
// //         vehicle.mileAge,
// //         vehicle.value
// //       );

// //       const carDiv = document.createElement("div");
// //       carDiv.innerHTML = `<p><strong>${vehicle.manufacturer}</strong></p><p>Model: ${vehicle.model}</p><p>Year: ${vehicle.modelYear}</p><p>Mile Age: ${vehicle.mileAge}</p><p>Value: ${vehicle.value}</p>`;
// //       carContainer.appendChild(carDiv);
// //       carDiv.classList.add("carDiv");
// //     });
// //     return;
// //   }
// //   console.log("Hoppsan, det gick lite fel..");
// };

document.addEventListener("DOMContentLoaded", initApp);

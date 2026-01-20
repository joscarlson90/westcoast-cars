const initApp = () => {
  console.log("initApp is running!");
  loadVehicles();
};

const loadVehicles = async () => {
  console.log("Loading vehicles");
  const vehicles = await fetch("http://localhost:3000/vehicles");
  if (vehicles.ok) {
    const result = await vehicles.json();
    console.log(result);

    const carContainer = document.querySelector(".carContainer");
    const cars = document.querySelector(".cars");

    result.forEach((vehicle) => {
      console.log(
        vehicle.id,
        vehicle.manufacturer,
        vehicle.model,
        vehicle.modelYear,
        vehicle.mileAge,
      );

      const carDiv = document.createElement("div");
      carDiv.innerHTML = `<p><strong>${vehicle.manufacturer}</strong></p><p>Modell: ${vehicle.model}</p><p>År: ${vehicle.modelYear}</p><p>Mil: ${vehicle.mileAge}</p>`;
      carContainer.appendChild(carDiv);
      carDiv.classList.add("carDiv");
    });
    return;
  }
  console.log("Hoppsan, det gick lite fel..");
};

document.addEventListener("DOMContentLoaded", initApp);

/* 1. utöka json filen med 
   modelYear,
   mileAge
2. uppdatera app.js
   skriv ut i konsolfönstret alla egenskaper
3. skapa en visualisering i index.html som visar samma inmatning
4. pusha till github */

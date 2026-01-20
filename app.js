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

    result.forEach((vehicle) => {
      console.log(vehicle.manufacturer, vehicle.modelYear, vehicle.mileAge);
    });

    return;
  }
  console.log("Hoppsan, det gick lite fel..");
};

document.addEventListener("DOMContentLoaded", initApp);

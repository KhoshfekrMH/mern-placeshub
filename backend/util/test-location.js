import getCoordsForAddress from "./location.js";
import dotenv from "dotenv";

dotenv.config();

const address = "Empire State Building, New York";

getCoordsForAddress(address)
  .then((coordinates) => {
    console.log("coordinates: ", coordinates);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

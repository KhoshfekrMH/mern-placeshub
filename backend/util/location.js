import axios from "axios";
import HttpError from "../models/http-error.js";

async function getCoordsForAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  let response;
  try {
    response = await axios.get(url, {
      headers: { "User-Agent": "MyApp/1.0" },
    });
  } catch (error) {
    throw new HttpError("Fetching coordinates failed", 500);
  }

  const data = response.data;

  if (!data || data.length === 0) {
    throw new HttpError("Could not find location for the given address", 422);
  }

  const coordinates = {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };

  return coordinates;
}

export default getCoordsForAddress;

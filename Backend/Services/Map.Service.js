const { default: axios } = require("axios");

const addressCoordinates = async (address) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json`;

  try {
    const response = await axios.get(geocodeUrl, {
      params: {
        address,
        key: api_key,
      },
    });
    const data = response.data;

    if (data.status == "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("Unable to get coordinates");
    }
  } catch (error) {
    console.log(error);
  }
};

//getting time and distance
const getTimeAndDistance = async (origin, destination) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json`;
  try {
    const response = await axios.get(url, {
      params: {
        origins: origin,
        destinations: destination,
        key: apiKey,
      },
    });

    const data = response.data;
    if (data.status !== "OK" || data.rows[0].elements[0].status !== "OK") {
      throw new Error(
        data.error_message || "Unable to calculate distance and time."
      );
    }
    const element = data.rows[0].elements[0];
    const distance = element.distance.text;
    const duration = element.duration.text;

    return {
      origin: data.origin_addresses[0],
      destination: data.destination_addresses[0],
      distance,
      duration,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//suggetions
const getsuggestions = async (input) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;
  try {
    const response = await axios.get(url, {
      params: {
        input,
        key: api_key,
      },
    });

    const data = response.data;
    if (data.status != "OK") {
      throw new Error(data.error_message || "Failed to fetch suggestions.");
    }
    const suggestions = data.predictions.map((prediction) => ({
      description: prediction.description,
      placeId: prediction.place_id,
    }));

    return suggestions;
  } catch (error) {
    console.error("Error fetching suggestions:", error.message);
    throw error;
  }
};
module.exports = { addressCoordinates, getTimeAndDistance, getsuggestions };

import axios from "axios";
const getFarers = async (pickup, destination) => {
  if (!pickup || !destination) return {};
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fares`,
      {
        params: {
          pickup,
          destination,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data.fares;
  } catch (error) {
    console.log(error);
  }
};
export default getFarers;

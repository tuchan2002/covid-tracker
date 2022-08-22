import axios from "axios";
export const getContries = async () => {
  try {
    const response = await axios.get("https://api.covid19api.com/countries");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReportByCountry = async (country) => {
  try {
    const response = await axios.get(
      `https://api.covid19api.com/dayone/country/${country}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

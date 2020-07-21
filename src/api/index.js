import axios from "axios";
const url = "https://singlamanik12.github.io/cities/ca.json";
export const fetchCities = async () => {
  try {
    const { data } = await axios.get(url);
    //console.log(data);
    return data.map((item) => item.city);
  } catch (error) {
    console.log(error);
  }
};

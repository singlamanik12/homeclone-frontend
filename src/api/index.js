import axios from "axios";
const url = "http://apiforrenting.herokuapp.com/cities";
export const fetchCities = async () => {
  try {
    const { data } = await axios.get(url);
    //console.log(data);
    return data.map((item) => item.city);
  } catch (error) {
    console.log(error);
  }
};

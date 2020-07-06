import axios from "axios";
const url = "https://api.github.com/users";
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(url);
    return data.map((user) => user.login);
  } catch (error) {
    console.log(error);
  }
};

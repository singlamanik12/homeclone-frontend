import jwtDecode from "jwt-decode";

export function getCurrentUserEmail() {
  const jwt = localStorage.getItem("token");
  return jwtDecode(jwt);
}
export default {
  getCurrentUserEmail,
};

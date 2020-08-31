import jwtDecode from "jwt-decode";

export function getCurrentUserEmail() {
  const jwt = localStorage.getItem("token");
  return jwtDecode(jwt);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export default {
  getCurrentUserEmail,
  getCurrentUser,
};

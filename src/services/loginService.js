import http from "./httpServices";
import { url } from "../tools/config.json";
const apiEndpoint = url + "/login";
export function login(user, id) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
}

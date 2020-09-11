import http from "./httpServices";
import { url } from "../tools/config.json";
const apiEndpoint = url + "/signup";
export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    name: user.username,
  });
}

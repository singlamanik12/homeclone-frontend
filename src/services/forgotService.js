import http from "./httpServices";
import { url } from "../tools/config.json";
const apiEndpoint = url + "forgotpass";
export function forgot(user) {
  return http.post(apiEndpoint, {
    email: user.email,
  });
}

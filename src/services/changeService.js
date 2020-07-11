import http from "./httpServices";
import { url } from "../tools/config.json";
const apiEndPoint = url + "forgotpass/reset";
export function changePassword(user, id) {
  return http.post(apiEndPoint, {
    password: user.password,
    token: id,
  });
}

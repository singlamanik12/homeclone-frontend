import http from "./httpServices";
import { url } from "../tools/config.json";
const apiEndpoint = url + "signup/verify";
export function confirm(id) {
  return http.post(apiEndpoint, {
    token: id,
  });
}

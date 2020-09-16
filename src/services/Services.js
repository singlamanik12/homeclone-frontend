import http from "./httpServices";
import { url } from "../tools/config.json";
import { getCurrentUserEmail } from "./JwtServices";
export function contact(subject, body) {
  return http.post(url + "/contactus", {
    email: getCurrentUserEmail().email,
    subject: subject,
    text: body,
  });
}

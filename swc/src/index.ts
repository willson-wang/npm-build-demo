import { getToken } from "./util";

export function getRandomToken() {
  return `${getToken()}_${Math.random()}`
}

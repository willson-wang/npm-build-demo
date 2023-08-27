import { getToken } from "./util";


export function getRandomToken() {
  return getToken() + Math.random()
}

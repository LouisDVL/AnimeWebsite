import request from "superagent";

const serverURL = "http://localhost:3000/api/v1";
const jikanServer = "https://api.jikan.moe/v3";

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body);
}
// ***   ***   ***

export function getAnimeById(id) {
  return request
    .get(`${jikanServer}/anime/${id}`)
    .then((data) => {
      return data.body;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

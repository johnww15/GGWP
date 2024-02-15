import { getToken } from "../Users/users-service";

//Constants for file
const BASE_URL = "/api/bios";
// const TOKEN = getToken();
// const headers = {
//   "Content-type": "application/json",
//   Authorization: `Bearer ${TOKEN}`,
// };
function createHeaders() {
  const TOKEN = getToken();
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  };
}

export async function getBio() {
  const options = {
    method: "GET",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

export async function updateBio(data) {
  const newData = {
    type: data.type,
    genre: data.genre,
    body: data.body,
  };
  const options = {
    method: "PUT",
    headers: createHeaders(),
    body: JSON.stringify(newData),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

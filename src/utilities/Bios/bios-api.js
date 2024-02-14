import { getToken } from "../Users/users-service";

//Constants for file
const BASE_URL = "/api/bios";
const TOKEN = getToken();
const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

export async function getBio() {
  const options = {
    method: "GET",
    headers,
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
    headers,
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

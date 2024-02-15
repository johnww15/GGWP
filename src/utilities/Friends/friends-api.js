import { getToken } from "../Users/users-service";

//Constants for file
const BASE_URL = "/api/friends";
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

export async function createFriendList(data) {
  const newData = {
    userId: data._id,
    friends: [],
  };
  const options = {
    method: "POST",
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

export async function addFriend(data) {
  const newData = {
    friends: data._id,
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

export async function getFriendsList() {
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

export async function deleteFriend(body) {
  const data = body._id;
  const options = {
    method: "DELETE",
    headers: createHeaders(),
  };
  const res = await fetch(BASE_URL + "/" + data, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

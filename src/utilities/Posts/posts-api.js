import { getToken } from "../Users/users-service";

//Constants for file
const BASE_URL = "/api/posts";
const TOKEN = getToken();
const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

export async function createPost(body) {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };
  const res = await fetch(BASE_URL, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

export async function getFeedListByUserId() {
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

export async function updateFeedItem(body) {
  console.log("post api running", body);
  const postId = body._id;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };

  const res = await fetch(BASE_URL + "/" + postId, options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}

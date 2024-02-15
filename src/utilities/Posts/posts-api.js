import { getToken } from "../Users/users-service";

//Constants for file
const BASE_URL = "/api/posts";
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

export async function createPost(body) {
  const options = {
    method: "POST",
    headers: createHeaders(),
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

export async function updateFeedItem(body) {
  const postId = body._id;
  const options = {
    method: "PUT",
    headers: createHeaders(),
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

export async function deletePost(postId) {
  const options = {
    method: "DELETE",
    headers: createHeaders(),
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

export async function getPremiumFeedList(arr) {
  let data = {
    list: arr,
  };

  const options = {
    method: "POST",
    headers: createHeaders(),
    body: JSON.stringify(data),
  };
  const res = await fetch(BASE_URL + "/premium", options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}

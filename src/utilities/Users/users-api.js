import { getToken } from "./users-service";

//constnat for file
const BASE_URL = "/api/users";
const TOKEN = getToken();
const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

// signup function
export async function userSignup(signupData) {
  console.log("user-api running");
  return sendRequest(BASE_URL, "POST", signupData);
}

// login function
export async function userLogin(loginData) {
  return sendRequest(BASE_URL + "/login", "POST", loginData);
}

export async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  console.log("user-api token ran", token);

  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  console.log("user-api", options);
  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

//non login/signup related functions below
//function to retrieve user's recommendations
export async function getRecommendationList(array) {
  const data = {
    friends: array,
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };
  const res = await fetch(BASE_URL + "/recommendations", options);
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    throw new Error("Network response failed.");
  }
}

//premium toggling function
export async function premiumSwitch(data) {
  const newData = {
    isPremium: data,
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

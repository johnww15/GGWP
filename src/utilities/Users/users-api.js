const BASE_URL = "/api/users";
import { getToken } from "./users-service";

// signup function
export async function userSignup(signupData) {
  console.log("user-api running");
  return sendRequest(BASE_URL + "/", "POST", signupData);
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

  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

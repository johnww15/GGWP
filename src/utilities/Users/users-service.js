import * as usersAPI from "./users-api";

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")?.[1])).user : null;
}

export function getToken() {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (!token) return null;
  // if have token, obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // console.log(payload);
  console.log("payload", payload);
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    console.log("token expired");
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function userLogin(email, password) {
  const body = {
    email: email,
    password: password,
  };
  const token = await usersAPI.userLogin(body);
  localStorage.setItem("token", token);
  return getUser();
}

export async function userLogout() {
  localStorage.removeItem("token");
}

export async function userSignup(signupData) {
  console.log("signupData", signupData);
  const token = await usersAPI.userSignup(signupData);
  console.log("user-service ran");
  localStorage.setItem("token", token);
}

// non-login/signup related functions below
//function to retrieve user's recommendations
export async function getRecommendationList(array) {
  const response = await usersAPI.getRecommendationList(array);
  return response;
}

//premium switch function
export async function premiumSwitch(data) {
  const response = await usersAPI.premiumSwitch(data);
  return response;
}

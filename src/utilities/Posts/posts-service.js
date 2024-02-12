import * as PostAPI from "./posts-api";

export async function createPost(body) {
  console.log("post service,", body);
  const response = await PostAPI.createPost(body);
  return response;
}

export async function getFeedListByUserId(id) {
  console.log("post-service running", id);
  const response = await PostAPI.getFeedListByUserId(id);
  return response;
}

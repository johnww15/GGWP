import * as PostAPI from "./posts-api";

export async function createPost(body) {
  const response = await PostAPI.createPost(body);
  return response;
}

export async function getFeedListByUserId(id) {
  const response = await PostAPI.getFeedListByUserId(id);
  return response;
}

import * as PostAPI from "./posts-api";

export async function createPost(body) {
  const response = await PostAPI.createPost(body);
  return response;
}

export async function getFeedListByUserId() {
  const response = await PostAPI.getFeedListByUserId();
  return response;
}

export async function updateFeedItem(body) {
  const response = await PostAPI.updateFeedItem(body);
  return response;
}

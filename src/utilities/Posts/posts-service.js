import * as PostAPI from "./posts-api";

export async function createPost(body) {
  console.log("post service,", body);
  const response = await PostAPI.createPost(body);
  return response;
}

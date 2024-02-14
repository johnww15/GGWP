import * as FriendAPI from "./friends-api";

export async function createFriendList(body) {
  const response = await FriendAPI.createFriendList(body);
  return response;
}

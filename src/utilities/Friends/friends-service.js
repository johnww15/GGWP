import * as FriendAPI from "./friends-api";

export async function createFriendList(body) {
  const response = await FriendAPI.createFriendList(body);
  return response;
}

export async function addFriend(body) {
  const response = await FriendAPI.addFriend(body);
  return response;
}

export async function getFriendsList() {
  const response = await FriendAPI.getFriendsList();
  return response;
}

export async function deleteFriend(body) {
  const response = await FriendAPI.deleteFriend(body);
  return response;
}

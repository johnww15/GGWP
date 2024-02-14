import * as BioAPI from "./bios-api";

export async function getBio() {
  const response = await BioAPI.getBio();
  return response;
}

export async function updateBio(data) {
  const response = await BioAPI.updateBio(data);
  return response;
}

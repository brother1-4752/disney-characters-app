import { API_BASE_URL, MICKEY_MOUSE_URL } from "./key";

export const fetchCharacterList = async () => {
  const response = await fetch(API_BASE_URL);
  const json = await response.json();
  return json.slice(1, 50);
};

export const fetchMickeyCharacterList = async () => {
  const response = await fetch(MICKEY_MOUSE_URL);
  const json = await response.json();
  return json.data[1];
};

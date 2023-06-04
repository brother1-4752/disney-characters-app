import { API_BASE_URL, MICKEY_MOUSE_URL } from "./key";

export const fetchCharacterList = async (testId: number) => {
  const response = await fetch(API_BASE_URL);
  const json = await response.json();
  return json.slice(testId, testId + 49);
};

export const fetchMickeyCharacterList = async () => {
  const response = await fetch(MICKEY_MOUSE_URL);
  const json = await response.json();
  return json.data[1];
};

export const fetchCharacterDetailList = async (
  characterId: string | undefined
) => {
  const API_DETAIL_URL = API_BASE_URL + "/" + characterId;

  const response = await fetch(API_DETAIL_URL);
  const json = await response.json();
  return json;
};

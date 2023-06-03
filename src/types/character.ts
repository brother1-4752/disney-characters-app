export interface ICharacterGeneralData {
  id: number;
  imageUrl: string;
  name: string;
}

export interface ICharacterSpecificData {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

import { useQuery } from "@tanstack/react-query";
import CharacterListContainer from "./CharacterList.styled";
import { ICharacterGeneralData } from "../../../types/character";
import { fetchCharacterList } from "../../../utils/api/fetchapi";

export default function CharacterList() {
  const { isLoading, error, data } = useQuery<ICharacterGeneralData[], Error>({
    queryKey: ["FETCH_ALL_DISNEY_CHARACTERS"],
    queryFn: fetchCharacterList,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //TODO:error처리

  return (
    <CharacterListContainer>
      <h1 className="characterlist__title">Diseny Characters List</h1>
      <ul className="characterlist">
        {data &&
          data
            .filter((el) => el.imageUrl)
            .map((ch) => (
              <li className="characterlist__item" key={ch.id}>
                <img className="characterlist__item--img" src={ch.imageUrl} />
                <div className="characterlist__item--label">{ch.name}</div>
              </li>
            ))}
      </ul>
    </CharacterListContainer>
  );
}

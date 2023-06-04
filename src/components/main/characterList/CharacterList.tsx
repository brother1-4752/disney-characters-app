import { useQuery } from "@tanstack/react-query";
import CharacterListContainer from "./CharacterList.styled";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { ICharacterGeneralData } from "../../../types/character";
import { fetchCharacterList } from "../../../utils/api/fetchapi";
import { paginationState } from "../../atoms/atoms";

export default function CharacterList() {
  const startIndex = useRecoilValue(paginationState);

  const { isLoading, isError, error, data } = useQuery<
    ICharacterGeneralData[],
    Error
  >({
    queryKey: ["FETCH_ALL_DISNEY_CHARACTERS", startIndex],
    queryFn: () => fetchCharacterList(startIndex),
    enabled: !!startIndex,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

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
                <Link
                  to={`characters/${ch.id}`}
                  className="characterlist__item--label"
                >
                  {ch.name}
                </Link>
              </li>
            ))}
      </ul>
    </CharacterListContainer>
  );
}

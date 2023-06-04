import { fetchMickeyCharacterList } from "../../../utils/api/fetchapi";
import { ICharacterSpecificData } from "../../../types/character";
import { useQuery } from "@tanstack/react-query";

import MickeyContainer from "./Mickey.styled";
import { Link } from "react-router-dom";

export default function Mickey() {
  //TODO: useFetch라는 커스텀 훅 만들기
  const { isLoading, isError, error, data } = useQuery<
    ICharacterSpecificData,
    Error
  >({
    queryKey: ["FETCH_DISNEY_CHARACTER_LIST"],
    queryFn: fetchMickeyCharacterList,
  });

  if (isLoading) {
    return <div>"Loading..."</div>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  //TODO: useFetch훅 만들때 아래 값들 계산해서 같이 return하기
  const refinedImageUrl = data && data.imageUrl;
  const refinedCharacterName = data && data.name;
  const refinedFilms = data && data.films;
  const refinedSourceUrl = data && data.sourceUrl;

  //TODO: error 처리

  return (
    <MickeyContainer>
      <div className="profile__container">
        <img className="profile__img" src={`${refinedImageUrl}`} />
        <div className="profile__label">
          <Link target="_blank" to={`${refinedSourceUrl}`}>
            Mickey Mouse
          </Link>
        </div>
      </div>
      <div className="description__container">
        <h1 className="description__name">{refinedCharacterName}</h1>
        <h3 className="description__film--title"> FILMS THAT APPEARED IN</h3>
        <ul className="description__list">
          {refinedFilms?.map((film) => (
            <li className="description__list__item" key={getKeyNumber()}>
              {film}
            </li>
          ))}
        </ul>
      </div>
    </MickeyContainer>
  );
}

//refinedFilms.map => li태그 key propery 세팅 용도
let i = 0;
const getKeyNumber = () => {
  return ++i;
};

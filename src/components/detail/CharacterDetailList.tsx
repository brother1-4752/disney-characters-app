import { useParams } from "react-router-dom";
import CharacterDetailListContainer from "./CharacterDetailList.styled";
import { useQuery } from "@tanstack/react-query";
import { ICharacterSpecificData } from "../../types/character";
import { fetchCharacterDetailList } from "../../utils/api/fetchapi";
import { Link } from "react-router-dom";

export default function CharacterDetailList() {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useQuery<
    ICharacterSpecificData,
    Error
  >({
    queryKey: ["FETCH_DISNEY_CHARACTER_DETAIL", id],
    queryFn: () => fetchCharacterDetailList(id),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <p>{error?.message}</p>;
  }

  const refinedImageUrl = data && data.imageUrl;
  const refinedCharacterName = data && data.name;
  const refinedFilms = data && data.films;
  const refinedSourceUrl = data && data.sourceUrl;

  return (
    //TODO:Mickey.tsx와 완전 중복됨. 재사용 가능하게 추상화해야함
    <CharacterDetailListContainer>
      <div className="profile__container">
        <img className="profile__img" src={`${refinedImageUrl}`} />
        <div className="profile__label">
          <Link target="_blank" to={`${refinedSourceUrl}`}>
            {refinedCharacterName}
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
      {/* TODO: 홈으로 돌아가는 버튼 */}
      <Link to="/" className="routeToHome">
        Back to List
      </Link>
    </CharacterDetailListContainer>
  );
}

//refinedFilms.map => li태그 key propery 세팅 용도
let i = 0;
const getKeyNumber = () => {
  return ++i;
};

import mainPoster from "../../../utils/images/mainPoster.png";

import { Link } from "react-router-dom";
import PosterWrapper from "./Poster.styled";

export default function Poster() {
  return (
    <PosterWrapper>
      <div className="poster__descriptions">
        <h3 className="poster__descriptions__title">디즈니 월드 캐릭터 소개</h3>
        <p className="poster__descriptions__description">
          💡 여러분은 디즈니하면 무슨 캐릭터가 떠오르나요?
          <br />
          🎅 미키 마우스, 피노키오, 엘사, 올라프 등 대중들에게
          <br />
          🕵️‍♀️ 많은 사랑을 받았던 캐릭터들을 하나씩 살펴보겠습니다.
        </p>
      </div>
      <div className="poster__sellecter">
        <div className="poster__sellecter--label">
          <Link to="/characters/mickey%20mouse">Mickey Mouse</Link>
        </div>
      </div>
      <img src={mainPoster} style={{ width: "100%" }} />
    </PosterWrapper>
  );
}

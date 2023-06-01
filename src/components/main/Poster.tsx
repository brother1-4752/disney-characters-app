import styled from "styled-components";
import mainPoster from "../../utils/images/mainPoster.png";
import { Link } from "react-router-dom";

const PosterWrapper = styled.div`
  width: 100%;

  position: relative;

  .poster__sellecter {
    width: 450px;
    height: 300px;

    position: absolute;

    right: 0;
    bottom: 0;

    background-color: rgba(255, 255, 255, 0);
    border-radius: 50px;

    :hover {
      background-color: rgba(17, 0, 158, 0.35);
      cursor: pointer;
      > .poster__sellecter--label {
        background-color: #304890;
      }
    }

    .poster__sellecter--label {
      width: 150px;
      line-height: 50px;
      text-align: center;

      position: absolute;

      right: 390px;
      bottom: 270px;

      background-color: rgba(255, 255, 255, 0);
      border-radius: 20px;
      color: white;
      font-family: DisneyRegular, sans-serif, Arial;
      font-size: 18px;
    }
  }
`;

export default function Poster() {
  return (
    <PosterWrapper>
      <div className="poster__sellecter">
        <div className="poster__sellecter--label">
          <Link to="/characters/:mickey%20mouse">Mickey Mouse</Link>
        </div>
      </div>
      <img src={mainPoster} />
    </PosterWrapper>
  );
}

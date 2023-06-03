import styled from "styled-components";

const CharacterListContainer = styled.div`
  width: 100%;

  margin: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .characterlist__title {
    width: 90%;
    margin-bottom: 50px;

    color: #11009e;
    font-size: 60px;
    font-family: DisneyBold;
  }

  .characterlist {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, minmax(250px, auto));
    gap: 50px;
  }

  .characterlist__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }

    .characterlist__item--img {
      width: 250px;
      height: 250px;

      border: 2.5px solid #304890;
      border-radius: 50%;
    }

    .characterlist__item--label {
      padding: 15px 20px;
      line-height: 20px;

      position: absolute;
      bottom: -15px;

      font-size: 18px;
      font-family: DisneyBold;
      text-align: center;
      /* padding-top: 10px; */

      background-color: #ffbc11;
      color: white;
      border-radius: 10px;
      cursor: pointer;

      :hover {
        background-color: white;
        color: #304890;
        border: 1px solid #304890;
      }
    }
  }
`;

export default CharacterListContainer;

import styled from "styled-components";

const CharacterDetailListContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 50px 0;
  display: flex;
  justify-content: space-evenly;
  .profile__container {
    height: 450px;
    position: relative;

    .profile__img {
      width: 450px;
      height: 450px;

      border: 2.5px solid #304890;
      border-radius: 50%;
    }

    .profile__label {
      width: 100px;
      height: 40px;

      position: absolute;
      bottom: -30px;
      left: 190px;

      font-size: 18px;
      font-family: DisneyBold;
      text-align: center;
      padding-top: 10px;

      background-color: #ffbc11;
      color: white;
      border-radius: 10px;
      cursor: pointer;

      :hover {
        border: 1px solid #304890;
        background-color: white;
        transform: scale(1.2);
        color: #304890;
      }
    }
  }

  .description__container {
    .description__name {
      font-size: 60px;
      font-family: DisneyBold;

      margin-bottom: 50px;

      color: #11009e;
    }

    .description__film--title {
      margin-bottom: 20px;

      font-size: 30px;
      font-family: DisneyRegular;
      text-decoration: underline;
      color: #11009e;
    }

    .description__list {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(4, minmax(120px, auto));
      gap: 10px;

      .description__list__item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 180px;
        height: 90px;
        line-height: 20px;

        background-color: #11009e;
        color: white;
        border-radius: 10px;

        font-family: DisneyRegular;
        font-size: 18px;
        cursor: pointer;

        :hover {
          transform: scale(1.05);
          background-color: white;
          color: #11009e;
        }
      }
    }
  }
  .routeToHome {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    background-color: #11009e;
    color: white;
    border-radius: 10px;

    :hover {
      background-color: white;
      color: #11009e;
      border: 1px solid #11009e;
    }
  }
`;

export default CharacterDetailListContainer;

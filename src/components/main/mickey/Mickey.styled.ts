import styled from "styled-components";

const MickeyContainer = styled.div`
  width: 100%;

  margin: 50px 0;

  display: flex;
  justify-content: space-evenly;

  .profile__container {
    height: 450px;
    position: relative;

    .profile__img {
      width: 450px;
      height: 450px;

      border: 3px solid #304890;
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
`;

export default MickeyContainer;

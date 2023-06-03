import styled from "styled-components";

const PosterWrapper = styled.div`
  width: 100%;

  position: relative;

  .poster__descriptions {
    width: 500px;
    height: 250px;

    position: absolute;

    top: 100px;
    left: 100px;

    .poster__descriptions__title {
      line-height: 60px;
      margin-bottom: 20px;

      font-size: 2.5rem;
      font-family: DisneyBold, sans-serif, Arial;

      color: white;
    }

    .poster__descriptions__description {
      line-height: 30px;
      font-size: 1.2em;
      font-family: DisneyRegular, sans-serif, Arial;
    }
  }

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
        background-color: #ffbc11; //yellow
        color: white;
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
      color: rgba(255, 255, 255, 0);
      font-family: DisneyRegular, sans-serif, Arial;
      font-size: 18px;
    }
  }
`;

export default PosterWrapper;

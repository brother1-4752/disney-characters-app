import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 15px;

  .header__title {
    line-height: 60px;
    //TODO: 폰트 type에 따라 size, font-family(Bold|Regular) 구분해서 할당
    font-size: 3rem;
    font-family: DisneyBold, sans-serif, Arial;
    opacity: 0.85;
  }

  .header__nav__outer {
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #304890;
    border-bottom: 1.5px solid white;

    .header__nav__inner {
      width: 35%;

      display: flex;
      justify-content: space-between;

      .header__nav--homelink {
        width: 80px;
        line-height: 30px;

        text-align: center;

        color: white;
        font-size: 1.2em;

        :hover {
          color: #11009e;
        }
      }
      /* .header__nav--pagebtn {
        width: 80px;
        line-height: 30px;

        font-family: DisneyBold;
        text-align: center;
        cursor: pointer;

        color: white;
        font-size: 1.2em;

        :hover {
          color: #11009e;
        }
      } */
    }
  }
`;

export default HeaderWrapper;

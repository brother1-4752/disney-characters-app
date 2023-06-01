import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
`;

const HeaderTitle = styled.h1`
  line-height: 60px;
  //TODO: 폰트 type에 따라 size, font-family(Bold|Regular) 구분해서 할당
  font-size: 3rem;
  font-family: DisneyBold, sans-serif, Arial;
  opacity: 0.85;
`;

const NavOuter = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #304890;
  border-bottom: 1.5px solid white;
`;

const NavInner = styled.div`
  width: 35%;

  display: flex;
  justify-content: space-between;
`;

const NavMenu = styled(Link)`
  width: 80px;
  line-height: 30px;

  text-align: center;

  color: white;
  font-size: 1.2em;

  :hover {
    color: #11009e;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>DISNEY</HeaderTitle>

      <NavOuter>
        <NavInner>
          <NavMenu to="/">HOME</NavMenu>
          <NavMenu to="/characters/1">PAGE 1</NavMenu>
          <NavMenu to="/characters/2">PAGE 2</NavMenu>
          <NavMenu to="/characters/3">PAGE 3</NavMenu>
        </NavInner>
      </NavOuter>
    </HeaderWrapper>
  );
}

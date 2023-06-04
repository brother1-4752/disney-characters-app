import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { paginationState } from "../../atoms/atoms";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 121px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  animation: slideIn 0.5s ease-in-out forwards;

  &.hide {
    top: -5vh;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const HeaderTitle = styled.h1`
  width: 100%;
  background-color: white;
  line-height: 60px;
  text-align: center;
  //TODO: 폰트 type에 따라 size, font-family(Bold|Regular) 구분해서 할당

  font-size: 3rem;
  font-family: DisneyBold, sans-serif, Arial;
  /* opacity: 0.85; */
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

const NavPage = styled.div`
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
`;

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setPageStartIndex = useSetRecoilState(paginationState);

  const onClickPageIndex = (event: React.MouseEvent) => {
    const currentPage = parseInt(event.currentTarget.attributes[0].value, 10);
    const pageStartIndex = 50 * (currentPage - 1) + 1;

    setPageStartIndex(pageStartIndex);
  };
  return (
    <HeaderWrapper className={scrollPosition < 100 ? "" : "hide"}>
      <HeaderTitle>DISNEY WORLD</HeaderTitle>

      <NavOuter>
        <NavInner>
          <NavMenu to="/">HOME</NavMenu>
          {[1, 2, 3].map((index) => (
            <NavPage
              key={index}
              onClick={onClickPageIndex}
              data-pageindex={index}
            >
              PAGE {index}
            </NavPage>
          ))}
        </NavInner>
      </NavOuter>
    </HeaderWrapper>
  );
}

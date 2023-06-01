import styled from "styled-components";

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background: #304890; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffffff,
    #304890
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffffff,
    #304890
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <MainWrapper>{children}</MainWrapper>;
}

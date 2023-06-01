import { useQuery } from "@tanstack/react-query";
import Container from "../components/common/Container";
import Poster from "../components/main/Poster/Poster";

export default function Main() {
  return (
    <>
      <Poster />
      <Container>
        <div>MAIN</div>
        <div>
          <h1>MAIN TITLE</h1>
          <p>CONTENTS</p>
          <span>hahaha</span>
        </div>
      </Container>
    </>
  );
}

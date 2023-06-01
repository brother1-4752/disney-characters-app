import Container from "../components/common/Container";
import Poster from "../components/main/Poster/Poster";

export default function CharacterDetail() {
  return (
    <>
      <Poster />
      <Container>
        <h1>DETAIL</h1>
        <div>
          <h1>DETAIL TITLE</h1>
          <p>DETAIL CONTENTS</p>
          <span>HOHOHO</span>
        </div>
      </Container>
    </>
  );
}

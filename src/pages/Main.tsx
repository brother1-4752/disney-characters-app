import { Container, Mickey, Poster } from "../components";

export default function Main() {
  return (
    <>
      <Poster />
      <Container>
        <Mickey />
        <div>
          <h1>MAIN TITLE</h1>
          <p>CONTENTS</p>
          <span>hahaha</span>
        </div>
      </Container>
    </>
  );
}

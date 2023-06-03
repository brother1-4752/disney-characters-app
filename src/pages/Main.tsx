import { Container, Mickey, Poster } from "../components";
import { CharacterList } from "../components/main/characterList";

export default function Main() {
  return (
    <>
      <Poster />
      <Container>
        <Mickey />
        <CharacterList />
      </Container>
    </>
  );
}

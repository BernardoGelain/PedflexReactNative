import { UserCircle } from "phosphor-react-native";
import { Container, Logo } from "./styles";

export default function Header() {
  return (
    <>
      <Container>
        <Logo source={require("../../../assets/click-dismelo.png")} />
      </Container>
    </>
  );
}

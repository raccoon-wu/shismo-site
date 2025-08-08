import { ButtonDiscord } from "./buttons/button_discord";
import { Button } from "@/components/buttons/button_template";
import Logo from "../../assets/logos/logo_full.svg";

export default function NavBar() {
  return (
    <>
      <Logo/>
      <Button variant="navBar">Plugins</Button>
      <Button variant="navBar">Manager Portal</Button>
      <Button variant="navBar">Support & FAQ</Button>
      <ButtonDiscord />
    </>

  );
}

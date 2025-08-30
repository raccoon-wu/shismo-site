import { ButtonDiscord } from "./buttons/button_discord";
import { Button } from "@/components/buttons/button_template";
import Image from 'next/image';
import wideLogo from "../../assets/logos/logo_full.svg";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between content-center h-full m-2">
      <Image src={wideLogo} alt="Shismo Logo" className="h-16" />
      <div className="w-1/2 flex justify-between">
        <Button variant="navBar" className="self-center">Plugins</Button>
        <Button variant="navBar" className="self-center">Manager Portal</Button>
        <Button variant="navBar" className="self-center">Support & FAQ</Button>
      </div>
      <ButtonDiscord />

    </div>

  );
}

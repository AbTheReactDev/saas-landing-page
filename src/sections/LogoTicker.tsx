import acmeLogo from "../assets/logo-acme.png";
import QuantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image className="logo-ticker" src={acmeLogo} alt="acme logo" />
            <Image
              className="logo-ticker"
              src={QuantumLogo}
              alt="quantum logo"
            />
            <Image className="logo-ticker" src={echoLogo} alt="echo logo" />
            <Image
              className="logo-ticker"
              src={celestialLogo}
              alt="celestial logo"
            />
            <Image className="logo-ticker" src={pulseLogo} alt="pulse logo" />
            <Image className="logo-ticker" src={apexLogo} alt="apex logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

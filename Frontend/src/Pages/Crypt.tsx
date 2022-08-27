import Description from "../Components/Description/component";
import NavBar from "../Components/Navbar/component";
import Crypto from "../Components/CryptoHandlers/component";
import Loading from "../Components/Loading/component";
import emmiter from "../Utils/evEmmiter";
import { useState } from "react";
export default function () {
  const [OnCrypt, SetOnCrypt] = useState(false);
  emmiter.addListener("Chypher", (crypt: any) => {
    SetOnCrypt(crypt);
  });
  return (
    <>
      <Description where="Cryptos" />
      <div className="RelativeScreen">
        <NavBar />
        <div className="Screen">
          <Crypto />
        </div>
      </div>
      {OnCrypt ? <Loading /> : ""}
    </>
  );
}

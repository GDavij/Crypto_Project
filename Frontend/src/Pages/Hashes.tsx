import Description from "../Components/Description/component";
import NavBar from "../Components/Navbar/component";
import Hashe from "../Components/HashesHandlers/component";
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
      <Description where="Hashes" />
      <div className="RelativeScreen">
        <NavBar />
        <div className="Screen">
          <Hashe />
        </div>
      </div>
      {OnCrypt ? <Loading /> : ""}
    </>
  );
}

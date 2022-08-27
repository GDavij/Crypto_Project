import { Link } from "react-router-dom";
import { NavbarArea, Linka, Linkas } from "./styled";
import { useState } from "react";

export default function () {
  return (
    <NavbarArea>
      <Linkas>
        <Linka>
          <Link to="/">Cryptos</Link>
        </Linka>

        <Linka>
          <Link to="/Hash">Hashes</Link>
        </Linka>
      </Linkas>
    </NavbarArea>
  );
}

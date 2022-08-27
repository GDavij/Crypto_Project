import { useState } from "react";
import emmiter from "../../Utils/evEmmiter";
import {
  TextPlainArea,
  KeyInsertArea,
  CryptoAlign,
  CryptoActions,
  CryptoTypeArea,
  CryptoSubmit,
} from "./styled";

export default function Crypto() {
  const [CryptoType0, SetCryptoType0] = useState("UTF");
  const [CryptoType1, SetCryptoType1] = useState("UTF");

  const [BlockInteract, SetBlockInteract] = useState(false);

  const [PlainText0, SetPlainText0] = useState(
    'Não podemos esperar construir um mundo melhor sem melhorar os indivíduos. \n "Marie Curie"'
  );
  const [PlainText1, SetPlainText1] = useState(
    'Tudo deveria se tornar o mais simples possível, mas não simplificado. \n "Albert Einsten"'
  );

  const [Key0, SetKey0] = useState("");
  const [Key1, SetKey1] = useState("");

  const [UseKey0, SetUseKey0] = useState(false);
  const [UseKey1, SetUseKey1] = useState(false);

  //e.target.id
  //e.target.value

  const HandlePlainText = (e: any) => {
    const Element = e.target.id;
    if (Element === "TextArea0") {
      SetPlainText0(e.target.value);
    } else {
      SetPlainText1(e.target.value);
    }
  };

  const HandleCryptoType = (e: any) => {
    const Type = e.target.value;

    let BooleanRes = false;
    switch (Type) {
      case "UTF":
        BooleanRes = false;
        break;
      case "Bin":
        BooleanRes = false;
        break;
      case "Hex":
        BooleanRes = false;
        break;
      case "Tzar":
        BooleanRes = true;
        break;
      case "AES":
        BooleanRes = true;
        break;
    }

    const Element = e.target.id;

    if (Element === "TypeArea0") {
      SetCryptoType0(Type);
      SetUseKey0(BooleanRes);
    } else {
      SetCryptoType1(Type);
      SetUseKey1(BooleanRes);
    }
  };

  const HandleKey = (e: any) => {
    const Element = e.target.id;

    if (Element === "Key0") {
      SetKey0(e.target.value);
    } else {
      SetKey1(e.target.value);
    }
  };

  const HandleSubmit = (e: any) => {
    emmiter.emit("Chypher", true);
    SetBlockInteract(true);
    setTimeout(() => {
      emmiter.emit("Chypher", false);
      SetBlockInteract(false);
    }, 10000);
  };

  return (
    <>
      <CryptoAlign>
        <TextPlainArea
          id="TextArea0"
          placeholder="Here Goes Your TextPlain"
          value={PlainText0}
          onChange={HandlePlainText}
          disabled={BlockInteract}
        ></TextPlainArea>
        <CryptoActions>
          <CryptoSubmit
            id="0"
            type="button"
            onClick={HandleSubmit}
            disabled={BlockInteract}
          >
            Cryptograph it!
          </CryptoSubmit>

          <CryptoTypeArea
            id="TypeArea0"
            onChange={HandleCryptoType}
            value={CryptoType0}
            disabled={BlockInteract}
          >
            <optgroup label="Languages">
              <option value="UTF">UTF-8</option>
              <option value="Bin">Binary(8bit)</option>
              <option value="Hex">Hexadecimal(4-bit)</option>
            </optgroup>
            <optgroup label="Cryptographyes">
              <option value="Tzar">Cesar Cypher</option>
              <option value="AES">AES</option>
            </optgroup>
          </CryptoTypeArea>

          {UseKey0 ? (
            <KeyInsertArea
              id="Key0"
              placeholder="Here Goes Your Key"
              value={Key0}
              onChange={HandleKey}
              disabled={BlockInteract}
            />
          ) : (
            ""
          )}
        </CryptoActions>
      </CryptoAlign>

      <CryptoAlign>
        <TextPlainArea
          id="TextArea1"
          placeholder="Here Goes Your TextPlain"
          value={PlainText1}
          onChange={HandlePlainText}
          disabled={BlockInteract}
        ></TextPlainArea>

        <CryptoActions>
          <CryptoSubmit
            id="1"
            type="button"
            onClick={HandleSubmit}
            disabled={BlockInteract}
          >
            Cryptograph it!
          </CryptoSubmit>

          <CryptoTypeArea
            id="TypeArea1"
            onChange={HandleCryptoType}
            value={CryptoType1}
            disabled={BlockInteract}
          >
            <optgroup label="Languages">
              <option value="UTF">UTF-8</option>
              <option value="Bin">Binary(8bit)</option>
              <option value="Hex">Hexadecimal(4-bit)</option>
            </optgroup>
            <optgroup label="Cryptographyes">
              <option value="Tzar">Cesar Cypher</option>
              <option value="AES">AES</option>
            </optgroup>
          </CryptoTypeArea>

          {UseKey1 ? (
            <KeyInsertArea
              id="Key1"
              placeholder="Here Goes Your Key"
              value={Key1}
              onChange={HandleKey}
              disabled={BlockInteract}
            />
          ) : (
            ""
          )}
        </CryptoActions>
      </CryptoAlign>
    </>
  );
}

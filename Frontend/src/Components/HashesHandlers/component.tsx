import { useState } from "react";
import {
  CryptoAlign,
  CryptoActions,
  CryptoButton,
  CryptoTypeArea,
  TextPlainArea,
  HashDiggest,
} from "./styled";
import emmiter from "../../Utils/evEmmiter";

export default function () {
  const [HashType0, SetHashType0] = useState("Sha256");

  const [DataObject0, SetDataObject0] = useState(
    'A gente não se liberta de um hábito atirando-o pela janela: é preciso fazê-lo descer a escada, degrau por degrau. \n  "Mark Twain"'
  );
  const [Diggest, SetDiggest] = useState("Diggest Hash");

  const [BlockInteract, SetBlockInteract] = useState(false);

  const HandleSubmit = () => {
    SetBlockInteract(true);
    emmiter.emit("Chypher", true);
    setTimeout(() => {
      SetBlockInteract(false);
      emmiter.emit("Chypher", false);
    }, 10000);
  };

  const [CopyText, SetCopyText] = useState("Copy to Clipboard");

  const AdviceUser = (txt: string) => {
    console.log(txt);
    if (txt === "Copy to Clipboard") {
      SetCopyText("Copied to Clipboard");
      setTimeout(() => {
        SetCopyText("Copy to Clipboard");
      }, 1000);
    }
  };
  return (
    <>
      <CryptoAlign>
        <TextPlainArea
          id="TextArea0"
          placeholder="Here Goes Your TextPlain"
          value={DataObject0}
          onChange={(e) => SetDataObject0(e.target.value)}
          disabled={BlockInteract}
        ></TextPlainArea>
        <CryptoActions>
          <CryptoButton
            id="0"
            type="button"
            onClick={HandleSubmit}
            disabled={BlockInteract}
          >
            Cryptograph it!
          </CryptoButton>

          <CryptoTypeArea
            id="TypeArea0"
            onChange={(e) => SetHashType0(e.target.value)}
            value={HashType0}
            disabled={BlockInteract}
          >
            <optgroup label="Hashes">
              <option value="Sha256">Sha-256</option>
              <option value="Sha512">Sha-512</option>
            </optgroup>
          </CryptoTypeArea>
        </CryptoActions>
      </CryptoAlign>

      <CryptoAlign>
        <HashDiggest>{Diggest}</HashDiggest>
        <CryptoActions>
          <h2>Your Diggest Hash {HashType0}</h2>
          <CryptoButton
            type="button"
            onClick={() => {
              AdviceUser(CopyText);
            }}
            disabled={BlockInteract}
          >
            {CopyText}
          </CryptoButton>
        </CryptoActions>
      </CryptoAlign>
    </>
  );
}

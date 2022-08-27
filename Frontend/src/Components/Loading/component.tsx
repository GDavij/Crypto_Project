import {
  ScreenAbsolute,
  ScreenFollow,
  LoadingIcon,
  LoadingText,
} from "./styled";

export default function () {
  return (
    <ScreenAbsolute>
      <ScreenFollow>
        <LoadingIcon> 0=m</LoadingIcon>
        <LoadingText>Crypting Text</LoadingText>
      </ScreenFollow>
    </ScreenAbsolute>
  );
}

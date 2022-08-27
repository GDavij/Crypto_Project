import styled, { keyframes } from "styled-components";

export const ScreenAbsolute = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #000d;
`;

export const ScreenFollow = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  position: sticky;
  gap: 3rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const keyLoad = keyframes`
0%{
    color: #0f0;
    transform: rotate(0deg);

}

100%{
    color: #f00;
    transform: rotate(360deg);
}
`;
export const LoadingIcon = styled.span`
  font-size: 2rem;
  animation: 1s ${keyLoad} infinite;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

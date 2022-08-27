import styled , {Keyframes, css, keyframes}from "styled-components";

export const NavbarArea = styled.nav`

  background: #222;
  width: 12rem;
  height: 100%;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  @media screen and (max-width: 1080px) {
    position: absolute;
    width: 100%;
    height: 3rem;
  }
`;

export const Linkas = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 1080px) {
    flex-direction: row;
    gap: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Linka = styled.li`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  width: 100%;
  height: 8rem;
  justify-content: center;
  align-items: center;
  transition: 0.5s border;
  color: #555;
  @media screen and (min-width: 1080.1px) {
    border-right: 0.1rem solid #555;
    &:hover {
      border-right: 0.5rem solid #fff;
      color: #fff;
    }
  }

  @media screen and (max-width: 1080px) {
    border-bottom: 0.1rem solid #555;
    width: 12rem;
    height: 100%;

    &:hover {
      border-bottom: 0.5rem solid #fff;
      color: #fff;
    }
  }
`;


  export const NOLinka  = styled.li`
  width: 3rem;
  height: 3rem;
  background: #333;
  border-radius: 100px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 1rem ;
  `;


const KeyRotate = keyframes`

0%{
  transform: rotate(0deg);
}

100%{
  transform: rotate(360deg);
}
`;

export const Chyphering = styled.span`
color: #f00;
animation: 1s ${KeyRotate} infinite;
`;

export const NotChyphering = styled.span`
color: #0f0; 
`;

import styled from "styled-components";

export const CryptoAlign = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
`;

export const TextPlainArea = styled.textarea`
  width: 85%;
  height: 25rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  border: 2px solid #ddd;
  border-radius: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #222;
  resize: none;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: #fff;
  &::placeholder {
    color: #99b;
    font-size: 1.3rem;
  }

  transition: 0.5s background;
  &:hover {
    background: #22222f;
  }
  &:active {
    background: #224;
  }
  @media screen and (min-width: 1080px) {
    width: 100%;
    height: 40rem;
  }
`;

export const CryptoActions = styled.div`
  width: 85%;
  height: 8rem;
  display: flex;
  background: #ddd;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem;
  @media screen and (min-width: 1080px) {
    width: 100%;
  }
`;

export const KeyInsertArea = styled.input`
  width: 95%;
  height: 1.8rem;
  padding: 0.1rem;
  font-size: 1.3rem;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #222;
  color: #cfc;

  &::placeholder {
    color: #99b;
    font-size: 1rem;
  }
  transition: 0.5s background;
  &:hover {
    background: #22222f;
  }
  &:active {
    background: #224;
  }
`;

export const CryptoTypeArea = styled.select`
  width: 95%;
  height: 1.8rem;
  padding: 0.1rem;
  font-size: 1.3rem;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #222;
  color: #cfc;
  transition: 0.5s background;
  &:hover {
    background: #22222f;
  }
  &:active {
    background: #224;
  }
`;

export const CryptoSubmit = styled.button`
  width: 95%;
  height: 1.8rem;
  padding: 0.1rem;
  font-size: 1.4rem;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #222;
  color: #cfc;
  transition: 0.5s background;
  &:hover {
    background: #22222f;
  }
  &:active {
    background: #224;
  }
`;

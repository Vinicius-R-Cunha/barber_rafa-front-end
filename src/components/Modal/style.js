import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Overlay = styled.div`
  width: 100%;
  min-height: fit-content;
  height: 100%;

  overflow: hidden auto;
  -webkit-overflow-scrolling: touch;

  background: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 4;
`;

export const Opacity = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  z-index: 5;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${variables.LESS_DARK_GREY};

  box-sizing: border-box;

  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);

  border-radius: 4px;

  z-index: 6;

  outline: none;
  border: hidden;

  .close-button {
    font-size: 2.4rem;
    color: ${variables.WHITE};

    position: absolute;
    top: 7px;
    right: 8px;

    cursor: pointer;
  }
`;

import styled from "styled-components"
import { ModalMainI } from "./Modal"
export const Main = styled.div<ModalMainI>`
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-contain {
    width: ${(props) => (props.autoSize ? `auto` : `60vw`)};
    height: ${(props) => (props.autoSize ? `auto` : `70vh`)};
    padding: ${(props) => (props.padding ? `${props.padding}` : `2em`)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: none; 
    border-radius: 1.25rem;
    background-color: ${(props) => props.theme.colors.ligth};
  }
`

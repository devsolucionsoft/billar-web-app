// Styled components
import styled from "styled-components"
// Iterfaces
import { CardPlayerI } from "./CardPlayer"

export const Main = styled.div<CardPlayerI>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #006A43;
  background-image: url('https://res.cloudinary.com/dizejzlnv/image/upload/v1693236590/BALLTRACK/Mask_group_2_yuoh6c.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.2rem;
  /* border: 3px solid ${(props) => props.theme.colors.dark}; */
  height: 100%;
  width: 100%;
  padding: 1.25rem;
  position: relative;
  cursor: pointer;


  .score {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
/*     top: 0;
    bottom: 0;
    right: 0;
    left: 0; */
    margin: auto;
    user-select: none;

    ${(props) =>
      props.players > 4
        ? `
      font-size: 10vw;
    `
        : `
      font-size: 12vw;
    `};
  }

  .score-sm {
    ${(props) =>
      props.players > 4
        ? `
      font-size: 9vw;
    `
        : `
      font-size: 9vw;
    `};
  }

  .row {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 1.5rem;
      color: white;
      font-weight: normal
    }
  }

  .input-name {
    display: flex;

    input {
      height: 6vh;
      font-size: 1.2vw;
      padding: 0 1vw;
      margin-right: 5px;
      border: 3px solid ${(props) => props.theme.colors.dark};
    }

    button {
      padding: 0 1vw;
      font-size: 1.2vw;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme.colors.ligth};
      background-color: ${(props) => props.theme.colors.success};
      border: 3px solid ${(props) => props.theme.colors.dark};
    }
  }

  .subtract-button {
    width: 4vw;
    height: 3.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8vw;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.tertiary};
    border-style: none;
    border-radius: .675rem;
    margin-bottom: 5px;
    color: white
  }

  .addition-buttons {
    display: flex;
    flex-direction: column;
    height: 100%;

    .addition-item {
      width: 4vw;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.tertiary};
      border-style: none;
      border-radius: .675rem;
      cursor: pointer;
      margin-bottom: 5px;
      font-size: 1.8vw;
      font-weight: bold;
      color: ${(props) => props.theme.colors.ligth};
    }
  }
`

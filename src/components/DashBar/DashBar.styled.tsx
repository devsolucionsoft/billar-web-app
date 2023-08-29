// Styled components
import styled from "styled-components"
// Interfaces
import { ButtonActionI } from "./DashBar"

export const Main = styled.div`
  border-style: none;
  /* border: 3px solid ${(props) => props.theme.colors.dark}; */
  display: flex;
  height: 100%;

  .contain {
    display: flex;
    flex-direction: column;
    width: 35vw;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .675rem 1.25rem;
      background-color: #006A43;
      border-radius: 1.25rem 1.25rem 0 0;
      /* background-color: ${(props) => props.theme.colors.dark}; */
      color: ${(props) => props.theme.colors.ligth};

      h1 {
        text-align: center;
        font-size: 2vw;
      }
      p {
        font-size: 1.2vw;
      }
    }

    .content {
      height: 100%;
      display: flex;
      padding: 1.25rem;
      flex-direction: column;
      justify-content: space-between;
      background: white;
      border-radius: 0 0 1.25rem 1.25rem;

      p {
        text-align: center;
        font-size: 1.2vw;
      }

      .d-flex {
        display: flex;
        justify-content: space-between;
        margin: 2vh 0;

        .total-time {
          h3 {
            font-size: 1.2vw;
            font-weight: 500;
            line-height: 100%;
          }
          h4 {
            font-size: 3vw;
            line-height: 100%;
            span {
              font-size: 1.5vw;
            }
          }
        }

        .account {
          text-align: right;
          h3 {
            font-size: 1.2vw;
            font-weight: 500;
            line-height: 100%;
          }
          h4 {
            line-height: 100%;
            font-size: 3vw;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        gap: 1.25rem;
      }

      .video-section {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        border-radius: 1.25rem;
        .video {
          width: 100%;
          height: 35vh;
          border-radius: 1.25rem;
          border: 3px solid ${(props) => props.theme.colors.dark};
        }

        .actions {
          width: 100%;
          display: flex;
          justify-content: center;
          
          button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 23px;
            font-weight: bold;
            padding: 1rem 2.5rem;
            cursor: pointer;
            border-style: none;
            border-radius: .675rem;
            color: ${(props) => props.theme.colors.ligth};
            background-color: ${(props) => props.theme.colors.general};
            span {
              margin-right: 5px;
            }
          }
        }
      }

      .actions {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
`

export const ButtonStyled = styled.button<ButtonActionI>`
  cursor: pointer;
  width: 48%;
  font-size: 1.8vw;
  padding: 8px 10px;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  border-style: none;
  border-radius: .675rem;
  color: ${(props) => props.theme.colors.ligth};
  background-color: ${(props) => props.theme.colors[props.color]};

  .icon {
    font-size: 2.2vw;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;

  h1 {
    font-size: 3vw;
  }

  .items {
    display: flex;
    justify-content: center;
    gap: 1.25rem;

    button {
      height: 8vw;
      width: 8vw;
      font-size: 4vw;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme.colors.ligth};
      border-style: none;
      border-radius: 1.25rem;
      background-color: ${(props) => props.theme.colors.general};
    }
  }
`

export const ModalContentPay = styled.div`
  width: 100%;
  h1 {
    font-size: 3vw;
  }

  h4 {
    font-size: 2vw;
    text-align: right;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 2em 0;

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  }
`

export const ModalContentRepeat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  .close-icon {
    position: absolute;
    top: -2.4em;
    right: -2.4em;
    .icon {
      font-size: 3em;
    }
  }

  .video-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .video-container {
      position: relative;
      height: 65vh;
      width: 86.666vh;
      margin-bottom: 2vh;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .video {
        height: 65vh;
        width: 86.666vh;
      }
    }
    .controls {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      margin-left: 2em;

      .group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        button {
          height: 4vw;
          width: 100%;
          font-size: 1.5vw;
          font-weight: bold;
          margin: 0px 3px;
          cursor: pointer;
          color: ${(props) => props.theme.colors.dark};
          background-color: ${(props) => props.theme.colors.general};
          margin-bottom: 5px;
          .icon {
            margin-top: 5%;
            font-size: 2.5vw;
          }
        }

        .restart {
          color: ${(props) => props.theme.colors.ligth};
          background-color: ${(props) => props.theme.colors.success};
        }
      }

      .joystick {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: 2px solid ${(props) => props.theme.colors.dark};
        .arrow {
          position: absolute;
          font-size: 2.5em;
        }

        .arrow-down {
          bottom: 0;
        }

        .arrow-left {
          left: 0;
        }

        .arrow-right {
          right: 0;
        }

        .arrow-up {
          top: 0;
        }
      }

      .range-velocity {
        margin-top: 30px;
        position: relative;
        button {
          margin-top: 20px;
          width: 100%;
          margin-right: 10px;
          cursor: pointer;
          color: ${(props) => props.theme.colors.ligth};
          background-color: ${(props) => props.theme.colors.success};
          .icon {
            font-size: 35px;
          }
        }
        .icons {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;

          .revert {
            display: flex;
            align-items: center;
          }
          .icon {
            top: 0;
            font-size: 30px;
          }
          .fast {
            right: 0;
          }
          .slow {
            left: 0;
          }
        }
        .progress {
          -webkit-appearance: none;
          width: 100%;
          height: 15px;
          background: #d3d3d3;
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 50px;
            height: 50px;
            border-radius: 100%;
            border: 2px solid ${(props) => props.theme.colors.dark};
            background: ${(props) => props.theme.colors.tertiary};
            cursor: pointer;
          }
        }
      }
    }
  }

  .video-repeact-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 86.666vh;

    .button-play {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      width: 50px;
      margin-right: 10px;
      cursor: pointer;
      background: ${(props) => props.theme.colors.general};
      .icon {
        font-size: 48px;
      }
    }
    .progress {
      -webkit-appearance: none;
      width: 100%;
      height: 50px;
      background: #d3d3d3;
      outline: none;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      border: 3px solid ${(props) => props.theme.colors.dark};
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 50px;
        height: 50px;
        background: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
      }
    }
  }

  .buttons {
    height: 100%;
    display: flex;
    justify-content: center;

    button {
      height: 3vw;
      font-size: 1.8vw;
      padding: 1vw;
      font-weight: bold;
      margin: 0 8px 0 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.ligth};
      background-color: ${(props) => props.theme.colors.primary};
      .icon {
        font-size: 2vw;
      }
    }
  }
`

import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .image {
    height: 80%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .actions {
    height: 20vh;
    display: flex;

    button {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5vh;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme.colors.ligth};
      .icon {
        font-size: 8vh;
        margin-left: 10px;
        margin-top: 8px;
      }
    }

    button.start {
      background-color: ${(props) => props.theme.colors.success};
    }
    button.other {
      background-color: ${(props) => props.theme.colors.default};
    }
  }
`

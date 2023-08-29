// Styled components
import styled from "styled-components"

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;

  .main-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
`

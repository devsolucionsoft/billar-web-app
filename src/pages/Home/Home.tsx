// Styled components
import { Main } from "./Home.styled"
// Images
import imagenHome from "../../assets/images/start.jpg"
import { useNavigate } from "react-router-dom"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite"
import SettingsIcon from "@mui/icons-material/Settings"

const Home = () => {
  const navigate = useNavigate()
  const handleRedirect = (path: string) => navigate(path)

  const startTime = localStorage.getItem("startTime")

  return (
    <Main>
      <div className="image">
        <img src={imagenHome} alt="" />
      </div>
      <div className="actions">
        <button
          className="start"
          onClick={() => {
            localStorage.clear()
            handleRedirect("/tablero")
          }}
        >
          Nuevo juego <PlayCircleFilledWhiteIcon className="icon" />
        </button>
        {startTime ? (
          <button className="other" onClick={() => handleRedirect("/tablero")}>
            Continuar
          </button>
        ) : (
          <button className="other"></button>
        )}

        <button className="other"></button>
        <button
          className="other"
          onClick={() => handleRedirect("/administrador")}
        >
          <SettingsIcon className="icon" />
        </button>
      </div>
    </Main>
  )
}

export default Home

import { useState, useEffect } from "react"
// Styled components
import {
  Main,
  ButtonStyled,
  ModalContent,
  ModalContentPay,
} from "./DashBar.styled"
// Components
import { Modal } from "../"
// Video component
import WebcamVideo from "./WebcamVideo"
import Swal from "sweetalert2"
import PaidIcon from "@mui/icons-material/Paid"
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"

const minuteValue = 1000

export interface ButtonActionI {
  text: string
  color: "success" | "danger" | "default" | "general"
  onClick?: any
  icon?: any
}

const ButtonAction = (props: ButtonActionI) => {
  return (
    <ButtonStyled {...props} onClick={props.onClick}>
      {props.text}
      {props.icon && props.icon}
    </ButtonStyled>
  )
}

const DashBar = (props: { onSetPlayers: any; nextSet: any }) => {
  const { onSetPlayers, nextSet } = props

  const startTimeStorage = localStorage.getItem("startTime")
  
  const arrayPointsStorage = localStorage.getItem("arrayPoints")

  const [open, setOpen] = useState(arrayPointsStorage ? false : true)
  const [startingPrice, setStartingPrice] = useState(0)
  const [modalPay, setModalPay] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  // Estados de tiempos
  const [currentTime, setCurrentTime] = useState({
    minutes: 0,
    hours: 0,
    seconds: 0,
  })
  const [totalTime, setTotalTime] = useState({
    minutes: 0,
    hours: 0,
  })
  const [startTime, setStarTime] = useState({
    minutes: 0,
    hours: 0,
    time: 0,
  })

  const handleRestart = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro que deseas reiniciar la partida?",
      showCancelButton: true,
      confirmButtonText: "Sí, reiniciar partida",
      cancelButtonText: "No, continuar juagando",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        nextSet()
      }
    })
  }

  const handleNewGame = () => {
    Swal.fire({
      icon: "error",
      title: "¿Estas seguro quieres iniciar un nuevo juego?",
      showCancelButton: true,
      confirmButtonText: "Sí, iniciar nuevo juego",
      cancelButtonText: "No, continuar juagando",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        nextSet()
        onSetPlayers(0)
        setTimeout(() => {
          setOpen(true)
        }, 200)
      }
    })
  }

  // Funcion que se ejecuta cuando se selecciona la cantidad de jugadores
  const handleSetPlayers = (players: number) => {
    onSetPlayers(players)
    setGameStarted(true)
    setTimeout(() => {
      setOpen(false)
    }, 600)
  }

  useEffect(() => {
    // Iniciar tiempo de juego
    if (startTimeStorage) {
      setStarTime(JSON.parse(startTimeStorage))
      setTimeout(() => {
        setGameStarted(true)
      }, 300);
    } else {
      const date = new Date()

      localStorage.setItem("startTime", JSON.stringify({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        time: date.getTime(),
      }))

      setStarTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        time: date.getTime(),
      })
    }
  }, [])

  useEffect(() => {
    let interval: any = null

    // Intervalo para validar el tiempo transcurrido
    interval = setInterval(() => {
      const date = new Date()
      // Modifica la hora actual
      setCurrentTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      })

      if (startTime.minutes > 0 && startTime.hours > 0) {
        // Restar tiempo actual con el tiempo de inicio
        const diff = date.getTime() - startTime.time
        const hours = Math.round(diff / (1000 * 60 * 60))
        const minutes = Math.round(diff / (1000 * 60)) - hours * 60

        setTotalTime({
          minutes: minutes,
          hours: hours,
        })

        setStartingPrice(hours * 60 * minuteValue + minutes * minuteValue)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [startTime])

  const addCero = (value: number) => {
    const numberPositive = Math.abs(value)
    
    return numberPositive < 10 && numberPositive >= 0 ? `0${numberPositive}` : numberPositive
  }

  return (
    <Main>
      {/* Modal para seleccionar numero de jugadores */}
      <Modal open={open} handleClose={() => setOpen(false)}>
        <ModalContent>
          <h1>Elije el número de jugadores</h1>

          <div className="items">
            <button onClick={() => handleSetPlayers(2)}>2</button>
            <button onClick={() => handleSetPlayers(3)}>3</button>
            <button onClick={() => handleSetPlayers(4)}>4</button>
            <button onClick={() => handleSetPlayers(5)}>5</button>
            <button onClick={() => handleSetPlayers(6)}>6</button>
          </div>
        </ModalContent>
      </Modal>
      <Modal open={modalPay} handleClose={() => setModalPay(false)}>
        <ModalContentPay>
          <h1>Cuenta</h1>

          <table>
            <tr>
              <th>Producto</th>
              <th>precio</th>
            </tr>
            <tr>
              <td>producto 2</td>
              <td>$5.000</td>
            </tr>
            <tr>
              <td>producto 3</td>
              <td>$5.000</td>
            </tr>
            <tr>
              <td>producto 4</td>
              <td>$5.000</td>
            </tr>
            <tr>
              <td>producto 5</td>
              <td>$5.000</td>
            </tr>
            <tr>
              <td>producto 6</td>
              <td>$5.000</td>
            </tr>
          </table>

          <h4>Total: $40.000</h4>
        </ModalContentPay>
      </Modal>
      {/* Fin modal para seleccionar numero de jugadores */}
      <div className="contain">
        
        <div className="top">
          <h1>Mesa 1</h1>
          <p>
            {currentTime.hours}:{addCero(currentTime.minutes)}:
            {addCero(currentTime.seconds)}
          </p>
        </div>

        <div className="content">
          <div>
            <p>
              <b>Hora de inicio</b>: {startTime.hours}:{addCero(startTime.minutes)}{/* {startTime.minutes} */}
            </p>
            <div className="d-flex">
              <div className="total-time">
                <h3>Tiempo total</h3>
                <h4>
                  {addCero(totalTime.hours)}
                  <span>h</span>
                  {addCero(totalTime.minutes)}
                  <span>m</span>
                </h4>
              </div>

              <div className="account">
                <h3>Cuenta</h3>
                <h4>${startingPrice.toLocaleString("es-CO")}</h4>
              </div>
            </div>

            <div className="buttons">
              <ButtonAction
                text="Nuevo set"
                color="danger"
                onClick={handleRestart}
              />
              <ButtonAction
                text="Nuevo juego"
                color="general"
                onClick={handleNewGame}
              />
            </div>
          </div>

          {/* Componente de camara y video */}
          {/* TODO: Desbloquear Camara */}
          <WebcamVideo gameStarted={gameStarted} />
          {/* Componente de camara y video */}

          <div className="actions">
            <ButtonAction
              text="Cuenta"
              color="general"
              onClick={() => setModalPay(true)}
              icon={<PaidIcon className="icon" />}
            />
            <ButtonAction
              text=""
              color="general"
              icon={<NotificationsActiveIcon className="icon" />}
            />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default DashBar

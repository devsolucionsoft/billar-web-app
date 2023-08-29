import { useState } from "react"
// Styled components
import { Main } from "./CardPlayer.styled"

export interface CardPlayerI {
  players: number
  points: number
  setPoint: any
  index: number
}

const CardPlayer = (props: CardPlayerI) => {
  const { points, setPoint, index } = props

  //const [points, setPoint] = useState<number>(0)
  const [openName, setOpenName] = useState(false)
  const [username, setUsername] = useState("")

  const addPoints = (value: number) => {
    setPoint(index, points + value)
  }

  const subtractPoints = (value: number) => {
    if (points > 0) {
      if (points <= value) {
        setPoint(index, 0)
      } else {
        setPoint(index, points - value)
      }
    }
  }

  const stopPropagation = (event: React.MouseEvent<HTMLHeadingElement>) =>
    event.stopPropagation()

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setUsername(event.currentTarget.value)

  return (
    <Main onClick={() => addPoints(1)} {...props}>
      <h2 className={`score ${ points > 99 && "score-sm" }`}>{points}</h2>

      <div className="row">
        <div onClick={stopPropagation}>
          {!openName ? (
            <h1 onClick={() => setOpenName(true)}>
              {username !== "" ? username : `Jugador ${index + 1}`}
            </h1>
          ) : (
            <div className="input-name">
              <input
                placeholder="Ingresa un nombre"
                onChange={handleChange}
                value={username}
              />
              <button onClick={() => setOpenName(false)}>Aceptar</button>
            </div>
          )}
        </div>

        <div>
          <button
            className="subtract-button"
            onClick={(event) => {
              event.stopPropagation()
              subtractPoints(1)
            }}
          >
            -1
          </button>
          <button
            className="subtract-button"
            onClick={(event) => {
              event.stopPropagation()
              subtractPoints(5)
            }}
          >
            -5
          </button>
        </div>
      </div>
      <div className="row">
        <div className="addition-buttons">
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(2)
            }}
          >
            +2
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(3)
            }}
          >
            +3
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(4)
            }}
          >
            +4
          </button>
          <button
            className="addition-item"
            onClick={(event) => {
              event.stopPropagation()
              addPoints(5)
            }}
          >
            +5
          </button>
        </div>
      </div>
    </Main>
  )
}

export default CardPlayer

import { useState, useEffect } from "react"
// App components
import { DashBar, CardPlayer } from "../../components"
// Styled components
import { Main } from "./Board.styled"

const Home = () => {
  const [players, setPlayers] = useState(0)
  const [arrayPoints, setArrayPoints] = useState<Array<number>>([])
  const arrayPointsStorage = localStorage.getItem("arrayPoints")

  useEffect(() => {
    setArrayPoints(new Array(players).fill(0))
  }, [players])

  const handleSetPoints = (player: number, setpoint: number) => {
    const newPoints = arrayPoints.map((point, index) =>
      index === player ? setpoint : point
    )
    setArrayPoints(newPoints)
    localStorage.setItem("arrayPoints", JSON.stringify(newPoints))
  }

  useEffect(() => {
    if (arrayPointsStorage) {
      setPlayers(JSON.parse(arrayPointsStorage).length)
      setTimeout(() => setArrayPoints(JSON.parse(arrayPointsStorage)), 300)
    }
  }, [])

  const handleNextSet = () => setArrayPoints(new Array(players).fill(0))
  return (
    <Main>
      <div className="main-game">
        {players >= 1 && (
          <CardPlayer
            players={players}
            index={0}
            points={arrayPoints[0]}
            setPoint={handleSetPoints}
          />
        )}
        {players >= 3 && (
          <CardPlayer
            players={players}
            index={2}
            points={arrayPoints[2]}
            setPoint={handleSetPoints}
          />
        )}
        {players >= 5 && (
          <CardPlayer
            players={players}
            index={4}
            points={arrayPoints[4]}
            setPoint={handleSetPoints}
          />
        )}
      </div>
      <DashBar onSetPlayers={setPlayers} nextSet={handleNextSet} />
      <div className="main-game">
        {players >= 2 && (
          <CardPlayer
            players={players}
            index={1}
            points={arrayPoints[1]}
            setPoint={handleSetPoints}
          />
        )}
        {players >= 4 && (
          <CardPlayer
            players={players}
            index={3}
            points={arrayPoints[3]}
            setPoint={handleSetPoints}
          />
        )}
        {players >= 6 && (
          <CardPlayer
            players={players}
            index={5}
            points={arrayPoints[5]}
            setPoint={handleSetPoints}
          />
        )}
      </div>
    </Main>
  )
}

export default Home

import { useState } from "react"
import { Joystick } from "react-joystick-component"
import { theme } from "../theme"

const Prueba = () => {
  const [coor, setCoor] = useState({ x: 0, y: 0 })

  const handleMove = (ev: any) => {
    setCoor({
      x: ev.x,
      y: ev.y,
    })
  }

  const handleStop = () => {}
  return (
    <div style={{padding: "5em"}}>
      <h1>
        {coor.x} - {coor.y}
      </h1>
      <Joystick
        size={200}
        stickSize={80}
        sticky={false}
        baseColor={theme.colors.tertiary}
        stickColor={theme.colors.dark}
        move={handleMove}
        stop={handleStop}
      ></Joystick>
    </div>
  )
}

export default Prueba

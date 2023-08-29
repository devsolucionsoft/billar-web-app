import { useCallback, useRef, useState, useEffect } from "react"
import Webcam from "react-webcam"
import RepeatIcon from "@mui/icons-material/Repeat"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import ZoomInIcon from "@mui/icons-material/ZoomIn"
import ZoomOutIcon from "@mui/icons-material/ZoomOut"
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import FastForwardIcon from "@mui/icons-material/FastForward"
import FastRewindIcon from "@mui/icons-material/FastRewind"
import TimesOneMobiledataIcon from "@mui/icons-material/TimesOneMobiledata"
import { Joystick } from "react-joystick-component"
import { theme } from "../../theme"
import CloseIcon from "@mui/icons-material/Close"
// Components
import { Modal } from "../"
// Styled components
import { ModalContentRepeat } from "./DashBar.styled"

const WebcamVideo = (props: { gameStarted: boolean }) => {
  const { gameStarted } = props
  // Came config
  const videoConstraints = {}
  // Refs
  const webcamRef = useRef<any>(null)
  const videoRef = useRef<any>(null)
  const progresRef = useRef<any>(null)
  const mediaRecorderRef = useRef<any>(null)
  // States
  const [open, setOpen] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const [recordedChunks, setRecordedChunks] = useState([])
  const [zoom, setZoom] = useState(1)
  const [marginX, setMarginX] = useState(0)
  const [marginY, setMarginY] = useState(0)
  const [speed, setSpeed] = useState(10)

  // Funcion que detecta cuando el juego se inicio
  useEffect(() => {
    // Llama a la funcion que inicia la grabacion de video
    gameStarted && handleStartCapture()
  }, [gameStarted])

  const handleDataAvailable = useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  // Funcion para iniciar la grabacion de video
  const handleStartCapture = useCallback(() => {
    
    if(webcamRef.current.stream) {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      })
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      )
      mediaRecorderRef.current.start()
    }

    
      
  }, [webcamRef, mediaRecorderRef, handleDataAvailable])

  // Funcion para pausar la grabacion de video
  const handleStopCapture = useCallback(() => {
    mediaRecorderRef.current.stop()
  }, [mediaRecorderRef])

  // Funcion para extraer el video grabado y ser visualizado
  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      })
      const url = window.URL.createObjectURL(blob)
      getDuration(url)
      setRecordedChunks([])
      videoRef.current.src = url
      progresRef.current.value = 0
    }
  }, [recordedChunks])

  // Accion del botón de repetir que llama la funcion para pausar la grabacion del video y abrir el modal
  const handleOpenRepeat = () => {
    setOpen(true)
    handleStopCapture()
  }

  // Efecto que detecta cuendo el modal de repetir fue abierto, y llama handleDownload para mostrar el video
  useEffect(() => {
    open && handleDownload()
  }, [open, recordedChunks])

  // Efecto que detecta caundo se cierra el modal de repetir video e inicia de nuevo la grabacion
  const handleCloseRepeat = () => {
    setOpen(false)
    handleStartCapture()
  }

  // Funcion para obtener la duracion del video con la url
  const getDuration = (url: any) => {
    var _player = new Audio(url)
    _player.addEventListener(
      "durationchange",
      function (e) {
        if (this.duration != Infinity) {
          _player.remove()
          setVideoDuration(this.duration)
        }
      },
      false
    )
    _player.load()
    _player.currentTime = 24 * 60 * 60
    _player.volume = 0
  }

  const setTime = (ev: any) => {
    videoRef.current.pause()
    videoRef.current.currentTime = (videoDuration / 100) * ev.target.value
    videoRef.current.play()
  }

  const playVideo = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
  }

  useEffect(() => {
    if (videoRef?.current?.currentTime && !videoRef?.current?.paused) {
      progresRef.current.value =
        (100 / videoDuration) * videoRef?.current?.currentTime
    }
  }, [videoRef?.current?.currentTime, videoDuration])

  const zoomIn = () => {
    setZoom(zoom + 0.1)
  }

  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.1)
    } else {
      setMarginX(0)
      setMarginY(0)
    }
  }

  const handleMarginX = (move: number) => {
    console.log("handleMarginX - zoom", zoom)

    if (zoom > 1) {
      const newMarginX =
        move > 0 ? marginX - 5 * Math.abs(move) : marginX + 5 * Math.abs(move)

      if (zoom * (zoom * 45) > Math.abs(newMarginX)) {
        console.log("setMarginX(newMarginX)", newMarginX)
        setMarginX(newMarginX)
      }
    }
  }

  const handleMarginY = (move: number) => {
    console.log("handleMarginY - zoom", zoom)
    if (zoom > 1) {
      const newMarginY =
        move > 0 ? marginY + 5 * Math.abs(move) : marginY - 5 * Math.abs(move)

      if (zoom * (zoom * 40) > Math.abs(newMarginY)) {
        console.log("setMarginY(newMarginY)", newMarginY)
        setMarginY(newMarginY)
      }
    }
  }

  const handleRestartPosition = () => {
    setMarginX(0)
    setMarginY(0)
    setZoom(1)
    setSpeed(10)
  }
  const handleRestartSpeed = () => {
    setSpeed(10)
  }

  const handleMove = (ev: any) => {
    handleMarginX(ev.x)
    handleMarginY(ev.y)
  }

  const handleSpeed = (ev: any) => {
    setSpeed(ev.target.value)
  }

  useEffect(() => {
    if (videoRef?.current?.playbackRate) {
      videoRef.current.playbackRate = speed * 0.1
    }
  }, [speed, videoRef?.current?.playbackRate])

  const handleStop = () => {}

  return (
    <div className="video-section">
      <Webcam
        className="video"
        width="100%"
        height="100px"
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />

      <div className="actions">
        <button onClick={handleOpenRepeat}>
          <span>Repetición</span>
          <RepeatIcon />
        </button>
      </div>

      <Modal open={open} handleClose={handleCloseRepeat} autoSize={true}>
        <ModalContentRepeat>
          <button className="close-icon" onClick={handleCloseRepeat}>
            <CloseIcon className="icon" />
          </button>
          <div className="video-controls">
            <div className="video-container">
              <video
                className="video"
                ref={videoRef}
                style={{ zoom: zoom, translate: `${marginX}px ${marginY}px ` }}
              />
            </div>
            <div className="controls">
              <div className="group">
                <button onClick={zoomOut}>
                  <ZoomOutIcon className="icon" />
                </button>
                <button onClick={handleRestartPosition} className="restart">
                  <FullscreenExitIcon className="icon" />
                </button>
                <button onClick={zoomIn}>
                  <ZoomInIcon className="icon" />
                </button>
              </div>

              <div className="joystick">
                <KeyboardArrowDownIcon className="arrow arrow-down" />
                <KeyboardArrowLeftIcon className="arrow arrow-left" />
                <KeyboardArrowRightIcon className="arrow arrow-right" />
                <KeyboardArrowUpIcon className="arrow arrow-up" />
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

              <div className="range-velocity">
                <div className="icons">
                  <FastRewindIcon className="icon slow" />
                  <div className="revert">
                    <span style={{ fontWeight: "bold" }}>
                      {Math.round(speed * 0.1 * 10) / 10}X
                    </span>
                  </div>
                  <FastForwardIcon className="icon fast" />
                </div>
                <input
                  className="progress"
                  type="range"
                  min="1"
                  max="20"
                  value={speed}
                  onChange={handleSpeed}
                  style={{ width: "100%" }}
                />
                <button onClick={handleRestartSpeed} className="restart">
                  <TimesOneMobiledataIcon className="icon" />
                </button>
              </div>

              <div className="group"></div>
            </div>
          </div>
          <div className="video-repeact-actions">
            <button onClick={playVideo} className="button-play">
              {videoRef?.current?.paused ? (
                <PlayArrowIcon className="icon" />
              ) : (
                <PauseIcon className="icon" />
              )}
            </button>
            <input
              className="progress"
              type="range"
              min="1"
              max="100"
              onChange={setTime}
              ref={progresRef}
              style={{ width: "100%" }}
            ></input>
          </div>
        </ModalContentRepeat>
      </Modal>
    </div>
  )
}
export default WebcamVideo

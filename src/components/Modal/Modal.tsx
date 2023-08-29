// Mui
import Modal from "@mui/material/Modal"
// Styled components
import { Main } from "./Modal.styled"

export interface ModalMainI {
  open: boolean
  handleClose: any
  children: any
  padding?: string
  autoSize?: boolean
}

const ModalMain = (props: ModalMainI) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Main {...props}>
        <div className="modal-contain">{props.children}</div>
      </Main>
    </Modal>
  )
}

export default ModalMain

import { useState, Fragment } from "react"
import Swal from "sweetalert2"
// Styled components
import { Main } from "./Admin.styled"
import SearchIcon from "@mui/icons-material/Search"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import EditIcon from "@mui/icons-material/Edit"

const BillItem = (props: any) => {
  const [edit, setEdit] = useState(false)
  return (
    <tr>
      <td>
        {edit ? (
          <input className="input-edit" placeholder={"2"} type="number" />
        ) : (
          props.product
        )}
      </td>
      <td>Heineken</td>
      <td>$4.000</td>
      <td>$8.000</td>
      <td>
        <div className="actions">
          {edit ? (
            <button className="btn-save" onClick={() => setEdit(false)}>
              Aceptar
            </button>
          ) : (
            <Fragment>
              <button className="btn-edit" onClick={() => setEdit(true)}>
                <EditIcon className="icon" />
              </button>
              <button className="btn-delete">
                <DeleteForeverIcon className="icon" />
              </button>
            </Fragment>
          )}
        </div>
      </td>
    </tr>
  )
}

const Admin = () => {
  const [accountList, setaAccountList] = useState([1, 1, 2])
  
  const handleAdd = () => {
    Swal.fire({
      title: "Ingrese la cantidad",
      input: "number",
      inputAttributes: {},
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setaAccountList([...accountList, result.value])
      }
    })
  }
  return (
    <Main>
      <div className="tables-list">
        <button className="table-item selected">Mesa 1</button>
        <button className="table-item">Mesa 2</button>
        <button className="table-item">Mesa 2</button>
        <button className="table-item">Mesa 4</button>
        <div className="divider"></div>
        <button className="table-item new-table">Nueva mesa</button>
      </div>
      <div className="board-products">
        <div className="category-products">
          <button className="category-item selected">Cervezas</button>
          <button className="category-item">Licores</button>
          <button className="category-item">Snacks</button>
          <button className="category-item">Gasesosas</button>
          <button className="category-item">Otros</button>
        </div>
        <div className="list-products">
          <div className="search-bar">
            <input type="text" placeholder="Buscar producto" />
            <SearchIcon className="icon" />
          </div>
          <ul className="products">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <li className="product-item">
                <img
                  src="https://cdn.inoutdelivery.com/beerstation.inoutdelivery.com/lg/1591913755845-5313-CERVEZA%20HEINEKEN%20BEER%20STATION.png"
                  alt=""
                />
                <div className="item-content">
                  <h4>Heineken</h4>
                  <h5>$4.000</h5>
                  <button onClick={handleAdd}>Agregar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="account-summary">
          <div className="account-summary-contain">
            <h2>Resumen de cuenta</h2>
            <table className="table-account">
              <tr>
                <th>cant</th>
                <th>Producto</th>
                <th>Val Unit</th>
                <th>Val Total</th>
                <th>Acciones</th>
              </tr>
              {accountList.map((product) => (
                <BillItem product={product} />
              ))}
            </table>

            <div className="account-footer">
              <button className="btn-account">
                Liquidar <AttachMoneyIcon />
              </button>
              <h6 className="total">Total: $30.000</h6>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Admin

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Styled components
import { ThemeProvider } from "styled-components"
// Theme
import { theme } from "./theme"
// Pages
import HomePage from "./pages/Home"
import BoardPage from "./pages/Board"
import AdminPage from "./pages/Admin"
import Prueba from "./pages/prueba"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tablero",
    element: <BoardPage />,
  },
  {
    path: "/administrador",
    element: <AdminPage />,
  },
  {
    path: "/prueba",
    element: <Prueba />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

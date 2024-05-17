import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

import './styles/global.css'
import './layout/Deafault.css'

export function App() {
  return(
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}
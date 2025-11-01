import { BrowserRouter, Routes, Route } from "react-router-dom"
import RankItems from "./components/RankItems"
import Home from "./components/Home"
import NavMenu from "./components/NavMenu"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavMenu /> {/* renderiza sempre no topo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank-items" element={<RankItems />} />
      </Routes>
    </BrowserRouter>
  )
}

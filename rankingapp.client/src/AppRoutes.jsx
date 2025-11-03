import { BrowserRouter, Routes, Route } from "react-router-dom"
import RankItems from "./components/RankItems"
import Home from "./components/Home"
import NavMenu from "./components/NavMenu"
import FetchData from "./components/FetchData"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavMenu /> {/* renderiza sempre no topo */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rank-items" element={<RankItems />} />
          <Route path="/fetch-data" element={<FetchData />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

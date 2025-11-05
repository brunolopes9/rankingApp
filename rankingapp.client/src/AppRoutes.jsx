import { BrowserRouter, Routes, Route } from "react-router-dom"
import RankItemsContainer from "./components/RankItemsContainer"
import Home from "./components/Home"
import NavMenu from "./components/NavMenu"
import FetchData from "./components/FetchData"
import MovieImageArr from "./components/MovieImages"
import AlbumImageArr from "./components/AlbumImages"
import Counter from "./components/Counter"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavMenu /> {/* renderiza sempre no topo */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/fetch-data" element={<FetchData />} />
          <Route
            path="/rank-movies"
            element={<RankItemsContainer dataType={1} imgArr={MovieImageArr} />}
          />
          <Route
            path="/rank-albums"
            element={<RankItemsContainer dataType={2} imgArr={AlbumImageArr} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

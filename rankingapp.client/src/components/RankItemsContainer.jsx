import { useState } from "react"
import RankItems from "./RankItems"

const RankItemsContainer = ({ dataType, imgArr }) => {
  const albumLocalStorageKey = "albums"
  const movieLocalStorageKey = "movies"
  var localStorageKey = ""

  const [movieItems, setMovieItems] = useState(() => {
    const stored = localStorage.getItem(movieLocalStorageKey)
    return stored ? JSON.parse(stored) : []
  })

  const [albumItems, setAlbumItems] = useState(() => {
    const stored = localStorage.getItem(albumLocalStorageKey)
    return stored ? JSON.parse(stored) : []
  })

  var data = []
  var setFunc = null

  if (dataType === 1) {
    data = movieItems
    setFunc = setMovieItems
    localStorageKey = movieLocalStorageKey
  } else if (dataType === 2) {
    data = albumItems
    setFunc = setAlbumItems
    localStorageKey = albumLocalStorageKey
  }

  return (
    <RankItems
      items={data}
      setItems={setFunc}
      imgArr={imgArr}
      localStorageKey={localStorageKey}
      dataType={dataType}
    />
  )
}
export default RankItemsContainer

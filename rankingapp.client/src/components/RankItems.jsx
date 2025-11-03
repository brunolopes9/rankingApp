import React, { useState, useEffect } from "react"
import MovieImageArr from "./MovieImages"

const RankItems = () => {
  const [items, setItems] = useState([])
  const dataType = 1

  useEffect(() => {
    fetch(`Item/${dataType}`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setItems(data)
      })
  }, [])

  return (
    <>
      <div className="items-not-ranked">
        {items.length > 0 ? (
          items.map((item) => {
            // declarar variáveis precisa de chaves {}
            const imgSrc = MovieImageArr.find(
              (img) => img.id === item.id
            )?.image
            return (
              <img
                key={item.id} // React usa para otimização
                id={`item-${item.id}`} // HTML único para CSS/JS
                src={imgSrc} // imagem correspondente
                alt={item.title || "item"} // acessibilidade
              />
            )
          })
        ) : (
          <p>Loading items...</p>
        )}
      </div>
    </>
  )
}

export default RankItems

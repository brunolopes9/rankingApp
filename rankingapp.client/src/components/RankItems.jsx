import React, { useState, useEffect } from "react"
import MovieImageArr from "./MovieImages"
import "./RankItems.css"
import RankingGrid from "./RankingGrid"

const RankItems = () => {
  const [items, setItems] = useState([])
  const dataType = 1

  useEffect(() => {
    fetch(`Item/${dataType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setItems(data)
      })
  }, [])

  return (
    <>
      <main>
        <RankingGrid items={items} imgArr={MovieImageArr} />
        <div className="items-not-ranked">
          {items.length > 0 ? (
            items.map((item) => {
              // declarar variáveis precisa de chaves {}
              const imgSrc = MovieImageArr.find(
                (img) => img.id === item.imageId
              )?.image
              return (
                <div className="unranked-cell">
                  <img
                    key={item.id} // React usa para otimização
                    id={`item-${item.id}`} // HTML único para CSS/JS
                    src={imgSrc} // imagem correspondente
                    alt={item.title || "item"} // acessibilidade
                  />
                </div>
              )
            })
          ) : (
            <p>Loading items...</p>
          )}
        </div>
      </main>
    </>
  )
}

export default RankItems

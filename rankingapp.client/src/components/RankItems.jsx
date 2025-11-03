import React, { useState, useEffect } from "react"
import MovieImageArr from "./MovieImages"
import "./RankItems.css"
import RankingGrid from "./RankingGrid"

const RankItems = () => {
  const [items, setItems] = useState([])
  const dataType = 1

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
  }

  function allowDrop(ev) {
    ev.preventDefault()
  }

  function drop(ev) {
    ev.preventDefault()
    const targetElm = ev.target
    if (targetElm.nodeName === "IMG") {
      return false
    }
    if (targetElm.childNodes.length === 0) {
      var data = parseInt(ev.dataTransfer.getData("text").substring(5))
      const transformedCollection = items.map((it) =>
        item.id === parseInt(data)
          ? { ...item, ranking: parseInt(targetElm.id.substring(5)) }
          : { ...item, ranking: item.ranking }
      )
      setItems(transformedCollection)
    }
  }

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
        <RankingGrid
          items={items}
          imgArr={MovieImageArr}
          drag={drag}
          allowDrop={allowDrop}
          drop={drop}
        />
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
                    style={{ cursor: "pointer" }}
                    draggable="true"
                    onDragStart={drag}
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

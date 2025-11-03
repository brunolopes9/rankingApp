import React, { useEffect } from "react"
import MovieImageArr from "./MovieImages"
import "./RankItems.css"
import RankingGrid from "./RankingGrid"
import ItemCollection from "./ItemCollection"

const RankItems = ({ items, setItems, dataType, imgArr, localStorageKey }) => {
  function drag(ev) {
    console.log("🚀 drag start", ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id)
  }

  function allowDrop(ev) {
    console.log("💨 allow drop")
    ev.preventDefault()
  }

  function drop(ev) {
    console.log("🔥 drop triggered")

    ev.preventDefault()

    // 🔍 Garantir que estamos a apanhar a célula certa
    let targetElm = ev.target
    while (targetElm && !targetElm.id?.startsWith("rank-")) {
      targetElm = targetElm.parentElement
    }

    if (!targetElm) {
      console.log("❌ Nenhuma célula de rank encontrada")
      return
    }

    // 🔐 Previne largar por cima de uma imagem existente
    if (targetElm.querySelector("img")) {
      console.log("⚠️ Já existe uma imagem aqui!")
      return
    }

    // 🧠 Obtemos o id do item arrastado
    const data = parseInt(ev.dataTransfer.getData("text").substring(5))
    const newRank = parseInt(targetElm.id.substring(5))

    console.log("✅ Drop do item", data, "para rank", newRank)

    // 🔄 Atualiza o estado (muda o ranking)
    const updatedItems = items.map((item) =>
      item.id === data ? { ...item, ranking: newRank } : item
    )

    setItems(updatedItems)
  }

  useEffect(() => {
    fetch(`Item/${dataType}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setItems(data)
      })
  }, [dataType])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }, [items])

  return (
    <>
      <main>
        <RankingGrid
          items={items}
          imgArr={imgArr}
          drag={drag}
          allowDrop={allowDrop}
          drop={drop}
        />

        <ItemCollection items={items} drag={drag} imgArr={imgArr} />
      </main>
    </>
  )
}

export default RankItems

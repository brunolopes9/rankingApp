import "./RankingGrid.css"

const ROWS = [
  { label: "top-tier", startRank: 1, endRank: 4 },
  { label: "middle-tier", startRank: 5, endRank: 8 },
  { label: "bottom-tier", startRank: 9, endRank: 12 },
  { label: "worst-tier", startRank: 13, endRank: 16 },
]

const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {
  return (
    <>
      <div className="text-center my-8 px-4">
        <h2 className="text-3xl font-bold mb-2 text-indigo-700">
          🎬 Rank Your Favorites!
        </h2>
        <p className="text-gray-600">
          Drag the movies or albums to the squares above. The top left corner is{" "}
          <strong>Rank 1 (best)</strong>, and the bottom right corner is{" "}
          <strong>Rank 16 (worst)</strong>.
        </p>
      </div>

      <div className="rankings">
        {ROWS.map((row) => (
          <div key={row.label} className={`rank-row ${row.label}`}>
            <div key={`label-${row.label}`} className="row-label">
              <h4>{row.label}</h4>
            </div>

            {Array.from(
              { length: row.endRank - row.startRank + 1 },
              (_, i) => row.startRank + i
            ).map((rankNum) => {
              const item = items.find((o) => o.ranking === rankNum)
              const imageSrc = item
                ? imgArr.find((o) => o.id === item.imageId)?.image
                : null

              return (
                <div
                  key={`rank-${rankNum}`}
                  id={`rank-${rankNum}`}
                  onDrop={(e) => drop(e)}
                  onDragOver={(e) => allowDrop(e)}
                  className="rank-cell relative flex items-center justify-center border border-gray-300"
                >
                  {item && imageSrc ? (
                    <img
                      id={`item-${item.id}`}
                      src={imageSrc}
                      draggable="true"
                      onDragStart={drag}
                      className="max-w-full max-h-full"
                    />
                  ) : (
                    <span className="absolute text-gray-400 text-sm font-semibold">
                      {rankNum}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

export default RankingGrid

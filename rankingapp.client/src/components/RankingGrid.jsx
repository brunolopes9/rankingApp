import "./RankingGrid.css"

const ROWS = [
  { label: "top-tier", startRank: 1, endRank: 4 },
  { label: "middle-tier", startRank: 5, endRank: 8 },
  { label: "bottom-tier", startRank: 9, endRank: 12 },
  { label: "worst-tier", startRank: 13, endRank: 16 },
]

const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {
  return (
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
                onDrop={(e) => {
                  console.log("📥 DROP fired on", rankNum)
                  drop(e)
                }}
                onDragOver={(e) => {
                  e.preventDefault()
                  console.log("🌀 DRAG OVER on", rankNum)
                  allowDrop(e)
                }}
                className="rank-cell"
              >
                {item && imageSrc && (
                  <img
                    id={`item-${item.id}`}
                    src={imageSrc}
                    draggable="true"
                    onDragStart={drag}
                  />
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default RankingGrid

import React from "react"

const RankTable = ({ items, imgArr }) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📊 Current Rankings
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Rank</th>
              <th className="py-3 px-6 text-left">Item</th>
              <th className="py-3 px-6 text-left">Preview</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter((item) => item.ranking > 0)
              .sort((a, b) => a.ranking - b.ranking)
              .map((item) => {
                const imageSrc = imgArr.find(
                  (img) => img.id === item.imageId
                )?.image

                return (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-3 px-6 font-semibold">{item.ranking}</td>
                    <td className="py-3 px-6">
                      {item.name || `Item ${item.id}`}
                    </td>
                    <td className="py-3 px-6">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankTable

import React from 'react'

export const ListCats = ({ g }) => {
  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 px-20 py-5 text-white shadow-2xl mb-4 flex justify-start"
      key={g.fact}
    >
      <h1></h1>
      <div className="text-left">
        <h1 className="text-base uppercase">{g.fact}</h1>
      </div>
    </div>
  )
}

import React from 'react'
import rankingData from './Data/RankingData'

const RankingTable = () => {
  return (
    <div className=" flex items-center justify-center flex-col mb-10"> 
      <div className=' w-5/6'>
      <div className=" mx-auto my-5 ">
      <div className="overflow-x-auto border-2 border-gray-200">
        <table className="min-w-full bg-white shadow-md border-2 border-gray-500 rounded-lg overflow-hidden">
          <thead className=" text-2xl border-2 border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">College</th>
              <th className="px-6 py-3 text-left">Ranking</th>
              <th className="px-6 py-3 text-left">Streams</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.map((college, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white border-2 border-white hover:bg-gray-100" : "bg-gray-100"}
              >
                <td className="px-6 py-4 flex items-center space-x-4">
                  <img
                    src={college.logo}
                    alt="College Logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className=" text-gray-800 text-xl hover:text-amber-600">{college.college}</span>
                </td>
                <td className="px-6 py-4 text-gray-800 text-xl">{college.ranking}</td>
                <td className="px-6 py-4 text-gray-800 text-xl">{college.streams}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
  )
}

export default RankingTable

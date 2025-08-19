import React from 'react'

function navbar() {
  return (
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 border border-yellow-400 rounded-md bg-[#00184b]">
        <h1 className="text-yellow-400 font-bold text-xl">My Portfolio</h1>
        <ul className="flex gap-6 text-yellow-400 font-semibold">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About me</li>
          <li className="cursor-pointer hover:underline">Skills</li>
          <li className="cursor-pointer hover:underline">Projects</li>
        </ul>
        <button className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-[#00184b] transition">
          Contact me
        </button>
      </nav>
  )
}

export default avbar

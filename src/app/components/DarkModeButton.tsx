"use client";

import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

const DarkModeButton = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="flex items-center justify-end p-6 animate-[slide-down-fade_1.8s_ease-in-out] ">
      <select 
        className="px-4 leading-normal bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline" 
        value={theme} 
        onChange={e => setTheme(e.target.value)}
      >
        <option className="text-gray-700" value="system">System</option>
        <option className="text-gray-700" value="dark">Dark</option>
        <option className="text-slate-50" value="light">Light</option>
      </select>
      <button 
        className="w-8 h-8 ml-5 cursor-pointer " 
        onClick={()=> setTheme(currentTheme === 'dark' ? "light" : "dark")}
      >
        {currentTheme === 'dark' ? (<BsFillSunFill  />) : (<BsFillMoonFill  />)}
      </button>
    </div>
  )
}

export default DarkModeButton
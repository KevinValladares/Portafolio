import React,{createContext, useState} from 'react'

export const themeContext = createContext()

export default function ThemeProvider({children}) {

    const [data,setData] = useState({
        theme: "light",
        btntheme: "fa-moon"
    })

  return (
    <themeContext.Provider value={{
      data,setData
    }}>
        {children}
    </themeContext.Provider>
  )
}
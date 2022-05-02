import {createContext, useState} from "react";

const Context=createContext();


const Provider = ({children})=>{
    const [theme,setTheme]=useState("bg-white")
    const obj={
        theme,
        setTheme,
    }
    return <Context.Provider value={obj}>{children}</Context.Provider>
}
export {Context,Provider}
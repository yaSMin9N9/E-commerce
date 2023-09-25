import {SS} from "../redux/darkReducer"
import style from './darkmode.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
function Darkmode() {
    
    const [modee,setModee] =useState("dark")
    const dispatch =useDispatch()
  return (
    <div className={style.container}>
        <div className={style.icon}>🌝</div>
        <div className={style.icon}>🌚</div>
        <div className={style.swicher}
        style={modee === 'light'?{left:"2px"}:{right:"2px"}}
        onClick={()=>{ dispatch(SS({ dark: modee === 'light' ? 'dark' : 'light' }));
        setModee(modee === 'light' ? 'dark' : 'light');}}/>
    </div>
  )
}

export default Darkmode
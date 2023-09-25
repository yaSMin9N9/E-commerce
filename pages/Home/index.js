import Image from "next/image"

import im from './img.jpg'
import style from "./home.module.css"
import Link from "next/link"
function index() {
  return (
    <div className={style.cont}>
        <div>
        <h1 className={style.tit}>wellcome to YStore ...</h1>
         <Link href="/">
         <button className={style.button} >start now</button>
         </Link>
         
        </div>
        <Image className={style.img} src={im} width={1000} height={300}/>
        
    </div>
  )
}

export default index
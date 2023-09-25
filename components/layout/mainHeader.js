import Link from "next/link"
import style from "./main-header.module.css"
import Darkmode from "../darkmode"
import Image from "next/image"
import logo from './logo.png'
import Cart from "./Cart"
function MainHeader() {
  return (
    <div className={style.navbar}>
    <div className={style.ui}>
       <Link href="/Home">
       <Image src={logo} className={style.logo} width={50} height={50}/>
       </Link>
   <ul className={style.ui}>
   <Darkmode />
    <li className={style.li}>
        <Link className={style.link} href="/">home</Link>
    </li>
    <li className={style.li}>
        <Link className={style.link} href ="/cart">cart</Link>
    </li>
    <li className={style.li}>
        <Link className={style.link} href ="/about">about</Link>
    </li>
   
    <div >
    <Cart/>
    </div>
   </ul>
   </div>
   </div>
  )
}

export default MainHeader
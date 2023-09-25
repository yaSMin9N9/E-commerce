import Image from "next/image"
import { useState } from "react"
import {  useSelector } from "react-redux";
import style from "./heart.module.css"
function mypage() {
    const [heartlist,setHeartlist] =useState(false)
    const hearts =useSelector((state)=>state.cart.heart)
  return (
    <div>
 {
       heartlist || hearts.length > 0 
       ?(
        <ul >
            {hearts.map(product=>(
                <section >
                <div className={style.heart}>
                  <div >
                    <Image  alt="hero" src={product.image} className={style.img} width={100} height={100}/>
                  </div>
                  <div >
                    <h1 className={style.title}>{product.title}
                    </h1>
                    <p  className={style.title}>{product.price}$</p>
                  </div>
                </div>
                
              </section>
            ))}
    </ul>
       )
       :(" ")
       }
    </div>
  )
}

export default mypage
"useclient";
import { useState } from "react"
import {FaTags,FaTrashAlt} from 'react-icons/fa'
import Image from "next/image"
import style from "./cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,add, sub } from "../../redux/cardReducer";
import {GrFormAdd,GrFormSubtract} from 'react-icons/gr'
import {BsFillBookmarkHeartFill} from "react-icons/bs"
import Link from "next/link";
function Cart() {
    const [cartlist,setCartlist] =useState(false)
    const products =useSelector((state) =>state.cart.product)
    const hearts =useSelector((state)=>state.cart.heart)
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch =useDispatch()
  
    return (
    <div>
     <div >
      <Link href="/Heart">
      <BsFillBookmarkHeartFill className={style.bashert} />
      <div className={style.badg}>{hearts.length}</div>
      </Link>
     </div>
        <div className={style.basket} 
        onClick={()=>cartlist ? setCartlist(false) : setCartlist(true)}>
            <FaTags /></div>
    <div className={style.badge}>{products.length}</div>
       {
       cartlist || products.length > 0 
       ?(
        <ul className={style.cartList}>
            {products.map(product=>(
                <li className={style.cartItem}>
                <Image className={style.cartItemImage} src={product.image} width={40} height={40}/>
                <span className={style.cartTitleItem}>{product.title}</span>
                <span onClick={()=>dispatch(add({
                  id:product.id,
                  price:product.price
                }))}><GrFormAdd/></span>
                <span className={style.cartItemPrice}>{ product.price  }</span>
                <span onClick={()=>dispatch(sub({
                  id:product.id,
                  price:product.price
                }))}><GrFormSubtract/></span>
                 <span className={style.trash}onClick={()=>dispatch(removeFromCart({
                   id:product.id,
                   }))}><FaTrashAlt/></span>
            </li>
            ))}
            <div className={style.total}>totalPrice:{totalPrice}</div>
    </ul>
       )
       :(" ")
       }
    </div>
  )
}

export default Cart
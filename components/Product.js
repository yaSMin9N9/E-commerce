
import Image from 'next/image'
import Style from './Product.module.css'
import Head from 'next/head'
import Link from 'next/link'
import {AiOutlineHeart} from 'react-icons/ai'
import { addToCart, addToheart} from '../redux/cardReducer'
import { useDispatch } from 'react-redux'
function Product({product}) {
    const {title, price, image,id}= product
    const dispatch =useDispatch()
    return (
        <div className={Style.dd}>
          <AiOutlineHeart className={Style.heart} onClick={()=>dispatch(addToheart({
          id:id,
          title:title,
          price:price,
          image:image
        })
        )}/>
            <Image className={Style.img} src={image} alt="img" width={150} height={150}/>
        <div >
            <h3 className={Style.tit} >{title}</h3>
        </div>
        <div className={Style.botton}>
        <button className={Style.bot1}>
          <Link className={Style.Link}href={`/Product/${id}`}>more details</Link>
        </button>
        <button className={Style.bot2} onClick={()=>dispatch(addToCart({
          id:id,
          title:title,
          desciption:product.desciption,
          price:price,
          image:image
        })
        )}>addToCart</button>
        <h3 className={Style.price}>{price}$</h3>
        </div>
        </div>
        
  )
}

export default Product
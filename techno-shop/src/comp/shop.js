import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState([])
    //Showing Detail Box
    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>{detail.text}</p>
                    <h3>{detail.price} грн</h3>
                    <button onClick={() => addtocart (detail)}>Купити</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>Категорії</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}># Всі товари</li>
                            <li onClick={() => Filter ("материнська плата")}># Материнська плата</li>
                            <li onClick={() => Filter ("відеокарта")}># Відеокарта</li>
                            <li onClick={() => Filter ("процесори")}># Процесори</li>
                            <li onClick={() => Filter ("ssd диск")}># SSD диски</li>
                            <li onClick={() => Filter ("оперативна память")}># Оперативна пам'ять</li>
                            <li onClick={() => Filter ("promotion")}># Акційні товари</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/banner-dovg1.jpg' alt=''></img>
                        <img src='image/banner-dovg2.jpg' alt=''></img>
                        <img src='image/slider1.jpg' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='product_box'>
                    <h2>Комп'ютерна техніка</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               <li><AiFillHeart /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>{curElm.price} грн</p>
                                            <button onClick={() => addtocart (curElm)}>Купити</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop
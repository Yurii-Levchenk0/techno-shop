import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Найкращі заощадження</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Безкоштован доставка</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24/7 служба підтримки</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Повернення коштів</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='image/logo1.jpg' alt=''></img>
                    <p>©2023–2024 Інтернет-магазин «Techno-shop™» — Щоразу що треба ТМ використовується на підставі ліцензії правовласника TechnoShopLTD</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Ваш акаунт</h3>
                        <ul>
                            <li>Про нас</li>
                            <li>Акаунт</li>
                            <li>Платежі</li>
                            <li>Продажі</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Товар</h3>
                        <ul>
                            <li>Доставка</li>
                            <li>Відслідити посилку</li>
                            <li>Новий товар</li>
                            <li>Топ продажів</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Зв'яжіться до нас</h3>
                        <ul>
                            <li>24000, Полтава, Україна</li>
                            <li>+(380)953155555</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer
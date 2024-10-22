import React, { useState, useEffect } from 'react';
import './home.css';
import Homeproduct from './home_product';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState([]);

  useEffect(() => {
    setNewProduct(filterProducts('new'));
    setFeaturedProduct(filterProducts('featured'));
    setTopProduct(filterProducts('top'));
    setTrendingProduct(Homeproduct);
  }, []);

  const filterProducts = (type) => {
    return Homeproduct.filter((product) => product.type === type);
  };

  const [visibleProducts, setVisibleProducts] = useState(10);
  const loadMoreCount = 5;

  const loadMoreProducts = () => {
    setVisibleProducts(prevCount => Math.min(prevCount + loadMoreCount, trendingProduct.length));
  };

  return (
    <div className='home'>
      <div className='top_banner'>
        <div className='contant'>
          <h3 className='action_h3'>Замовте товарів</h3> <h3>на суму від 3000 грн</h3>
          <p className='action_p'>Та виграйте ігровий комп'ютер</p>
          <Link to='/shop' className='link'>До товарів</Link>
        </div>
      </div>
      <div className='trending'>
        <div className='container'>
          <div className='left_box'>
            <div className='header'>
              <div className='heading'>
                <h2 onClick={() => setTrendingProduct(Homeproduct)}>Всі товари</h2>
              </div>
              <div className='cate'>
                <h3 onClick={() => setTrendingProduct(filterProducts('new'))}>Нові</h3>
                <h3 onClick={() => setTrendingProduct(filterProducts('featured'))}>Майбутні</h3>
                <h3 onClick={() => setTrendingProduct(filterProducts('top'))}>Топ продажів</h3>
              </div>
            </div>
            <div className='products'>
              <div className='container'>
                {trendingProduct.slice(0, visibleProducts).map((product) => (
                  <div className='box' key={product.id}>
                    <div className='img_box'>
                      <img src={product.image} alt='' />
                      <div className='icon'>
                        <div className='icon_box'>
                          <AiFillEye />
                        </div>
                        <div className='icon_box'>
                          <AiFillHeart />
                        </div>
                      </div>
                    </div>
                    <div className='info'>
                      <h3>{product.Name}</h3>
                      <p>{product.price} грн</p>
                      <button className='btn' onClick={() => addtocart(product)}>Купити</button>
                    </div>
                  </div>
                ))}
              </div>
              {visibleProducts < trendingProduct.length && (
                <button onClick={loadMoreProducts}>показати більше</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='header'>
              <h2>Нова Продукція</h2>
            </div>
            {newProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt='' />
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>{product.price} грн</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Скоро у продажі</h2>
            </div>
            {featuredProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt='' />
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>{product.price} грн</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <div className='header'>
              <h2>Топ товари</h2>
            </div>
            {topProduct.map((product) => (
              <div className='productbox' key={product.id}>
                <div className='img-box'>
                  <img src={product.image} alt='' />
                </div>
                <div className='detail'>
                  <h3>{product.Name}</h3>
                  <p>{product.price} грн</p>
                  <div className='icon'>
                    <button><AiFillEye /></button>
                    <button><AiFillHeart /></button>
                    <button onClick={() => addtocart(product)}><AiOutlineShoppingCart /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

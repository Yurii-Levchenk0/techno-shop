import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser } from 'react-icons/ci';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({ search, setSearch, searchProduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='header'>
        <div className='top_header'>
          <div className='icon'>
            <MdLocalShipping />
          </div>
          <div className='info'>
            <p>Безкоштовна доставка при покупці від 1000 грн</p>
          </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <img src='image/logo1.jpg' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input
              type='text' value={search} placeholder='Введіть назву товару'
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button onClick={searchProduct}>
              <AiOutlineSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Вийти
                </button>
              </div>
            </div>
          ) : (
            <div className='user'>
              <div className='icon'>
                <FiLogIn />
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Увійти</button>
              </div>
            </div>
          )}
        </div>
        <div className='last_header'>
          <div className='user_profile'>
              {isAuthenticated ? (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='noninfo'>
                  <p>Увійдіть в обліковий запис</p>
                </div>
              </>
            )}
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Головна</Link></li>
              <li><Link to='/shop' className='link'>Купити</Link></li>
              <li><Link to='/cart' className='link'> Кошик</Link></li>
              <li><Link to='/contact' className='link'> Контакт</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>Вітаємо у нашому магазині!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

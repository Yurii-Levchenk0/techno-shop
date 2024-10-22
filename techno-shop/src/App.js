import React, { useState } from 'react';
import Nav from './comp/nav';
import Footer from './comp/footer';
import { BrowserRouter } from 'react-router-dom';
import Rout from './comp/rout';
import Homeproduct from './comp/home_product';

const App = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const [shop, setShop] = useState(Homeproduct);
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allcatefilter = () => {
    setShop(Homeproduct);
  };

  const searchProduct = () => {
    if (!search) {
      alert('Введіть назву товару!');
      setShop(Homeproduct);
    } else {
      const searchFilter = Homeproduct.filter((product) => {
        return product.Name.toLowerCase().includes(search.toLowerCase());
      });
      setShop(searchFilter);
    }
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert('Цей товар вже був доданий у кошик');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Додано до кошика');
    }
  };
  console.log(cart);

  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';




function App() {
  
  const [sneakers, setSneakers] = React.useState([]);
  const [cartSneakers, setCartSneakers] = React.useState([]);
  const [favoriteSneakers, setFavoriteSneakers] = React.useState([]);
  const [searchValue, setSearchValue] =React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect( () => {
    async function fetchData() {
      const cartData = await axios.get('https://613e103994dbd600172abab1.mockapi.io/cart');
      const favoriteData = await axios.get('https://613b7e4b110e000017a45668.mockapi.io/favorite');
      const itemsData = await axios.get('https://613b7e4b110e000017a45668.mockapi.io/items'); 

      setCartSneakers(cartData.data);
      setFavoriteSneakers(favoriteData.data);
      setSneakers(itemsData.data);      
  }
    fetchData()
}, []);

 
  const onAddToCart = async (obj) => {
    try {
      if (cartSneakers.find(i => Number(i.id) === Number(obj.id))) {
        setCartSneakers(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        axios.delete(`https://613e103994dbd600172abab1.mockapi.io/cart/${obj.id}`);
      } else {
        axios.post('https://613e103994dbd600172abab1.mockapi.io/cart', obj);
        setCartSneakers(prev => [...prev, obj]);
      };
    } catch (error) {
     
    };     
   };

   const onAddToFavorite = async (obj) => {    
      try {
        if (favoriteSneakers.find(i => i.id === obj.id)) {
          axios.delete(`https://613b7e4b110e000017a45668.mockapi.io/favorite/${obj.id}`)
          setFavoriteSneakers(prev => prev.filter(item => item.id !== obj.id));
        } else {
          const { data } = await axios.post('https://613b7e4b110e000017a45668.mockapi.io/favorite', obj);
          setFavoriteSneakers(prev => [...prev, data])
        }  
      } catch (error) {
        alert('Не удалось добавить в закладки')
      }; 
    
   };

  
   const onRemoveCartItem = (id) => {
    axios.delete(`https://613e103994dbd600172abab1.mockapi.io/cart/${id}`);
    setCartSneakers(prev => prev.filter(item => item.id !== id));

   }

   const onChangeSearchInput = event => {
    setSearchValue(event.target.value)
   }
  
  return (
    <div className="wrapper clear">

      { cartOpened ? 
      <Cart onRemove={onRemoveCartItem} onClose = {() => setCartOpened(false)} items = {cartSneakers}/> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
        

        <Route path='/' exact>
          <Home 
            sneakers={sneakers}
            cartSneakers={cartSneakers}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
        </Route>

        <Route path='/favorites' exact>
          <Favorites 
            items={favoriteSneakers}
            onAddToFavorite={onAddToFavorite}
          />
        </Route>



    </div>
  );
}

export default App;

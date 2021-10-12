import styles from './Cart.module.scss'

import CartSneakers from '../CartSneakers/CartSneakers';
import React from 'react';

function Cart({onRemove, onClose, items = []}) {
      
        return (
        <div className={styles.overlay}>

          <div className={styles.drawer}>

            <h2 className={styles.cartTitle}>Корзина <img onClick={onClose} alt="removeBtn" className="removeBtn ml-5 mr-5 cu-p" src="/img/deleteItem.svg" /></h2>
            
            {items.length ? <React.Fragment>
              <div className={styles.items}>               
                  {items.map(obj => 
                    <CartSneakers 
                      key = {obj.id}
                      onRemove = {onRemove}
                      id = {obj.id}
                      name = {obj.name}
                      price = {obj.price}
                      img = {obj.img}/>                  
                  )} 
                </div>

              <div className={styles.totalPriceBlock}>
                <ul className="mb-30">

                  <li className="d-flex justify-between mb-20">
                    <span>Итого:</span>
                    <b>1337$</b>
                  </li>

                  <li className="d-flex justify-between">
                    <span>НДС 20%:</span>
                    <b>118$</b>
                  </li>

                </ul>

                <button className={styles.greenBtn}>
                  Оформить заказ 
                  <img alt="arrow" src="/img/arrow.svg" />
                </button>
                </div></React.Fragment>
               : 
              <center>
                <img width={100} alt='epmty' src='/img/empty-cart.jpg' />
                <h3 >
                  Корзина пуста!
                </h3>
                <p>
                    Добавьте хотя бы одну пару кроссовок.
                </p>
              </center>}
            
          </div>

      </div>
    )
};

export default Cart;
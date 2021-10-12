import React from 'react';
import styles from './Card.module.scss'


function Card({id, onFavorite, onPlus, img, name, price, favorited = false, added = false}) {

    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickFavorite = () => {
      setIsFavorite(!isFavorite);
      onFavorite({id, img, name, price,});
    };

    const onClickPlus = () => {
      setIsAdded(!isAdded);
      onPlus({id, img, name, price,});
    };

    
     
    return (
        <div className={styles.card}>
            <div onClick={onClickFavorite} className={styles.favorite}>
              <img alt="favorite" src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} />
            </div>
            <img width={170} alt='sneaker' src={img} />
            <h5 className="mb-10">{name}</h5>
            <div className="d-flex justify-between">
              <div>
                <p>Цена:</p>
                <b>{price}$</b>
              </div>
              <img 
                onClick={onClickPlus} 
                className={styles.plus} 
                alt="plus" 
                src={isAdded ? '/img/added.svg' : '/img/plus.svg'} />
            </div>
        </div>
    )

}

export default Card;
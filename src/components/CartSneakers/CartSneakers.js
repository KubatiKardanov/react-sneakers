import styles from './CartSneakers.module.scss'

function CartSneakers(props) {
    console.log(props.img);
        return (
        <div className={styles.cartItem}>
                  <img width={100} className="mr-5" alt="sneakers" src={props.img} />
                  <div>
                    <p>{props.name}</p>
                    <b>{props.price}$</b>
                  </div>
                  <img onClick={() => props.onRemove(props.id)} alt="removeBtn" className={styles.removeBtn} src="/img/deleteItem.svg" />
                </div>
    )
}


export default CartSneakers;
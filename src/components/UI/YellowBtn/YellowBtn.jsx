import styles from './YellowBtn.module.scss';
import { useCart } from '../../../context/CartContext';
function YellowBtn({ btnName, icon, itemId }) {
const { isInCart, addToCart, removeFromCart } = useCart();

  const handleClick = () => {
    if (isInCart(itemId)) {
      removeFromCart(itemId);
    } else {
      addToCart(itemId);
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.mainBtn}>
        <p>{btnName}</p>
        <span>{icon}</span>
      </button>
    </div>
  );
}


export default YellowBtn;
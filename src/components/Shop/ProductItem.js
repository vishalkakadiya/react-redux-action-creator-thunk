import {useDispatch} from "react-redux";

import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description } = props;

  const handleAddtoCart = () => {
    dispatch(cartActions.addToCart({ title, price, quantity: 1, total: price }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

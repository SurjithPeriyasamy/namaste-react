import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(clearItem());
  };
  return (
    <div className="w-6/12 m-auto text-center mt-10">
      <div className="m-10">
        <h1 className="text-3xl m-3 font-bold">Cart</h1>
        <button
          className="bg-black text-white rounded-lg p-2"
          onClick={handleRemoveItem}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length == 0 ? (
        <h1 className="font-semibold text-lg">
          Your Cart is Empty now. Please Add Your Items
        </h1>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;

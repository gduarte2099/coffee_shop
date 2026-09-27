import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";

export default function CartItem({ item }) {
  const { updateQty, removeItem, MIN_QTY, MAX_QTY } = useCart();

  const price = Number(item.price) || 0;
  const qty = Number.isFinite(Number(item.qty)) ? Number(item.qty) : 1;

  return (
    <li className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
        onError={(e) => (e.target.style.display = "none")}
      />

      <div className="cart-item-body">
        <div className="cart-item-top">
          <h4>{item.name}</h4>
          <button
            type="button"
            className="cart-item-remove"
            onClick={() => removeItem(item.id)}
            aria-label={`Quitar ${item.name} del carrito`}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>

        <div className="cart-item-bottom">
          <div className="qty-controls">
            <button
              type="button"
              onClick={() => updateQty(item.id, qty - 1)}
              disabled={qty <= MIN_QTY}
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <span>{qty}</span>
            <button
              type="button"
              onClick={() => updateQty(item.id, qty + 1)}
              disabled={qty >= MAX_QTY}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>

          <div className="cart-item-prices">
            <span className="cart-item-price">
              {formatPrice(price * qty)}
            </span>
            {qty > 1 && (
              <span className="cart-item-unit">
                {formatPrice(price)} c/u
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
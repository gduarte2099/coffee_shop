import "./Cart.css";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import CartItem from "./CartItem";

export default function Cart({ active, onClose }) {
  const { items, clearCart, totalPrice, totalItems } = useCart();

  const sendWhatsApp = () => {
    if (items.length === 0) return;

    let message = "Hola, quiero hacer el siguiente pedido:\n\n";
    items.forEach((item) => {
      message += `• ${item.qty} × ${item.name} - ${formatPrice(
        item.price * item.qty
      )}\n`;
    });
    message += `\nTotal (${totalItems} ${
      totalItems === 1 ? "ítem" : "ítems"
    }): ${formatPrice(totalPrice)}`;

    const url = `https://wa.me/595999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <aside className={`cart ${active ? "active" : ""}`}>
      <header className="cart-header">
        <div className="cart-header-left">
          <h2 className="cart-title">Mi carrito</h2>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </div>
        <button
          className="cart-close"
          onClick={onClose}
          aria-label="Cerrar carrito"
        >
          <i className="fas fa-times"></i>
        </button>
      </header>

      {items.length === 0 ? (
        <div className="cart-empty">
          <i className="fas fa-cart-shopping"></i>
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <footer className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className="cart-actions">
              <button className="btn-clear" onClick={clearCart}>
                Vaciar carrito
              </button>
              <button className="btn-checkout" onClick={sendWhatsApp}>
                Finalizar compra <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </footer>
        </>
      )}
    </aside>
  );
}
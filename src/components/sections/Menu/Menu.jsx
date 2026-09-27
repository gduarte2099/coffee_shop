import "./Menu.css";
import data from "./menu.json";
import { formatPrice } from "../../../utils/formatPrice";
import { useCart } from "../../../context/CartContext";

export default function Menu() {
  const { addItem } = useCart();

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        nuestro <span>menú</span>
      </h1>
      <div className="box-container">
        {data.items.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price">
              {formatPrice(item.price)}{" "}
              <span>{formatPrice(item.oldPrice)}</span>
            </div>
            <button
              className="btn"
              onClick={() => addItem(item)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
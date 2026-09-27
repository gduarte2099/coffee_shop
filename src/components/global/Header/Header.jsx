import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Cart from "../../Cart/Cart.jsx";
import "./Header.css";

function Header() {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel((current) => (current === panel ? null : panel));
  };

  const closePanels = () => setActivePanel(null);

  // Solo el menú mobile se cierra al scrollear
  useEffect(() => {
    const onScroll = () => {
      setActivePanel((current) => (current === "menu" ? null : current));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/images/logo.png" alt="Logo de la cafetería" />
      </a>

      <Navbar active={activePanel === "menu"} />

      <div className="icons">
       {/*  <div
          className="fas fa-search"
          id="search-btn"
          aria-label="Buscar"
          onClick={() => togglePanel("search")}
        ></div> */}
        <div
          className="fas fa-shopping-cart"
          id="cart-btn"
          aria-label="Carrito"
          onClick={() => togglePanel("cart")}
        ></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          aria-label="Menú"
          onClick={() => togglePanel("menu")}
        ></div>
      </div>

      <div
        className={`search-form ${activePanel === "search" ? "active" : ""}`}
      >
        <input type="search" id="search-box" placeholder="buscar aquí..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <Cart active={activePanel === "cart"} onClose={closePanels} />
    </header>
  );
}

export default Header;
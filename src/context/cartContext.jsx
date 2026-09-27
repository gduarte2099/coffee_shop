import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext(null);
const MIN_QTY = 1;
const MAX_QTY = 10;
const CART_VERSION = 2;

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const savedVersion = localStorage.getItem("cart_version");
      if (savedVersion !== String(CART_VERSION)) {
        localStorage.removeItem("cart");
        localStorage.setItem("cart_version", String(CART_VERSION));
        return [];
      }
      const raw = JSON.parse(localStorage.getItem("cart") || "[]");
      return raw
        .filter((i) => i && typeof i.price === "number" && i.price > 0)
        .map((i) => ({
          ...i,
          qty: Number.isFinite(Number(i.qty)) && Number(i.qty) > 0 ? Number(i.qty) : 1,
        }));
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const addItem = useCallback(
    (product) => {
      let pending = null;

      setItems((prev) => {
        const idx = prev.findIndex((i) => i.id === product.id);

        if (idx !== -1) {
          const current = prev[idx];
          if (current.qty >= MAX_QTY) {
            pending = {
              message: `Máximo ${MAX_QTY} unidades de ${product.name}`,
              type: "info",
            };
            return prev;
          }
          const copy = [...prev];
          copy[idx] = { ...current, ...product, qty: current.qty + 1 };
          pending = {
            message: `Ahora tenés ${copy[idx].qty} × ${product.name}`,
            type: "success",
          };
          return copy;
        }

        pending = {
          message: `${product.name} se agregó al carrito`,
          type: "success",
        };
        return [...prev, { ...product, qty: 1 }];
      });

      if (pending) showToast(pending.message, pending.type);
    },
    [showToast]
  );

  const updateQty = useCallback((id, qty) => {
    const n = Number(qty);
    if (!Number.isFinite(n)) return;

    const clamped = Math.max(MIN_QTY, Math.min(MAX_QTY, Math.floor(n)));

    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: clamped } : i))
    );
  }, []);

  const removeItem = useCallback(
    (id) => {
      setItems((prev) => prev.filter((i) => i.id !== id));
      showToast("Producto eliminado", "info");
    },
    [showToast]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    showToast("Carrito vaciado", "info");
  }, [showToast]);

  const totalItems = items.reduce((acc, i) => acc + (Number(i.qty) || 0), 0);
  const totalPrice = items.reduce(
    (acc, i) => acc + (Number(i.price) || 0) * (Number(i.qty) || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        toast,
        MIN_QTY,
        MAX_QTY,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
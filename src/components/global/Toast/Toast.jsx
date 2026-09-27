import { useCart } from "../../../context/CartContext";
import "./Toast.css";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className={`toast toast-${toast.type}`} key={toast.id}>
      <i
        className={
          toast.type === "success"
            ? "fas fa-check-circle"
            : "fas fa-info-circle"
        }
      ></i>
      <span>{toast.message}</span>
    </div>
  );
}
import Header from "./components/global/Header/Header.jsx";
import MainView from "./views/MainView.jsx";
import Footer from "./components/global/Footer/Footer.jsx";
import Toast from "./components/global/Toast/Toast.jsx";
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <MainView />
      <Footer />
      <Toast />
    </CartProvider>
  );
}
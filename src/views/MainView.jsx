import Home from "../components/sections/Home/Home.jsx";
import About from "../components/sections/About/About.jsx";
import Menu from "../components/sections/Menu/Menu.jsx";
import Review from "../components/sections/Review/Review.jsx";
import Contact from "../components/sections/Contact/Contact.jsx";

export default function MainView() {
  return (
    <main>
      <Home />
      <About />
      <Menu />
      <Review />
      <Contact />
    </main>
  );
}
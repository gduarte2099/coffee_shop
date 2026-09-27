import "./Footer.css";

const links = [
  { id: "home", label: "inicio" },
  { id: "about", label: "nosotros" },
  { id: "menu", label: "menú" },
  { id: "review", label: "reseñas" },
  { id: "contact", label: "contacto" },
];

export default function Footer() {
  return (
    <section className="footer">
      <div className="share">
        <a href="#" className="fab fa-facebook" aria-label="Facebook"></a>
        <a href="#" className="fab fa-instagram" aria-label="Instagram"></a>
        <a href="#" className="fab fa-pinterest" aria-label="Pinterest"></a>
      </div>

      <div className="links">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </div>

      <div className="credit">
        creado por <span>gduarte2999@gmail.com</span> | 2024
      </div>
    </section>
  );
}

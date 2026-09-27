const links = [
  { id: "home", label: "inicio" },
  { id: "about", label: "nosotros" },
  { id: "menu", label: "menú" },
  { id: "review", label: "reseñas" },
  { id: "contact", label: "contacto" },
];

function Navbar({ active }) {
  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      {links.map((link) => (
        <a key={link.id} href={`#${link.id}`}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
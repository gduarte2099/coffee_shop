import "./Review.css";

const reviews = [
  {
    id: "review-espresso",
    text: "El Espresso es lo más. Fuerte, aromático y justo lo que necesito antes de arrancar el día.",
    user: "/images/pic-1.jpg",
    name: "Sofía Giménez",
    stars: 5,
  },
  {
    id: "review-cappuccino",
    text: "El Capuchino es mi debilidad. Cremoso, con la espuma justa y no muy dulce. Un mimo a la tarde.",
    user: "/images/pic-2.jpg",
    name: "Lucía Benítez",
    stars: 4,
  },
  {
    id: "review-mbeju",
    text: "El Mbejú es como el de mi abuela. Recién salido, con ese queso que se estira. Vuelvo seguro.",
    user: "/images/pic-3.jpg",
    name: "Marta Fernández",
    stars: 4,
  },
];

export default function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        reseñas de <span>clientes</span>
      </h1>
      <div className="box-container">
        {reviews.map((r) => (
          <div className="box" key={r.id}>
            <img src="/images/quote-img.png" alt="" className="quote" />
            <p>"{r.text}"</p>
            <img src={r.user} alt={r.name} className="user" />
            <h3>{r.name}</h3>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={i < r.stars ? "fas fa-star" : "fa-regular fa-star"}
                ></i>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Disfruta de la taza de café perfecta.</h3>
        <p>
          Disfruta del aroma fresco y del sabor suave de nuestro café preparado
          por expertos. Ya sea que ames un espresso clásico o un latte cremoso,
          tenemos algo especial para cada amante del café. Comienza tu día con
          la taza perfecta.
        </p>
        <a href="#" className="btn">
          Consigue el tuyo ahora
        </a>
      </div>

      {/* Humo decorativo: alt vacío y aria-hidden para que no lo lean los lectores de pantalla */}
      <div className="smoke-wrap">
        <img className="smoke" src="/images/smoke.png" alt="" aria-hidden="true" />
      </div>
      <div className="smoke-wrap">
        <img className="smoke2" src="/images/smoke.png" alt="" aria-hidden="true" />
      </div>
      <div className="smoke-wrap">
        <img className="smoke3" src="/images/smoke.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Home;
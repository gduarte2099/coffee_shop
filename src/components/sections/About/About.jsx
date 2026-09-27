import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>sobre</span> nosotros
      </h1>
      <div className="row">
        <div className="image">
          <img src="/images/about-img.jpg" alt="Taza de café de la cafetería" />
        </div>
        <div className="content">
          <h3>¿Qué hace especial a nuestro café?</h3>
          <p>
            Nuestro café está elaborado con los mejores granos, seleccionados
            cuidadosamente por su sabor intenso y textura suave. Cada taza se
            prepara a la perfección, garantizando un gusto equilibrado y un
            aroma que se disfruta.
          </p>
          <p>
            Creemos en la calidad, desde la elección de los granos hasta el
            último chorro. Ya sea que prefieras un espresso fuerte o un
            capuchino cremoso, nuestro café está hecho para deleitar tus
            sentidos.
          </p>
          <a href="#" className="btn">Saber más</a>
        </div>
      </div>
    </section>
  );
}
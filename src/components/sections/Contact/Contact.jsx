import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contactá</span>nos
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://maps.google.com/maps?q=-25.5620799,-57.2847075&z=17&output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de la Iglesia San Buenaventura, Yaguarón"
        ></iframe>

        <form action="">
          <h3>escribinos</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="nombre" />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="correo" />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="teléfono" />
          </div>
          <input type="submit" value="enviar" className="btn" />
        </form>
      </div>
    </section>
  );
}
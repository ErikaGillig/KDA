import { useState } from "react";
import axios from "axios";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer.js";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);

    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };
  return (
    <main>
      <Header />
      <Nav />

      <h1 className="titulo">
        {" "}
        Registrate para seguir al tanto de las novedades{" "}
      </h1>
      <div class="container">
        <div class="cajitanew">
          <form
            action="contacto"
            method="post"
            className="formulario"
            onSubmit={handleSubmit}
          >
            <p class="items">
              <label htmlFor="nombre"> Nombre: </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </p>
            <p class="items">
              <label htmlFor="email"> Email: </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <p class="items">
              <label htmlFor="mensaje"> Mensaje: </label>
              <textarea
                type="text"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </p>
            <p>
              <input type="submit" className="button" value="enviar" />
            </p>
          </form>

          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contacto;

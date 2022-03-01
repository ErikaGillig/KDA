import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer.js";
import NovedadItem from "../components/novedades/NovedadItem";
import "../styles/pages/Novedades.css";
import axios from "axios";
import { useState, useEffect } from "react";


const Novedades = () => {
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNovedades = async () => {
    const { data } = await axios.get('http://localhost:3000/api/novedades');
    setLoading(false);
    setNovedades(data);
  };

  useEffect(() => {
    getNovedades();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <h1 className="titulo">Noticias sobre K/DA</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.length > 0 &&
        novedades.map((item) => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}

      <Footer />
    </>
  );
};

export default Novedades;
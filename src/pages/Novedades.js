import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/pages/Novedades.css';


const Novedades = () => {
  return (
    <>
    <Header />
    <Nav />
    <h1 class="titulo">Noticias sobre K/DA</h1>
    { loading ? (
      <p>Cargando...</p>
    ) : (
      Novedades.map(item => <NovedadItem key={item.id}
        tittle={item.titulo} 
        subtitle={item.subtitulo}
        imagen={item.imagen} 
        body={item.cuerpo} />)
    )}
 
<Footer />
    </>
  )
     
}

export default Novedades

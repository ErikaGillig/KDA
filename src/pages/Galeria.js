import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import '../styles/pages/Galeria.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Galeria = () => (
    <div>
        <Header />
        <Nav />
      <div className='gallery'>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/instageiii.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Antes de salir a escena</h3>
      <p className='descripcion'>Una estrella de la suerte antes de salir al escenario y brillar</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/camerinii.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Un poco de improvisacion</h3>
      <p>A nuestra invitada le encanta mostrar su nueva musica a las miembros.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/Vestuario.jpg"
      alt="Four slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Pruebas, brillos, camara y ¡Accion!</h3>
      <p>Nuestra bella lìder enseñando los trajes principales de More</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/sesionI.jpg"
      alt="Five slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Dazed China</h3>
      <p>Sesion de fotos echas para la revista Dazed</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/relax.jpg"
      alt="Six slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Un poco de paz</h3>
      <p>Nuestras miembros descansan para dar todo de si a sus Blades.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/camerinblopper.jpg"
      alt="Seven slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Una pequeño pre-stage</h3>
      <p>Nuestra pequeña seraphine se divierte documentando cada segundo con las chicas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/sesionII.jpg"
      alt="Eight slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Dazed China</h3>
      <p>Y otra foto de su sesion</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/recuerdosi.jpg"
      alt="Nine slide"
    />
    <Carousel.Caption>
      <h3 className='titulo'>Un poco de nostalgia</h3>
      <p>La primera selfie de las chicas durante la rodacion de su MV debut.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    
        <Footer />
    </div>
);




export default Galeria 
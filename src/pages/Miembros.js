import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import { Card } from "react-bootstrap";

function Miembros() {

  return (
    <>
      <Header />
      <Nav />
      <div className='container'>
      
        <div className='card' style={{ width: '10rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/Ahri.jpg" />
            <Card.Body>
              <Card.Title>Ahri, The leader</Card.Title>
              <Card.Text>
                Líder, fundadora y vocalista principal de K/DA, Ahri deslumbra a los fans con su carisma y confianza.
                Ella es la pieza central del grupo. De carácter tranquilo, defiende la libertad de expresión y la
                naturalidad, tanto la suya como la de sus compañeras. Ahri se enorgullece de descubrir talentos nuevos
                y de ayudarles a alcanzar su máximo potencial.
              </Card.Text>
            </Card.Body>
          </Card>
        
         <div className='card' style={{ width: '10rem' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="img/Akali.jpg" />
              <Card.Body >
                <Card.Title>Akali, The rapper</Card.Title>
                <Card.Text>
                  Akali es la rapera principal del grupo, con su estilo punk grafitero y su toque audaz y peligroso.
                  Ella mantiene al equipo constantemente enfocado y valora su independencia creativa, ante todo.
                  Akali siempre está trabajando en proyectos nuevos y se niega a comprometer su arte. Ella también
                  es rapera en otro grupo llamado True Damage actualmente en hiatus.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      
      


        <div className='card' style={{ width: '10rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/Evelynn.jpg" />
            <Card.Body>
              <Card.Title>Evelynn, The diva</Card.Title>
              <Card.Text>
                Evelynn es la vocalista líder de K/DA y su presencia sobre el escenario es sencillamente hipnótica.
                No le gusta estar a la sombra de nadie y se deleita con la reacción del público ante su apariencia
                estilizada. Como cofundadora de K/DA junto con Ahri, Evelynn empuja al grupo hacia sus proyectos
                creativos más arriesgados y emocionantes
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className='card' style={{ width: '10rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="img/Kaisa.jpg" />
            <Card.Body>
              <Card.Title>Kai'sa, The main dancer</Card.Title>
              <Card.Text>
                Como bailarina principal y coreógrafa del equipo, Kai'Sa solo se conforma con la perfección.
                Su enfoque silencioso pero intenso, su misticismo y su impecable atención al detalle impulsan a su
                equipo. Kai'Sa tiene una visión cosmopolita de la vida, por lo que cada rincón del mundo la inspira
                en una forma particular.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      
      </div>


      <Footer />
    </>

  );
}

export default Miembros;
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';
import '../styles/pages/Home.css';



const Home = (props) => {
    return (
        <>
        <Header />
        <Nav />
            <main className="holder">
                <div className="homeimg">
                    <img src="img/all out.jpg" alt="Kda Welcome" />
                </div>
                <div className="bienvenidos">
                    <div className="bienvenidos left">
                        <h2>¡ Bienvenidos!</h2>
                        <p>Sean muy bien recibidos fanáticos de K/DA mejor conocidos como BLADES, Ya que somos sus principales armas para llegar al corazón de las personas.
                            Esta página tiene como propósito ser una fan Page activa. ¿A que nos referimos con fan Page activa?; Nos referimos a que buscaremos dejarlos al tanto
                            de las actividades de las chicas así como también materiales para que vayan conociéndolas individualmente como la historia del grupo.</p>
                    </div>
                </div>
                <div className="Redes right">
                    <h2>Sigue a K/DA</h2>
                    <div className="redessociales">
                        <ul>
                        <li><a href="https://www.tiktok.com/@kda_music?">TikTok</a></li>
                        <li><a href="http://www.twitter.com/kda_music"> Twitter</a></li>
                        <li><a href="https://www.instagram.com/kda_music/"> instagram</a></li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
            </>
    );
}

export default Home
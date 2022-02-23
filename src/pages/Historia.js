import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import '../styles/pages/Historia.css';
import React from 'react'

const Historia = (props) => {
    return ( 
        <>
        <Header />
        <Nav />
        <main className="holder">
        <div className="historiaimg">
            <img src="img/WelcomeI.gif" alt="K/DA with Seraphine"/>
        </div> 
        <div className="historia">
            <h2>This is K/DA </h2>
        <p> K/DA es un grupo femenino virtual surcoreano que consta de cuatro personajes del juego League of Legends: Ahri, Akali, Evelynn y Kai'Sa. 
            Las Ultimas dos nombradas fueron interpretadas por las cantantes estadounidenses Madison Beer y Jaira Burns respectivamente, hasta el anuncio 
            de un nuevo miniálbum en agosto de 2020, para el que prestaron su voz Bea Miller y Wolftyla en el sencillo «The Baddest». 
            Ahri y Akali fueron interpretadas por Miyeon y Soyeon del grupo surcoreano (G)I-dle durante todos los lanzamientos de K/DA. El grupo fue 
            desarrollado por Riot Games, la compañía detrás de League of Legends, y se presentó por primera vez en el 2018 League of Legends World Championship 
            con una presentación en realidad aumentada, donde K/DA interpretó su canción debut «Pop/Stars».
            En el ultimo nuevo miniálbum de las chicas en la cancion titulo denominada "MORE" decidieron intengrar una collaboraciòn con una cantante China llamada
            Lexi Liu quien presto su voz para darle vida a Seraphine; Siendo a su vez lanzada como nueva campeona en el juego.
        </p>
        </div>
        <div class="discografia">
         <h2> Discografía! </h2>
         <div className="album">
             <div className="discos">
             <img src="img/popstars.jpg" alt="Pop/Stars imagen"/>
                <h5>Pop/Stars</h5>
                <h6> 3 de octubre de 2018 </h6>
                <p> Sencillo debut. Lanzando su Video musical y debut escénico en League of Legends World Championship.
                    con una presentación en realidad aumentada, donde K/DA interpretó su canción debut junto
                    con sus contrapartes humanas. 
                </p>
             </div>
         </div>
        </div>
        <div className="album">
            <div className="discos">
            <img src="img/thebaddest.jpg" alt="The Baddest imagen"/>
                <h5>The Baddest</h5>
                <h6> 27 de Agosto de 2020 </h6>
                <p> Segundo sencillo. Fue lanzado su segundo sencillo titulado The Baddest, dando hype y esperanzas de un
                    posible comeback del grupo. Sin sacar video musical promocional, solamente su video de lyrics 
                </p>
            </div>
        </div>
        <div className="album">
            <div className="discos">
            <img src="img/More.jpg" alt="More imagen"/>
                <h5>More</h5>
                <h6>28 de octubre de 2020 </h6>
                <p> Tercer sencillo. Se lanza MORE como sencillo principal del mini álbum anunciado con el nombre de all out.
                    Contando con las voces de Madison Beer, Jaira Burns, Soyeon, Miyeon y la cantante china Lexi Liu, 
                    quien interpretó a Seraphine.
                     
                </p>
            </div>
        </div>
        <div className="album">
            <div className="discos">
            <img src="img/minialbum.jpg" alt="Mini album imagen"/>
                <h5>All out</h5>
                <h6>6 de noviembre de 2020 </h6>
                <p> Primer miniálbum. Este fue lanzado Spotify, YouTube y Apple Music. Además de los sencillos 
                    «More» y «The Baddest», lanzados anteriormente, el álbum incluye tres canciones más: «Villian» con Beer 
                    y la cantante alemana Kim Petras, «Drum Go Dum» con Wolftyla, Aluna y Bekuh BOOM y «I'll Show You» con Jihyo, 
                    Nayeon, Sana y Chaeyoung de Twice, así como Bekuh BOOM y Annika Wells.
                </p>
            </div>
        </div>
        </main>
        <Footer />
        </>
    );

    
}

export default Historia

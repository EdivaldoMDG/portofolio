import Layout from '../Layout';
import '../Home/index.css';
import image from '../../image/edivaldo.jpg'

export default function Home() {
    return (
      <Layout>
        <div className="homeContainer">
          <div className="contentHome">
            <div className="imagem">
              <img src={image} height="100%" width="100%" alt="perfil"/>
            </div>
            <div className="textHome">
              <h2>Hi my name is Edivaldo Goncalves</h2>
              <br/>
               <p>
                 I am software lover.I started programming at the age of 18 since then programming been of of my hobbies through my development.
                 Currently i am in my last year of computer cience degree.The experience i had in programming through this couple of year has been challenging for me sometimes dificult and i have worked in several projects with diferent tecnologies.
                 Im a person very motivated and i love sport that helps me in my motivation and focus. Currently i work in a company called Chuva were i am a software developer. 
               </p>
           </div>
          </div>
        </div>
      </Layout>
    );
  }
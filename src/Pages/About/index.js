import Layout from '../Layout'
import '../About/index.css'
import image from '../../image/edivaldo2.jpg'

export default function About() {
    return (
        <Layout>
            <div className="aboutContainer">
            <h1>About</h1>
                <div className="contentABout">
                <div className="imagem">
              <img src={image} height="100%" width="100%" alt="perfil"/>
            </div>
                    <p className="resume">
                      I consider myself a dedicated and motivated person who likes challenges.Iworked in some diferent languages.
                      I worked with React,Java,C,Swift,SwiftUI,Javascript.
                      I had worked with blender modeling for some school projects and unity to make a game.
                      I have some experience in jest writing unitary test.
                    </p>

                </div>
            </div>
        </Layout>
    );
  }
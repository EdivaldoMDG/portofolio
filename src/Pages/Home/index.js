import Layout from '../Layout';
import '../Home/index.css';
import image from '../../image/edivaldo.jpg'

export default function Home() {
    return (
      <Layout>
        <div className="homeContainer">
          <div className="content">
            <div className="imagem">
              <img src={image} height="100%" width="100%" alt="perfil"/>
            </div>
            <div className="textHome">
               <p>Lorem Ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, 
                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
           </div>
          </div>
        </div>
      </Layout>
    );
  }
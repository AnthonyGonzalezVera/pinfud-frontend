import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Íconos */
import {
  homeOutline,
  searchOutline,
  addOutline,
  chatbubbleOutline
} from "ionicons/icons";

/* Páginas */
import Splash from './pages/splash/splash';
import SearchPage from './pages/SearchPage/SearchPage';
import PintfudProfilePage from './pages/PintfudProfile/PintfudProfile';

/* Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      {/* ⭐ AQUI VA LA NAVEGACIÓN GLOBAL */}
      <IonTabs>

        {/* CONTENIDO DE LAS RUTAS */}
        <IonRouterOutlet>

          <Route exact path="/search">
            <Splash />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/perfil">
            <PintfudProfilePage />
          </Route>

          <Redirect to="/" />
        </IonRouterOutlet>

        {/* ⭐ BARRA INFERIOR GLOBAL (IONTABBAR) */}
        <IonTabBar slot="bottom" className="bottom-nav">

          <IonTabButton tab="home" href="/">
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
          </IonTabButton>

          <IonTabButton tab="add" href="/add">
            <IonIcon icon={addOutline} />
          </IonTabButton>

          <IonTabButton tab="chat" href="/chat">
            <IonIcon icon={chatbubbleOutline} />
          </IonTabButton>

          <IonTabButton tab="perfil" href="/perfil">
            <div className="small-avatar">
              <span className="small-avatar-letter">Z</span>
            </div>
          </IonTabButton>

        </IonTabBar>

      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;

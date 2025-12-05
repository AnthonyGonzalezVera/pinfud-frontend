import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Splash from './pages/splash/splash';
import Welcome from './pages/auth/Welcome';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

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
      <IonRouterOutlet id="main">

        {/* ⭐ Splash → primera pantalla */}
        <Route exact path="/">
          <Splash />
        </Route>

        {/* ⭐ Welcome */}
        <Route exact path="/welcome">
          <Welcome />
        </Route>

        {/* ⭐ Login */}
        <Route exact path="/login">
          <Login />
        </Route>

        {/* ⭐ Register */}
        <Route exact path="/register">
          <Register />
        </Route>

        {/* ⭐ Rutas desconocidas → Welcome */}
        <Redirect to="/welcome" />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

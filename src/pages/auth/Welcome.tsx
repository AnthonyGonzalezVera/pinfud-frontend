import { IonContent, IonPage } from "@ionic/react";
import "./Welcome.css";
import { useHistory } from "react-router";

const Welcome: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="welcome-content" fullscreen>

        <div className="welcome-container">

          <img src="/logo.png" className="welcome-logo" />

          <button 
            className="welcome-btn primary"
            onClick={() => history.push("/login")}
          >
            Iniciar Sesión
          </button>

          <button 
            className="welcome-btn secondary"
            onClick={() => history.push("/register")}
          >
            Registrarse
          </button>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Welcome;

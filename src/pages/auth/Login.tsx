import { IonContent, IonPage } from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="login-content" fullscreen>

        <div className="login-container">

          <h1 className="login-title">Iniciar Sesión</h1>

          <input type="email" placeholder="Correo" className="login-input" />
          <input type="password" placeholder="Contraseña" className="login-input" />

          <button className="login-btn">Log in</button>

          <div className="divider">O iniciar con</div>

          <div className="social-container">
            <div className="social-circle">F</div>
            <div className="social-circle">G</div>
            <div className="social-circle">X</div>
          </div>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Login;

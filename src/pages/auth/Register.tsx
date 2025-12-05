import { IonContent, IonPage } from "@ionic/react";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="register-content" fullscreen>

        <div className="register-container">

          <h1 className="register-title">Registrarse</h1>

          <input type="text" placeholder="Nombre" className="register-input" />
          <input type="email" placeholder="Correo" className="register-input" />
          <input type="password" placeholder="Contraseña" className="register-input" />
          <input type="password" placeholder="Confirmar contraseña" className="register-input" />

          <button className="register-btn">Registrar</button>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Register;

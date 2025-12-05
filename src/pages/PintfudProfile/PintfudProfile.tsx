import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonAvatar,
} from "@ionic/react";

import { chevronBackOutline } from "ionicons/icons";
import "./PintfudProfile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>

      <IonContent className="profile-page">

        {/* 🔥 Flecha con navegación CORRECTA */}
        <IonButton
          fill="clear"
          className="back-icon"
          routerLink="/tabs/search"
        >
          <IonIcon icon={chevronBackOutline} />
        </IonButton>

        <h1 className="app-title">Pintfüd</h1>

        <div className="avatar-container">
          <IonAvatar className="avatar-circle">
            <div className="avatar-letter">Z</div>
          </IonAvatar>
        </div>

        <h2 className="name">Zaida Jumbo</h2>
        <p className="username">@zaida735</p>

        <div className="buttons-container">
          <IonButton expand="block" className="action-btn">
            Cerrar Sesión
          </IonButton>

          <IonButton expand="block" className="action-btn">
            Agregar Cuenta
          </IonButton>

          <IonButton expand="block" className="action-btn">
            Información
          </IonButton>
        </div>

      </IonContent>

    </IonPage>
  );
};

export default Profile;

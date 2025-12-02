import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./splash.css";
import { useHistory } from "react-router";

const Splash: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      // más adelante cambiarás a /login
      history.replace("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="splash-content" fullscreen>
        <div className="splash-wrapper">
          {/* ⭐ Logo desde public/ */}
          <img src="/logo.png" alt="Pinfud Logo" className="splash-logo" />

          <h1 className="splash-title">PINFUD</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;

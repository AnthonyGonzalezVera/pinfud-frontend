import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonIcon,
} from "@ionic/react";
import { cameraOutline, closeOutline } from "ionicons/icons";
import "./SearchPage.css";

const SearchPage: React.FC = () => {
  const platos = [
    // COSTA
    {
      titulo: "Encocado de camarón (Costa)",
      img: "/public/comida/encocado.jpg",
    },
    {
      titulo: "Ceviche de pescado (Costa)",
      img: "/public/comida/ceviche.jpg",
    },

    // SIERRA
    {
      titulo: "Hornado (Sierra)",
      img: "/public/comida/hornado.jpg",
    },
    {
      titulo: "Locro de papa (Sierra)",
      img: "/public/comida/locro.jpg",
    },

    // ORIENTE
    {
      titulo: "Maito de pescado (Oriente)",
      img: "/public/comida/maito.jpg",
    },
    {
      titulo: "Chontacuro asado (Oriente)",
      img: "/public/comida/chontacuro.jpg",
    },

    // AMAZONÍA
    {
      titulo: "Ayampaco (Amazonía)",
      img: "/public/comida/ayampaco.jpg",
    },
    {
      titulo: "Casabe con pescado (Amazonía)",
      img: "/public/comida/casabe.jpg",
    },
  ];

  return (
    <IonPage>
      <IonContent className="search-content">

        {/* Barra superior */}
        <div className="search-header">
          <IonSearchbar placeholder="Busca platos típicos..." className="searchbar" />
          <IonIcon icon={cameraOutline} className="camera-icon" />
          <span className="cancel-text">Cancelar</span>
        </div>

        {/* Lista de resultados */}
        <div className="search-list">
          {platos.map((item, index) => (
            <div className="search-item" key={index}>
              <img src={item.img} className="item-img" alt="plato" />
              <p className="item-text">{item.titulo}</p>
              <IonIcon icon={closeOutline} className="close-icon" />
            </div>
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default SearchPage;

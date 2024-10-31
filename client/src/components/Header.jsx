import "../styles/Header.css";
import imgHeader1 from "../assets/images/imgHeader1.png";
import imgHeader2 from "../assets/images/imgHeader2.png";

export default function Header() {
  return (
    <header className="header">
      <div className="image-container">
        <img src={imgHeader1} alt="Tache de couleur" className="image" />
        <img
          src={imgHeader2}
          alt="Portrait de l'artiste en noir et blanc"
          className="image overlay"
        />
      </div>
      <div className="header-text">
        <h1 className="header-title">Jean-Michel ALBEROLA</h1>
        <h2>Artiste peintre</h2>
        <p className="header-description">
          Bienvenue sur mon site et dans mon univers.
        </p>
        <button type="button" className="header-button">
          Ma Galerie
        </button>
      </div>
    </header>
  );
}

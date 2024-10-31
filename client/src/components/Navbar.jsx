import "../styles/Nav.css";
import imgNav from "../assets/images/imgNav.png";

export default function Nav() {
  const words = ["Accueil", "Qui-suis-je ?", "Contact"];

  const renderTextWithSpans = (text, wordIndex) =>
    text.split("").map((letter, letterIndex) => (
      <span key={`${wordIndex.key}-${letterIndex.key}`} className="nav-letter">
        {letter}
      </span>
    ));

  return (
    <nav className="navbar">
      <img src={imgNav} alt="Logo" className="nav-logo" />
      <ul className="nav-list">
        {words.map((word, index) => (
          <li key={index.key}>{renderTextWithSpans(word, index)}</li>
        ))}
      </ul>
    </nav>
  );
}

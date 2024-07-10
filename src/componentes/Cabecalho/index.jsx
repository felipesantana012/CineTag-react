import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";
import logo from "./Logo-cinetag-branco 1.png";
import CabecalhoLink from "../CabecalhoLink";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do cineTag" />
      </Link>

      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;

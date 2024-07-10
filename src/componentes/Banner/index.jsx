import styles from "./Banner.module.css";

const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/public/imagens/Banner-${imagem}.png')` }}
    ></div>
  );
};

export default Banner;

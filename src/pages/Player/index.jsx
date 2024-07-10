import { useParams } from "react-router-dom";
import Banner from "@/componentes/Banner";
import Titulo from "@/componentes/Titulo";
import styles from "./Player.module.css";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";
import { URL } from "@/json/configURL.jsx";
const Player = () => {
  const [video, setVideo] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    fetch(`${URL}?id=${parametros.id}`)
      .then((res) => res.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;

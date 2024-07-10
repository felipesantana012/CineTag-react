import Banner from "@/componentes/Banner";
import Card from "@/componentes/Card";
import Titulo from "@/componentes/Titulo";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [videos, setVideos] = useState([]);
  const URL =
    "https://my-json-server.typicode.com/felipesantana012/cineTag-api/videos";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="Home" />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;

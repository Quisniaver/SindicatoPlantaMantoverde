import { useEffect, useState } from "react";
import "../styles/noticias.scss";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/content/noticias.json")
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data.items || []);
      })
      .catch((err) => {
        console.error("Error cargando noticias:", err);
      });
  }, []);

  return (
    <section className="noticias">
      <h2 className="noticias-title">Todas las noticias</h2>

      {noticias.map((noticia) => (
        <article className="noticia-card" key={noticia.id}>
          
          {/* IMAGEN */}
          <div className="noticia-img-wrapper">
            <img
              src={noticia.imagen}
              alt={noticia.titulo}
            />
          </div>

          {/* CONTENIDO */}
          <div className="noticia-content">
            <h3>{noticia.titulo}</h3>

            {noticia.fecha && (
              <span className="noticia-fecha">{noticia.fecha}</span>
            )}

            <p>{noticia.texto}</p>

            {noticia.link && (
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Leer más
              </a>
            )}
          </div>

        </article>
      ))}
    </section>
  );
};

export default Noticias;

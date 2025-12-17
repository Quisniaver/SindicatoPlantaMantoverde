import { useEffect, useState } from "react";
import "../styles/noticias.scss";

const PLACEHOLDER_IMG =
  "https://via.placeholder.com/600x400?text=Noticia";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/content/noticias.json")
      .then((res) => res.json())
      .then((json) => setNoticias(json.items))
      .catch((err) => console.error("Error cargando noticias:", err));
  }, []);

  return (
    <section className="noticias-section">
      <h2 className="noticias-title">Noticias</h2>

      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <article className="card-noticia" key={noticia.id}>
            <img
              src={noticia.imagen || PLACEHOLDER_IMG}
              alt={noticia.titulo}
              className="card-img"
            />

            <div className="card-body">
              <h3 className="card-title">{noticia.titulo}</h3>

              {noticia.texto && (
                <p className="card-text">{noticia.texto}</p>
              )}

              {noticia.link && (
                <a
                  href={noticia.link}
                  className="card-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Noticias;

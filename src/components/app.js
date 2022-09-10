import React, { useState, useEffect } from "react";
import { ApiService } from "../apiService";
import "../styles.css";

export default function App() {
  const [gif, setGif] = useState({});
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    (async () => {
      await loadGifs();
    })();
  }, []);

  async function loadGifs() {
    setLoading(true);
    const facts = await ApiService.getFacts();
    const keywords = facts.split(" ").slice(0, 3);
    setKeywords(keywords.join(" "));
    const gif = await ApiService.getGifs(keywords);
    setGif(gif);
    setLoading(false);
  }

  return (
    <React.Fragment>
      {loading ? (
        ""
      ) : (
        <section className="container">
          <div className="container-text">
            <h3>Busqueda realizada con las siguentes palabras clave: </h3>
            <span className="'keywords'">"{keywords}"</span>
          </div>

          <div className="container-image">
            <img src={gif.image?.url || ""} alt={keywords} />
          </div>
        </section>
      )}
      <button
        onClick={loadGifs}
        className="button-special"
        aria-busy={loading}
        disabled={loading}
      >
        {loading ? "Cargando gifs..." : "Buscar otros..."}
      </button>
    </React.Fragment>
  );
}

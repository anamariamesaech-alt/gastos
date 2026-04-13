import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiRyc_Axios = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${pages}`
        );

        setCharacters(response.data.results);
        setInfo(response.data.info);

      } catch (err) {
        console.error(err);
        setError('Error al cargar personajes');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [pages]);

  const styles = {
    wrapper: {
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Segoe UI',
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '30px',
    },
    btn: {
      padding: '10px 18px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#1565C0',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    img: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    content: {
      padding: '15px',
    },
    dot: (status) => ({
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor:
        status === 'Alive'
          ? '#4caf50'
          : status === 'Dead'
          ? '#f44336'
          : '#9e9e9e',
      display: 'inline-block',
      marginRight: '6px',
    }),
  };

  return (
    <div style={styles.wrapper} id="apis">

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        API Rick & Morty (Axios)
      </h2>

      {/* PAGINACIÓN */}
      <div style={styles.pagination}>
        <button
          style={styles.btn}
          onClick={() => setPages((p) => Math.max(1, p - 1))}
        >
          Anterior
        </button>

        <span>
          Página {pages} de {info.pages || 0}
        </span>

        <button
          style={styles.btn}
          onClick={() => setPages((p) => p + 1)}
        >
          Siguiente
        </button>
      </div>

      {/* ESTADOS */}
      {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {/* GRID */}
      <div style={styles.grid}>
        {characters.map((char) => (
          <div key={char.id} style={styles.card}>
            <img src={char.image} alt={char.name} style={styles.img} />
            <div style={styles.content}>
              <h3>{char.name}</h3>

              <p>
                <span style={styles.dot(char.status)}></span>
                {char.status} - {char.species}
              </p>

              <p style={{ fontSize: '13px', color: '#777' }}>
                Última ubicación:
              </p>
              <p>{char.location.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ApiRyc_Axios;
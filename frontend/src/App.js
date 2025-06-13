import React, { useState } from 'react';
import {
  getColor,
  getCat,
  getRandomPhoto,
  getTime,
  getScare,
  getLookalike
} from './api';

function App() {
  const [color, setColor] = useState('');
  const [catImage, setCatImage] = useState('');
  const [photo, setPhoto] = useState('');
  const [time, setTime] = useState('');
  const [scare, setScare] = useState('');
  const [lookalike, setLookalike] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 FastAPI Frontend</h1>

      <button onClick={() => getColor().then(res => setColor(res.data.color))}>
        🎨 Mudar Cor
      </button>
      <div style={{ backgroundColor: color, width: 100, height: 100, marginTop: 10 }} />

      <button onClick={() => getCat().then(res => setCatImage(res.data.cat_image_url))}>
        🐱 Ver Gato
      </button>
      {catImage && <img src={catImage} alt="Gato" width={200} style={{ marginTop: 10 }} />}

      <button onClick={() => getRandomPhoto().then(res => setPhoto(res.data.random_photo_url))}>
        📷 Ver Foto Aleatória
      </button>
      {photo && <img src={photo} alt="Aleatória" style={{ marginTop: 10 }} />}

      <button onClick={() => getTime().then(res => setTime(res.data.current_time))}>
        ⏰ Ver Horário
      </button>
      {time && <p>Horário atual: {time}</p>}

      <button onClick={() => getScare().then(res => setScare(res.data.scare_image_url))}>
        😱 Tomar Susto
      </button>
      {scare && <img src={scare} alt="Susto" style={{ marginTop: 10 }} />}

      <button onClick={() => getLookalike().then(res => setLookalike(res.data.lookalike_image_url))}>
        🧍 Quem se parece comigo?
      </button>
      {lookalike && <img src={lookalike} alt="Parecido" style={{ marginTop: 10 }} />}
    </div>
  );
}

export default App;

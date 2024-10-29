import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://loremflickr.com/150/150?random=1',
    'https://loremflickr.com/150/150?random=2',
    'https://loremflickr.com/150/150?random=3'
  ]);
  const [random, setRandom] = useState(4);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://loremflickr.com/150/150?random=' + random]);
    setRandom(random + 1); 
  };

  const removerImagem = (index) => {
    setImagens(imagens.filter((_, i) => i !== index));
    };

    return (
        <div>
          <h2>Galeria de Imagens</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imagens.map((imagem, index) => (
              <div key={index} style={{ margin: '5px' }}>
                <img src={imagem} alt={`Imagem ${index + 1}`} />
                <div />
                <button onClick={() => removerImagem(index)}>Remover</button>
              </div>
            ))}
          </div>
          <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
        </div>
      );
    }

export default GaleriaDeImagens;
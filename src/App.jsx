// Importando módulos
import React, { useState } from 'react';

// Teremos 4 estados:
// pokemon: estado que armazenará o resultado da busca na API;
// typedPokemon: estado responsável pelo input;
// error: estado responsável pelos erros;
// isLoading: estado responsável pelo carregamento.

const App = () => {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [typedPokemon, setTypedPokemon] = useState('');
    const [isLoading, setLoading] = useState(false);

    // elemento de input
    const handleChange = (event) => {
        setTypedPokemon(event.target.value);
    };
};

export default App;
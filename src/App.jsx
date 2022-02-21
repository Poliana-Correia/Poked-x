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

    return (
        <div className='App'>
            <h1>Welcome to Pokedéx!</h1>
            <p>Enter a pokemon's name or id to get started!</p>
            <form onSubmit = {handleSubmit}></form>
                <input 
                    value = {typedPokemon}
                    placeholder = "pokemon name/id"
                    onChange = {handleChange}
                />
                <button type = "submit">
                     
                </button>
        </div>
    );
};

export default App;
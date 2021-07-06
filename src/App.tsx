import React, { FormEvent, useEffect, useState } from 'react';
import { getData } from './services/getData';

function App() {
  const [desabilitado, setDesabilitado] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    setPesquisa(event.currentTarget.value);
  }

  useEffect(() => {
    if (pesquisa.length > 2)
      setDesabilitado(false);
    else
      setDesabilitado(true);
  }, [pesquisa]);

  return (
    <div className="App">
      <input type="search" onChange={handleOnChange} value={pesquisa} data-testid="input" />
      <button disabled={desabilitado} onClick={getData}>Pesquisar</button>
    </div>
  );
}

export default App;

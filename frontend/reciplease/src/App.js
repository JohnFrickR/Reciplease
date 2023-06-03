import './App.css';

import { useEffect, useState } from 'react';

import Main from './components/Main';
import Header from './components/Header'

function App() {

  const [recipes, setRecipes] = useState(null);
  const URL = process.env.REACT_APP_BACKEND_URL

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.data);
  }
  useEffect(()=>{
    getRecipes()
  }, [])

  return (
    <div className="App">
        <Header recipes={recipes}/>
        <Main />
    </div>
  );
};

export default App;

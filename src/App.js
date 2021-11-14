import './App.css';
import Axios from "axios"
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {

  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([])

  const YOUR_APP_ID = "575367ff";
  const YOUR_APP_KEY = "63e390588f24dcf297c7233b02a14b01"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes(){

    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);

  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();

  }

  return (
    <div className="app">
      <h1 >Food Recipes</h1>

      <form className="app_searchForm" onSubmit={onSubmit}>

        <input type="text"
         className="app_input"
         placeholder="Enter Ingedient" 
         value={query} 
         onChange={(e) => setquery(e.target.value)}/>

        <input 
        className="app_submit"
        type="submit" 
        value="Search" />

      </form>

      <div className="app_recipes">
        {recipes.map((recipe) =>{

          return <RecipeTile recipe={recipe}/>;

        })}

      </div>

    </div>
  );
}

export default App;

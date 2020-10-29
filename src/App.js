import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import Spinner from './components/Spinner';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Recipe.css';
import "./Spinner.css";

function App() {
  const APP_ID = "ba330160";
  const APP_KEY = "25723ae9cc8684354d7691665913f1ab";

  const [recipes,setRecipies]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");
  const [spin,setSpin]=useState(true);

  useEffect(()=>{
    getRecipes();
  },[query]);

    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    setInterval(setSpin(false),3000);
    console.log(data.hits);
  }

  const searchEvent = (event) => setSearch(event.target.value);
  const submitEvent = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
    setSpin(true);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={submitEvent}>
        <input 
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter your desired Recipe"
          onChange={searchEvent}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="items">
  
          {spin ? <Spinner/> : 
          recipes.map(recipe=>(
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              />
          ))
        }
      
      </div>
    </div>
  )
}

export default App;

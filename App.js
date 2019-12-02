
import React from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
    const APP_ID = "e4590f43";
    const APP_KEY = "bca28a89844ed3a6ed0f0160dcbee0ff";
   
    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [query, setQuery] = React.useState('chicken');
    
    
    //const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        getRecipes(); // eslint-disable-next-line
     }, [query]); 



    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };
    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };

        return ( 
        <div className = "App" >
            <form onSubmit={getSearch} className = "seach-form" >
                <input className = "search-bar" type = "text" value={search} onChange={updateSearch} />  
                    <button className = "searh-button" type = "submit" >
                         Search 
                    </button> 
            </form > 
            <div className="recipes">
            {recipes.map(recipe =>(
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}/>
            ))}</div>
        </div >
    )
}
export default App;
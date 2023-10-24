//this is what I tried before along with recipes.js

import {displayRecipes, sortRecipes} from "../recipes.js";


const fetchRecipes = async () => {
    let data = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType');
    data = await data.json();
    
    displayRecipes(data);
  };

titleArray = [];
recipeResults.init();


const fetchRecipesButton = document.getElementById('getRecipes');
fetchRecipesButton.addEventListener('click', fetchRecipes);

const sortRecipesButton = document.getElementById('sortRecipes');
sortRecipesButton.addEventListener('click', sortRecipes);

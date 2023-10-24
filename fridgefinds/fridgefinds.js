// import module that sorts the recipes

//import {sortRecipes} from "./sortrecipes.js";

//global variable needed
// not sure where this variable needs to be let dishType = "";
let titleArray = [];

//fetching JSON data from api website

const fetchRecipes = async () => {
  //let data = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType',{method:"GET", {mode:"no-cors"}, headers:{"Content-Type": "application/json"}});
  let response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType', {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
});
  
  let data = await data.json(); 
    console.log(data); 
  
  
//calling the display recipes function using the data received

  displayRecipes(data);
};

//assigning the results of the function to the recipe-results ID

  //const recipeResults = document.getElementById('recipe-results');
 // recipeResults.innerHTML = '';

  
  //function to create each recipe card and assigning the data to a div
 
  /*data.hits.forEach((hit) => {
  const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card'; 

  //setting dishType to blank so can iterate through the data and add the info to each recipe card
    let dishType = "";

    //conditional to assign the meal type to the recipe card

    if (hit.recipe.dishType[0] === "salad") {
      dishType = "Salad"
     } else if (hit.recipe.dishType[0] === "bread") {
      dishType = "Bread"
     } else if (hit.recipe.dishType[0] === "desserts") {
      dishType = "Desserts"
     } else if (hit.recipe.dishType[0] === "main course") {
      dishType = "Main Course"
     } else if (hit.recipe.dishType[0] === "soup") {
      dishType = "Soup"
     }else {
      dishType = "Unknown"
     }
     
     //adding each recipe title to an array

     titleArray.push(hit.recipe.label);
     
     //creating the recipe card as an object using string literal

    recipeCard.innerHTML = `
      <p>${hit.recipe.label}</p>
      <h5>${dishType}</h5>
      <img src="${hit.recipe.image}" alt="${hit.recipe.url}" />
      <br>
      <a href="${hit.recipe.url}" target="blank">View the Recipe</a> 
      `;
    
      //appending each recipe card to the recipe results div

    recipeResults.appendChild(recipeCard);  
       
  });

*/

 /* const sortRecipes = () => { 
  const sortedResults = document.getElementById('sorted-results'); 
  sortedResults.innerHTML = '';
  sortedResults.innerHTML =  titleArray.sort();
     
  sortedResults.append(sortedResults);
   
};*/

//event listener to call fetch recipes and then get recipes when the fetchrecipes button is clicked
//const fetchRecipesButton = document.getElementById('#getRecipes');
//fetchRecipesButton.addEventListener('click', fetchRecipes);

//document.getElementById('getRecipes').addEventListener('click', fetchRecipes);

//event listener to call sort recipes when the sort recipes button is clicked
//const sortRecipesButton = document.getElementById('#sortRecipes');
//sortRecipesButton.addEventListener('click', sortRecipes);

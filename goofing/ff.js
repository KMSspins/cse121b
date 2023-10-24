let dishType = "";
titleArray = [];


const fetchRecipes = async () => {
  let data = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType');
  data = await data.json();
  
  displayRecipes(data);
};

const displayRecipes = (data) => { 
  const recipeResults = document.getElementById('recipe-results');
  recipeResults.innerHTML = '';
 
  data.hits.forEach((hit) => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card'; 

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
     
     
     titleArray.push(hit.recipe.label);
     

    recipeCard.innerHTML = `
      <p>${hit.recipe.label}</p>
      <h5>${dishType}</h5>
      <img src="${hit.recipe.image}" alt="${hit.recipe.url}" />
      <br>
      <a href="${hit.recipe.url} target=" blank">View the Recipe</a> 
      `;
    
    recipeResults.appendChild(recipeCard);  
       
  });
};

  const sortRecipes = () => { 
  const sortedResults = document.getElementById('sorted-results'); 
  sortedResults.innerHTML = '';
  sortedResults.innerHTML =  titleArray.sort();
     
  sortedResults.append(sortedResults);
   
};


const fetchRecipesButton = document.getElementById('getRecipes');
fetchRecipesButton.addEventListener('click', fetchRecipes);

const sortRecipesButton = document.getElementById('sortRecipes');
sortRecipesButton.addEventListener('click', sortRecipes);






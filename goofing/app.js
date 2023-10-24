// app.js

// Function to fetch recipes
const fetchRecipes = async () => {
    let data = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Main%20course');
    data = await data.json();
    console.log(data);
    renderRecipes(data);
  };
  
  
  // Function to render recipes in the DOM
  function renderRecipes(data) {
    const recipeResults = document.getElementById('recipeList');
    recipeList.innerHTML = '';
  
    if (data.hits.length === 0) {
      recipeList.innerHTML = '<p>No recipes found.</p>';
    } else {
      data.hits.forEach(hit => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
        <p>${hit.recipe.label}</p>
        <img src="${hit.recipe.image}" alt="${hit.recipe.url}"/>
        <a href="${hit.recipe.url}">View the Recipe</a>
        `;

        const recipeLink = hit.recipe.url;
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${recipeLink}" target="_blank">${recipeName}</a>`;
        recipeList.appendChild(listItem);
      });
    }
  }
  
  // Event listener for the search button
  document.getElementById('searchButton').addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredientInput').value.trim();
    if (ingredient === '') {
      alert('Please enter an ingredient');
      return;
    }
  
    const recipes = await fetchRecipes(ingredient);
    renderRecipes(recipes);
  });
  
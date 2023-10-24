export const fetchRecipes = async () => {
    //let data = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType',{method:"GET", {mode:"no-cors"}, headers:{"Content-Type": "application/json"}});
    let response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=c9ea00d4&app_key=7d1cc5532524327230861c2ff28ec975&health=alcohol-free&mealType=Dinner&dishType=Bread&dishType=Main%20course&dishType=Salad&dishType=Soup&random=true&field=label&field=image&field=url&field=dishType', {
      method: "GET",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      }
  });
    
    let data = await response.json(); 
      console.log(data.hits); 
    
    
  //calling the display recipes function using the data received
  
    return data;
  };
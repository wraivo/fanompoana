fetch("https://fanompo-6a67.restdb.io/rest/services")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
  
  function displayCocktail(data) {
	const cocktail = data.services[0];
	const cocktailDiv = document.getElementById("cocktail");
	const cocktailName = cocktail.anarFohy;
	const heading = document.createElement("h1");
	heading.innerHTML = cocktailName;
	cocktailDiv.appendChild(heading);}   
	const cocktailIngredients = document.createElement("ul");
	cocktailDiv.appendChild(cocktailIngredients);  
  
	const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

	for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }

// Add recipe to favourites
function addFavourite(name) {

    let card = event.target.closest(".recipe-card");

    let recipe = {
        name: name,
        ingredients: card.querySelectorAll("p")[0].innerText,
        instructions: card.querySelectorAll("p")[1].innerText,
        image: card.querySelector("img").src
    };

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    let alreadyExists =
        favorites.some(item => item.name === recipe.name);

    if (alreadyExists) {
        alert("Recipe already added to favourites.");
        return;
    }

    favorites.push(recipe);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("Added to favourites!");
}


// Display favourites page
const container =
document.getElementById("favoritesContainer");

if(container){

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    container.innerHTML="";

    if(favorites.length===0){

        container.innerHTML="<h2>No favourite recipes yet.</h2>";

    }

    favorites.forEach((recipe,index)=>{

        container.innerHTML +=`

        <div class="recipe-card">

            <div class="recipe-content">

                <h2>${recipe.name}</h2>

                <h3>Ingredients</h3>

                <p>${recipe.ingredients}</p>

                <h3>Instructions</h3>

                <p>${recipe.instructions}</p>

                <button onclick="removeFavorite(${index})">

                    ❌ Remove

                </button>

            </div>

            <div class="recipe-image">

                <img src="${recipe.image}">

            </div>

        </div>

        `;

    });

}


// Remove recipe
function removeFavorite(index){

    let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.splice(index,1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    location.reload();

}
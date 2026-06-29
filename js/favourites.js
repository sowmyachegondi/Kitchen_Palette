function addFavourite(recipe){

    let favourites =
        JSON.parse(
            localStorage.getItem(
                "favourites"
            )
        ) || [];

    if(!favourites.includes(recipe)){

        favourites.push(recipe);

        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites)
        );

        alert(
            recipe +
            " added to favourites."
        );
    }
}

function showFavourites(){

    let list =
        document.getElementById(
            "favoriteList"
        );

    if(!list) return;

    let favourites =
        JSON.parse(
            localStorage.getItem(
                "favourites"
            )
        ) || [];

    if(favourites.length === 0){

        list.innerHTML =
        "<h2>No favorites added.</h2>";

        return;
    }

    favourites.forEach(recipe=>{

        list.innerHTML += `
            <div class="recipe-card">
                <h2>${recipe}</h2>
            </div>
        `;
    });
}

showFavourites();
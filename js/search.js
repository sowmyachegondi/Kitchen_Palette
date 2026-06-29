function openSearch(){

    let recipe = prompt(
        "Enter recipe name:"
    );

    if(recipe != null){

        recipe =
        recipe.toLowerCase();

        if(recipe === "upma"){
            window.location.href =
            "breakfast.html";
        }

        else if(recipe === "biryani"){
            window.location.href =
            "lunch.html";
        }

        else if(recipe === "pakodi"){
            window.location.href =
            "snacks.html";
        }

        else if(recipe === "halwa"){
            window.location.href =
            "sweets.html";
        }

        else if(recipe === "chutney"){
            window.location.href =
            "chutneys.html";
        }

        else if(recipe === "coffee"){
            window.location.href =
            "beverages.html";
        }

        else{
            alert("Recipe not found.");
        }
    }
}

function openFavorites(){
    window.location.href =
    "favorites.html";
}

function searchRecipe(){

    let input =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase();

    let recipes =
        document.querySelectorAll(
            ".recipe"
        );

    recipes.forEach(recipe => {

        let text =
            recipe.innerText.toLowerCase();

        if(text.includes(input)){
            recipe.style.display =
            "block";
        }
        else{
            recipe.style.display =
            "none";
        }

    });
}
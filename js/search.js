function openFavorites() {
    window.location.href = "favorites.html";
}

function searchRecipe() {

    let recipe = prompt("Enter recipe name:");

    if (!recipe) return;

    recipe = recipe.trim().toLowerCase();

    const recipes = {

        // Breakfast
        "upma": "breakfast.html",
        "bondalu": "breakfast.html",
        "rava dosa": "breakfast.html",
        "punugulu": "breakfast.html",
        "dibba rotti": "breakfast.html",
        "atukula upma": "breakfast.html",
        "minapa garelu": "breakfast.html",
        "idli": "breakfast.html",
        "andhra pesarattu": "breakfast.html",
        "pesarattu": "breakfast.html",

        // Lunch / Dinner
        "andhra meals": "lunch.html",
        "gutti vankaya": "lunch.html",
        "gutti vankaya kura": "lunch.html",
        "gongura mutton": "lunch.html",
        "royyala iguru": "lunch.html",
        "andhra prawn curry": "lunch.html",
        "andhra chicken curry": "lunch.html",
        "tomato pappu": "lunch.html",
        "bendakaya fry": "lunch.html",
        "okra fry": "lunch.html",
        "andhra fish pulusu": "lunch.html",
        "pulihora": "lunch.html",
        "chicken biryani": "lunch.html",
        "biryani": "lunch.html",

        // Snacks
        "mirchi bajji": "snacks.html",
        "punugulu": "snacks.html",
        "masala garelu": "snacks.html",
        "garelu": "snacks.html",
        "chekkalu": "snacks.html",
        "sakinalu": "snacks.html",
        "janthikalu": "snacks.html",
        "murukku": "snacks.html",
        "onion pakodi": "snacks.html",
        "pakodi": "snacks.html",
        "peanut sundal": "snacks.html",
        "verusenaga guggillu": "snacks.html",
        "veg spring rolls": "snacks.html",
        "spring rolls": "snacks.html",

        // Sweets
        "pootharekulu": "sweets.html",
        "ariselu": "sweets.html",
        "bobbatlu": "sweets.html",
        "puran poli": "sweets.html",
        "sunnundalu": "sweets.html",
        "boorelu": "sweets.html",
        "poornalu": "sweets.html",
        "ravva kesari": "sweets.html",
        "paramannam": "sweets.html",
        "sweet pongal": "sweets.html",
        "kobbari louz": "sweets.html",
        "coconut burfi": "sweets.html",
        "halwa": "sweets.html",

        // Chutneys
        "ginger chutney": "chutneys.html",
        "allam pachadi": "chutneys.html",
        "peanut chutney": "chutneys.html",
        "verusenaga pachadi": "chutneys.html",
        "coconut chutney": "chutneys.html",
        "kobbari pachadi": "chutneys.html",
        "tomato chutney": "chutneys.html",
        "tomato pachadi": "chutneys.html",
        "gongura chutney": "chutneys.html",
        "gongura pachadi": "chutneys.html",
        "coriander chutney": "chutneys.html",
        "kothimeera pachadi": "chutneys.html",
        "dosakaya chutney": "chutneys.html",
        "yellow cucumber chutney": "chutneys.html",
        "onion chutney": "chutneys.html",
        "ullipaya pachadi": "chutneys.html",

        // Beverages
        "strawberry milkshake": "beverages.html",
        "milkshake": "beverages.html",
        "cold coffee": "beverages.html",
        "coffee": "beverages.html",
        "majjiga": "beverages.html",
        "spiced buttermilk": "beverages.html",
        "ragi malt": "beverages.html",
        "bellam paalu": "beverages.html",
        "jaggery milk": "beverages.html",
        "nannari sharbat": "beverages.html",
        "lemon juice": "beverages.html",
        "nimmakaya sharbat": "beverages.html",
        "badam milk": "beverages.html",
        "tea": "beverages.html"
    };

    if (recipes[recipe]) {
        window.location.href = recipes[recipe];
    } else {
        alert("Recipe not found!");
    }
}
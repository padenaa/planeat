
//check that they entered all the required info
var country = 0;
document.getElementById("location").addEventListener('click', (e) => {
    var cursorX = e.clientX;
    var cursorY = e.clientY;
    var el = document.getElementById("pin");
    if (cursorY < 390){
        country = 1;
        y = "80px";
        x = "130px";
    }else if (cursorY < 450){
        country = 2;
        y="130px";
        x= "130px";
    } else {
        country = 3;
        y="230px";
        x = "200px";
    }
    el.style.top = y;
    el.style.left = x;
});

document.getElementById("breakfast").addEventListener('click', ()=>{
    meal = 0;
    console.log(meal);
    recipefinder(country, meal);
    entered2 = true;
});
document.getElementById("lunch").addEventListener('click', ()=>{
    meal = 1;
    entered2 = true;
    recipefinder(country,meal)
});
document.getElementById("dinner").addEventListener('click', ()=>{
    meal = 2;
    entered2 = true;
    recipefinder(country,meal)
});


var recipes_c = [["https://theviewfromgreatisland.com/rhubarb-breakfast-cake-recipe/", "https://smittenkitchen.com/2011/05/ribboned-asparagus-salad-with-lemon/", "https://smittenkitchen.com/2008/09/spinach-quiche-revisited/"],
                ["https://www.jessicagavin.com/vegan-whole-grain-raspberry-breakfast-bars/","https://smittenkitchen.com/2018/07/grilled-zucchini-ribbons-with-pesto-and-white-beans/","https://www.bettycrocker.com/recipes/stuffed-peppers/63e29e18-903e-467c-aec5-fba4ce3a138f"],
                ["https://www.delish.com/cooking/recipe-ideas/a28186318/apple-pancakes-recipe/","https://www.loveandlemons.com/butternut-squash-soup/","https://www.delish.com/cooking/recipe-ideas/a28556182/pumpkin-ravioli-recipe/"],
                ["https://www.tyrantfarms.com/recipe-chestnut-breakfast-porridge/","https://www.bbcgoodfood.com/recipes/turnip-gratin","https://www.bonappetit.com/recipe/sweet-potato-curry"]
                ];
var recipes_u = [["https://www.foodnetwork.com/recipes/geoffrey-zakarian/classic-french-toast-with-strawberry-syrup-2314118","https://www.foodnetwork.com/recipes/ina-garten/chive-biscuits-recipe-1947090","https://www.bonappetit.com/recipe/ricotta-gnocchi"],
                ["https://www.thekitchenmagpie.com/healthy-breakfast-peach-crisp/","https://www.epicurious.com/recipes/food/views/grilled-corn-salad-with-hot-honey-lime-dressing","https://smittenkitchen.com/2014/09/herbed-tomato-and-roasted-garlic-tart/"],
                ["https://www.chelanfresh.com/crowd-pleasing-pear-bread/","https://www.loveandlemons.com/beet-recipes/","https://www.spendwithpennies.com/scalloped-potatoes-recipe/"],
                ["https://www.tasteofhome.com/recipes/tangerine-muffins/","https://www.loveandlemons.com/kale-recipes/","https://smittenkitchen.com/2006/10/unflinchingly-good-things/"]
                ];
var recipes_m = [["https://www.allrecipes.com/recipe/245303/sweet-coconut-oatmeal/","https://www.delish.com/uk/cooking/recipes/a33009374/scallion-pancakes-recipe/","celery soup"],
                ["https://somethingnewfordinner.com/recipe/mango-breakfast-jars/","https://www.delish.com/cooking/recipe-ideas/recipes/a51467/easy-homemade-salsa-recipe/","https://www.allrecipes.com/recipe/274814/chicken-tacos-with-pineapple-salsa/"],
                ["https://www.wellplated.com/watermelon-smoothie/","https://www.bonappetit.com/recipe/cucumber-and-onion-salad","https://www.tasteofhome.com/recipes/southwestern-sauteed-corn/"],
                ["https://cleangreensimple.com/article/amy-gorin-mandarin-orange-smoothie-bowl-recipe/","https://smittenkitchen.com/2007/06/catch-up-solstice-edition/","https://thenovicechefblog.com/pan-fried-plantains/"]
                ];

function recipefinder (country, meal){
    d = new Date();
    month = d.getMonth();
    season = 0; //1 for spring, 4 for winter
    console.log(month);

    if (month<=1){
        season = 3;
    } else if (month <=4){
        season = 0;
    } else if (month <= 7){
        season = 1;
    } else if (month <= 10){
        season = 2;
    } else{
        season = 3;
    }

    if (country==1){
        link = recipes_c[season][meal];
    } else if (country==2){
        link = recipes_u[season][meal];
    } else{
        link = recipes_m[season][meal];
    }

    window.location = link;
}

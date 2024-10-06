const container = document.getElementById('container');


async function getCategory() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = await response.json();
        console.log('Seafood Category:', data);

   
        container.innerHTML = `<h2>Seafood Category:</h2><ul>`;
        data.meals.forEach(meal => {
            container.innerHTML += `<li>${meal.strMeal}</li>`;
        });
        container.innerHTML += `</ul>`;
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
}


async function getIngredient() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        const data = await response.json();
        console.log('Chicken Breast Ingredient:', data);

        
        container.innerHTML = `<h2>Chicken Breast Ingredient:</h2><ul>`;
        data.meals.forEach(meal => {
            container.innerHTML += `<li>${meal.strMeal}</li>`;
        });
        container.innerHTML += `</ul>`;
    } catch (error) {
        console.error('Error fetching ingredient data:', error);
    }
}

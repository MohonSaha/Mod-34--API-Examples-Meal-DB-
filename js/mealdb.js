document.getElementById('error-massage').style.display = 'none';

// ===========MEAL DETAIL BRING FROM API BY NAME======================= 
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    
    const searchText = searchField.value;

    //========================= CLEAR DATA ============================== 
    searchField.value = '';

    if(searchText == ''){
        console.log('fuck off');
    }
    else{
    //========================= LOAD DATA ==============================
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
     fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error));
    }

}
//=============================== SHOW ERROR MASSAGE ====================
const displayError = error => {
    document.getElementById('error-massage').style.display = 'block';

}


    //============================== SHOW SEARCH RESULT BY NAME============= 
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length == 0){
        console.log('no Result Found ');
    }
    else{
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
             <div onClick="loadMealDetail(${meal.idMeal})" class="card">
                <img height="300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                 </div>
            </div>
            `;
            searchResult.appendChild(div);
        })
    }
   
};
//===========MEAL DETAIL BRING FROM API BY ID===================== 
const loadMealDetail = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
}

//============================ SHOW SEARCH RESULT BY ID=====================
const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.textContent ='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
         <div class="card ">
            <img height="300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text"> ${meal.strInstructions.slice(0,150)} </p>
             <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
         </div>
         </div>
    `;
    mealDetails.appendChild(div);
}
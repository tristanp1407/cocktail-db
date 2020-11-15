const axios = require('axios');

let formattedData;

function formatData (allData){
    formattedData = []
    console.log("formatting data")
    let ingredientString = "strIngredient";
    let measureString = "strMeasure";
    let measureKey;
    let ingredientKey;
    let len = allData.length;

    for (var j=0; j < len; j++){

        
        let formattedDrink = {
            name: allData[j].strDrink,
            imgUrl: allData[j].strDrinkThumb,
            ingredients:[],
            measurements:[],
            instructions: allData[j].strInstructions
        }

        //for loop creating ingredient and measure key name
        for (var i=1; i <= 12; i++ ){
            //generate key strings
            ingredientKey = ingredientString + i;
            measureKey = measureString + i;

            //get value from data using keys
            if (allData[j][ingredientKey] != null){
                formattedDrink.ingredients.push(allData[j][ingredientKey])
            }

            if (allData[j][measureKey] != null){
                formattedDrink.measurements.push(allData[j][measureKey])
            }
        }

        formattedData.push(formattedDrink)        
    }  
    return formattedData 
}


function getDrink (searchInput) {
    console.log("seach input", searchInput)
    let allData;
    // let searchInput = "marg"
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    axios
        .get(url + searchInput)
        .then((response) => {
            (allData = response.data.drinks)
            formatData(allData)
        });
}


console.log("running");

export {getDrink, formattedData}

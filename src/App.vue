<template>
  <div>
    <button @click="searchForDrink()">CLICK</button>
    <button @click="logData()">CLICK</button>
    <div class="search-cont">
      <div class="search-bar">
        <input
          class="searchBar"
          placeholder="Type drink or ingredient..."
          type="text"
          v-model="searchInput"
          @keyup="searchForDrink()"
        />
        <p class="cocktaildb">
          using
          <a
            href="https://www.thecocktaildb.com/api.php"
            :style="{textDecortion: 'none'}"
          >TheCocktailDB</a> APIs - to be consumed with moderation...
        </p>
      </div>
    </div>

    <!-- <div class="results">
      <div v-for="drink in allData" class="tile">
        <div class="hero">
          <img style="height: 100%" :src="drink.strDrinkThumb" />
        </div>

        <div class="details">
          <h1>{{drink.strDrink}}</h1>

          <ul class="ingredients">
            <li v-if="drink.strIngredient1 !== null"> 
              {{drink.strIngredient1}}
              <span
                v-if="drink.strMeasure1 !== null"
                class="measure"
              >({{drink.strMeasure1}})</span>
            </li>
            <li v-if="drink.strIngredient2 !== null">
              {{drink.strIngredient2}}
              <span
                v-if="drink.strMeasure2 !== null"
                class="measure"
              >({{drink.strMeasure2}})</span>
            </li>
            <li v-if="drink.strIngredient3 !== null">
              {{drink.strIngredient3}}
              <span
                v-if="drink.strMeasure3 !== null"
                class="measure"
              >({{drink.strMeasure3}})</span>
            </li>
            <li v-if="drink.strIngredient4 !== null">
              {{drink.strIngredient4}}
              <span
                v-if="drink.strMeasure4 !== null"
                class="measure"
              >({{drink.strMeasure4}})</span>
            </li>
            <li v-if="drink.strIngredient5 !== null">
              {{drink.strIngredient5}}
              <span
                v-if="drink.strMeasure5 !== null"
                class="measure"
              >({{drink.strMeasure5}})</span>
            </li>
            <li v-if="drink.strIngredient6 !== null">
              {{drink.strIngredient6}}
              <span
                v-if="drink.strMeasure6 !== null"
                class="measure"
              >({{drink.strMeasure6}})</span>
            </li>
            <li v-if="drink.strIngredient7 !== null">
              {{drink.strIngredient7}}
              <span
                v-if="drink.strMeasure7 !== null"
                class="measure"
              >({{drink.strMeasure7}})</span>
            </li>
            <li v-if="drink.strIngredient8 !== null">
              {{drink.strIngredient8}}
              <span
                v-if="drink.strMeasure8 !== null"
                class="measure"
              >({{drink.strMeasure8}})</span>
            </li>
            <li v-if="drink.strIngredient9 !== null">
              {{drink.strIngredient9}}
              <span
                v-if="drink.strMeasure9 !== null"
                class="measure"
              >({{drink.strMeasure9}})</span>
            </li>
            <li v-if="drink.strIngredient10 !== null">
              {{drink.strIngredient10}}
              <span
                v-if="drink.strMeasure10 !== null"
                class="measure"
              >({{drink.strMeasure10}})</span>
            </li>
            <li v-if="drink.strIngredient11 !== null">
              {{drink.strIngredient11}}
              <span
                v-if="drink.strMeasure11 !== null"
                class="measure"
              >({{drink.strMeasure11}})</span>
            </li>
            <li v-if="drink.strIngredient12 !== null">
              {{drink.strIngredient12}}
              <span
                v-if="drink.strMeasure12 !== null"
                class="measure"
              >({{drink.strMeasure12}})</span>
            </li>
            <li v-if="drink.strIngredient13 !== null">
              {{drink.strIngredient13}}
              <span
                v-if="drink.strMeasure13 !== null"
                class="measure"
              >({{drink.strMeasure13}})</span>
            </li>
            <li v-if="drink.strIngredient14 !== null">
              {{drink.strIngredient14}}
              <span
                v-if="drink.strMeasure14 !== null"
                class="measure"
              >({{drink.strMeasure14}})</span>
            </li>
            <li v-if="drink.strIngredient15 !== null">
              {{drink.strIngredient15}}
              <span
                v-if="drink.strMeasure15 !== null"
                class="measure"
              >({{drink.strMeasure15}})</span>
            </li>
          </ul>

          <p>{{drink.strInstructions}}</p>
        </div> 
      </div>
    </div>-->
  </div>
</template>

<script>
  import axios from "axios";
  const drinkHelper = require("./get-drinks");

  export default {
    name: "app",
    data() {
      return{
        formattedData: null,
        searchInput: "moj"
      }
      
    },

    methods: {
           logData: function(){
         console.log(this.formattedData)  
        },
        
        searchForDrink: function (){
        drinkHelper.getDrink(this.searchInput);
        this.formattedData = drinkHelper.formattedData;
        // console.log(this.formattedData)
      },

 
    }
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap");

* {
  font-family: "Titillium Web", sans-serif;
}

.search-cont {
  display: flex;
  width: 100%;
  justify-content: center;
}

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
  margin: 50px;
}

.cocktaildb {
  font-size: 13px;
  color: lightgrey;
  margin-top: 10px;
}

.cocktaildb a:visited,
.cocktaildb a:active {
  text-decoration: none;
  color: rgb(172, 172, 172);
}

.searchBar {
  font-size: 100%;
  height: 40px;
  width: 60vw;
  max-width: 400px;
  border-radius: 50px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 5px 20px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.searchBar:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.results {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
}

.tile {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: 5px 8px 10px rgba(0, 0, 0, 0.22);
  margin: 30px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 300px;
  max-width: 500px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tile:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.hero {
  height: 300px;
  overflow: hidden;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.details h1,
ul,
p {
  margin: 8px;
}

.details h1 {
  font-weight: 400;
}

.ingredients {
  list-style: none;
  padding-left: 0px;
}

.measure {
  margin-left: 5px;
  color: rgb(141, 141, 141);
  font-size: 80%;
}
</style>

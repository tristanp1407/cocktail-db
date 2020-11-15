<template>
  <div>
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

    <div class="results">
      <div v-for="drink in formattedData" class="tile">

        <div class="hero">
          <img style="height: 100%" :src="drink.imgUrl" />
        </div>

        <div class="details">

          <h1>{{drink.name}}</h1>

          <ul class="ingredients">

            <li v-for="ingredient in drink.ingredients"> 
              {{ingredient.ingredient}}
              <span
                class="measure"
              >({{ingredient.measure}})</span>
            </li>

          </ul>

          <p>{{drink.instructions}}</p>

        </div> 
      </div>
    </div>
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
        searchInput: ""
      }
      
    },

    methods: {

      searchForDrink: function (){
        drinkHelper.getDrink(this.searchInput);
        this.formattedData = drinkHelper.formattedData;
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

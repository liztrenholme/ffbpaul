<template>
  <div id="app">
    <NavBar />
    <form id="search">
      Search
      <input name="query" v-model="searchQuery" />
    </form>
    <PlayersListTable
      v-bind:players="gridData"
      v-bind:columns="gridColumns"
      v-bind:filter-key="searchQuery"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PlayersListTable from "./components/PlayersListTable.vue";
// import { fetch } from "whatwg-fetch";
import players from './data/playerData.json'

export default {
  // el: '#demo',
  name: "app",
  components: {
    NavBar,
    PlayersListTable
  },
  // mounted: function async() {
  //   let dataObj = {};
  //   const request = new Request(
  //     "https://www.fantasyfootballnerd.com/service/players/xml/test/QB/",
  //     { method: "GET" }
  //   );
  //   const URL = request.url;
  //   const method = request.method;
  //   const credentials = request.credentials;
  //   const bodyUsed = request.bodyUsed;

  //   Window.fetch(request)
  //     .then(response => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong on api server!");
  //       }
  //     })
  //     .then(response => {
  //       console.debug(response);
  //       // ...
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });

  //   try {
  //     dataObj = fetch(
  //       "https://www.fantasyfootballnerd.com/service/players/xml/test/QB/",
  //       {
  //         credentials: "same-origin",
  //         // mode: "no-cors",
  //         method: "GET",
  //         headers: [
  //           ["Content-Type", "application/json"],
  //           ["Content-Type", "text/plain"],
  //           ["Access-Control-Allow-Origin", "*"]
  //         ],
  //         credentials: "include"
  //       }
  //     );
  //     console.log(dataObj);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  data: function() {
    return {
      searchQuery: "",
      gridColumns: ["displayName", "team", "position", "jersey"],
      gridData: players
      // [
      //   { name: "Chuck Norris", power: Infinity },
      //   { name: "Bruce Lee", power: 9000 },
      //   { name: "Jackie Chan", power: 7000 },
      //   { name: "Jet Li", power: 8000 }
      // ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  height: fit-content;
}
</style>

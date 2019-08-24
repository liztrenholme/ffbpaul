<template>
  <div id="app">
    <nav class="nav">
      <NavBar />
    </nav>
    <div class="mainContainer">
      <form id="search">
        Search
        <input name="query" v-model="searchQuery" placeholder="Begin typing..." />
      </form>
      <PlayersListTable
        v-bind:players="gridData"
        v-bind:columns="gridColumns"
        v-bind:filter-key="searchQuery"
      />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import PlayersListTable from './components/PlayersListTable.vue'
// import { fetch } from "whatwg-fetch";
import players from './data/playerData.json'

export default {
  name: 'app',
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
      searchQuery: '',
      gridColumns: ['displayName', 'team', 'position', 'jersey'],
      gridData: players
    }
  }
}
</script>

<style scoped>
#app {
  /* margin-top: -8em; */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  /* height: fit-content; */
}
.mainContainer {
  padding: 4em;
  margin-top: 10em;
  background-color: #2c3e50;
}
form {
  background-color: #5c89b6;
  width: fit-content;
  margin: 2em auto 1em auto;
  padding: 1em;
  border-radius: 5px;
}
.nav {
  margin-bottom: 1em;
}
</style>

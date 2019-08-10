<template>
  <div id="app">
    <NavBar />
    <Button text='wtf' />
    <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
    <PlayersListTable :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue'
import Button from './components/Button.vue'
import PlayersListTable from './components/PlayersListTable.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    NavBar,
    Button,
    PlayersListTable
  },
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  height: fit-content;
}
</style>

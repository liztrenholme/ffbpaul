<template>
  <div class="nav">
    <h1>Player Picker</h1>
    <h3>Kobayashi's Revenge</h3>
    <ul>
      <li>View Draft List</li>
      <li>Teams</li>
      <li>News</li>
      <li><Button text="Start Draft!" /></li>
    </ul>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'NavBar',
  props: {
    // kittehs: String,
  },
  components: {
      Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    position: fixed;
    width: 100%;
    background-color: #fff;
    padding-bottom: 1em;
    color: #2c3e50;
}
h3 {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 .5em;
}
a {
  color: #42b983;
}
</style>

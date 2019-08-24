<template>
  <div class="basic-button">
   {{ text }}
    </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic-button {
    width: fit-content;
    padding: .5em 1em;
    color: #02164d;
    background-color: #fff;
    border: 1px solid #02164d;
    border-radius: 10px;
    cursor: pointer;
}
:hover {
    background-color: #02164d;
    color: #fff;
}

</style>

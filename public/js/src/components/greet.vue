<template lang="html">
  <div class="container">
    <h1>{{ heading }}</h1>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Greet',
    data() {
      return {
        heading: `It's Bimbo!`,
        desc: `A generic VueJS project skeleton based on Gulp, Browserify, Eslint, Karma, Jasmine, Browsersync and Less.`
      };
    }
  }
</script>

<style lang="css" scoped>
  .container {
    color: rgb(247, 251, 252);
  }
</style>

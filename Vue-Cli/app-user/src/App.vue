<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Result />
    <Counter />
    <Other /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Counter from './components/Counter'
// import Result from './components/Result'
// import Other from './components/Other'
export default {

  name: 'App',
  // components: {
  //   HelloWorld,
  //   Counter,
  //   Result,
  //   Other
  // }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

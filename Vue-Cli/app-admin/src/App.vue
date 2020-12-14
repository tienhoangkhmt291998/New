<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/User">User</router-link>
    </div>
    <el-button align="left" type="primary" v-show="this.$store.state.btn_new" @click="newUser" >New User</el-button>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
    newUser() {
      this.$router.push("/User/New")
      this.$store.state.btn_new = false
    }

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

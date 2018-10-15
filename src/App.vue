<template>
<div class="container-fluid">
  <div class="row">   
    <div class="col-md-4">
      <img src="./assets/christian-lambert-u.jpg" fluid alt="sonajalaleht"/>
    </div>
  <div class="col-md-8" id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">ToDo</router-link> |
      <router-link to="/learn">Learn</router-link> |
      <router-link to="/example">Example</router-link> |
      <router-link to="/resources">Resources</router-link> |
      <router-link to="/game">Game</router-link> |
      <router-link to="/feedback">Feedback</router-link>
    </div>
    <router-view/>
   </div>
  </div>
</div>
</template>

<script>
  import TodoList from "./views/Todo.vue";
  import MyGame from "./views/Game.vue";
  import NewExample from "./views/Example.vue";

  export default {
    name: "app",
    components: {
      TodoList,
      MyGame,
      NewExample
    }
  };
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  background: rgb(233, 233, 233);
  font-family: Arial, Helvetica, sans-serif;
}
html body {
  height: calc(100% - 50px);
  //background: url("./assets/christian-lambert.jpg");
}
.page {
  position: fixed;
  width: inherit;
}
img {
  max-width: 100%;
  height: auto;
}
</style>

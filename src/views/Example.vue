<template>
<div>
  
  <div class="example">
    <h3>Näited</h3>
    <p>Lorem ipsum dolor</p>
  
  
    <div id="naide1">
      <button v-on:click="show = !show">Vajuta</button>
    <transititon name="fade">
      <p v-if="show">Hello!</p>
    </transititon>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: "NewExample",


el: "#naide1",
data: {
  show: true
}
};
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
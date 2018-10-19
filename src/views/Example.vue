<template>
<div>
  
  <div class="example">
    <h3>Näited</h3>
    <p>Vali näide</p>
  
    <div class="col-md-8">

    <div><br></br>
      <input v-model="naide1">
      <p>{{ naide1 }}</p>
    </div><br></br>

    <div>
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Pööra ümber</button><br></br>
    </div><br></br>

    <div> 
    <transititon name="fade">
      <p v-if="show">Tervitus!</p>
    </transititon>
    <button v-on:click="show = !show">Kaota-taasta</button>
    </div>    

    </div>
  </div>
  
</div>
</template>

<script>
export default {
  name: "NewExample",

data: () => ({
  naide1: "kirjuta siia",
  message: "lehmad söövad haljal karjamaal",
  show: true
}),
      
  methods: {
  reverseMessage: function () {
    this.message = this.message.split(' ').reverse().join(' ')
  }
},
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
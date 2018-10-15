<template>
<div>
  <div class="game">
      <h3><b>Klikkimise mäng</b></h3>
      <h5><b>Kliki ringil</b></h5>
    
  <div class="flex-container">
  <link href="https://fonts.googleapis.com/scss?family=Dosis:400,300,600" rel="stylesheet" type="text/scss">
  
  <section id="app"> 
      <div id="div1">
        <button type="submit" @click="updateCount()" id="clickButton"></button>
      
        <!-- Second status  -->
        <div id="status"></div>
        <h1> Klikkisid <b>{{ numClicks }}</b> korda</h1>
        <h2> Sul on <b>{{ secs }}</b> sekundit </h2>
      </div>
    </section>
    
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "MyGame",

//new Vue({
  //  el: '#app',
  data: {
    active: false,
    //numClicks: "",
    template: "<b>{{ numClicks }}</b>",
    numClicks: 0,
    secs: 10,
    colors:["#9bcd77","#d777b0","#fed401","#ff2c3c","#66c652"]
  },

    ready:function(){
        var self = this;
        setInterval(function(){
            if(self.active){
                self.secs--;
                if(self.secs == 0){
                    self.active = false;
                    $("button").addClass("over");
                    $("#status").html("<h2>Game Over</h2>");
                }
            }
        },1000);
      },

    methods: {
        updateCount: function () {
            this.numClicks += 1;    
            if(this.active == false){
                this.secs = 10;
                this.numClicks = 0;
                this.active = true;
            }

            if (this.numClicks % 10 == 0) {
                $("button").animate({ width: "-=15px", height: "-=15px" }, 500, "easeOutElastic", function () { })
            }

            var color = this.colors[ Math.round( Math.random()*(this.colors.length-1) ) ];
            $("button").scss({backgroundColor:color});

        }
    }
 //})
};
</script>

<style scoped lang="scss">
.flex-container {
  min-height: 500px;
  //display: -webkit-box;
  //display: -moz-box;
  //display: -ms-flexbox;
  //display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
#div1 {
  background-color: #323133;
  color: #fff;
  text-align: center;
  font-family: "Dosis", sans-serif;
  background-image: url("http://imgh.us/bg_12.svg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 73vh;
  background-attachment: fixed;
  //min-height: 300px;
}
button {
  position: relative;
  top: 100px;
  border: none;
  color: #fff;
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 50%;
  background-color: #f2ca27;
}
button:active {
  width: 190px;
  height: 190px;
}
button:focus {
  outline: none;
}
#status {
  background: transparent;
  position: relative;
  top: 60px;
}
#status h2 {
  font-size: 60px;
  text-transform: uppercase;
}
#timer {
  text-align: center;
  margin-top: 140px;
}

#app {
  margin: 0 auto;
}
#app h1 {
  color: #fff;
  margin-top: 140px;
  font-weight: 300;
}
.over {
  background-color: transparent;
  display: none;
}
h3, h5 {
  color: #276055;
}
</style>
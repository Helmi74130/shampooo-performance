let message = {
  props: ['message', 'type'],
  template:`<div :class="type" >{{message}}</div> `
}

let piou = {
  props: ['texte', 'type'],
  template:`<div :class="type" >{{texte}}</div> `
}


let vm = new Vue({
  el: '#app',
  components:{
    message, 
    piou
  },
  data() {
    return {
      message: "Nettoyage auto  de qualité supérieure en exclusivité sur Djerba",
      message2: "DANGER",
      link: 'https://v2.vuejs.org/v2/guide/installation.html',
      success: false,
      persons: ["Amina", "Naila", "Helmi", "Mamou"],
      seconds: 0,
    }
  },
  computed: {
     cls: function(){
      console.log('cls call');
      return this.success ? 'alert-primary' : 'alert-danger'
    },

  },
  mounted() {

  },
  
})

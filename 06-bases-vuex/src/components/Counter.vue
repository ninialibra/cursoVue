<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{$store.state.count}}</h2>
    <h2>Computed: {{countComputed}}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">random</button>

    <h1>mapState</h1>
    <h2>mapState: {{count}}</h2>
    <h2>lastMutation: {{lastMutation}}</h2>
  </div>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default{

  //computed: mapState(['count'])

  computed:{
    countComputed(){
      return this.$store.state.count;
    },
    //...mapState(['count','lastMutation'])
    ...mapState({
      count: state=>state.count,
      lastMutation: state=>state.lastMutation,
      isLoading: state=>state.isLoading
    })
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    incrementBy(){
      this.$store.commit('incrementBy',5)
    },
    incrementRandomInt(){
      this.$store.dispatch('incrementRandomInt');
    },
    ...mapActions(['incrementRandomInt'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

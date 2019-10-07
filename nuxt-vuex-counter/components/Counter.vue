<template>
  <section>
    <h2>{{ title }}</h2>
    <span>count: {{ $store.state.counter.count }}</span>
    <button v-on:click="$store.commit('counter/countUp')">+1</button>
    <button v-on:click="$store.commit('counter/countReset')">reset</button>
  </section>
</template>

<script>
  export default {
    data: function() {
      return {
        title: 'Counter'
      }
    }
  }
</script>

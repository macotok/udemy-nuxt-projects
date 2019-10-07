<template>
  <div class="container">
    <div>
      <!-- クラシックモードで実装 -->
      <!--<p>{{ $store.state.message }}</p>-->
      <!-- <button v-on:click="$store.commit('updateMessage')">update</button> -->
      <!--<button v-on:click="$store.commit('updateMessage', 'Commit with payload')">update</button>-->
      <!--<button v-on:click="$store.dispatch('updateMessageAction')">Dispatch</button>-->
      <!--<button v-on:click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">Dispatch</button>-->

      <!-- モジュールモードで実装 -->
      <p>{{ $store.state.hello.message }}</p>
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Commit with module mode')">module mode</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

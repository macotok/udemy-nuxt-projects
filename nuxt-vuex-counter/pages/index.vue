<template>
  <div class="container">
    <Counter />
    <hr>
    <Counter />
    <hr>
    <Counter />
    <hr>
  </div>
</template>

<script>
import Counter from '~/components/Counter';

export default {
  components: {
    Counter,
  }
}
</script>

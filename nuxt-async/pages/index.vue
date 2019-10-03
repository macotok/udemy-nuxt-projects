<template>
  <div class="container">
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}, {{ user.name }}, {{ user.company.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData({ params, error }) {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => ({users: res.data}))
      .catch(e => {
        error({ users: e.response.status, message: 'Error!' })
      })
  }
}
</script>

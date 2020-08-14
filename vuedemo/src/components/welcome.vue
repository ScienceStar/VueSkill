<template>
  <div id="welcome">
    <p>{{ name }},{{ msg }}</p>
    <p>
      <router-link to="/">{{ jumpTo }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      msg: 'this is welcome',
      name: 'mike',
      num: 1,
      jumpTo: '到首页去'
    }
  }
}
</script>

<style scoped>

</style>

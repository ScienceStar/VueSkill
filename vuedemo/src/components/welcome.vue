<template>
  <div id="welcome">
    <p>{{ name }},{{ msg }}</p>
    <p>
      <router-link to="/">{{ jumpTo }}</router-link>
    </p>
    <p>{{ msg | capitalize }}</p>
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
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>

</style>

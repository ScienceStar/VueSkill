<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><input type="text" v-model="num"/>
      <button @click="num++">+</button>
    </p>
    <p><input type="text" v-model="num1"/>
      <button @click="num1+num2" v-model="num3">+</button>
      <input type="text" v-model="num2"/>
      <span>=</span><input type="text" v-model="num3"/></p>
    <p>{{ name }},You are the {{ num }} persons!</p>
    <ul>
      <li>
        <p>
        <router-link to="/welcome">到欢迎页面去</router-link>
      </p>
      </li>
      <li>
        <p>
          <router-link to="/knowledge">到基础测试页面去</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'mike',
      num: 1,
      num1: 1,
      num2: 3,
      num3: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

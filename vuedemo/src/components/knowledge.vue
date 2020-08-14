<template>
  <div id="knowledge">
    <div v-if="Math.random()>0.5">
      <span>Sorry</span>
    </div>
    <div v-else>
      <router-link to="/welcome">到欢迎页面去</router-link>
      <h1 v-show="!flag">hello</h1>
    </div>
    <hr/>
    <button @click="changeSite('http://www.baidu.com')">改变站点</button>
    <ol>
      <li v-for="(value,key,index) in sites">
        <a v-bind:href="value.name">{{ index }}.{{ key }}:{{ value.name }}</a><br/>
        <span>------------------------------------</span>
      </li>
    </ol>

    <div id="app">
      <span v-for="n in 10">{{ n }} </span>
    </div>
    <div id="convert">
      <span>原始字符串:</span><span>{{ message }}</span><br/>
      <span>翻转后的字符串:</span><span>{{ convert }}</span>
    </div>
    <div id="site">
      <p><a :href="site">{{ site }}</a></p>
    </div>
    <hr/>
    <div div="watch">
      <p style="color: chartreuse;font-size: 25px">计数器:{{ counter }}</p>
      <button @click="counter++" style="font-size: 25px">点我</button>
    </div>
    <div id="computed_props">
      <div v-bind:class="[activeClass, errorClass]"></div>
      千米 : <input type="text" v-model="kilometers">
      米 : <input type="text" v-model="meters">
    </div>
    <div id="focus">
      <input type="text" v-focus/>
    </div>
    <div id="hook" v-hook:hello.a.b="message">
    </div>
  </div>
</template>

<script>
export default {
  name: "knowledge",
  data() {
    return {
      flag: false,
      sites: [
        {siteId: 1, name: 'http://www.baidu.com'},
        {siteId: 2, name: 'http://www.google.com'},
        {siteId: 3, name: 'http://www.sina.com'},
        {siteId: 4, name: 'http://www.taobao.com'},
      ],
      message: 'This is knowledge test page!',
      name: 'Google',
      url: 'http://www.google.com',
      counter: 0,
      kilometers: 0,
      meters: 0,
      activeClass: 'active',
      errorClass: 'text-danger'
    }
  },
  methods: {
    changeSite: function (newValue) {
      var names = newValue.split(' ')
      //this.name = names[0]
      this.url = names[names.length - 1]
    }
  },
  computed: {
    convert: function () {
      return this.message.split('').reverse().join('')
    },
    site: {
      // getter
      get: function () {
        return this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  },
  watch: {
    counter: function (nval, oval) {
      alert('计数变化:' + oval + '变为' + nval + '!');
    },
    kilometers: function (val) {
      this.kilometers = val;
      this.meters = this.kilometers * 1000
    },
    meters: function (val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    },
    hook: {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  }
}
</script>

<style scoped>
.active {
  width: 100px;
  height: 100px;
  background: green;
}

.text-danger {
  background: red;
}
</style>

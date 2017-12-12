<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <img :src="src">
    <div class="link">
      <ul>
      <router-link to='/Exp' tag='a'><a href="/Exp">个人简介</a></router-link>
      /
      <router-link to='/list' tag='a'><a href="/list">联系方式</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import path  from '../assets/logo.png'
export default {
  name: 'hello',
  data () {
    return {
      msg: '跨越你的跨越',
      src: path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  /* font-weight: normal; */
  font-family: "等线";
  font-weight: lighter;
  color:#666;
}
ul {
  list-style-type: none;
  margin-top: 5%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul a {
  color: cornflowerblue;
  text-decoration: none;
  font-size: 17px;
}
</style>

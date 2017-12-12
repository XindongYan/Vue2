<template>
  <div>
      <br />
      <a href='http://www.yendnx.club'>第一个上线的Demo
        <br />
        <img :src="src">
      </a>
      <br />
      <br />
      <br />      
      <a href='https://github.com/XindongYan/bbs.yendax-new-project'>第一代较成熟的NodeJS项目
        <br />
        <img :src="src1">
      </a>

      
  </div>
  
</template>


<script>
import img from '../assets/store.png'
import node from '../assets/node.png'
export default {
  data() {
      return {
          src: img,
          src1: node,
          link: 'http://yendnx.club',
          url: 'www.baidu.com',
        }
      }
    }

    
</script>

<style scoped>
a {
    color: #49D5C0;
    text-decoration: none;
    font-family: '微软雅黑';
    font-weight: normal;
    font-size: 18px;
}
img {
    width: 350px;
}
</style>


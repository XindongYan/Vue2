<template>
  <div>
      <ul>
          <li><img :src="qq" alt=""><span>QQ联系: 1657586283</span></li>
          <li><img :src="weibo" alt=""><span>Weibo: Yenden</span></li>
          <li><img :src="wechat" alt=""><span>WeChat: 钟声</span></li>
          <li><img :src="github" alt=""><span>Github: XindongYan</span></li>
      </ul>
  </div>
</template>

<script>
import qq from '../assets/qq.png'
import weibo from '../assets/微博.png'
import wechat from '../assets/微信.png'
import github from '../assets/github.png'

export default {
    data() {
        return {
            qq: qq,
            wechat: wechat,
            weibo: weibo,
            github: github,
        }
    }
}
</script>

<style>
   li {
       height: 60px;
       line-height: 60px;
       margin-top: 30px;
       list-style-type:none;
   }
    div {
        margin-top: 150px;
    }
    img {
        height: 30px;
    }
    span {
        padding: 30px;
        margin-top: -20px;
    }
</style>

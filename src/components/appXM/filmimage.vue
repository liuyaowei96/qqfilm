<template>
  <div style="background:#fff;margin-top:10px;">
    <mt-header title="">
      <router-link to="/filmOne" slot="right">
        <mt-button id="fs">更多</mt-button>
        <mt-button icon="more" id="fs"></mt-button>
      </router-link>
      <mt-button icon="" slot="left"><img :src="imgurl" /><span>{{title}}</span></mt-button>
    </mt-header>
    <filmage :list="list"></filmage>
  </div>
</template>
<script>
import filmage from './filmage.vue'
export default {
  components:{
    "filmage":filmage
  },
  props:["list","title","imgurl"]
}
</script>
<style scoped>
  .mint-header{
    background: #fff;
  }
  #fs{
    color:#999;
    margin-top:15px;
    padding-right:5px;
  }
  img{
    margin-top:10px;
  }
  span{
    font-size:16px;
    padding-left:5px;
    display: inline-block;
    height:40px;
    color:#000;
    line-height:40px;
    transform: translateY(-6px)
  }
</style>
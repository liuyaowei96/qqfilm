<template>
  <div>
    <ul>
      <li v-for="(item,i) of list" :key="i"><span>{{item.font}}</span><img :src="item.img"><a :href="item.href">{{item.title}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },props:["list"]
}
</script>
<style scoped>
  ul{
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    justify-content:space-between;
    padding:0 3%;
  }
  li{
    width:32%;
    position: relative;
  }
  li>img{
    width:100%;
  }
  a{
    margin-top:5px;
    margin-bottom:5px;
    display:block;
    font-size:14px;
    color:#333;
    text-align:center;
    text-decoration: none;
  }
  span{
    color:#fff;
    font-size:12px;
    position:absolute;
    padding:5px;
    top:5px;
    left:-5px;
    background-color:#09BB07;
  }
  span::before{
    content: "";
    position: absolute;
    left: 1px;
    bottom: -4px;
    border-top: 4px solid #086407;
    border-left: 4px solid transparent;
  }
</style>
<template>
<div style="background:#fff;padding-bottom:10px;">
  <div class="swipe-top">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../assets/lb01.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb02.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb03.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb04.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb05.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb06.png" /></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/lb07.png" /></mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="border-flex">
      <ul>
        <li><a href="#">动作片</a></li>
        <li><a href="#">喜剧片</a></li>
        <li><a href="#">爱情片</a></li>
        <li><a href="#">科幻片</a></li>
        <li><a href="#">恐怖片</a></li>
        <li><a href="#">剧情片</a></li>
        <li><a href="#">战争片</a></li>
        <li><a href="#">大陆剧</a></li>
        <li><a href="#">港台剧</a></li>
        <li><a href="#">日韩剧</a></li>
        <li><a href="#">欧美剧</a></li>
        <li><a href="#">其他片</a></li>
        <li><a href="#">新马泰</a></li>
      </ul>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style scoped>
@media screen and (min-width:320px) and (max-width:374px){
  .swipe-top{
    height:160px;
    text-align:center;
    }
  img{width:100%;}
}
@media screen and (min-width:375px) and (max-width:413px){
  .swipe-top{
    height:205px;
    text-align:center;
    }
  img{width:100%;}
}
@media screen and (min-width:414px){
  .swipe-top{
    height:220px;
    text-align:center;
    }
  img{width:100%;}
}
 
  .border-flex>ul{
    margin:0;
    padding:0;
    display:flex;
    flex-wrap: wrap;
    padding-left:2px;
    /* justify-content:space-around; */
  }
  .border-flex>ul>li{
    width:23%;
    height:30px;
    margin-top:10px;
    margin-left:5px;
    box-sizing: border-box;
    list-style:none;
    border:1px solid #e2e2e2;
    border-radius:4px;
    text-align:center;
  }
  .border-flex>ul>li>a{
    color:#666;
    font-size:10px;
    font-family: "Microsoft YaHei";
    text-decoration: none;
    line-height:2.3; 
  }
</style>
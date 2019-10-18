<template>
  <div class="border-bian">
    <input cancel-text="" placeholder="输入影片关键词...">
    <a href="http://localhost:8081/#/Login"><img src="../../assets/icon.png"></a>
    <!-- <mt-search cancel-text="" placeholder="搜索"></mt-search> -->
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.border-bian{
  border:10px solid #f2f2f2;
  /* border-radius: 50px; */
  background-color: #f2f2f2;
  display:flex;
}
/* .mint-search{
  height:50px;
} */
 input{
    width:80%;
    height:20px;
    /* background-color:#fff; */
    color: #666;
    font-size:14px;
    font-family:"Microsoft YaHei";
    /* border-radius:50px; */
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    padding: 6px 12px;
    border:1px solid transparent;
    outline: 0;
  }
  img{
    padding-left:10px;
  }
</style>
<template>
  <div class="bg-color">
    <searchone></searchone>
    <slidefont></slidefont>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">按时间</mt-tab-item>
      <mt-tab-item id="2">按人气</mt-tab-item>
      <mt-tab-item id="3">按推荐</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <moviecopy></moviecopy>
      <labell></labell>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <moviecopy></moviecopy>
      <labell></labell>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <moviecopy></moviecopy>
      <labell></labell>
    </mt-tab-container-item>
  </mt-tab-container>
  </div>
</template>
<script>
import searchone from './searchone.vue';
import Moviecopy from './Moviecopy.vue';
import label from './label.vue';
import slidefont from './slidefont';
export default {
  data(){
    return{
      selected:"1",
    }
  },
  components:{
    "searchone":searchone,
    "moviecopy":Moviecopy,
    "labell":label,
    "slidefont":slidefont
  }
}
</script>
<style scoped>
  .bg-color{
    background-color:#fff;
  }
  .mint-navbar{
    margin-right:120px;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #09BB07;
    color: #09BB07;
    margin-bottom: -3px;
  }
  .mint-navbar /deep/ .mint-tab-item-label{
    font-size:15px;
  }
</style>

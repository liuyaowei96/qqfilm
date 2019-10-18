<!--底部导航栏通常都放在index里面做！-->
<template>
  <div>
    <mt-tab-container v-model="active">
        <!-- 子面板 -->
        <mt-tab-container-item id="tab1">首页</mt-tab-container-item>
        <mt-tab-container-item id="tab2">电影</mt-tab-container-item>
        <mt-tab-container-item id="tab3">电视剧</mt-tab-container-item>
        <mt-tab-container-item id="tab4">动漫</mt-tab-container-item>
        <mt-tab-container-item id="tab5">综艺</mt-tab-container-item>
      </mt-tab-container>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="tab1">
        <img slot="icon" :src="active=='tab1'?require('../../assets/11.png'):require('../../assets/01.png')">
        <!-- <span :style="active=='tab1'?'color:#26a2ff':'color:#666'">首页</span> -->
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" :src="active=='tab2'?require('../../assets/12.png'):require('../../assets/02.png')">
        电影
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" :src="active=='tab3'?require('../../assets/13.png'):require('../../assets/03.png')">
        电视剧
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" :src="active=='tab4'?require('../../assets/14.png'):require('../../assets/04.png')">
        动漫
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <img slot="icon" :src="active=='tab5'?require('../../assets/15.png'):require('../../assets/05.png')">
        综艺
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {active:""}
  }
}
</script>
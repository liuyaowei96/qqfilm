<template>
  <div>
    <ui>
      <li v-for="(item,i) of list" :key="i"><span>{{item.font}}</span><img :src="item.img"><a :href="item.href">{{item.title}}</a></li>
    </ui>
  </div>
</template>
<script>
export default {
  data(){
    
  }
}
</script>
<style scoped>

</style>
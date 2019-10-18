<template>
  <div>
    <van-tabs>
      <van-tab title="按剧情" disabled></van-tab>
      <van-tab v-for="(elem,i) of font" :key="i" :title="elem"></van-tab>
    </van-tabs>
    <van-tabs>
      <van-tab title="按年份" disabled></van-tab>
      <van-tab v-for="(elem,i) of year" :key="i" :title="elem.film_year"></van-tab>
    </van-tabs>
    <van-tabs>
      <van-tab title="按地区" disabled></van-tab>
      <van-tab v-for="(elem,i) of state" :key="i" :title="elem.film_country"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      font:[],
      year:[],
      state:[]
    }
  },
  methods:{
    get_list(){
      this.axios.get("/slide_font").then(result=>{
        // console.log(result.data);
        for(var i=0;i<result.data.length;i++){
          this.font.push(result.data[i].t_font)
        }
        // console.log(this.font);
      })
    },
    get_table(){
      this.axios.get("/film_table").then(result=>{
        console.log(result.data);
        this.year=result.data[2];
        this.state=result.data[1];
      })
    }
  },
  created(){
    this.get_list();
    this.get_table();
  }
}
</script>

<style scoped>
  div{
    border-bottom:0.8px dashed #ccc;
  }
  div >>> .van-tabs__line{
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    height: 3px;
    background-color: #ccc;
    border-radius: 3px;
  }
  div /deep/ .van-tab--active{
    color:#09BB07;
  }
  /* div /deep/ .van-tab{
    color:#000;
  } */
</style>
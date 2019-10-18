<template>
  <div class="bg-img" :style="Height">
    <mt-header title="注册" >
    <router-link to="/Login" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    </mt-header>
    <div class="into-input">
      <input type="text" placeholder="请输入用户名..." v-model="uname">
      <input type="password" placeholder="请输入密码..." v-model="upwd">
      <input type="text" placeholder="请输入手机号码..." v-model="number">
    </div>
    <div class="btn">
      <button @click="into">注 册</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      Height:{height:"0px"},
      uname:"",
      upwd:"",
      number:""
    }
  },
  methods:{
    getH(){
      var h=window.innerHeight;
      this.Height.height=h+"px";
    },
    into(){
      var u=this.uname;
      var p=this.upwd;
      var n=this.number;
      var reg=/^[a-z0-9]{3,12}$/i;
      if(!reg.test(u)){
        this.$toast("用户名格式不正确");
        return;
      }
      if(!reg.test(p)){
        this.$toast("密码格式不正确");
        return;
      }else if(!reg.test(n)){
        this.$toast("手机号码格式不正确");
        return;
      }else{
        this.$toast("注册成功");
        this.$router.push("/Login");
        return;
      }
    }
  },
  created(){
    this.getH();
  }
}
</script>
<style scoped>
.bg-img .mint-header{
  background-color:rgba(248, 244, 244, 0);
  font-size:15px;
}
.bg-img{
  background:url("../../public/images/timg (1).jpg") no-repeat;
  background-color:#fff;
  width:100%;
  overflow: hidden;
  background-size:100% 100%;
}
.into-input{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top:120px;
}
.into-input input{
  width:60%;
  height:25px;
  padding:10px;
  background:rgba(248, 244, 244, 0);
  border:0;
  border-bottom:2px solid #fff;
  margin-bottom:5px;
  color:#fff;
}
.btn button{
    width:62%;
    height:40px;
    border:0px;
    border-radius: 10px;
    background:#cccc;
    color:#fff;
  }
  .btn button:hover{
    background:dodgerblue;
  }
</style>

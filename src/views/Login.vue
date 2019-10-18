<template>
  <div class="bg-figure" :style=Height>
    <mt-header title="登录" >
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    </mt-header>
    <div class="bg-border">
      <input label="用户名" placeholder="请输入用户名..." v-model="uname" type="text">
      <input label="密码" placeholder="请输入密码..." v-model="upwd" type="password">
    </div>
      <div class="btn">
        <button @click="login">登 录</button>
      </div>
      <div class="bd-a">
        <a href="#">忘记密码 ?</a>
        <div class="bd-span">
          <span><a href="http://localhost:8080/#/Registration">注 册</a></span>
        </div>
      </div>
      <div class="img-padding">
        <a href="#"><img src="../../public/images/weixin.png" alt=""></a>
        <a href="#"><img src="../../public/images/qq.png" alt=""></a>
        <a href="#"><img src="../../public/images/weibo.png" alt=""></a>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      Height:{height:"0px"},
      uname:"",upwd:""
    }
  },
  methods:{
    getH(){
      var h=window.innerHeight;
      this.Height.height=h+"px";
    },
    login(){
      var u=this.uname;
      var p=this.upwd;
      var reg=/^[a-z0-9]{3,12}$/i;
      if(!reg.test(u)){
        this.$toast("用户名格式不正确");
        return;
      }
      if(!reg.test(p)){
        this.$toast("密码格式不正确");
        return;
      }else{
        this.$toast("登录成功");
        this.$router.push("/index");
        return;
      }
      // var url="login";
      // var obj={uname:u,upwd:p};
      // this.axios.get(url,{params:obj}).then(res=>{
      //   var code=res.data;
      //   if(code==-1){
      //     this.$messagebox("消息","用户名或密码有误");
      //   }else{
      //     this.$router.push("/product");
      //   }
      // })
    }
  },
  created(){
    this.getH();
  }
}
</script>
<style sropde>
  .bg-figure .mint-header{
    background-color:rgba(248, 244, 244, 0);
    font-size:15px;
  } 
  .bg-figure{
    background:url("../../public/images/timg (1).jpg") no-repeat;
    background-color:#fff;
    width:100%;
    overflow: hidden;
    background-size:100% 100%;
  }
  .bg-figure input{
    width:60%;
    height:30px;
    border:0px;
    border-bottom:2px solid #fff;
    margin-bottom:5px;
    background-color:rgba(248, 244, 244, 0);
    padding-left:5px;
    font-size:15px;
    color:#fff;
  }
  .bg-border{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }
  .btn{
    display:flex;
    justify-content: center;
    margin-top:40px;
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
  .img-padding{
    width:100%;
    display:flex;
    justify-content:space-between;
  }
  .img-padding a img{
    width:40%;
    margin-top:180px;
    padding-left:30px;
    padding-right:30px;
    background:rgba(248, 244, 244, 0);
  }
  .bd-a{
    display:flex;
    justify-content: center;
    margin-top:20px;
    padding-left:60px;
  }
  .bd-a a{
    color:#cccc;
    font-family:"Monospace";
  }
  .bd-a a:hover{
    color:red;
    font-family:"Monospace";
  }
  .bd-a .bd-span{
    padding-left:30px;
  }
</style>

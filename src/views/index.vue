<template>
  <div>
    <mt-tab-container v-model="active">
      <!-- 子面板 -->
      <mt-tab-container-item id="tab1">
        <search></search>
        <swipe></swipe>
        <filmimage :imgurl="require('../assets/dianying.png')" :title="'电影'" :list="list"></filmimage>
        <filmimage :imgurl="require('../assets/dianshi.png')" :title="'电视剧'" :list="list1"></filmimage>
        <filmimage :imgurl="require('../assets/dongman.png')" :title="'动漫'" :list="list2"></filmimage>
        <filmimage :imgurl="require('../assets/zongyi.png')" :title="'综艺'" :list="list3"></filmimage>
        <div style="background:#fff;">
          <mt-header title="">
            <router-link to="/" slot="right">
              <mt-button id="f-size">更多</mt-button>
              <mt-button icon="more" id="f-size"></mt-button>
            </router-link>
            <mt-button icon slot="left">
              <img :src="require('../assets/xingxing.png')" />
              <span class="title">专题</span>
            </mt-button>
          </mt-header>
          <div class="image-bottom">
          <ul style="margin-left:10px;margin-right:10px;">
            <li v-for="(item,i) of column" :key="i">
              <a href="#">
                <img :src="item.img" />
              <div class="special">
                <span style="color:#fff;font-size:12px"><img src="../assets/xingxing01.png" style="width:16px;height:17px;">  {{item.title}}</span>
                <span style="color:#fff;font-size:16px;">{{item.font}}</span>
                <span class="top-trois" style="color:#fff;">{{item.size}}</span>
              </div>
              </a>
            </li>
          </ul>
            </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <searchone></searchone>
        <slidefont></slidefont>
        <filmimage :title="'今日热播'" :list="list"></filmimage>
        <hr>
        <hr>
        <hr>
        <hr>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <searchone></searchone>
        <slidefont></slidefont>
        <filmimage :title="'今日热播'" :list="list1"></filmimage>
        <hr>
        <hr>
        <hr>
        <hr>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <searchone></searchone>
        <slidefont></slidefont>
        <filmimage :title="'最新更新'" :list="list2"></filmimage>
        <hr>
        <hr>
        <hr>
        <hr>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab5">
        <searchone></searchone>
        <slidefont></slidefont>
        <filmimage :title="'最新更新'" :list="list3"></filmimage>
        <hr>
        <hr>
        <hr>
        <hr>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="tab1">
        <img
          slot="icon"
          :src="active=='tab1'?require('../assets/11.png'):require('../assets/01.png')"
        />
        <!-- <span :style="active=='tab1'?'color:#26a2ff':'color:#666'" class="size">首页</span> -->
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img
          slot="icon"
          :src="active=='tab2'?require('../assets/12.png'):require('../assets/02.png')"
        />
        电影
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img
          slot="icon"
          :src="active=='tab3'?require('../assets/13.png'):require('../assets/03.png')"
        />
        电视剧
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img
          slot="icon"
          :src="active=='tab4'?require('../assets/14.png'):require('../assets/04.png')"
        />
        动漫
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <img
          slot="icon"
          :src="active=='tab5'?require('../assets/15.png'):require('../assets/05.png')"
        />
        综艺
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>
.image-bottom > ul {
  list-style:none;
  margin:0;
  padding: 0px;
  height:585px;
}
.image-bottom > ul > li > a > img {
  width: 100%;
  height:170px;
  margin-bottom:5px;
}
.image-bottom > ul > li > a {
  display: block;
  position:relative;
}
.special{
   display: flex;
   flex-direction: column;
   position:absolute;
   left:50%;
   top:50%;
   text-align: center;
   margin-top:-37.5px; 
   margin-left:-52px; 
}
.special span+span{
  margin-top: 10px;
}
.mint-header {
  background:#fff;
}
#f-size{
  color:#999;
}
span.title{
    font-size:16px;
    padding-left:5px;
    display: inline-block;
    height:40px;
    color:#000;
    line-height:40px;
    transform: translateY(-6px)
}
.size{
  font-size:12px;
}
</style>
<script>
import searchone from "../components/appXM/searchone.vue";
import Search from "../components/appXM/Search.vue";
import Swipe from "../components/appXM/Swipe.vue";
import filmimage from "../components/appXM/filmimage.vue";
import slidefont from '../components/appXM/slidefont.vue'
export default {
  data() {
    return {
      active: "tab1",
      list: [
        {
          img: require("../assets/film1.jpg"),
          title: "终点的婚礼",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film2.jpg"),
          title: "死于明日",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film3.jpg"),
          title: "潘菲洛夫28勇士",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film4.jpg"),
          title: "畸形屋",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film5.jpg"),
          title: "铤而走险",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film6.jpg"),
          title: "阿特拉斯耸耸肩3",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film7.jpg"),
          title: "阿特拉斯耸耸肩2",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film8.jpg"),
          title: "阿特拉斯耸耸肩",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film9.jpg"),
          title: "只有我没有猫",
          href: "#",
          font: "HD高清"
        }
      ],
      list1: [
        {
          img: require("../assets/film10.jpg"),
          title: "失恋巧克力职人",
          href: "#",
          font: "11集"
        },
        {
          img: require("../assets/film11.jpg"),
          title: "善始善终",
          href: "#",
          font: "28集"
        },
        {
          img: require("../assets/film12.jpg"),
          title: "我的莫格利男孩",
          href: "#",
          font: "18集"
        },
        {
          img: require("../assets/film13.jpg"),
          title: "烈火军校",
          href: "#",
          font: "46集"
        },
        {
          img: require("../assets/film14.jpg"),
          title: "伪紗者之末路",
          href: "#",
          font: "12集"
        },
        {
          img: require("../assets/film15.jpg"),
          title: "拜托啦师兄",
          href: "#",
          font: "14集"
        },
        {
          img: require("../assets/film16.jpg"),
          title: "命悬一线的浪漫",
          href: "#",
          font: "全集"
        },
        {
          img: require("../assets/film17.jpg"),
          title: "食分喜欢你",
          href: "#",
          font: "16集"
        },
        {
          img: require("../assets/film18.jpg"),
          title: "红色追剿1949",
          href: "#",
          font: "全集"
        }
      ],
      list2: [
        {
          img: require("../assets/film19.jpg"),
          title: "永远十二第一季",
          href: "#",
          font: "21集"
        },
        {
          img: require("../assets/film20.jpg"),
          title: "黑色四叶草",
          href: "#",
          font: "99集+SP"
        },
        {
          img: require("../assets/film21.jpg"),
          title: "动物保卫战2",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film22.jpg"),
          title: "冰龙传说",
          href: "#",
          font: "HD高清"
        },
        {
          img: require("../assets/film23.jpg"),
          title: "异世界超能魔术师",
          href: "#",
          font: "9集"
        },
        {
          img: require("../assets/film24.jpg"),
          title:"星空之战",
          href: "#",
          font: "10集"
        },
        {
          img: require("../assets/film25.jpg"),
          title: "超能陆战队第二季",
          href: "#",
          font: "11集"
        },
        {
          img: require("../assets/film26.jpg"),
          title: "穿越火线:幽灵计划",
          href: "#",
          font: "10集"
        },
        {
          img: require("../assets/film27.jpg"),
          title: "异常生物见闻录",
          href: "#",
          font: "11集"
        }
      ],
      list3: [
        {
          img: require("../assets/film28.jpg"),
          title: "请给一顿饭",
          href: "#",
          font: "20190904期"
        },
        {
          img: require("../assets/film29.jpg"),
          title: "女人我最大2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film30.jpg"),
          title: "娱乐百分百2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film31.jpg"),
          title: "爱玩客2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film32.jpg"),
          title: "综艺热门2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film33.jpg"),
          title: "型男大主厨2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film34.jpg"),
          title: "小明星大跟班2019",
          href: "#",
          font: "20190905期"
        },
        {
          img: require("../assets/film35.jpg"),
          title: "火箭少女101研究所",
          href: "#",
          font: "2019-09-05期"
        },
        {
          img: require("../assets/film36.jpg"),
          title: "到别的世界寻找自己",
          href: "#",
          font: "2019-09-05期"
        }
      ],
      column: [
        { img: require("../assets/tupian01.jpg"),title:"专题",font:"最烧脑力电影",size:"-- 20个影片 --"},
        { img: require("../assets/tupian02.jpg"),title:"专题",font:"连环变态杀手系列",size:"-- 20个影片 --"},
        { img: require("../assets/tupian03.jpg"),title:"专题",font:"黑帮电影",size:"-- 30个影片 --"}
      ]
    };
  },
  components: {
    search: Search,
    swipe: Swipe,
    filmimage: filmimage,
    "searchone":searchone,
    "slidefont":slidefont,
  }
};
</script>
<template>
	<div>
		<ul>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
			<li><span>HD高清</span><img src="../../../public/images/01.jpg" alt=""><a href="#">大黄蜂</a></li>
		</ul>
		<div class="xiabtn">
				<!-- <span>共100条数据</span> -->
				<a href="#">首页</a>
				<a href="#">上一页</a>
				<a href="#">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
		  	<a href="#">下一页</a>
				<a href="#">尾页</a>
				<input type="text"><button>跳 转</button>
		</div>
	</div>
</template>

<script>
// import slidefont from './slidefont';
export default {
	data(){
		return{}
	},
	prosp:["list"],
}
</script>
<style scoped>
	ul{
		display:flex;
		flex-wrap: wrap;
		justify-content:space-between;
		list-style: none;
		padding:0 3%;
		margin-top:10px;
	}
	li{
		width:32%;
    position: relative;
	}
	li>img{
    width:100%;
  }
	a{
		display:block;
		text-align: center;
		font-size:14px;
		color:#000;
		margin-top:5px;
    margin-bottom:5px;
	}
	span{
		background-color:#09BB07;
		color:#fff;
		font-size:12px;
		padding:3px;
		position:absolute;
		top:5px;
		left:-5px;
	}
	span:before{
		content: "";
    position: absolute;
    left: 1px;
    bottom: -4px;
    border-top: 4px solid #086407;
    border-left: 4px solid transparent;
	}
	.xiabtn{
		display:flex;
		flex-wrap: wrap;
		font-size:14px;
		justify-content: center;
		margin-top:10px;
		margin-bottom:5px;
	}
	.xiabtn a{
		font-size:14px;
		color:#666;
		margin-right:5px;
	}
	input{
		width:40px;
	}
	button{
		color:#666;
	}
</style>
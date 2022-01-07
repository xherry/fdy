<template>
	<view class="contentZzc">
		<image @click="close" src="../../static/more/dele.png" mode=""></image>
		<view class="navBox">
			<view class="" @click="switchPage(item.path,index)" :class="avtived===index?'active':''"
				v-for="(item,index) in list" :key="index">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "headSwiper",
		data() {
			return {
				list: [{
						name: "首页",
						path: "/pages/index/index"
					},
					{
						name: "开发案例",
						path: "/pages/case/case"
					},

					{
						name: "新闻资讯",
						path: "/pages/news/news"
					},
					{
						name: "关于我们",
						path: "/pages/about/about"
					},
				],
				avtived: 0,
				name: "about"
			};
		},
		props:{
			pathIndex:{
				type:Number,
				default:0
			}
		},
		activated() {

		},
		created() {

			this.avtived = this.pathIndex;

		},
		methods: {
			close() {
				this.$emit("close");
			},
			switchPage(path, index) {
				if (path && index !== this.avtived) {
					this.avtived = index;
					uni.navigateTo({
						url: path
					})
					this.close();
				}
			}
		},
	}
</script>

<style lang="less" scoped>
	.contentZzc {
		width: 100vw;
		height: 100vh;
		position: fixed;
		background-color: rgba(0, 0, 0, .5);
		z-index: 9999;
		left: 0;
		top: 0;

		image {
			width: 28rpx;
			height: 28rpx;
			position: absolute;
			top: 42rpx;
			right: 27rpx;
		}

		.navBox {
			width: 206rpx;
			height: 444rpx;
			padding-top: 40rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
			position: absolute;
			top: 102rpx;
			right: 48rpx;

			>view {
				width: 100%;
				text-align: center;
				color: #333333;
				font-size: 28rpx;
				height: 40rpx;
				line-height: 40rpx;
				margin-bottom: 60rpx;
			}

			.active {
				color: #0066FF;
			}
		}
	}
</style>

<template>
	<view class="newsContent">
		<image src="../../static/index/group1.png" v-if="!isShow" class="openNav" @click="open" mode=""></image>
		<view class="topBar">
			<view class="topBody">
				<view class="iconCircle">
					<view v-for="(item,index) in banner" :key="index">
						<image v-if="current===index" src="../../static/index/circle.png" mode=""></image>
						<view v-else></view>
					</view>
				</view>
				<image class="webLogo" :src="webInfo.logo" mode="widthFix"></image>
				<swiper class="swiper" @change="getcurrent" autoplay>
					<swiper-item v-for="(item,index) in banner" :key="index">
						<view class="swiper-item">
							<image :src="item.bannerUrl" mode=""></image>
							<!-- <view class="words">
								<view class="wordsBody">
									<view class="line"></view>
									<view class="wordsOne">企业一站式服务平台</view>
									<view class="wordsOther">给用户省心体验</view>
									<view class="wordsOther">一站式开发服务 </view>
								</view>
							</view> -->
		
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="news">
			<view class="newBox">
				<view class="newBox_item" v-for="(item,index) in news"  @click="toDetail(item.newsId)" :key="index">
					<image :src="item.newsImg" mode="aspectFill"></image>
					<view class="newWords">
						<view class="newWord1">{{item.newsTitle}}</view>
						<view class="newWord2">{{item.newsIntro}}</view>
					</view>
				</view>
			</view>
		</view>
		<footerBottom></footerBottom>
		<headSwiper :pathIndex="pathIndex" @close="close" v-if="isShow"></headSwiper>
	</view>
</template>

<script>
	import headSwiper from "../components/headSwiper.vue";
	import footerBottom from "../components/footerBottom.vue";
	export default {
		components: {
			headSwiper,
			footerBottom
		},
		data() {
			return {
				isShow: false,
				pathIndex: 2,
				page:1,
				limit:20,
				news:[],
				banner:[],
				webInfo:{},
				current:0
			};
		},
		onLoad() {
			this.getBanner();
			this.getNews();
			this.getWebInfo();
		},
		methods: {
			// 获取网站信息
			getWebInfo(){
				this.$http({
					url: "web/getInfo",
					method: "POST",
					data: {}
				}).then(res => {
					console.log("res===",res.data);
					this.webInfo = res.data;
				})
			},
			//
			getcurrent(e) {
				this.current = e.detail.current;
			},
			// 轮播图
			getBanner() {
				this.$http({
					url: "web/getBanner",
					method: "POST",
					data: {}
				}).then(res => {
					this.banner = res.data;
				})
			},
			close() {
				this.isShow = false
			},
			open() {
				this.isShow = true;
			},
			toDetail(id){
				uni.navigateTo({
					url:"./newsDetail?id="+id
				})
			},
			getNews() {
				this.$http({
					url: "web/getNews",
					method: "POST",
					data: {
						page:this.page,
						limit:this.limit
					}
				}).then(res => {
					this.news = res.data;
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.newsContent {
		width: 100vw;
		min-height: 100vh;
		position: relative;
		
		.news {
			height: 800rpx;
			overflow-y: auto;
			padding-top: 60rpx;
		
			.newBox {
				.seeMore {
					width: 168rpx;
					height: 60rpx;
					background-color: #0088FF;
					text-align: center;
					line-height: 60rpx;
					color: #FFFFFF;
					font-size: 26rpx;
					margin: 0 auto;
				}
		
				width: 656rpx;
				background: #ffffff;
				margin: 0 auto;
		
				.newBox_item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					margin-bottom: 20rpx;
		
					image {
						width: 162rpx;
						height: 162rpx;
						margin-right: 24rpx;
						background-color: #ff0000;
					}
		
					.newWords {
						flex: 1;
		
						.newWord1 {
							color: #333333;
							font-size: 26rpx;
							display: inline-block;
							width: 100%;
						}
		
						.newWord2 {
							color: #A1A1A1;
							font-size: 22rpx;
							width: 100%;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
					}
		
				}
			}
		}

		.mt38 {
			margin-top: 38rpx;
		}

		.Cambria {
			width: 100%;
			color: #333333;
			font-size: 32rpx;
			padding-left: 48rpx;
		}

		.navItems {
			display: flex;
			align-items: center;
			width: 656rpx;
			margin: 7px auto 0;
			justify-content: space-between;
			height: 70rpx;
			padding: 0 30rpx;
			border-top: 1px solid #0066FF;
			border-bottom: 1px solid #0066FF;
			view {
				color: #333333;
				font-size: 26rpx;
			}
			.active{
				color: #0066FF;
			}
		}

		

		.openNav {
			width: 32rpx;
			height: 28rpx;
			position: absolute;
			right: 26rpx;
			top: 42rpx;
			z-index: 888;
		}

		.topBar {
			width: 750rpx;
			height: 474rpx;
		
			.topBody {
				width: 100%;
				height: 100%;
				z-index: 99;
				position: relative;
		
				.webLogo {
					position: absolute;
					width: 78rpx;
					left: 68rpx;
					top: 30rpx;
					z-index: 999;
				}
		
				.iconCircle {
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					bottom: 40rpx;
					left: 0;
					z-index: 999;
					width: 100%;
		
					>view {
						margin-right: 26rpx;
						width: 22rpx;
						height: 22rpx;
						overflow: hidden;
						position: relative;
		
						image {
							width: 22rpx;
							height: 22rpx;
							position: absolute;
							left: 0;
							top: 0;
						}
		
						view {
							width: 10rpx;
							height: 10rpx;
							background-color: #FFFFFF;
							border-radius: 50%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
						}
		
					}
		
					>view:last-child {
						margin-right: 0;
					}
				}
		
				.swiper {
					width: 100%;
					height: 100%;
		
					.swiper-item {
						width: 100%;
						height: 100%;
						position: relative;
		
						>image {
							width: 100%;
							height: 100%;
						}
		
						.words {
							position: absolute;
							left: 0rpx;
							width: 100%;
							top: 0;
							height: 100%;
							padding: 30rpx 0 0 62rpx;
		
							// >image {
							// 	width: 68rpx;
							// 	height: 70rpx;
							// }
		
							.wordsBody {
								margin-top: 104rpx;
		
								.line {
									width: 130rpx;
									height: 8rpx;
									background: #00D3FF;
									margin-bottom: 18rpx;
								}
		
								.wordsOne {
									font-size: 30rpx;
									color: #FFFFFF;
									margin-bottom: 10rpx;
								}
		
								.wordsOther {
									font-size: 24rpx;
									color: #FFFFFF;
									margin-bottom: 3rpx;
								}
							}
						}
					}
				}
			}
		}

	}
</style>

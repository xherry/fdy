<template>
	<scroll-view class="content" scroll-y="true">
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
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="service">
			<view class="titles">
				<image src="../../static/index/group9.png" mode=""></image>
				<text>全面服务 产品多样</text>
				<image src="../../static/index/group9.png" mode=""></image>
			</view>
			<view class="instructions">涉及领域广泛 用心服务每一位客户</view>
			<view class="navItems">
				<view v-for="(item,index) in caseClass" @click="toCase(item)" :key="index">
					<!-- :style="item.style" -->
					<image :src="item.classImg" mode="aspectFill"></image>
					<view>{{item.className}}</view>
				</view>
			</view>
		</view>
		<view class="case">
			<view class="titles">
				<image src="../../static/index/group10.png" mode=""></image>
				<text style="color: #333333;">开发案例</text>
				<image src="../../static/index/group10.png" mode=""></image>
			</view>
			<view style="color: #333333;" class="instructions">涉及领域广泛 客户满意是我们的目的</view>
			<view class="caseItems">
				<view v-for="(item,index) in caseList" @click="toCaseDetail(item)" :key="index">
					<image class="bg" :src="item.caseImg" mode="aspectFill"></image>
					<view class="caseBg">
						<!-- <image :src="item.caseImg" mode=""></image> -->
						<view>
							<text class="word1">{{item.caseName}}</text>
							<view class="word2s">
								<text>{{item.caseIntro}}</text>
								<text>{{item.className}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="moreli" @click="toPath('/pages/case/case')">更多案例</view>
		</view>
		<view class="news">
			<view class="titles">
				<image src="../../static/index/group10.png" mode=""></image>
				<text style="color: #333333;">新闻资讯</text>
				<image src="../../static/index/group10.png" mode=""></image>
			</view>
			<view style="color: #333333;" class="instructions">了解行业资讯 掌握最新信息</view>
			<view class="newBox">
				<view class="newBox_item" v-for="(item,index) in news" @click="toDetail(item.newsId)" :key="index">
					<image :src="item.newsImg" mode="aspectFill"></image>
					<view class="newWords">
						<view class="newWord1">{{item.newsTitle}}</view>
						<view class="newWord2">{{item.newsIntro}}</view>
					</view>
				</view>
				<view class="seeMore" @click="toPath('/pages/news/news')">查看更多</view>
			</view>
		</view>
		<footerBottom :webInfo="webInfo"></footerBottom>
		<headSwiper :pathIndex="pathIndex" @close="close" v-if="isShow"></headSwiper>
	</scroll-view>
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
				title: 'Hello',
				list: [{
					img: require("../../static/index/topBg.png"),
					logo: require("../../static/index/group7.png"),
				}],
				isShow: false,
				current: 0,
				pathIndex: 0,
				banner: [],
				caseList: [],
				caseClass: [],
				news: [],
				webInfo: {}
			}
		},
		onLoad() {
			this.getBanner();
			this.getCase();
			this.getCaseClass();
			this.getNews();
			this.getWebInfo();
		},
		methods: {
			toCaseDetail(item) {
				uni.navigateTo({
					url: "../case/caseDetails/caseDetails?id=" + item.caseId
				})
			},
			toCase(item) {
				console.log(item);
				uni.navigateTo({
					url: "../case/case?id=" + item.caseClassId
				})
			},
			toDetail(id) {
				uni.navigateTo({
					url: "../news/newsDetail?id=" + id
				})
			},
			// 获取网站信息
			getWebInfo() {
				this.$http({
					url: "web/getInfo",
					method: "POST",
					data: {}
				}).then(res => {
					console.log("信息===", res.data);
					this.webInfo = res.data;
					uni.setStorageSync("webInfo", res.data);
				})
			},
			// 
			toPath(path) {
				uni.navigateTo({
					url: path
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
			// 首页案例
			getCase() {
				this.$http({
					url: "web/getIndexCase",
					method: "POST",
					data: {}
				}).then(res => {
					this.caseList = res.data;
				})
			},
			// 首页分类
			getCaseClass() {
				this.$http({
					url: "web/getIndexClass",
					method: "POST",
					data: {}
				}).then(res => {
					this.caseClass = res.data;
				})
			},
			//首页新闻
			getNews() {
				this.$http({
					url: "web/getIndexNews",
					method: "POST",
					data: {}
				}).then(res => {
					this.news = res.data;
				})
			},
			close() {
				this.isShow = false
			},
			open() {
				this.isShow = true;
			}
		}
	}
</script>

<style lang="less">
	.content {
		width: 100vw;
		height: 100vh;
		position: relative;

		.openNav {
			width: 32rpx;
			height: 28rpx;
			position: absolute;
			right: 26rpx;
			top: 42rpx;
			z-index: 888;
		}



		.news {
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

				width: 90%;
				background: #ffffff;
				box-shadow: 0px 6rpx 12rpx 0px rgba(0, 0, 0, 0.16);
				padding: 40rpx 32rpx 28rpx;
				margin: 0 auto;

				.newBox_item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					margin-bottom: 20rpx;

					image {
						width: 162rpx;
						height: 162rpx;
						background-color: #ff0000;
					}

					.newWords {
						width: 70%;

						.newWord1 {
							color: #333333;
							font-size: 26rpx;
							display: inline-block;
							width: 100%;
							white-space: pre-wrap;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
						}

						.newWord2 {
							color: #A1A1A1;
							font-size: 22rpx;
							// width: 100%;
							white-space: pre-wrap;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
					}

				}
			}
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
					z-index: 9999;
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

		.case {
			padding: 44rpx 0 0;

			.caseItems {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				padding: 44rpx 0 48rpx 50rpx;
				background: #ffffff;



				>view {
					width: 306rpx;
					height: 426rpx;
					margin-right: 46rpx;
					margin-bottom: 40rpx;
					position: relative;
					overflow: hidden;
					box-shadow: 0px 6rpx 12rpx 0px rgba(0, 0, 0, 0.16);


					.bg {
						width: 100%;
						height: 100%;
						// filter: blur(20rpx);
						// user-select: none;

					}

					.caseBg {
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0;
						top: 0;
						z-index: 88;

						image {
							width: 80%;
							height: 80%;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
						}

						>view {
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							height: 136rpx;
							padding: 22rpx 20rpx 0;
							z-index: 99;
							background-color: #FFFFFF;


							.word1 {
								color: #333333;
								font-size: 30rpx;
								width: 100%;
								display: inline-block;
							}

							.word2s {
								width: 100%;
								display: flex;
								align-items: center;
								justify-content: space-between;
								color: #959595;
								font-size: 20rpx;
								margin-top: 8rpx;
								width: 100%;

								text:last-child {
									color: #333333;
								}
							}
						}
					}
				}

				>view:nth-child(2n) {
					margin-right: 0;
				}
			}

			.moreli {
				width: 168rpx;
				height: 60rpx;
				text-align: center;
				line-height: 60rpx;
				border: 2rpx solid #9e9e9e;
				color: #9E9E9E;
				font-size: 26rpx;
				margin: 0 auto;
			}
		}

		.service {
			width: 100%;
			background-color: #0729A4;
			padding: 58rpx 44rpx 68rpx;

			.navItems {
				display: flex;
				align-items: center;
				width: 100%;
				flex-wrap: wrap;
				justify-content: center;

				>view:active {
					opacity: .7;
				}

				>view {
					width: 144rpx;
					height: 192rpx;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #294BC9;
					padding-bottom: 45rpx;
					margin-bottom: 38rpx;
					border-radius: 16rpx;
					box-shadow: 0rpx 6rpx 12rpx 0rpx rgba(38, 36, 36, 0.10);
					margin-right: 25rpx;

					image {
						width: 58rpx;
						height: 58rpx;
					}

					>view {
						width: 100%;
						text-align: center;
						font-size: 24rpx;
						color: #FFFFFF;
						position: absolute;
						bottom: 30rpx;
						left: 0;
					}
				}

				>view:nth-child(4n) {
					margin-right: 0;
				}
			}
		}


		.instructions {
			color: #FFFFFF;
			font-size: 24rpx;
			margin-top: 14rpx;
			text-align: center;
			margin-bottom: 40rpx;
		}

		.titles {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			text {
				color: #FFFFFF;
				font-size: 32rpx;
				padding: 0 20rpx;
			}

			image {
				width: 19rpx;
				height: 27rpx;
			}
		}

	}
</style>

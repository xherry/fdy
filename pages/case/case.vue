<template>
	<view class="caseContent">
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
		<view class="Cambria mt38">PROJECTS</view>
		<view class="Cambria">为您准备更多选择</view>
		<view class="navItems">
			<view :class="classIndex===item.caseClassId?'active':''" @click="switchClass(item.caseClassId)"
				v-for="(item,index) in caseClass" :key="index">{{item.className}}</view>
			<!-- <view>小程序</view>
			<view>移动APP</view>
			<view>官网</view> -->
		</view>
		<scroll-view scroll-y="true" @scrolltolower="scrolltolower" class="case">
			<view class="caseItems">
				<view v-for="(item,index) in caseList" :key="index">
					<image class="bg" :src="item.caseImg" mode="aspectFill"></image>
					<view class="caseBg">
						<view>
							<text class="word1">{{item.caseIntro}}</text>
							<view class="word2s">
								<text>{{item.className}}</text>
								<text>{{item.caseName}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
				pathIndex: 1,
				page: 1,
				limit: 20,
				caseList: [],
				caseClass: [],
				classIndex: 0,
				banner: [],
				webInfo: {},
				current: 0
			};
		},
		onLoad() {
			this.getBanner();
			this.getWebInfo();
			this.getCaseClass();
		},
		methods: {
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
			switchClass(id) {
				this.classIndex = id;
				this.page = 1;
				this.caseList = [];
				this.getCaseList();
			},
			close() {
				this.isShow = false
			},
			open() {
				this.isShow = true;
			},
			scrolltolower(e) {
				console.log("触发滚动");
				this.page += 1;
				this.getCaseList();
			},
			getCaseList() {
				this.$http({
					url: "web/getCase",
					method: "POST",
					data: {
						page: this.page,
						limit: this.limit,
						caseClassId: this.classIndex
					}
				}).then(res => {
					console.log("res===", res)
					this.caseList = [...this.caseList,...res.data];
				})
			},
			// 获取网站信息
			getWebInfo() {
				this.$http({
					url: "web/getInfo",
					method: "POST",
					data: {}
				}).then(res => {
					console.log("res===", res.data);
					this.webInfo = res.data;
				})
			},
			// 获取案例分类
			getCaseClass() {
				// web/getAllClass
				this.$http({
					url: "web/getAllClass",
					method: "POST",
					data: {}
				}).then(res => {
					console.log("分类====", res)
					this.caseClass = res.data;
					this.classIndex = res.data[0].caseClassId;
					this.getCaseList();
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.caseContent {
		width: 100vw;
		min-height: 100vh;
		position: relative;

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
			// justify-content: space-between;
			height: 70rpx;
			padding: 0 30rpx;
			border-top: 1px solid #0066FF;
			border-bottom: 1px solid #0066FF;

			view {
				color: #333333;
				font-size: 26rpx;
				margin-right: 80rpx;
			}

			view:nth-child(4n) {
				margin-right: 0;
			}

			.active {
				color: #0066FF;
			}
		}

		.case {
			width: 100%;
			height: 800rpx;
			margin-top: 30rpx;

			.caseItems {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				padding: 0rpx 0 48rpx 50rpx;
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

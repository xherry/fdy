<template>
	<view class="about">
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
		<!-- 	<view class="aboutIamge">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view> -->
		<view class="aboutWord">
			<!-- 峄朵云这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍这里是文字介绍 -->
			<rich-text :nodes="webInfo.introduction"></rich-text>
			<!-- {{webInfo.introduction}} -->
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
				pathIndex: 3,
				webInfo: {},
				banner:[],
				current:0
			};
		},
		onLoad() {
			this.getBanner();
			this.getInfo();
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
			close() {
				this.isShow = false
			},
			open() {
				this.isShow = true;
			},
			getInfo() {
				let webInfo = uni.getStorageSync("webInfo");
				webInfo.introduction = webInfo.introduction.replace(/<img/, "<img style='width:100%;display: block;'");
				this.webInfo = webInfo;
			},
		}
	}
</script>

<style lang="less" scoped>
	.about {
		width: 100vw;
		min-height: 100vh;
		position: relative;

		.aboutWord {
			padding: 0 42rpx;
			letter-spacing: 2rpx;
			text-indent: 40rpx;
			font-size: 26rpx;
			line-height: 40rpx;
			margin-top: 40rpx;
			color: #888888;
		}

		.aboutIamge {
			display: flex;
			align-items: center;
			padding: 0 42rpx;
			justify-content: space-between;
			margin-top: 20rpx;

			view {
				width: 152rpx;
				height: 200rpx;
				// margin-right: 20rpx;
				background-color: #ff0000;
			}

			view:nth-child(4n) {
				// margin-right: 0;
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

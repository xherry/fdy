<template>
	<view class="caseDetails">
		<image src="../../../static/index/group1.png" v-if="!isShow" class="openNav" @click="open" mode=""></image>
		<view class="topBar">
			<view class="topBody">
				<view class="iconCircle">
					<view v-for="(item,index) in banner" :key="index">
						<image v-if="current===index" src="../../../static/index/circle.png" mode=""></image>
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
		<view class="newRichText">
			<rich-text :nodes="newsInfo.caseContent"></rich-text>
		</view>
		<footerBottom></footerBottom>
		<headSwiper :pathIndex="pathIndex" @close="close" v-if="isShow"></headSwiper>
	</view>
</template>

<script>
	import headSwiper from "../../components/headSwiper.vue";
	import footerBottom from "../../components/footerBottom.vue";
	export default {
		components: {
			headSwiper,
			footerBottom
		},
		data() {
			return {
				isShow: false,
				pathIndex: 2,
				newsInfo: {},
				banner:[],
				webInfo:{},
				current:0
			};
		},
		onLoad(options) {
			this.getBanner();
			this.getWebInfo();
			this.getNewDetail(options.id);
		},
		methods: {
			// 获取网站信息
			getWebInfo() {
				this.webInfo = uni.getStorageSync("webInfo");
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
			getNewDetail(id) {
				this.$http({
					url: "web/getCaseById",
					method: "POST",
					data: {
						caseId: id
					}
				}).then(res => {
					if(res.data &&res.data.caseContent){
						res.data.caseContent = res.data.caseContent.replace(/<img/, "<img style='width:100%'")
					} else{
						res.data.caseContent = "暂无内容！"
					}
					this.newsInfo = res.data;
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.caseDetails {
		width: 100vw;
		min-height: 100vh;
		position: relative;

		.newRichText {
			padding: 40rpx;
			width: 100%;
			min-height: 400rpx;
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

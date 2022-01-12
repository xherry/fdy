<template>
	<view class="footerBottom">
		<view class="contactUs">
			<image src="../../static/index/group14.png" mode="aspectFill"></image>
			<view class="contactUsText"> <text>联系我们，我们将为您提供最优质的服务<br />感谢您的支持</text></view>
		</view>
		<view class="footer">
			<view class="footer_left">
				<view class="fl_item">
					<image src="../../static/index/group13.png" mode=""></image>
					<view>
						<view class="">联系电话</view>
						<view class="">{{webInfo.phone}}</view>
					</view>
				</view>
				<view class="fl_item">
					<image src="../../static/index/001.png" mode=""></image>
					<view>
						<view class="">电子邮箱</view>
						<view class="">{{webInfo.email}}</view>
					</view>
				</view>
			</view>
			<view class="footer_right">
				<view class="codeBox">
					<image :src="webInfo.qrcode1" mode=""></image>
				</view>
				<view class="words"><text>微信联系</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webInfo:{}
			};
		},
		props:{
		},
		created(){
			this.$http({
				url: "web/getInfo",
				method: "POST",
				data: {}
			}).then(res => {
				console.log("res===",res.data);
				this.webInfo = res.data;
			})
		},
	}
</script>

<style lang="less" scoped>
	.footerBottom {
		.footer {
			display: flex;
			// align-items: center;
			width: 750rpx;
			height: 332rpx;
			background-color: #0A1A47;
			padding: 54rpx 0 58rpx;
			justify-content: center;

			.footer_left {
				margin-right: 114rpx;
				.fl_item {
					display: flex;
					align-items: center;
					margin-bottom: 38rpx;

					image {
						width: 46rpx;
						height: 50rpx;
						margin-right: 30rpx;
					}

					>view {
						view {
							color: #fff;
							font-size: 26rpx;
						}
					}
				}

				.fl_item:last-child {
					image {
						width: 51rpx;
						height: 36rpx;
					}
				}
			}

			.footer_right {
				.codeBox {
					image {
						width: 126rpx;
						height: 128rpx;
						background-color: #FF0000;
						display: block;
						margin: auto;
					}

					width: 146rpx;
					height: 146rpx;
					background-color: #FFFFFF;
					// text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.words {
					width: 100%;
					text-align: center;
					margin-top: 14rpx;
					color: #FFFFFF;
					font-size: 24rpx;
				}

			}
		}

		.contactUs {
			width: 100%;
			height: 250rpx;
			position: relative;
			margin-top: 54rpx;

			image {
				width: 100%;
				height: 100%;
			}

			.contactUsText {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				color: #FFFFFF;
				font-size: 32rpx;
			}
		}
	}
</style>

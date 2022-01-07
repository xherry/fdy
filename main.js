import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const API_URL = "http://182.254.147.70/";

Vue.prototype.$http = function(params) {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: API_URL + params.url,
			method: params.method,
			data: params.data,
			header: {
				'content-Type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				resolve(res.data)
				// if (res.data.code == 100) {
				// 	resolve(res.data);
				// } else if (res.data.code == 101) {
				// 	let jump = uni.getStorageSync("jump");
				// 	if (!jump) {
				// 		uni.showToast({
				// 			title: "请重新登录",
				// 			icon: "none"
				// 		})
				// 		uni.reLaunch({
				// 			url: "/pages/user/Login.vue"
				// 		})
				// 		uni.setStorageSync("jump")
				// 	}
				// } else {
				// 	resolve(res.data)
				// 	uni.showToast({
				// 		title: res.data.msg,
				// 		icon: "none"
				// 	})
				// }
			},
			fail: res => {
				uni.showToast({
					title: "服务器异常",
					icon: "none"
				})
				reject(res.data)
			}
		})
	});

}



const app = new Vue({
	...App
})
app.$mount()

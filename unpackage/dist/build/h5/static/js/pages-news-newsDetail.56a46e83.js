(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-newsDetail"],{"41e7":function(t,e,i){"use strict";var n=i("b4da"),o=i.n(n);o.a},"46ac":function(t,e,i){"use strict";i.r(e);var n=i("d256"),o=i("87b0");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("41e7");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"553e89fb",null,!1,n["a"],r);e["default"]=d.exports},"87b0":function(t,e,i){"use strict";i.r(e);var n=i("898c"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"898c":function(t,e,i){"use strict";var n=i("4ea4");i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("dbf2")),a=n(i("1d02")),r={components:{headSwiper:o.default,footerBottom:a.default},data:function(){return{isShow:!1,pathIndex:2,newsInfo:{},banner:[],webInfo:{},current:0}},onLoad:function(t){this.getBanner(),this.getWebInfo(),this.getNewDetail(t.id)},methods:{getWebInfo:function(){this.webInfo=uni.getStorageSync("webInfo")},getcurrent:function(t){this.current=t.detail.current},getBanner:function(){var t=this;this.$http({url:"web/getBanner",method:"POST",data:{}}).then((function(e){t.banner=e.data}))},close:function(){this.isShow=!1},open:function(){this.isShow=!0},getNewDetail:function(t){var e=this;this.$http({url:"web/getNewsById",method:"POST",data:{newsId:t}}).then((function(t){t.data.newsContent=t.data.newsContent.replace(/<img/,"<img style='width:100%'"),e.newsInfo=t.data}))}}};e.default=r},"9d53":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".newsDetail[data-v-553e89fb]{width:100vw;min-height:100vh;position:relative}.newsDetail .newRichText[data-v-553e89fb]{padding:%?40?%;width:100%;min-height:%?400?%}.newsDetail .openNav[data-v-553e89fb]{width:%?32?%;height:%?28?%;position:absolute;right:%?26?%;top:%?42?%;z-index:888}.newsDetail .topBar[data-v-553e89fb]{width:%?750?%;height:%?474?%}.newsDetail .topBar .topBody[data-v-553e89fb]{width:100%;height:100%;z-index:99;position:relative}.newsDetail .topBar .topBody .webLogo[data-v-553e89fb]{position:absolute;width:%?78?%;left:%?68?%;top:%?30?%;z-index:999}.newsDetail .topBar .topBody .iconCircle[data-v-553e89fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;bottom:%?40?%;left:0;z-index:999;width:100%}.newsDetail .topBar .topBody .iconCircle > uni-view[data-v-553e89fb]{margin-right:%?26?%;width:%?22?%;height:%?22?%;overflow:hidden;position:relative}.newsDetail .topBar .topBody .iconCircle > uni-view uni-image[data-v-553e89fb]{width:%?22?%;height:%?22?%;position:absolute;left:0;top:0}.newsDetail .topBar .topBody .iconCircle > uni-view uni-view[data-v-553e89fb]{width:%?10?%;height:%?10?%;background-color:#fff;border-radius:50%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.newsDetail .topBar .topBody .iconCircle > uni-view[data-v-553e89fb]:last-child{margin-right:0}.newsDetail .topBar .topBody .swiper[data-v-553e89fb]{width:100%;height:100%}.newsDetail .topBar .topBody .swiper .swiper-item[data-v-553e89fb]{width:100%;height:100%;position:relative}.newsDetail .topBar .topBody .swiper .swiper-item > uni-image[data-v-553e89fb]{width:100%;height:100%}.newsDetail .topBar .topBody .swiper .swiper-item .words[data-v-553e89fb]{position:absolute;left:%?0?%;width:100%;top:0;height:100%;padding:%?30?% 0 0 %?62?%}.newsDetail .topBar .topBody .swiper .swiper-item .words .wordsBody[data-v-553e89fb]{margin-top:%?104?%}.newsDetail .topBar .topBody .swiper .swiper-item .words .wordsBody .line[data-v-553e89fb]{width:%?130?%;height:%?8?%;background:#00d3ff;margin-bottom:%?18?%}.newsDetail .topBar .topBody .swiper .swiper-item .words .wordsBody .wordsOne[data-v-553e89fb]{font-size:%?30?%;color:#fff;margin-bottom:%?10?%}.newsDetail .topBar .topBody .swiper .swiper-item .words .wordsBody .wordsOther[data-v-553e89fb]{font-size:%?24?%;color:#fff;margin-bottom:%?3?%}",""]),t.exports=e},b4da:function(t,e,i){var n=i("9d53");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("510391cf",n,!0,{sourceMap:!1,shadowMode:!1})},d256:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"newsDetail"},[t.isShow?t._e():n("v-uni-image",{staticClass:"openNav",attrs:{src:i("df68"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"topBar"},[n("v-uni-view",{staticClass:"topBody"},[n("v-uni-view",{staticClass:"iconCircle"},t._l(t.banner,(function(e,o){return n("v-uni-view",{key:o},[t.current===o?n("v-uni-image",{attrs:{src:i("83b3"),mode:""}}):n("v-uni-view")],1)})),1),n("v-uni-image",{staticClass:"webLogo",attrs:{src:t.webInfo.logo,mode:"widthFix"}}),n("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getcurrent.apply(void 0,arguments)}}},t._l(t.banner,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.bannerUrl,mode:""}})],1)],1)})),1)],1)],1),n("v-uni-view",{staticClass:"newRichText"},[n("v-uni-rich-text",{attrs:{nodes:t.newsInfo.newsContent}})],1),n("footerBottom"),t.isShow?n("headSwiper",{attrs:{pathIndex:t.pathIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)},a=[]}}]);
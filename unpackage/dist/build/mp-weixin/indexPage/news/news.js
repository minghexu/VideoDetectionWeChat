(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["indexPage/news/news"],{"02d8":function(n,e,t){"use strict";t.r(e);var i=t("14e3"),a=t("5d39");for(var u in a)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(u);t("f142");var o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5708d75c",null,!1,i["a"],void 0);e["default"]=s.exports},"14e3":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}));var i={uTabs:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(t.bind(null,"9507"))},uSkeleton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-skeleton/u-skeleton")]).then(t.bind(null,"8269"))},yiyuzhengnewsbox:function(){return t.e("components/yiyuzhengnewsbox/yiyuzhengnewsbox").then(t.bind(null,"5026"))},uLine:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-line/u-line")]).then(t.bind(null,"ec67"))},pajinsennewsbox:function(){return t.e("components/pajinsennewsbox/pajinsennewsbox").then(t.bind(null,"d907"))}},a=function(){var n=this.$createElement;this._self._c},u=[]},"50a6":function(n,e,t){"use strict";(function(n,e){var i=t("4ea4");t("b89e"),t("a9ff");i(t("66fd"));var a=i(t("02d8"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"5d39":function(n,e,t){"use strict";t.r(e);var i=t("687d"),a=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=a.a},"687d":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n.database(),i={data:function(){return{navlist:[{name:"阳光日报：抑郁症最新消息"},{name:"青年日报：帕金森最新消息"}],current:0,yiyuzhengDataList:[],pajinsenDataList:[],yilukangbanDataList:[],loadingState:!0}},onLoad:function(){this.yilukangbanGetData(),this.yiyuzhengGetData(),this.pajinsenGetData()},methods:{onPullDownRefresh:function(){0===this.current?this.yiyuzhengGetData():1===this.current?this.pajinsenGetData():this.yilukangbanGetData()},yilukangbanGetData:function(){this.loadingState=!0},yiyuzhengGetData:function(){var n=this;t.collection("yiyuzhengArticle").orderBy("publish_date desc").get().then((function(e){console.log(e),n.yiyuzhengDataList=e.result.data,n.loadingState=!1}))},pajinsenGetData:function(){var n=this;t.collection("pajinsenArticle").orderBy("publish_date desc").get().then((function(e){n.pajinsenDataList=e.result.data,n.loadingState=!1}))},clickNav:function(n){this.current=n.index}}};e.default=i}).call(this,t("a9ff")["default"])},c6f2:function(n,e,t){},f142:function(n,e,t){"use strict";var i=t("c6f2"),a=t.n(i);a.a}},[["50a6","common/runtime","common/vendor"]]]);
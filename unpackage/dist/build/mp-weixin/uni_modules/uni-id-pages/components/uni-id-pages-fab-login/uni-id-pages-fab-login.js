(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login"],{"04d1":function(e,t,n){},"224d":function(e,t,n){"use strict";n.r(t);var i=n("a1282"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"6ec3":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t,n){var i=arguments[arguments.length-1].currentTarget.dataset,r=i.eventParams||i["event-params"];n=r.item;n.path?e.toPage(n.path):e.login_before(n.id,!1)})},r=[]},"92bc":function(e,t,n){"use strict";n.r(t);var i=n("6ec3"),r=n("224d");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("fbe1");var u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},a1282:function(e,t,n){"use strict";(function(e,i){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("2eee")),u=r(n("9523")),a=r(n("c973")),s=r(n("0b26")),c=n("8394");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={computed:{agreements:function(){if(!s.default.agreements)return[];var e=s.default.agreements,t=e.serviceUrl,n=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]},agree:{get:function(){return this.getParentComponent().agree},set:function(e){return this.getParentComponent().agree=e}}},data:function(){return{servicesList:[{id:"username",text:"账号登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/user.png",path:"/uni_modules/uni-id-pages/pages/login/login-withpwd"},{id:"smsCode",text:"短信验证码",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/sms.png",path:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"},{id:"weixin",text:"微信登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/weixin.png"}],univerifyStyle:{fullScreen:!0,backgroundColor:"#ffffff",buttons:{iconWidth:"45px",list:[]},privacyTerms:{defaultCheckBoxState:!1,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[]}}}},watch:{agree:function(e){this.univerifyStyle.privacyTerms.defaultCheckBoxState=e}},created:function(){var e=this;return(0,a.default)(o.default.mark((function t(){var n,i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.servicesList,i=s.default.loginTypes,n=n.filter((function(e){return"apple"!=e.id&&i.includes(e.id)})),i.includes("univerify")&&(e.univerifyStyle.privacyTerms.privacyItems=e.agreements,n.forEach((function(t){var n=t.id,i=t.logo,r=t.path;"univerify"!=n&&e.univerifyStyle.buttons.list.push({iconPath:i,provider:n,path:r})}))),e.servicesList=n.filter((function(t){var n=t.path?t.path.split("?")[0]:"";return n!=e.getRoute(1)}));case 5:case"end":return t.stop()}}),t)})))()},methods:{getParentComponent:function(){return this.$parent},setUserInfo:function(e){console.log("setUserInfo",e)},getRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=getCurrentPages();return e>t.length?"":"/"+t[t.length-e].route},toPage:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.getRoute(1)==t.split("?")[0]&&"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"==this.getRoute(1)){var i=t.split("?")[1].split("=")[1];e.$emit("uni-id-pages-setLoginType",i)}else this.getRoute(2)==t?e.navigateBack():this.getRoute(1)!=t?0===n?e.navigateTo({url:t,animationType:"slide-in-left",complete:function(e){}}):e.redirectTo({url:t,animationType:"slide-in-left",complete:function(e){}}):console.log("出乎意料的情况,path："+t)},login_before:function(t){var n=arguments,i=this;return(0,a.default)(o.default.mark((function r(){var u,c,l,f,d,p,g,h,v;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(c=!(n.length>1&&void 0!==n[1])||n[1],l=n.length>2&&void 0!==n[2]?n[2]:{},console.log(t),!["qq","xiaomi","sinaweibo","taobao","facebook","google","alipay","douyin"].includes(t)){r.next=5;break}return r.abrupt("return",e.showToast({title:"该登录方式暂未实现，欢迎提交pr",icon:"none",duration:3e3}));case 5:if(!["univerify","apple"].includes(t)){r.next=7;break}return r.abrupt("return",e.showToast({title:"当前设备不支持此登录，请选择其他登录方式",icon:"none",duration:3e3}));case 7:if(f=((null===s.default||void 0===s.default||null===(u=s.default.agreements)||void 0===u?void 0:u.scope)||[]).includes("register"),"univerify"==t||!f||i.agree){r.next=11;break}return d=i.getParentComponent().$refs.agreements,r.abrupt("return",d.popup((function(){i.login_before(t,c,l)})));case 11:if(e.showLoading({mask:!0}),"univerify"!=t){r.next=19;break}return p=function(){e.hideLoading(),g.close(),g.offButtonsClick(v)},g=e.getUniverifyManager(),h=!1,v=function(){var t=(0,a.default)(o.default.mark((function t(n){var r,u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("点击了第三方登录，provider：",n,n.provider,i.univerifyStyle.buttons.list),h=!0,t.next=4,e.getCheckBoxState();case 4:r=t.sent,i.agree=r[1].state,u=i.univerifyStyle.buttons.list[n.index].path,u?(i.getRoute(1).includes("login-withoutpwd")&&u.includes("login-withoutpwd")&&i.getParentComponent().showCurrentWebview(),i.toPage(u,1),p()):i.agree?(p(),setTimeout((function(){i.login_before(n.provider)}),500)):e.showToast({title:"你未同意隐私政策协议",icon:"none",duration:3e3});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g.onButtonsClick(v),r.abrupt("return",g.login({univerifyStyle:i.univerifyStyle,success:function(e){i.login(e.authResult,"univerify")},fail:function(t){console.log(t),h||e.navigateBack()},complete:function(){var t=(0,a.default)(o.default.mark((function t(n){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.hideLoading(),g.offButtonsClick(v);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}));case 19:if("weixinMobile"!==t){r.next=21;break}return r.abrupt("return",i.login({phoneCode:l.phoneNumberCode},t));case 21:e.login({provider:t,onlyAuthorize:!0,success:function(){var n=(0,a.default)(o.default.mark((function n(r){var u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("apple"!=t){n.next=6;break}return n.next=3,i.getUserInfo({provider:"apple"});case 3:u=n.sent,Object.assign(r.authResult,u.userInfo),e.hideLoading();case 6:i.login("weixin"==t?{code:r.code}:r.authResult,t);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fail:function(){var t=(0,a.default)(o.default.mark((function t(n){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(n),e.hideLoading();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 22:case"end":return r.stop()}}),r)})))()},login:function(t,n){console.log({params:t,type:n});var r="loginBy"+n.trim().replace(n[0],n[0].toUpperCase()),o=i.importObject("uni-id-co",{customUI:!0});o[r](t).then((function(t){e.showToast({title:"登录成功",icon:"none",duration:2e3}),c.mutations.loginSuccess(t)})).catch((function(t){e.showModal({content:t.message,confirmText:"知道了",showCancel:!1})})).finally((function(t){"univerify"==n&&e.closeAuthView(),e.hideLoading()}))},getUserInfo:function(t){return(0,a.default)(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,i){e.getUserInfo(f(f({},t),{},{success:function(e){n(e)},fail:function(t){e.showModal({content:JSON.stringify(t),showCancel:!1}),i(t)}}))})));case 1:case"end":return n.stop()}}),n)})))()}}};t.default=d}).call(this,n("543d")["default"],n("a9ff")["default"])},fbe1:function(e,t,n){"use strict";var i=n("04d1"),r=n.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("92bc"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login-create-component']]
]);

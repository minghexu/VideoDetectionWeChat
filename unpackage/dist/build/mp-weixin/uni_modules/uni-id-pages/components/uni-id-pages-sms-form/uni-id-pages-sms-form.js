(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form"],{"3b69":function(e,t,n){"use strict";var i=n("676b"),u=n.n(i);u.a},"3bf1":function(e,t,n){"use strict";n.r(t);var i=n("4fee"),u=n("4c3f");for(var o in u)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("3b69");var a=n("f0c5"),s=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"b8ac4d94",null,!1,i["a"],void 0);t["default"]=s.exports},"4c3f":function(e,t,n){"use strict";n.r(t);var i=n("b5ab"),u=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=u.a},"4fee":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniCaptcha:function(){return n.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(n.bind(null,"5e01"))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,"dda5"))}},u=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.focusSmsCodeInput=!1})},o=[]},"676b":function(e,t,n){},b5ab:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-sms-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},type:{type:String,default:function(){return"login"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusSmsCodeInput:!1}},watch:{captcha:function(e,t){4==e.length&&4!=t.length&&this.start()},modelValue:function(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取短信验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(e){this.$refs.captcha.getImageCaptcha(e)},initClick:function(){var e=this;this.start=function(e,t){var n;return t=t||500,function(){var i=this,u=arguments;n&&clearTimeout(n);var o=!n;n=setTimeout((function(){n=null}),t),o&&e.apply(i,u)}}((function(){0==e.reverseNumber&&e.sendMsg()}))},sendMsg:function(){var t=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!/^1\d{10}$/.test(this.phone))return e.showToast({title:"手机号格式错误",icon:"none",duration:3e3});var i=n.importObject("uni-id-co",{customUI:!0});console.log("sendSmsCode",{mobile:this.phone,scene:this.type,captcha:this.captcha}),i.sendSmsCode({mobile:this.phone,scene:this.type,captcha:this.captcha}).then((function(n){e.showToast({title:"短信验证码发送成功",icon:"none",duration:3e3}),t.reverseNumber=Number(t.count),t.getCode()})).catch((function(n){"uni-id-invalid-sms-template-id"==n.code?(t.modelValue="123456",e.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(n.message)):(t.getImageCaptcha(),t.captcha="",e.showToast({title:n.message,icon:"none",duration:3e3}))}))},getCode:function(){var e=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){e.getCode()}),1e3)}}};t.default=i}).call(this,n("543d")["default"],n("a9ff")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3bf1"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component']]
]);

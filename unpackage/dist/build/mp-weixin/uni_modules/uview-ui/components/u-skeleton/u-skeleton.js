(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-skeleton/u-skeleton"],{"24a5":function(t,e,n){"use strict";var i=n("b7ce"),u=n.n(i);u.a},8269:function(t,e,n){"use strict";n.r(e);var i=n("bc14"),u=n("e1b7");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("24a5");var r=n("f0c5"),o=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"161f9e59",null,!1,i["a"],void 0);e["default"]=o.exports},b7ce:function(t,e,n){},bc14:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.loading&&t.avatar?t.$u.addUnit(t.avatarSize):null),i=t.loading&&t.avatar?t.$u.addUnit(t.avatarSize):null,u=t.loading&&t.title?t.$u.addUnit(t.titleHeight):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:u}})},u=[]},bdcb:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("2eee")),a=i(n("c973")),r=i(n("d8e0")),o={name:"u-skeleton",mixins:[t.$u.mpMixin,t.$u.mixin,r.default],data:function(){return{width:0}},watch:{loading:function(){this.getComponentWidth()}},computed:{rowsArray:function(){/%$/.test(this.rowsHeight)&&t.$u.error("rowsHeight参数不支持百分比单位");for(var e=[],n=0;n<this.rows;n++){var i={},u=t.$u.test.array(this.rowsWidth)?this.rowsWidth[n]||(n===this.row-1?"70%":"100%"):n===this.rows-1?"70%":this.rowsWidth,a=t.$u.test.array(this.rowsHeight)?this.rowsHeight[n]||"18px":this.rowsHeight;i.marginTop=this.title||0!==n?this.title&&0===n?"20px":"12px":0,/%$/.test(u)?i.width=t.$u.addUnit(this.width*parseInt(u)/100):i.width=t.$u.addUnit(u),i.height=t.$u.addUnit(a),e.push(i)}return e},uTitleWidth:function(){var e=0;return e=/%$/.test(this.titleWidth)?t.$u.addUnit(this.width*parseInt(this.titleWidth)/100):t.$u.addUnit(this.titleWidth),t.$u.addUnit(e)}},mounted:function(){this.init()},methods:{init:function(){this.getComponentWidth()},setNvueAnimation:function(){return(0,a.default)(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},getComponentWidth:function(){var e=this;return(0,a.default)(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$u.sleep(20);case 2:e.$uGetRect(".u-skeleton__wrapper__content").then((function(t){e.width=t.width}));case 3:case"end":return n.stop()}}),n)})))()}}};e.default=o}).call(this,n("543d")["default"])},e1b7:function(t,e,n){"use strict";n.r(e);var i=n("bdcb"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component',
    {
        'uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8269"))
        })
    },
    [['uni_modules/uview-ui/components/u-skeleton/u-skeleton-create-component']]
]);
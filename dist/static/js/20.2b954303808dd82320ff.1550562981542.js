webpackJsonp([20],{HPk4:function(e,t){},XDDZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("bOdI"),s=a.n(n),i=(a("GKy3"),a("4vvA")),o=a.n(i),c=a("i5qY"),u=a("22O3"),v={name:"Feedback",data:function(){return{values:""}},methods:{submit:function(){var e=this,t=u.a.get("id");""!=this.values?this.$post(this.HOST+"problem/save",{content:this.values,userId:t}).then(function(t){"1000000"==t.code&&(o.a.success("提交成功"),e.values="")}):o()("意见内容不能为空")}},components:s()({Head:c.a},o.a.name,o.a)},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"feedback"}},[a("Head",[e._v("意见反馈")]),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"contents"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.values,expression:"values"}],staticClass:"content1",attrs:{name:"content1",placeholder:"有问题或建议,请告诉我们"},domProps:{value:e.values},on:{input:function(t){t.target.composing||(e.values=t.target.value)}}})])]),e._v(" "),a("button",{on:{click:e.submit}},[e._v("确 认")])],1)},staticRenderFns:[]};var l=a("VU/8")(v,r,!1,function(e){a("HPk4")},"data-v-3be7b62f",null);t.default=l.exports}});
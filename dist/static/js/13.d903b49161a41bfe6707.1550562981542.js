webpackJsonp([13],{AE00:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("22O3"),a={name:"Welcome",data:function(){return{welcome:{width:"100%",height:"100%",backgroundImage:"url("+n("DGan")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},items:{phone:"",password:""},disabled:!0,register:"ע��"}},mounted:function(){var e=this;setTimeout(function(){r.a.get("id")?e.$router.push({path:"/Home"}):e.$route.query.channelType?e.$router.push({path:"/Login",query:{channelType:e.$route.query.channelType}}):e.$router.push({path:"/Login"})},3e3)}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:this.welcome})},staticRenderFns:[]};var u=n("VU/8")(a,o,!1,function(e){n("E2Vr")},"data-v-1b027e5c",null);t.default=u.exports},DGan:function(e,t,n){e.exports=n.p+"static/img/Welcome.db6a081.png"},E2Vr:function(e,t){}});
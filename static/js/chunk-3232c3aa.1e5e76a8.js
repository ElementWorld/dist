(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3232c3aa"],{"0e6a":function(t,e,n){},"77cb":function(t,e,n){"use strict";n.r(e);n("b680"),n("a9e3");var i=n("7a23"),a={class:"swap-box invest-box"},c={class:"list-box"},r={class:"top flex-middle"},s={class:"top-item flex-item"},o={class:"num"},d={class:"desc"},u={class:"bottom"},l={class:"row flex-middle"},b={class:"name"},j={class:"value"},f={class:"row flex-middle"},O={class:"name"},p={class:"value"};function m(t,e,n,m,v,g){var h=Object(i["L"])("HeadTop"),x=Object(i["L"])("van-list");return Object(i["E"])(),Object(i["j"])("div",a,[Object(i["n"])(h,{title:t.$t("index.投资记录"),isShowTop:!0,isSubHeader:!1},null,8,["title"]),Object(i["n"])(x,{loading:t.loading,"onUpdate:loading":e[0]||(e[0]=function(e){return t.loading=e}),"immediate-check":!1,error:t.error,"onUpdate:error":e[1]||(e[1]=function(e){return t.error=e}),"error-text":t.$t("index.请求失败，点击重新加载"),finished:t.finished,"finished-text":t.$t("index.没有更多了"),onLoad:t.onLoad},{default:Object(i["V"])((function(){return[Object(i["k"])("div",c,[(Object(i["E"])(!0),Object(i["j"])(i["a"],null,Object(i["K"])(t.list,(function(e,n){return Object(i["E"])(),Object(i["j"])("div",{class:"item",key:n},[Object(i["k"])("div",r,[Object(i["k"])("div",s,[Object(i["k"])("div",o,Object(i["P"])(Number(e.amount/Math.pow(10,18)).toFixed(6)),1),Object(i["k"])("div",d,Object(i["P"])(t.$t("index.推荐收益数量"))+"(ELE)",1)])]),Object(i["k"])("div",u,[Object(i["k"])("div",l,[Object(i["k"])("div",b,Object(i["P"])(t.$t("index.结算时间")),1),Object(i["k"])("div",j,Object(i["P"])(t.$dateformat(1e3*e.startTime,"yyyy-mm-dd HH:mm:ss")),1)]),Object(i["k"])("div",f,[Object(i["k"])("div",O,Object(i["P"])(t.$t("index.结算地址")),1),Object(i["k"])("div",p,Object(i["P"])(e.user.substring(0,8)+"...."+e.user.substring(e.user.length-8,e.user.length)),1)])])])})),128))])]})),_:1},8,["loading","error","error-text","finished","finished-text","onLoad"])])}var v=n("5530"),g=n("2909"),h=n("1da1"),x=(n("96cf"),n("1a2e")),k=n("5502"),w=n("365c"),L={components:{HeadTop:x["a"]},setup:function(){var t=Object(k["b"])(),e=Object(i["I"])({address:Object(i["f"])((function(){return t.state.accounts[0]})),web3:Object(i["f"])((function(){return t.state.provider})),swapContract:null,page:1,limit:5,loading:!1,error:!1,finished:!1,list:[],initContract:function(){e.initData()},initData:function(){e.list=[],e.page=1,e.getList()},onLoad:function(){e.page++,e.getList()},getList:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(w["a"])({user:e.address,limit:e.limit,page:e.page}).then((function(t){var n;1===e.page?e.list=t.data:(n=e.list).push.apply(n,Object(g["a"])(t.data));e.loading=!1,e.finished=!(Math.ceil(t.total/e.limit)>e.page)}));case 1:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()});e.address&&e.initContract(),Object(i["T"])((function(){return e.address}),(function(t){t&&e.initContract()}));var n=Object(i["Q"])(e);return Object(v["a"])({},n)}},y=(n("f64c"),n("6b0d")),$=n.n(y);const P=$()(L,[["render",m],["__scopeId","data-v-120029d5"]]);e["default"]=P},f64c:function(t,e,n){"use strict";n("0e6a")}}]);
//# sourceMappingURL=chunk-3232c3aa.1e5e76a8.js.map
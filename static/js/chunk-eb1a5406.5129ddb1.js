(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb1a5406"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("e330"),a=n("1d80"),c=n("577e"),i=n("5899"),o=r("".replace),u="["+i+"]",s=RegExp("^"+u+u+"*"),d=RegExp(u+u+"*$"),b=function(t){return function(e){var n=c(a(e));return 1&t&&(n=o(n,s,"")),2&t&&(n=o(n,d,"")),n}};t.exports={start:b(1),end:b(2),trim:b(3)}},7497:function(t,e,n){},"853e":function(t,e,n){"use strict";n("7497")},"943b":function(t,e,n){"use strict";n.r(e);n("a9e3");var r=n("7a23"),a={class:"user-box"},c={class:"nft-box"},i={class:"title"},o={class:"desc"},u={key:0,class:"btn-box"},s={key:1,class:"btn-box"},d=Object(r["m"])("已结束"),b={class:"children-num"},l={class:"tip"},f={class:"intro-box"},p={class:"title"},m={class:"list"},j={class:"token flex-item"},O=["data-clipboard-text"];function h(t,e,n,h,v,g){var x=Object(r["L"])("HeadTop"),N=Object(r["L"])("van-button");return Object(r["E"])(),Object(r["j"])("div",a,[Object(r["n"])(x,{title:t.$t("index.加入合伙人"),isShowTop:!0,isSubHeader:!1},null,8,["title"]),Object(r["k"])("div",c,[Object(r["k"])("div",i,Object(r["P"])(t.$t("index.加入合伙人获取元素世界勋章NFT")),1),Object(r["k"])("div",o,Object(r["P"])(t.$t("index.直接邀请至少个用户",{introNum:t.introNum,buyNftAmount:t.buyNftAmount})),1),Number(t.endTime)>0?(Object(r["E"])(),Object(r["j"])("div",u,[Number(t.usdtAllowance)>0?(Object(r["E"])(),Object(r["h"])(N,{key:0,disabled:t.isBuyNft,loading:t.btn.loading,type:"primary",size:"large",onClick:t.buyNft},{default:Object(r["V"])((function(){return[Object(r["m"])(Object(r["P"])(t.$t("index.加入合伙人")),1)]})),_:1},8,["disabled","loading","onClick"])):(Object(r["E"])(),Object(r["h"])(N,{key:1,type:"primary",loading:t.btn.loading,size:"large",onClick:t.approveUsdt},{default:Object(r["V"])((function(){return[Object(r["m"])(Object(r["P"])(t.$t("index.授权"))+" USDT",1)]})),_:1},8,["loading","onClick"]))])):(Object(r["E"])(),Object(r["j"])("div",s,[Object(r["n"])(N,{type:"primary",size:"large"},{default:Object(r["V"])((function(){return[d]})),_:1})])),Object(r["k"])("div",b,Object(r["P"])(t.$t("index.ido直推有效人数："))+Object(r["P"])(t.childrenNum),1),Object(r["k"])("div",l,Object(r["P"])(t.$t("index.花费USDT获得NFT",{buyNftAmount:t.buyNftAmount,introNum:t.introNum})),1)]),Object(r["k"])("div",f,[Object(r["k"])("div",p,Object(r["P"])(t.$t("index.我的IDO直推")),1),Object(r["k"])("div",m,[(Object(r["E"])(!0),Object(r["j"])(r["a"],null,Object(r["K"])(t.children,(function(e,n){return Object(r["E"])(),Object(r["j"])("div",{class:"item flex-middle",key:n},[Object(r["k"])("div",j,Object(r["P"])(e.substring(0,12))+"****"+Object(r["P"])(e.substring(e.length-12,e.length)),1),Object(r["k"])("div",{class:"copy-btn","data-clipboard-text":e},Object(r["P"])(t.$t("index.复制")),9,O)])})),128))])])])}var v=n("5530"),g=n("1da1"),x=(n("b680"),n("96cf"),n("1a2e")),N=n("5502"),w=n("01ea"),y=n("a4a5"),k=n("901e"),I=n.n(k),A=n("722f"),C=n("98b3"),E=n("47e2"),T=n("9d56"),R=n("626a"),B=n("b311"),S=n.n(B),P={components:{HeadTop:x["a"]},setup:function(){var t=Object(N["b"])(),e=Object(E["b"])(),n=e.t,a=Object(r["I"])({address:Object(r["f"])((function(){return t.state.accounts[0]})),web3:Object(r["f"])((function(){return t.state.provider})),idoContract:null,usdtContract:null,usdtBalance:"0.00",idoAmount:"0.00",buyNftAmount:"0.00",usdtAllowance:"",introNum:0,intro:C["a"].get()||w["a"].rootAddress,isBuyNft:!1,isGetNft:!1,isIdo:!1,childrenNum:0,children:[],btn:{loading:!1},endTime:0,initContract:function(){a.idoContract=new a.web3.eth.Contract(y,w["a"].idoAddress),a.usdtContract=new a.web3.eth.Contract(A,w["a"].usdtAddress),a.initData()},initData:function(){a.getBalance(),a.getIdoInfo(),a.getUsdtAllowance(),a.getUserInfo(),a.getEndTime(),setInterval((function(){a.getEndTime()}),3e3)},getEndTime:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.idoContract.methods.getEndTime().call();case 2:e=t.sent,a.endTime=e;case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getUserInfo:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.idoContract.methods.userInfo(a.address).call();case 2:return e=t.sent,t.next=5,a.idoContract.methods.getChildren(a.address).call();case 5:n=t.sent,a.isBuyNft=e.isGetNft,a.isGetNft=e.isGetNft,a.isIdo=e.isIdo,a.childrenNum=n.length,a.children=n;case 11:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getBalance:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.usdtContract.methods.balanceOf(a.address).call();case 2:e=t.sent,a.usdtBalance=new I.a(e).dividedBy(Math.pow(10,18)).toFixed(2,1);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getIdoInfo:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.idoContract.methods.idoAmount().call();case 2:return e=t.sent,t.next=5,a.idoContract.methods.buyNftAmount().call();case 5:return n=t.sent,t.next=8,a.idoContract.methods.introNum().call();case 8:r=t.sent,a.idoAmount=new I.a(e).dividedBy(Math.pow(10,18)).toFixed(2,1),a.buyNftAmount=new I.a(n).dividedBy(Math.pow(10,18)).toFixed(2,1),a.introNum=r;case 12:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getUsdtAllowance:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.usdtContract.methods.allowance(a.address,w["a"].idoAddress).call();case 2:e=t.sent,a.usdtAllowance=e;case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),approveUsdt:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.btn.loading=!0,t.prev=1,t.next=4,a.usdtContract.methods.approve(w["a"].idoAddress,T["a"]).send({from:a.address});case 4:a.getUsdtAllowance(),a.btn.loading=!1,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),a.btn.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}(),buyNft:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.idoContract.methods.userInfo(a.address).call();case 2:if(e=t.sent,!e.isBuyNft){t.next=6;break}return Object(R["a"])("此地址已经购买过了"),t.abrupt("return");case 6:if(!(Number(a.usdtBalance)<Number(a.buyNftAmount))){t.next=9;break}return Object(R["a"])(n("index.USDT余额不足")),t.abrupt("return");case 9:return a.btn.loading=!0,t.prev=10,t.next=13,a.idoContract.methods.buyNft(a.intro).send({from:a.address});case 13:Object(R["a"])(n("index.操作成功")),a.btn.loading=!1,a.initData(),t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](10),a.btn.loading=!1;case 22:case"end":return t.stop()}}),t,null,[[10,18]])})));function e(){return t.apply(this,arguments)}return e}(),ido:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(a.usdtBalance)<Number(a.buyNftAmount))){t.next=3;break}return Object(R["a"])(n("index.USDT余额不足")),t.abrupt("return");case 3:return a.btn.loading=!0,t.prev=4,t.next=7,a.idoContract.methods.ido(a.intro).send({from:a.address});case 7:Object(R["a"])(n("index.操作成功")),a.btn.loading=!1,a.initData(),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](4),a.btn.loading=!1;case 16:case"end":return t.stop()}}),t,null,[[4,12]])})));function e(){return t.apply(this,arguments)}return e}()});a.address&&a.initContract(),Object(r["B"])((function(){var t=new S.a(".copy-btn");t.on("success",(function(t){Object(R["a"])(n("index.复制成功")),t.clearSelection()})),t.on("error",(function(){Object(R["a"])(n("index.复制失败，请手动复制"))}))})),Object(r["T"])((function(){return a.address}),(function(t){t&&a.initContract()}));var c=Object(r["Q"])(a);return Object(v["a"])({},c)}},U=(n("853e"),n("6b0d")),_=n.n(U);const F=_()(P,[["render",h],["__scopeId","data-v-410e4607"]]);e["default"]=F},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("e330"),i=n("94ca"),o=n("6eeb"),u=n("1a2d"),s=n("7156"),d=n("3a9b"),b=n("d9b5"),l=n("c04e"),f=n("d039"),p=n("241c").f,m=n("06cf").f,j=n("9bf2").f,O=n("408a"),h=n("58a8").trim,v="Number",g=a[v],x=g.prototype,N=a.TypeError,w=c("".slice),y=c("".charCodeAt),k=function(t){var e=l(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,n,r,a,c,i,o,u,s=l(t,"number");if(b(s))throw N("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=h(s),e=y(s,0),43===e||45===e){if(n=y(s,2),88===n||120===n)return NaN}else if(48===e){switch(y(s,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+s}for(c=w(s,2),i=c.length,o=0;o<i;o++)if(u=y(c,o),u<48||u>a)return NaN;return parseInt(c,r)}return+s};if(i(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var A,C=function(t){var e=arguments.length<1?0:g(k(t)),n=this;return d(x,n)&&f((function(){O(n)}))?s(Object(e),n,C):e},E=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;E.length>T;T++)u(g,A=E[T])&&!u(C,A)&&j(C,A,m(g,A));C.prototype=x,x.constructor=C,o(a,v,C)}}}]);
//# sourceMappingURL=chunk-eb1a5406.5129ddb1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67b72c8a"],{"03c9":function(e,t,n){"use strict";n("724c")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),r=n("1d80"),i=n("577e"),s=n("5899"),u=a("".replace),o="["+s+"]",p=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),c=function(e){return function(t){var n=i(r(t));return 1&e&&(n=u(n,p,"")),2&e&&(n=u(n,d,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"6f71":function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),r=function(e){return Object(a["H"])("data-v-064a70ba"),e=e(),Object(a["F"])(),e},i={class:"user-box"},s={class:"nft-box"},u=r((function(){return Object(a["k"])("div",{class:"title"},"IDO",-1)})),o={class:"desc"},p={class:"btn-box"},d=Object(a["m"])("IDO"),c={class:"tip-desc"},l={class:"tip-desc"};function y(e,t,n,r,y,m){var b=Object(a["L"])("HeadTop"),f=Object(a["L"])("van-button");return Object(a["E"])(),Object(a["j"])("div",i,[Object(a["n"])(b,{title:"IDO",isShowTop:!0,isSubHeader:!1}),Object(a["k"])("div",s,[u,Object(a["k"])("div",o,Object(a["P"])(e.$t("index.花费USDT获得$ELE",{idoAmount:e.idoAmount,num:e.idoAmount})),1),Object(a["k"])("div",p,[Number(e.usdtAllowance)>0?(Object(a["E"])(),Object(a["h"])(f,{key:0,disabled:e.isIdo,loading:e.btn.loading,type:"primary",size:"large",onClick:e.ido},{default:Object(a["V"])((function(){return[d]})),_:1},8,["disabled","loading","onClick"])):(Object(a["E"])(),Object(a["h"])(f,{key:1,loading:e.btn.loading,type:"primary",size:"large",onClick:e.approveUsdt},{default:Object(a["V"])((function(){return[Object(a["m"])(Object(a["P"])(e.$t("index.授权"))+" USDT",1)]})),_:1},8,["loading","onClick"]))])]),Object(a["k"])("div",c,Object(a["P"])(e.$t("index.已认购的IDO份额"))+":"+Object(a["P"])(e.idoNum),1),Object(a["k"])("div",l,Object(a["P"])(e.$t("index.已领取NFT勋章数量"))+":"+Object(a["P"])(e.nftNum),1)])}var m=n("5530"),b=n("1da1"),f=(n("b680"),n("96cf"),n("1a2e")),T=n("5502"),v=n("01ea"),w=n("a4a5"),g=n("901e"),h=n.n(g),x=n("722f"),O=n("98b3"),I=n("47e2"),j=n("9d56"),k=n("626a"),N=n("ae04"),M={components:{HeadTop:f["a"]},setup:function(){var e=Object(T["b"])(),t=Object(I["b"])(),n=t.t,r=Object(a["I"])({address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),idoContract:null,usdtContract:null,nftContract:null,usdtBalance:"0.00",idoAmount:"0.00",buyNftAmount:"0.00",usdtAllowance:"",introNum:0,intro:O["a"].get()||v["a"].rootAddress,isBuyNft:!1,isGetNft:!1,isIdo:!1,nftNum:0,idoNum:0,btn:{loading:!1},initContract:function(){r.idoContract=new r.web3.eth.Contract(w,v["a"].idoAddress),r.usdtContract=new r.web3.eth.Contract(x,v["a"].usdtAddress),r.nftContract=new r.web3.eth.Contract(N,v["a"].nftAddress),r.initData()},initData:function(){r.getBalance(),r.getIdoInfo(),r.getUsdtAllowance(),r.getUserInfo()},getUserInfo:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.userInfo(r.address).call();case 2:t=e.sent,r.isBuyNft=t.isBuyNft,r.isGetNft=t.isGetNft,r.isIdo=t.isIdo;case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getBalance:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.usdtContract.methods.balanceOf(r.address).call();case 2:t=e.sent,r.usdtBalance=new h.a(t).dividedBy(Math.pow(10,18)).toFixed(2,1);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getIdoInfo:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.idoAmount().call();case 2:return t=e.sent,e.next=5,r.idoContract.methods.buyNftAmount().call();case 5:return n=e.sent,e.next=8,r.idoContract.methods.introNum().call();case 8:return a=e.sent,r.idoAmount=new h.a(t).dividedBy(Math.pow(10,18)).toFixed(2,1),r.buyNftAmount=new h.a(n).dividedBy(Math.pow(10,18)).toFixed(2,1),r.introNum=a,e.next=14,r.idoContract.methods.total().call();case 14:return r.nftNum=e.sent,e.next=17,r.idoContract.methods.idoNum().call();case 17:r.idoNum=e.sent;case 18:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getUsdtAllowance:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.usdtContract.methods.allowance(r.address,v["a"].idoAddress).call();case 2:t=e.sent,r.usdtAllowance=t;case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),approveUsdt:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.btn.loading=!0,e.prev=1,e.next=4,r.usdtContract.methods.approve(v["a"].idoAddress,j["a"]).send({from:r.address});case 4:r.getUsdtAllowance(),r.btn.loading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r.btn.loading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),buyNft:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.userInfo(r.address).call();case 2:if(t=e.sent,!t.isBuyNft){e.next=6;break}return Object(k["a"])("此地址已经购买过了"),e.abrupt("return");case 6:if(!(Number(r.usdtBalance)<Number(r.buyNftAmount))){e.next=9;break}return Object(k["a"])(n("index.USDT余额不足")),e.abrupt("return");case 9:return r.btn.loading=!0,e.prev=10,e.next=13,r.idoContract.methods.buyNft().send({from:r.address});case 13:r.btn.loading=!1,Object(k["a"])(n("index.操作成功")),r.initData(),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](10),r.btn.loading=!1;case 21:case"end":return e.stop()}}),e,null,[[10,18]])})));function t(){return e.apply(this,arguments)}return t}(),ido:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.userInfo(r.address).call();case 2:if(t=e.sent,!t.isIdo){e.next=6;break}return Object(k["a"])("此地址已经IDO过了"),e.abrupt("return");case 6:if(!(Number(r.usdtBalance)<Number(r.idoAmount))){e.next=9;break}return Object(k["a"])(n("index.USDT余额不足")),e.abrupt("return");case 9:return r.btn.loading=!0,e.prev=10,e.next=13,r.idoContract.methods.ido(r.intro).send({from:r.address});case 13:r.btn.loading=!1,Object(k["a"])(n("index.操作成功")),r.initData(),e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](10),r.btn.loading=!1;case 22:case"end":return e.stop()}}),e,null,[[10,18]])})));function t(){return e.apply(this,arguments)}return t}()});r.address&&r.initContract(),Object(a["T"])((function(){return r.address}),(function(e){e&&r.initContract()}));var i=Object(a["Q"])(r);return Object(m["a"])({},i)}},A=(n("03c9"),n("d959")),C=n.n(A);const R=C()(M,[["render",y],["__scopeId","data-v-064a70ba"]]);t["default"]=R},"724c":function(e,t,n){},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("e330"),s=n("94ca"),u=n("6eeb"),o=n("1a2d"),p=n("7156"),d=n("3a9b"),c=n("d9b5"),l=n("c04e"),y=n("d039"),m=n("241c").f,b=n("06cf").f,f=n("9bf2").f,T=n("408a"),v=n("58a8").trim,w="Number",g=r[w],h=g.prototype,x=r.TypeError,O=i("".slice),I=i("".charCodeAt),j=function(e){var t=l(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,n,a,r,i,s,u,o,p=l(e,"number");if(c(p))throw x("Cannot convert a Symbol value to a number");if("string"==typeof p&&p.length>2)if(p=v(p),t=I(p,0),43===t||45===t){if(n=I(p,2),88===n||120===n)return NaN}else if(48===t){switch(I(p,1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+p}for(i=O(p,2),s=i.length,u=0;u<s;u++)if(o=I(i,u),o<48||o>r)return NaN;return parseInt(i,a)}return+p};if(s(w,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var N,M=function(e){var t=arguments.length<1?0:g(j(e)),n=this;return d(h,n)&&y((function(){T(n)}))?p(Object(t),n,M):t},A=a?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;A.length>C;C++)o(g,N=A[C])&&!o(M,N)&&f(M,N,b(g,N));M.prototype=h,h.constructor=M,u(r,w,M)}},ae04:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"RewardPaidLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StakedLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurBlance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllTokens","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"haveTakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"nftId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"url","type":"string"}],"name":"setUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"userRewardPerTokenPaid","type":"uint256"},{"internalType":"uint256","name":"rewards","type":"uint256"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"}]')}}]);
//# sourceMappingURL=chunk-67b72c8a.34fb889f.js.map
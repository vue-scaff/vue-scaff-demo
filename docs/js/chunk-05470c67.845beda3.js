(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05470c67"],{"5cfc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sample",class:"sample-"+["dark","light"][t.global.theme]},[n("x-example",{staticClass:"bulletin",attrs:{message:t.home.name,color:t.$style.theme}},[n("span")]),n("ul",{staticClass:"panel"},[n("li",[n("button",{attrs:{type:"default"},on:{click:function(e){return t.doState()}}},[t._v(" [State] Change ")])]),n("li",[n("button",{attrs:{type:"default"},on:{click:function(e){return t.doCommit()}}},[t._v(" [Mutation] Commit ")])]),n("li",[n("button",{attrs:{type:"default"},on:{click:function(e){return t.doDispatch()}}},[t._v(" [Action] Dispatch ")])]),n("li",[n("button",{attrs:{type:"default"},on:{click:function(e){return t.doDispatchSync()}}},[t._v(" [Action] Dispatch Sync ")])])]),t._v(" "+t._s(t.mockSource)+" ")],1)},c=[],r=(n("b0c0"),n("96cf"),n("1da1")),o={mixins:[registry.mixin],data:function(){return{requestAddress:this.$api.mock("hello"),mockSource:{}}},components:{},methods:{doState:function(){this.home.name="Hi, Anonymous !"},doCommit:function(){this.$store.commit("home/MUTATE_RENAME","Commit By Mutate")},doDispatch:function(){this.$store.dispatch("home/ACTION_CHANCE","Dispatch By Action")},doDispatchSync:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("home/ACTION_CHANCE_SYNC","Dispatch Sync 0");case 2:n=e.sent,t.$util.sleep(1200).then((function(){return t.home.name=n}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http(t.requestAddress).get({a:1,b:2,c:3},{headerParams:"header-params"});case 2:n=e.sent,t.mockSource=n.object;case 4:case"end":return e.stop()}}),e)})))()}},i=o,s=(n("c632"),n("2877")),u=Object(s["a"])(i,a,c,!1,null,null,null);e["default"]=u.exports},7424:function(t,e,n){t.exports={themeColor:"#f63",themeLight:"#fff",themeDark:"#202020",bulletinWarm:"#f7a",bulletinCold:"#0af"}},c632:function(t,e,n){"use strict";var a=n("7424"),c=n.n(a);c.a}}]);
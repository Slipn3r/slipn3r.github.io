(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=i;o.push([2,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t,n){e.exports=n("56d7")},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HabrIs")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown"},[n("span",[e._v("Хабр: ")]),n("dropdown",{attrs:{options:e.options,selected:e.active},on:{updateOption:e.onSelect}}),n("p",[e._v("Последнее обновление: "+e._s(e.lastUpdated))])],1)},c=[],i=(n("b0c0"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),u=n("d869"),p=n("9b56"),d=n("f773"),l={name:"HabrIs",components:{dropdown:u["a"]},data:function(){return{options:[{name:"торт"},{name:"не торт"},{name:"социальное СМИ об IT"}],active:{name:"социальное СМИ об IT"},lastUpdated:"",db:!1,address:"/orbitdb/zdpuB3UcoWfRJCEeZ7rMsw3CuLjK25ahuTG1KCs9CW2b1HVsV/habr-is"}},methods:{onSelect:function(e){this.active=e,this.lastUpdated=(new Date).toLocaleString(),this.updateDatabase()},run:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={repo:"./ipfs"},e.next=3,p.create(t);case 3:return n=e.sent,e.next=6,d.createInstance(n);case 6:r=e.sent,this.address?this.openDatabase(r):this.createDatabase(r);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createDatabase:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.open("habr-is",{create:!0,overwrite:!0,localOnly:!1,type:"keyvalue",accessController:{write:["*"]}});case 3:return this.db=e.sent,this.address=this.db.address.toString(),console.log("created database at "+this.address),e.next=8,this.db.put("value","торт");case 8:return e.next=10,this.db.put("lastUpdated",(new Date).toLocaleString());case 10:this.readDatabase(),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}(),openDatabase:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.keyvalue(this.address,{sync:!0});case 3:this.db=e.sent,console.log("opened database at "+this.address),console.log(this.db),this.readDatabase(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),readDatabase:function(){try{var e=this.db.get("value");this.active.name=e;var t=this.db.get("lastUpdated");this.lastUpdated=t}catch(n){console.error(n)}},updateDatabase:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.db.set("value",this.active.name);case 3:return e.next=5,this.db.set("lastUpdated",this.lastUpdated);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.run()}},f=l,h=n("2877"),b=Object(h["a"])(f,s,c,!1,null,null,null),v=b.exports,m={name:"App",components:{HabrIs:v}},w=m,g=(n("034f"),Object(h["a"])(w,a,o,!1,null,null,null)),y=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){}});
//# sourceMappingURL=app.a9864cd5.js.map
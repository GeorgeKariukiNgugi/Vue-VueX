(function(t){function e(e){for(var o,c,s=e[0],i=e[1],l=e[2],u=0,m=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var o={},n={app:0},r=[];function c(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=o,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(a,o,function(e){return t[e]}.bind(null,o));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02bf":function(t,e){t.exports="data:image/webp;base64,UklGRlQFAABXRUJQVlA4TEgFAAAv/8A/EKDcSJIkSRL+yd6jxzPTzXxf2xGyYNs2HWsFbdu2bdu2bXc/2/izbdu2bduOnWxJbCM5kqRYv6sAcu1dV7s3nJ9f//nFGEzZ1npKgMah9NdVM7kfh3TP0ONQ2c7qMDDMRa/Eb/F3YRF6KcRnPWhEr8UvFjfBxP/3QDbfhCnoRSi5nIQ3b4JMuQh26FVcvAhp74JzEUrfBbE5CLkvI/0g+L6MoYPAwnkXa+CgWPcurl8Ef6rrRbD83WdsL4K2+68i46RnzN17E8NwUmhZSvke1sJR4WO1P2/hxmEb33jIUKL0D3F5BpE9jWKXVYYFwMaYgarGQ6ULUYnKxiGG6+DXFuQJs21QJ6/74Ar2tgcv6oKM3Ya9fcGhv07sG23bxMLYv00sjI/bRIq+kJ4vkp4v+rQNM/viPFwvWgXXi0bD9aIiuF7kuw772kJFC44XfT5/05PzC9fkhnhsxytx7cftIXY8jc8/Ycd7mXbtg8ZQtPr1b9nnm0Tt+Ql4LSzmXRmiaw0QO+/KEHEaoHHeFSKyKYDZ066FqJrufVQAO8ddKaKhArg3wzmAGLEAeNOujfFyKC7m+64YMR8x864ccS/fd+WIe/m8K0jcy+ddQeJePu8KEvfyeVeQuJePu5Zi1lRcy+ddSeJaPu9KEsMxa9wVJa7l664oMRx3h11rsX8ohoM77ooSPaGotOa4VmwZhWsR0HTNca3Yc81xr9hzzXGvWBLnFmNWSawEOF40ejECenYdL/KFxfFqBm7wfgdejbvSRLzg/3fYPe6KE9nn4sGwazWqh8jMBX/cFScaiYXVvCtOtDYWcfOuONGNWDTPu+JE3FjMWdX17TInYpeK3eMDLgJFGam4P+4KFA2v5MOu5dCciiv5tCtQdH0ln3Yliiv5tCtRZLuRL7syxY182LUdgdPF54182bVdpByehG4jX3ZFiq5FwnLatR8HhovPG/myK1Nkk4imIXwAMkXpC/msi+Z+BPY73D5AbLfmGBCv6605BojdMCoBs8utOSagpgbzrjvFcVeEWK4rQizXdbxoZQbmlOuKEMt1HS/yALhd9BsDjhetALhdpOQJcLtoAQCcLrpJMwZBpXCLSdDFCSqJFBb+8+WrRb+t+KstCQdnkCuNjRIZ3DHgX8kW2UGBhIsyGhAuGi5AumgNxCdedC2dAiJONh1ENoeidoi080WD54tWwaHxBuWHzCcHddCPFjsEx1jsYLFFXGISKxa5yhqDWLFH7MsVe0RBqlgEd2LFIuGdiblN0BMqNsHi60Vky/mi1ZAZz4tgQigmFUFiKDx64Efs/72cqoHxkAo3/BJ4TQtio7wDBIIhOIYoC4ArCaIj0t14XOMWf6seOqJfIHVCIQYUCDMJipVmRp5QWvA/pOFhtIPeECIyX10wXxLW/rka3a+MYtd+Pv2rcfT2z9UGXq6hP8V35fvn6oIGYjSIdTT2z1UE49AsztLeP1cN9KJpHMPeP1cJxD/YAmnu/rk6QMe7J2dCELl/rgqY/OxoOIz9czV47j96FBn75yqApqc7hu2fqwCOPoSEdsBc8YsPBOhhpCbNVWoF3qj9c+Xfqu1jLNk/VzzKHmPr/rnu5z//K9wfY2T/XPlF+E+REjBXfBx5epPGtPbPVWCT00Ps2T9Xg9u19PcZ0gLmKhATnu0ahJE2V+hO2N482S4iLGCuChFDMcfMgLlKROcYh7EC5moRo4Y4RTtgrh5RTTQ6DSb1rLnyNz+4+Ed8Ubx/rjrrrvJc/vkUuEbRCZirULgZss9LAioSn501RxxWwFzn59d/fn0GAA=="},"37d5":function(t,e,a){"use strict";var o=a("6ce5"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{flat:"",app:"",color:"#BBE6D6",dark:""}},[a("v-app-bar-nav-icon",{attrs:{color:"black"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"hidden-md-and-up",attrs:{black:""}},[t._v("VueJs Ecommerce")]),a("v-toolbar-title",{staticClass:"hidden-sm-and-down",attrs:{black:""}},[t._v("VueJs Ecommerce Applications.")]),a("v-spacer"),a("v-btn",{attrs:{depressed:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"}},[t._v("email")])],1),a("v-badge",{attrs:{color:"green",content:"6",overlap:""}},[a("v-btn",{attrs:{icon:"",color:"black"}},[a("v-icon",[t._v("mdi-cart")])],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",color:"#BBE6D6"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" Application ")]),a("v-list-item-subtitle",[t._v(" subtext ")])],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:"",app:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Home")])],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Account")])],1),a("v-list-item",{staticClass:"hidden-md-and-up"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cart")])],1),a("v-list-item-title",[t._v("Cart")])],1)],1)],1)],1),a("v-content",{staticClass:"my-5"},[a("div",{staticClass:"hidden-sm-and-down"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"5",md:"8"}},[a("ProductList")],1),a("v-col",{attrs:{sm:"5",md:"4"}},[a("Cart")],1)],1)],1),a("div",{staticClass:"hidden-md-and-up"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"12"}},[a("ProductList")],1)],1)],1)])],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{staticClass:"mb-12"},t._l(t.productItems.data,(function(t,e){return a("v-col",{key:e,attrs:{sm:"5",md:"4"}},[a("ProductItem",{attrs:{product:t}})],1)})),1)],1)],1)},s=[],i=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("v-card-title",[t._v(t._s(t.product.name))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.product.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(t.product.totalPrice))]),a("div",[a("v-rating",{attrs:{"half-increments":""},model:{value:t.product.star,callback:function(e){t.$set(t.product,"star",e)},expression:"product.star"}})],1),a("div",[t._v("Whitsunday Island, Whitsunday Islands")])]),a("v-card-actions",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")])],1),a("v-btn",{ref:"product.name",staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"secondary"},on:{click:function(e){return t.addingProductToCart(t.product)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-cart")])],1),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"accent"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-message")]),a("v-badge",{attrs:{color:"green",content:"6"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")])],1)])],1)],1)},d=[],u=a("2f62"),m=void 0,v={name:"ProductItem",props:["product"],data:function(){return{show:!1,rating:m}},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["addingProductToCart"])),{},{showSweetAlert:function(){var t=this;o["default"].swal.fire({title:"Are you sure?",text:"You want To Add to Cart  "+this.$refs.product,icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Add it!"}).then((function(e){e.value&&o["default"].swal.fire(t.$store.dispatch())}))}})},p=v,f=a("2877"),h=Object(f["a"])(p,l,d,!1,null,"21f94d27",null),g=h.exports,C=void 0,b={name:"ProductList",computed:Object(i["a"])({},Object(u["c"])(["productItems"])),created:function(){this.$store.dispatch("getProductItems")},components:{ProductItem:g},data:function(){return{show:!1,rating:C}}},w=b,I=Object(f["a"])(w,c,s,!1,null,null,null),_=I.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{staticClass:"mx-auto px-5 ",attrs:{"max-width":"400"}},[o("v-img",{staticClass:"black--text align-end",attrs:{src:a("02bf"),"max-height":"100",contain:"",color:"primary"}}),o("v-card-title"),o("h4",{staticClass:"text-center mt-0"},[t._v(" Cart Items. ")]),o("v-divider"),t.cartItems.length<1?o("div",[o("p",{staticClass:"font-weight-black text-center"},[t._v("There are No Items, Kindly Add.")])]):t._l(t.cartItems,(function(t){return o("div",{key:t.id},[o("SingleCartItemComponent",{attrs:{cartItem:t}})],1)})),o("v-divider"),o("TotalGoodsComponent"),o("CheckOutButtonComponent")],2)],1)},x=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[a("span",{staticClass:"font-weight-black text-capitalize"},[t._v(" "+t._s(t.cartItem.name)+" ")]),a("span",{},[t._v(" Ksh "+t._s(t.cartItem.price)+" /= each")]),a("span",{staticClass:"text-right",staticStyle:{float:"right"}},[t._v(" "+t._s(t.cartItem.quantity)+" "),a("v-icon",{staticClass:"cursor",attrs:{color:"blue"},on:{click:function(e){return t.addUpdatingCartItems(t.cartItem)}}},[t._v("arrow_upward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"green"},on:{click:function(e){return t.downUpdatingCartItems(t.cartItem)}}},[t._v("arrow_downward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"red"},on:{click:function(e){return t.deletingTheCartItems(t.cartItem)}}},[t._v("delete")])],1)]),a("p",[a("strong",[t._v("TotalCost")]),a("span",{staticStyle:{float:"right"}},[a("strong",[t._v("$"+t._s(t.cartItem.quantity*t.cartItem.price)+"/=")])])]),a("v-divider")],1)},T=[],y={name:"SingleCartItemComponent",props:["cartItem"],data:function(){return{editingQuantity:1}},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["deletingTheCartItems","addUpdatingCartItems","downUpdatingCartItems"])),{},{updatingCartItemsMethod:function(t){var e={};e["id"]=t.id,e["number"]=this.editingQuantity}})},j=y,P=(a("37d5"),Object(f["a"])(j,E,T,!1,null,"2ffcd9d2",null)),A=P.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"cursor"},[t._v(" Total Items "),a("span",{staticStyle:{float:"right",color:"red"}},[a("i",{staticClass:"fa fa-trash "}),a("strong",[t._v(" Remove All")])])])])}],B={name:"TotalGoodsComponent"},M=B,S=(a("8d95"),Object(f["a"])(M,O,F,!1,null,"a692e210",null)),R=S.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mb-12",attrs:{center:""}},[a("v-col",{attrs:{md:"12"}},[a("v-btn",{attrs:{block:"",color:"success"}},[t._v("Check Out ($$$$)")])],1)],1)],1)},D=[],Y={name:"CheckOutButtonComponent"},U=Y,J=Object(f["a"])(U,L,D,!1,null,null,null),K=J.exports,X={name:"ShoppingCartCoallationComponent",components:{SingleCartItemComponent:A,TotalGoodsComponent:R,CheckOutButtonComponent:K},computed:Object(i["a"])({},Object(u["c"])(["cartItems"])),created:function(){this.$store.dispatch("getAllCartItems")}},W=X,q=Object(f["a"])(W,k,x,!1,null,null,null),G=q.exports,Q={name:"App",components:{ProductList:_,Cart:G},data:function(){return{drawer:!0}}},z=Q,N=Object(f["a"])(z,n,r,!1,null,null,null),V=N.exports,H=a("bc3a"),$=a.n(H),Z={productItems:[]},tt={UPDATE_PRODUCT_ITEMS:function(t,e){t.productItems=e}},et={getProductItems:function(t){var e=t.commit;$.a.get("https://vuejsapi.georgekprojects.tk/api/products").then((function(t){e("UPDATE_PRODUCT_ITEMS",t.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful",t)}))}},at={productItems:function(t){return t.productItems}},ot={state:Z,mutations:tt,actions:et,getters:at},nt=ot,rt=(a("b0c0"),{cartItems:[]}),ct={UPDATE_CART_ITEMS:function(t,e){t.cartItems=e}},st={getAllCartItems:function(t){var e=t.commit;$.a.get("https://vuejsapi.georgekprojects.tk/api/cart").then((function(t){e("UPDATE_CART_ITEMS",t.data.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful to get all products.",t)}))},addingProductToCart:function(t,e){var a=t.commit;this.loader=!0;var n={};n["productId"]=e.id,n["quantity"]=1,$.a.post("https://vuejsapi.georgekprojects.tk/api/cart",n).then((function(t){console.log("Adding."),console.log(t),a("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"success",title:e.name+" Added To Cart.",showConfirmButton:!0,timer:4500})})).catch((function(t){console.log("The call was unsuccessful to post data to cart.",t)}))},deletingTheCartItems:function(t,e){var a=t.commit;console.log(e),$.a.delete("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id).then((function(t){console.log("Deleting the cart Item."),201==t.status?(a("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Deleted From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to delete data from cart.",t)}))},downUpdatingCartItems:function(t,e,a){var n=t.commit;console.log(a);var r={};r["quantity"]=e.quantity-1,$.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(n("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))},addUpdatingCartItems:function(t,e,a){var n=t.commit;console.log(a);var r={};r["quantity"]=e.quantity+1,$.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(n("UPDATE_CART_ITEMS",t.data),o["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))}},it={cartItems:function(t){return t.cartItems}},lt={state:rt,mutations:ct,actions:st,getters:it},dt=lt;o["default"].use(u["a"]);var ut=new u["a"].Store({state:{},mutations:{},actions:{},modules:{product:nt,cart:dt}}),mt=a("ce5b"),vt=a.n(mt);a("bf40");o["default"].use(vt.a);var pt=new vt.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),ft=(a("d5e8"),a("5363"),a("d1e78"),a("5886")),ht=(a("4413"),a("14ba")),gt=a.n(ht);o["default"].config.productionTip=!1,o["default"].use(ft["a"]),o["default"].use(gt.a),new o["default"]({store:ut,vuetify:pt,render:function(t){return t(V)}}).$mount("#app")},"6ce5":function(t,e,a){},"8d95":function(t,e,a){"use strict";var o=a("99e7"),n=a.n(o);n.a},"99e7":function(t,e,a){}});
//# sourceMappingURL=app.3c3674d9.js.map
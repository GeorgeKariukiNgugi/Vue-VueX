(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a06537d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"1c6974f4"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[t],m.parentNode.removeChild(m),a(s)},m.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02bf":function(t,e){t.exports="data:image/webp;base64,UklGRlQFAABXRUJQVlA4TEgFAAAv/8A/EKDcSJIkSRL+yd6jxzPTzXxf2xGyYNs2HWsFbdu2bdu2bXc/2/izbdu2bduOnWxJbCM5kqRYv6sAcu1dV7s3nJ9f//nFGEzZ1npKgMah9NdVM7kfh3TP0ONQ2c7qMDDMRa/Eb/F3YRF6KcRnPWhEr8UvFjfBxP/3QDbfhCnoRSi5nIQ3b4JMuQh26FVcvAhp74JzEUrfBbE5CLkvI/0g+L6MoYPAwnkXa+CgWPcurl8Ef6rrRbD83WdsL4K2+68i46RnzN17E8NwUmhZSvke1sJR4WO1P2/hxmEb33jIUKL0D3F5BpE9jWKXVYYFwMaYgarGQ6ULUYnKxiGG6+DXFuQJs21QJ6/74Ar2tgcv6oKM3Ya9fcGhv07sG23bxMLYv00sjI/bRIq+kJ4vkp4v+rQNM/viPFwvWgXXi0bD9aIiuF7kuw772kJFC44XfT5/05PzC9fkhnhsxytx7cftIXY8jc8/Ycd7mXbtg8ZQtPr1b9nnm0Tt+Ql4LSzmXRmiaw0QO+/KEHEaoHHeFSKyKYDZ066FqJrufVQAO8ddKaKhArg3wzmAGLEAeNOujfFyKC7m+64YMR8x864ccS/fd+WIe/m8K0jcy+ddQeJePu8KEvfyeVeQuJePu5Zi1lRcy+ddSeJaPu9KEsMxa9wVJa7l664oMRx3h11rsX8ohoM77ooSPaGotOa4VmwZhWsR0HTNca3Yc81xr9hzzXGvWBLnFmNWSawEOF40ejECenYdL/KFxfFqBm7wfgdejbvSRLzg/3fYPe6KE9nn4sGwazWqh8jMBX/cFScaiYXVvCtOtDYWcfOuONGNWDTPu+JE3FjMWdX17TInYpeK3eMDLgJFGam4P+4KFA2v5MOu5dCciiv5tCtQdH0ln3Yliiv5tCtRZLuRL7syxY182LUdgdPF54182bVdpByehG4jX3ZFiq5FwnLatR8HhovPG/myK1Nkk4imIXwAMkXpC/msi+Z+BPY73D5AbLfmGBCv6605BojdMCoBs8utOSagpgbzrjvFcVeEWK4rQizXdbxoZQbmlOuKEMt1HS/yALhd9BsDjhetALhdpOQJcLtoAQCcLrpJMwZBpXCLSdDFCSqJFBb+8+WrRb+t+KstCQdnkCuNjRIZ3DHgX8kW2UGBhIsyGhAuGi5AumgNxCdedC2dAiJONh1ENoeidoi080WD54tWwaHxBuWHzCcHddCPFjsEx1jsYLFFXGISKxa5yhqDWLFH7MsVe0RBqlgEd2LFIuGdiblN0BMqNsHi60Vky/mi1ZAZz4tgQigmFUFiKDx64Efs/72cqoHxkAo3/BJ4TQtio7wDBIIhOIYoC4ArCaIj0t14XOMWf6seOqJfIHVCIQYUCDMJipVmRp5QWvA/pOFhtIPeECIyX10wXxLW/rka3a+MYtd+Pv2rcfT2z9UGXq6hP8V35fvn6oIGYjSIdTT2z1UE49AsztLeP1cN9KJpHMPeP1cJxD/YAmnu/rk6QMe7J2dCELl/rgqY/OxoOIz9czV47j96FBn75yqApqc7hu2fqwCOPoSEdsBc8YsPBOhhpCbNVWoF3qj9c+Xfqu1jLNk/VzzKHmPr/rnu5z//K9wfY2T/XPlF+E+REjBXfBx5epPGtPbPVWCT00Ps2T9Xg9u19PcZ0gLmKhATnu0ahJE2V+hO2N482S4iLGCuChFDMcfMgLlKROcYh7EC5moRo4Y4RTtgrh5RTTQ6DSb1rLnyNz+4+Ed8Ubx/rjrrrvJc/vkUuEbRCZirULgZss9LAioSn501RxxWwFzn59d/fn0GAA=="},"034f":function(t,e,a){"use strict";var n=a("db62"),o=a.n(n);o.a},"0fd9":function(t,e,a){"use strict";var n=a("f901"),o=a.n(n);o.a},"37d5":function(t,e,a){"use strict";var n=a("b617"),o=a.n(n);o.a},"50fb":function(t,e,a){"use strict";var n=a("a6e9"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"black--text",staticStyle:{margin:"0%"},attrs:{app:"",color:"#BBE6D6",dark:""}},[a("v-app-bar-nav-icon",{attrs:{color:"black"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.searchInput,expression:"searchInput"}]},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-text-field",{staticClass:"black--text",attrs:{label:"Regular",clearable:"",color:"black"}})],1)],1),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"hidden-md-and-up",attrs:{black:""}},[t._v("VueJs Ecommerce")]),a("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"hidden-sm-and-down",attrs:{black:""}},[t._v("VueJs Ecommerce Applications.")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",depressed:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"},on:{click:function(e){return t.searchItem()}}},[t._v("search")])],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{depressed:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"}},[t._v("email")])],1),a("router-link",{attrs:{to:"/cart"}},[a("v-badge",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{color:"green",content:"",overlap:""}},[a("v-btn",{attrs:{icon:"",color:"#BBE6D6"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-cart")])],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",color:"#BBE6D6"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Application")]),a("v-list-item-subtitle",[t._v("Subtext")])],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:"",app:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[a("router-link",{attrs:{to:"/"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Home")])],1)],1),a("router-link",{attrs:{to:"/profile"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profile.")])],1)],1),a("router-link",{attrs:{to:"/cart"}},[a("v-list-item",{staticClass:"hidden-md-and-up"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cart")])],1),a("v-list-item-title",[t._v("Cart")])],1)],1)],1)],1)],1),a("v-content",{staticClass:"my-5",staticStyle:{"background-color":"#8EFFFF"}},[a("router-view")],1)],1)},r=[],s=a("5530"),i=a("2f62"),c={name:"App",methods:{searchItem:function(){this.show=!this.show,this.searchInput=!this.searchInput}},computed:Object(s["a"])({},Object(i["c"])(["productItems","numberInPagination","cartItems"])),data:function(){return{drawer:!0,show:!0,searchInput:!1}}},l=c,u=(a("034f"),a("2877")),d=Object(u["a"])(l,o,r,!1,null,null,null),m=d.exports,v=(a("7db0"),a("bc3a")),p=a.n(v),f={productItems:[],loading2:!1,singleProduct:[]},g={UPDATE_PRODUCT_ITEMS:function(t,e){t.productItems=e},GETTING_A_SINGLE_PRODUCT:function(t,e){t.singleProduct=e},UPDATE_LOADING:function(t,e){t.loading2=e}},h={getProductItems:function(t){var e=t.commit;p.a.get("https://vuejsapi.georgekprojects.tk/api/products").then((function(t){e("UPDATE_PRODUCT_ITEMS",t.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful",t)}))},getProductsFromPaginationLinks:function(t,e){var a=t.commit;f.loading2=!0,p.a.get(e).then((function(t){a("UPDATE_PRODUCT_ITEMS",t.data),console.log(t.data),f.loading2=!1})).catch((function(t){console.log("The call was unsuccessful",t)}))},gettingASingleProduct:function(t,e){var a=t.commit;p.a.get(e).then((function(t){return a("GETTING_A_SINGLE_PRODUCT",t.data),console.log(t.data),t.data})).catch((function(t){console.log("The call was unsuccessful",t)}))}},b={loading2:function(t){return t.loading2},productItems:function(t){return t.productItems},singleProduct:function(t){return t.singleProduct},numberInPagination:function(t){return t.productItems.meta.last_page},productItemFromId:function(t){return function(e){console.log(t.productItems.find((function(t){return t.id===e})))}}},w={state:f,mutations:g,actions:h,getters:b},C=w,_=(a("13d5"),a("b0c0"),a("b680"),{cartItems:[],loading:!1}),I={UPDATE_CART_ITEMS:function(t,e){t.cartItems=e},UPDATING_LOAD_STATE:function(t,e){t.loading=e}},k={getAllCartItems:function(t){var e=t.commit;p.a.get("https://vuejsapi.georgekprojects.tk/api/cart").then((function(t){e("UPDATE_CART_ITEMS",t.data.data),console.log(t.data)})).catch((function(t){console.log("The call was unsuccessful to get all products.",t)}))},addingProductToCart:function(t,e){var a=t.commit;a("UPDATING_LOAD_STATE",!0);var o={};o["productId"]=e.id,o["quantity"]=1,p.a.post("https://vuejsapi.georgekprojects.tk/api/cart",o).then((function(t){console.log("Adding."),console.log(t),a("UPDATE_CART_ITEMS",t.data),a("UPDATING_LOAD_STATE",!1),n["default"].swal.fire({position:"center",icon:"success",title:e.name+" Added To Cart.",showConfirmButton:!0,timer:4500})})).catch((function(t){console.log("The call was unsuccessful to post data to cart.",t)}))},deletingTheCartItems:function(t,e){var a=t.commit;console.log(e),p.a.delete("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id).then((function(t){console.log("Deleting the cart Item."),201==t.status?(a("UPDATE_CART_ITEMS",t.data),n["default"].swal.fire({position:"center",icon:"question",title:e.name+" Deleted From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to delete data from cart.",t)}))},downUpdatingCartItems:function(t,e,a){var o=t.commit;console.log(a);var r={};r["quantity"]=e.quantity-1,p.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(o("UPDATE_CART_ITEMS",t.data),n["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))},addUpdatingCartItems:function(t,e,a){var o=t.commit;console.log(a);var r={};r["quantity"]=e.quantity+1,p.a.put("https://vuejsapi.georgekprojects.tk/api/cart/"+e.id,r).then((function(t){console.log("Updating the cart Item."),201==t.status?(o("UPDATE_CART_ITEMS",t.data),n["default"].swal.fire({position:"center",icon:"question",title:e.name+" Updated From Cart.",showConfirmButton:!0,timer:4500})):console.log("Error."),console.log(t)})).catch((function(t){console.log("The call was unsuccessful to update data from cart.",t)}))}},x={cartItems:function(t){return t.cartItems},loading:function(t){return t.loading},allProductsCost:function(t){return t.cartItems.reduce((function(t,e){return e.quantity*e.price+t}),0).toFixed(2)}},P={state:_,mutations:I,actions:k,getters:x},E=P;n["default"].use(i["a"]);var T=new i["a"].Store({state:{},mutations:{},actions:{},modules:{product:C,cart:E}}),y=a("ce5b"),j=a.n(y);a("bf40");n["default"].use(j.a);var A=new j.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),O=(a("d5e8"),a("5363"),a("d1e78"),a("5886")),F=(a("4413"),a("14ba")),S=a.n(F),D=(a("d3b7"),a("8c4f")),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hidden-sm-and-down"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"5",md:"8"}},[a("ProductList")],1),a("v-col",{attrs:{sm:"5",md:"4"}},[a("Cart")],1)],1)],1),a("div",{staticClass:"hidden-md-and-up"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"12"}},[a("ProductList")],1)],1)],1)])},N=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{staticClass:"mb-12"},t._l(t.productItems.data,(function(t,e){return a("v-col",{key:e,attrs:{sm:"5",md:"4"}},[a("ProductItem",{attrs:{product:t}})],1)})),1),a("v-pagination",{staticClass:"hidden-sm-and-down",attrs:{circle:t.circle,disabled:t.disabled,length:t.length,"next-icon":t.nextIcon,"prev-icon":t.prevIcon,page:t.page,"total-visible":t.totalVisible},on:{input:function(e){return t.getProductsFromPaginationLinks("https://vuejsapi.georgekprojects.tk/api/products?page="+t.page)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("v-bottom-navigation",{staticClass:"hidden-md-and-up",attrs:{"background-color":"#BBE6D6",fixed:""},model:{value:t.bottomNav,callback:function(e){t.bottomNav=e},expression:"bottomNav"}},[a("v-pagination",{attrs:{circle:t.circle,disabled:t.disabled,length:t.length,"next-icon":t.nextIcon,"prev-icon":t.prevIcon,page:t.page,"total-visible":t.totalVisible},on:{input:function(e){return t.getProductsFromPaginationLinks("https://vuejsapi.georgekprojects.tk/api/products?page="+t.page)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},B=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("router-link",{attrs:{to:"/products/"+t.product.id}},[a("v-card-title",[t._v(t._s(t.product.name))])],1)],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.product.name))]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v(t._s(t.product.totalPrice))]),a("div",[a("v-rating",{attrs:{"half-increments":""},model:{value:t.product.star,callback:function(e){t.$set(t.product,"star",e)},expression:"product.star"}})],1),a("div",[t._v("Whitsunday Island, Whitsunday Islands "+t._s(t.loading))])]),a("v-card-actions",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")])],1),a("v-btn",{ref:"product.name",staticClass:"mx-2",attrs:{loading:t.loading2,fab:"",dark:"",small:"",color:"secondary"},on:{click:function(e){return t.addingProductToCartMehod(e,t.product)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-cart")])],1),a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"accent"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-message")]),a("v-badge",{attrs:{color:"green",content:"6"}})],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")])],1)])],1)],1)},U=[],G={name:"ProductItem",props:["product"],data:function(){return{show:!1,loading2:null}},computed:Object(s["a"])({},Object(i["c"])(["loading"])),methods:{addingProductToCartMehod:function(t,e){this.loading2=!0,this.$store.dispatch("addingProductToCart",e)}},watch:{loading:function(){0==this.loading&&(this.loading2=!1),console.log("This is the Value Of Loading2"+this.loading)}}},q=G,K=(a("74d7"),Object(u["a"])(q,M,U,!1,null,null,null)),Y=K.exports,J=void 0,X={methods:Object(s["a"])({gettingNextPage:function(t){console.log(t)}},Object(i["b"])(["getProductsFromPaginationLinks"])),name:"ProductList",computed:Object(s["a"])({},Object(i["c"])(["productItems","numberInPagination"])),created:function(){this.$store.dispatch("getProductItems")},components:{ProductItem:Y},data:function(){return{show:!1,rating:J,circle:!0,disabled:!1,length:null,nextIcon:"navigate_next",nextIcons:["mdi-chevron-right","mdi-arrow-right","mdi-menu-right"],prevIcon:"navigate_before",prevIcons:["mdi-chevron-left","mdi-arrow-left","mdi-menu-left"],page:1,totalVisible:7,bottomNav:"recent"}},updated:function(){this.length=this.numberInPagination}},W=X,z=(a("7cb3"),Object(u["a"])(W,R,B,!1,null,null,null)),Q=z.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto px-5 ",attrs:{"max-width":"400"}},[n("v-img",{staticClass:"black--text align-end ",attrs:{src:a("02bf"),"max-height":"100",contain:"",color:"primary"}}),n("v-card-title"),n("h4",{staticClass:"text-center mt-0"},[t._v(" Cart Itemss. ")]),n("v-divider"),t.cartItems.length<1?n("div",[n("p",{staticClass:"font-weight-black text-center"},[t._v("There are No Items, Kindly Add.")])]):t._l(t.cartItems,(function(t){return n("div",{key:t.id},[n("SingleCartItemComponent",{attrs:{cartItem:t}})],1)})),n("v-divider"),n("TotalGoodsComponent"),[n("CheckOutButtonComponent",{attrs:{allProductsCost:t.allProductsCost}})]],2)],1)},H=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[a("span",{staticClass:"font-weight-black text-capitalize"},[t._v(" "+t._s(t.cartItem.name)+" ")]),a("span",{},[t._v(" Ksh "+t._s(t.cartItem.price)+" /= each")]),a("span",{staticClass:"text-right",staticStyle:{float:"right"}},[t._v(" "+t._s(t.cartItem.quantity)+" "),a("v-icon",{staticClass:"cursor",attrs:{color:"blue"},on:{click:function(e){return t.addUpdatingCartItems(t.cartItem)}}},[t._v("arrow_upward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"green"},on:{click:function(e){return t.downUpdatingCartItems(t.cartItem)}}},[t._v("arrow_downward")]),a("v-icon",{staticClass:"cursor",attrs:{color:"red"},on:{click:function(e){return t.deletingTheCartItems(t.cartItem)}}},[t._v("delete")])],1)]),a("p",[a("strong",[t._v("TotalCost")]),a("span",{staticStyle:{float:"right"}},[a("strong",[t._v("$"+t._s(t.cartItem.quantity*t.cartItem.price)+"/=")])])]),a("v-divider")],1)},Z=[],tt={name:"SingleCartItemComponent",props:["cartItem"],data:function(){return{editingQuantity:1}},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["deletingTheCartItems","addUpdatingCartItems","downUpdatingCartItems"])),{},{updatingCartItemsMethod:function(t){var e={};e["id"]=t.id,e["number"]=this.editingQuantity}})},et=tt,at=(a("37d5"),Object(u["a"])(et,$,Z,!1,null,"2ffcd9d2",null)),nt=at.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"cursor"},[t._v(" Total Items "),a("span",{staticStyle:{float:"right",color:"red"}},[a("i",{staticClass:"fa fa-trash "}),a("strong",[t._v(" Remove All")])])])])}],st={name:"TotalGoodsComponent"},it=st,ct=(a("8d95"),Object(u["a"])(it,ot,rt,!1,null,"a692e210",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mb-12",attrs:{center:""}},[a("v-col",{attrs:{md:"12"}},[a("v-btn",{attrs:{block:"",color:"success"}},[t._v("Check Out "+t._s(t.allProductsCost))])],1)],1)],1)},dt=[],mt={name:"CheckOutButtonComponent",props:["allProductsCost"]},vt=mt,pt=Object(u["a"])(vt,ut,dt,!1,null,null,null),ft=pt.exports,gt={name:"ShoppingCartCoallationComponent",components:{SingleCartItemComponent:nt,TotalGoodsComponent:lt,CheckOutButtonComponent:ft},computed:Object(s["a"])({},Object(i["c"])(["cartItems","allProductsCost"])),created:function(){this.$store.dispatch("getAllCartItems")}},ht=gt,bt=Object(u["a"])(ht,V,H,!1,null,null,null),wt=bt.exports,Ct={name:"Home",components:{ProductList:Q,Cart:wt}},_t=Ct,It=Object(u["a"])(_t,L,N,!1,null,null,null),kt=It.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{color:"grey"}},[a("v-row",{staticClass:"my-8",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"6","offset-md":"3",sm:"6","offset-sm":"3"}},[a("v-card",{staticClass:"v-card--material pa-3",staticStyle:{"background-color":"#ABE6D6"}},[a("v-row",[a("v-col",{attrs:{align:"center"}},[a("div",{staticClass:"d-flex grow flex-wrap"},[a("v-avatar",{staticClass:"mx-auto v-card--material-avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),a("h2",[t._v(t._s(t.singleProduct.data.name))]),a("h3",{staticClass:"font-weight-regular"},[t._v(" Price: "+t._s(t.singleProduct.data.price)+" ")]),a("h3",{staticClass:"font-weight-regular"},[t._v(" Discount: "+t._s(t.singleProduct.data.discount)+" ")]),a("h2",{attrs:{blue:""}},[t._v("New Price: "+t._s(t.singleProduct.data.totalPrice))])])],1),a("v-row",[a("v-col",[a("h3",{attrs:{align:"center"}},[t._v("Description")]),a("p",{attrs:{align:"center"}},[t._v(" "+t._s(t.singleProduct.data.description)+" ")]),a("h3",{attrs:{align:"center"}},[t._v("Rating")]),a("v-rating",{attrs:{align:"center"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1)],1),a("v-row",[a("v-col",[a("h3",{attrs:{align:"center"}},[t._v("Reviews")])])],1),a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{block:"",color:"green",large:"",dark:""}},[t._v(" Add To Cart "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-cart")])],1)],1)],1)],1)],1)],1)],1)},Pt=[],Et=(a("a9e3"),{name:"ProductItem",props:["id"],created:function(){var t="https://vuejsapi.georgekprojects.tk/api/products/"+Number(this.id);console.log(t),this.$store.dispatch("gettingASingleProduct",t)},computed:Object(s["a"])({},Object(i["c"])(["singleProduct"])),data:function(){return{rating:null}},updated:function(){this.rating=this.singleProduct.data.star}}),Tt=Et,yt=(a("50fb"),Object(u["a"])(Tt,xt,Pt,!1,null,null,null)),jt=yt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"my-8",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"6","offset-md":"3",sm:"6","offset-sm":"3"}},[a("v-card",{staticClass:"v-card--material pa-3"},[a("v-row",[a("v-col",[a("div",{staticClass:"d-flex grow flex-wrap"},[a("div",{staticClass:"rounded-lg pa-4  v-card--material-heading elevation-6",staticStyle:{"background-color":"#4CAF50",width:"100%",color:"white"}},[a("div",{staticClass:"display-1 font-weight-light "},[t._v(" Edit Profile ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Complete your profile ")])])])])],1),a("v-row",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.nameRules,counter:10,"prepend-icon":"account_box",label:"First name",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.nameRules,counter:10,"prepend-icon":"account_box",label:"Last name",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.emailRules,"prepend-icon":"email",label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Picker in menu","prepend-icon":"event",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)],1),a("v-row",[a("v-col",{attrs:{md:"6","offset-md":"3"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{block:"",color:"green",large:"",dark:""},on:{click:t.submit}},[t._v(" Update Profile. "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-gavel")])],1)],1)],1)],1)],1)],1)],1)},Ot=[],Ft={data:function(){return{valid:!1,firstname:"",lastname:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"},function(t){return t.length>=3||"Name must be more than 3 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1}},methods:{submit:function(){this.$refs.form.validate()&&console.log("This is the output.")}}},St=Ft,Dt=(a("0fd9"),Object(u["a"])(St,At,Ot,!1,null,null,null)),Lt=Dt.exports;n["default"].use(D["a"]);var Nt=[{path:"/",name:"Home",component:kt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/cart",name:"Cart",component:wt},{path:"/products/:id",name:"SingleProduct",component:jt,props:!0},{path:"/profile",name:"Profile",component:Lt}],Rt=new D["a"]({routes:Nt,mode:"history"}),Bt=Rt;n["default"].config.productionTip=!1,n["default"].use(O["a"]),n["default"].use(S.a),new n["default"]({store:T,vuetify:A,router:Bt,render:function(t){return t(m)}}).$mount("#app")},"74d7":function(t,e,a){"use strict";var n=a("e017"),o=a.n(n);o.a},"7cb3":function(t,e,a){"use strict";var n=a("c077"),o=a.n(n);o.a},"8d95":function(t,e,a){"use strict";var n=a("b384"),o=a.n(n);o.a},a6e9:function(t,e,a){},b384:function(t,e,a){},b617:function(t,e,a){},c077:function(t,e,a){},db62:function(t,e,a){},e017:function(t,e,a){},f901:function(t,e,a){}});
//# sourceMappingURL=app.a4472a66.js.map
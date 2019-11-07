(this.webpackJsonpspc=this.webpackJsonpspc||[]).push([[0],{181:function(e,t,r){},182:function(e,t,r){},183:function(e,t,r){},184:function(e,t,r){},185:function(e,t,r){},186:function(e,t,r){},187:function(e,t,r){},188:function(e,t,r){"use strict";r.r(t);r(85);var a,n=r(0),o=r.n(n),c=r(83),l=r.n(c),i=(r(181),r(20)),u=r(22),s=(r(182),r(16)),m=(r(183),Math.acos,Math.tan,function(e){return e*Math.PI/180}),f=Math.sin,p=(Math.cos,Math.asin,Math.acos,Math.PI,(new Date).getFullYear()),b=(a=p)%400===0||a%100!==0&&a%4===0?366:365,g=m(23.45),v=function(){for(var e=new Array(b),t=0;t<b;t++)e[t]=g*f(m(360/365*(t-81)));return e}(),O=function(){var e={};return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].forEach((function(t,r){return e[t]=22.5*r})),e}(),d=r(26),y=(r(184),function(e){var t,r=e._label,a=e.setVal,c=e.value,l=Object(d.a)(e,["_label","setVal","value"]),i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],f=s[1],p=e.width?{width:e.width+"px"}:{};return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"degrees-label",htmlFor:r},r),o.a.createElement("input",Object.assign({className:"degrees-input",style:p,name:r,value:m?c:(t=c,176==String(t).charCodeAt(t.length-1)?t:t+String.fromCharCode(176)),"aria-label":r,onBlur:function(){f(!1);var e=Number(c);Number.isNaN(e)&&(e=0),a(e)},onFocus:function(){var e;f(!0),0===(e=c,176==(e=String(e)).charCodeAt(e.length-1)?e.substr(0,e.length-1):Number(e))&&a("")},onChange:function(e){a(e.target.value)}},l)))}),h=(r(185),r(186),function(e){var t=e._label,r=Object(d.a)(e,["_label"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"number-label",htmlFor:t},t),o.a.createElement("input",Object.assign({className:"number-input",name:t,"aria-label":t},r)))}),w=function(e){var t=e.remove,r=e.setVal,a=e.val;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form-group"},o.a.createElement(y,{setVal:function(e){return r("tilt",e)},_label:"Tilt",value:a.tilt})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"orientation"},"Orientation"),o.a.createElement("select",{className:"select-group",value:a.orientation,onChange:function(e){return r("orientation",e.target.value)}},Object.keys(O).map((function(e){return o.a.createElement("option",{key:e,value:e},e)})))),o.a.createElement("div",{className:"form-group"},o.a.createElement(h,{_label:"Watts",value:a.watts,onChange:function(e){return r("watts",e.target.value)}}),o.a.createElement("button",{className:"button",onClick:t},"-")))};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.pvArrays,r=e.setPVArrays,a=e.pvArrayInit,n=function(e){return function(){return r([].concat(Object(s.a)(t.slice(0,e)),Object(s.a)(t.slice(e+1))))}},c=function(e){return function(a,n){return r([].concat(Object(s.a)(t.slice(0,e)),[j({},t[e],Object(i.a)({},a,n))],Object(s.a)(t.slice(e+1))))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"panels-group"},o.a.createElement("h3",{className:"pv-arrays-header"},"PV Arrays"),t.map((function(e,r){return o.a.createElement("div",null,o.a.createElement("span",{className:"array-number"},r+1,"."),o.a.createElement(w,{key:r,setVal:c(r),remove:n(r),val:t[r]}))})),o.a.createElement("button",{className:"button",onClick:function(){return r([].concat(Object(s.a)(t),[a]))}},"+")))},P=function(e){var t={};return function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];var o=JSON.stringify(a);return t[o]?t[o]:t[o]=e.apply(void 0,a)}},S=window.localStorage.memoizeLSVersion;if("undefined"!==typeof S&&"1"!==S)for(var D in window.localStorage)D.startsWith("memoizeLS")&&delete window.localStorage[D];var A=function(e,t){var r=Math.pow(10,t);return(e*r|0)/r};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C,F,W=Math.sin,J=Math.cos,V=Math.asin,L=Math.acos,_=Math.tan,I=Math.PI,B=(P(J),P(W),P(_)),T=P((function(e){return v.map((function(t){return x(M({},e,{dec:t}))}))})),x=P((function(e){var t,r,a=(t=e.lat,r=e.dec,L(-B(t)*B(r))/m(15));return function(e,t,r,a){if(t%2!==0)throw new Error("n must be even");for(var n=(a-r)/t,o=e(r),c=1;c<t;c++)o+=e(c*n+r)*(c%2==0?2:4);return(o+=e(t*n))*n/3}((function(t){var r=t*I/12,a=z(M({},e,{hourAngle:r}));return a<0?0:a}),e.samplesPerDay,-a,a)})),z=P((function(e){var t,r=e.lat,a=e.dec,n=e.tilt,o=e.orientation,c=e.hourAngle,l=W(r),i=W(a),u=J(c),s=W(c),m=J(r),f=J(a),p=V(i*l+f*u*m),b=J(p),g=(i*m-f*u*l)/b;return t=g<-1?Math.PI:g>1?0:L(g),s>0&&(t=2*I-t),W(p)*J(n)+b*W(n)*J(o-t)})),Y=(new Date).getFullYear(),$=P((function(e,t){return new Date(e,t,0).getDate()})),q=P((function(e){var t=e.watts,r=Object(d.a)(e,["watts"]),a=T(r),n=0;return Object(s.a)(new Array(12)).map((function(e,t){var r,o=a.slice(n,n+=$(Y,t));return(r=o).reduce((function(e,t){return e+t}),0)/r.length})).map((function(e){return e*t}))})),G=(C="getAvgProdByMonth",F=q,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a="memoizeLS1"+C+JSON.stringify(t);if(window.localStorage[a])return JSON.parse(window.localStorage[a]);var n=F.apply(void 0,t);return window.localStorage[a]=JSON.stringify(n),n});r(187);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Q=function(e){var t=e.pvArrays,r=e.lat,a=function(e){return e.map((function(e){return G(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{lat:r,samplesPerDay:100}))}))},c=Object(n.useState)({calculating:!1,data:[],time:0}),l=Object(u.a)(c,2),s=l[0],m=l[1];Object(n.useEffect)((function(){setTimeout(f,0)}),[]);var f=function(){m({data:[],calculating:!0,time:0}),setTimeout((function(){var e=+new Date,r=a(t),n=+new Date;m({data:r,calculating:!1,time:n-e})}),0)};return o.a.createElement("div",null,o.a.createElement("button",{className:"button",onClick:f},"Calculate"),o.a.createElement("h3",{className:"display-header"},"Average Production Per Day  (kw/h)"),s.calculating?R():X(s))},R=function(){return o.a.createElement("div",{className:"calculating"},"Calculating...")},U=P((function(e,t){return e.reduce((function(e,r){return[].concat(Object(s.a)(e),[r[t]])}),[])})),X=function(e){for(var t,r=[],a=0;a<12;a++)r.push(U(e.data,a));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"all-months-wrapper"},r.map(Z)),(t=e.time)>10?(console.log("calculationTime",t),o.a.createElement("div",{className:"calc-time"},"Calculation Time: ",A(t/1e3,2)," seconds")):"")},Z=function(e,t){var r=e.length>1?{borderBottom:"1px solid black"}:{};return o.a.createElement("div",{key:t,className:"month-wrapper"},o.a.createElement("div",{className:"month-label"},K[t]),o.a.createElement("div",{style:r},e.map((function(e,t){return o.a.createElement("div",{className:"month-data",key:t},A(e/1e3,2))}))),ee(e))},ee=function(e){if(e.length<2)return"";var t=e.reduce((function(e,t){return e+t}),0);return o.a.createElement("div",{className:"month-total"},A(t/1e3,2))},te=function(e){var t=e.setLat,r=re;try{window.navigator.geolocation.getCurrentPosition;r=o.a.createElement("a",{className:"lat-link",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t(A(e.coords.latitude,2))}))}},"Find My Latitude")}catch(a){}return r},re=o.a.createElement("a",{className:"lat-link",href:"https://www.latlong.net/",target:"_blank"},"Find My Latitude");function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}navigator.geolocation.getCurrentPosition((function(e){console.log(e)}));var ne={tilt:0,orientation:"S",watts:500},oe=window.localStorage.pvArrays,ce=oe?JSON.parse(oe):[ne],le=window.localStorage.lat?window.localStorage.lat:0,ie=function(){var e=Object(n.useState)(ce),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(le),l=Object(u.a)(c,2),s=l[0],f=l[1],p=m(Number(s)),b=r.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{orientation:m(O[e.orientation]),tilt:m(e.tilt)})}));return window.localStorage.pvArrays=JSON.stringify(r),window.localStorage.lat=s,o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",{className:"header"},"Solar Power Calculator")),o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement(y,{setVal:f,_label:"Latitude",value:s,width:80}),o.a.createElement(te,{setLat:f})),o.a.createElement("div",{className:"form-group"})),o.a.createElement(N,{pvArrays:r,setPVArrays:a,pvArrayInit:ne}),o.a.createElement(Q,{pvArrays:b,lat:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,r){e.exports=r(188)}},[[84,1,2]]]);
//# sourceMappingURL=main.ea1ddec2.chunk.js.map
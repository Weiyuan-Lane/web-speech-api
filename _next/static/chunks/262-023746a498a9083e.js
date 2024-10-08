"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{9262:function(e,t,o){o.d(t,{Z:function(){return e1}});var r,n,i,a,p,s=o(2265),l=o(1994),c=o(6962),f=o(801),u=o(395),d=o(4873),m=o(2919),h=o(6710),v=o(628),g=o(6210),y=o(1691),b=o(8475),w=o(6125),x=o(5657),O=o(8826),R=o(3947),E=o(3450),P=o(2786);function T(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function j(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function M(e){if("undefined"==typeof ShadowRoot)return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var A=Math.max,k=Math.min,L=Math.round;function S(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function W(){return!/^((?!chrome|android).)*safari/i.test(S())}function D(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var r=e.getBoundingClientRect(),n=1,i=1;t&&j(e)&&(n=e.offsetWidth>0&&L(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&L(r.height)/e.offsetHeight||1);var a=(Z(e)?T(e):window).visualViewport,p=!W()&&o,s=(r.left+(p&&a?a.offsetLeft:0))/n,l=(r.top+(p&&a?a.offsetTop:0))/i,c=r.width/n,f=r.height/i;return{width:c,height:f,top:l,right:s+c,bottom:l+f,left:s,x:s,y:l}}function B(e){var t=T(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return D(N(e)).left+B(e).scrollLeft}function V(e){return T(e).getComputedStyle(e)}function I(e){var t=V(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function F(e){var t=D(e),o=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-o)&&(o=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function q(e){return"html"===C(e)?e:e.assignedSlot||e.parentNode||(M(e)?e.host:null)||N(e)}function U(e,t){void 0===t&&(t=[]);var o,r=function e(t){return["html","body","#document"].indexOf(C(t))>=0?t.ownerDocument.body:j(t)&&I(t)?t:e(q(t))}(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),i=T(r),a=n?[i].concat(i.visualViewport||[],I(r)?r:[]):r,p=t.concat(a);return n?p:p.concat(U(q(a)))}function z(e){return j(e)&&"fixed"!==V(e).position?e.offsetParent:null}function _(e){for(var t=T(e),o=z(e);o&&["table","td","th"].indexOf(C(o))>=0&&"static"===V(o).position;)o=z(o);return o&&("html"===C(o)||"body"===C(o)&&"static"===V(o).position)?t:o||function(e){var t=/firefox/i.test(S());if(/Trident/i.test(S())&&j(e)&&"fixed"===V(e).position)return null;var o=q(e);for(M(o)&&(o=o.host);j(o)&&0>["html","body"].indexOf(C(o));){var r=V(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}var X="bottom",Y="right",G="left",J="auto",K=["top",X,Y,G],Q="start",$="viewport",ee="popper",et=K.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-end"])},[]),eo=[].concat(K,[J]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-end"])},[]),er=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],en={placement:"bottom",modifiers:[],strategy:"absolute"};function ei(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var ea={passive:!0};function ep(e){return e.split("-")[0]}function es(e){return e.split("-")[1]}function el(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ec(e){var t,o=e.reference,r=e.element,n=e.placement,i=n?ep(n):null,a=n?es(n):null,p=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2;switch(i){case"top":t={x:p,y:o.y-r.height};break;case X:t={x:p,y:o.y+o.height};break;case Y:t={x:o.x+o.width,y:s};break;case G:t={x:o.x-r.width,y:s};break;default:t={x:o.x,y:o.y}}var l=i?el(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case Q:t[l]=t[l]-(o[c]/2-r[c]/2);break;case"end":t[l]=t[l]+(o[c]/2-r[c]/2)}}return t}var ef={top:"auto",right:"auto",bottom:"auto",left:"auto"};function eu(e){var t,o,r,n,i,a,p,s=e.popper,l=e.popperRect,c=e.placement,f=e.variation,u=e.offsets,d=e.position,m=e.gpuAcceleration,h=e.adaptive,v=e.roundOffsets,g=e.isFixed,y=u.x,b=void 0===y?0:y,w=u.y,x=void 0===w?0:w,O="function"==typeof v?v({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var R=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),P=G,Z="top",j=window;if(h){var M=_(s),A="clientHeight",k="clientWidth";M===T(s)&&"static"!==V(M=N(s)).position&&"absolute"===d&&(A="scrollHeight",k="scrollWidth"),("top"===c||(c===G||c===Y)&&"end"===f)&&(Z=X,x-=(g&&M===j&&j.visualViewport?j.visualViewport.height:M[A])-l.height,x*=m?1:-1),(c===G||("top"===c||c===X)&&"end"===f)&&(P=Y,b-=(g&&M===j&&j.visualViewport?j.visualViewport.width:M[k])-l.width,b*=m?1:-1)}var S=Object.assign({position:d},h&&ef),W=!0===v?(t={x:b,y:x},o=T(s),r=t.x,n=t.y,{x:L(r*(i=o.devicePixelRatio||1))/i||0,y:L(n*i)/i||0}):{x:b,y:x};return(b=W.x,x=W.y,m)?Object.assign({},S,((p={})[Z]=E?"0":"",p[P]=R?"0":"",p.transform=1>=(j.devicePixelRatio||1)?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",p)):Object.assign({},S,((a={})[Z]=E?x+"px":"",a[P]=R?b+"px":"",a.transform="",a))}var ed={left:"right",right:"left",bottom:"top",top:"bottom"};function em(e){return e.replace(/left|right|bottom|top/g,function(e){return ed[e]})}var eh={start:"end",end:"start"};function ev(e){return e.replace(/start|end/g,function(e){return eh[e]})}function eg(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&M(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ey(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function eb(e,t,o){var r,n,i,a,p,s,l,c,f,u;return t===$?ey(function(e,t){var o=T(e),r=N(e),n=o.visualViewport,i=r.clientWidth,a=r.clientHeight,p=0,s=0;if(n){i=n.width,a=n.height;var l=W();(l||!l&&"fixed"===t)&&(p=n.offsetLeft,s=n.offsetTop)}return{width:i,height:a,x:p+H(e),y:s}}(e,o)):Z(t)?((r=D(t,!1,"fixed"===o)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):ey((n=N(e),a=N(n),p=B(n),s=null==(i=n.ownerDocument)?void 0:i.body,l=A(a.scrollWidth,a.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=A(a.scrollHeight,a.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),f=-p.scrollLeft+H(n),u=-p.scrollTop,"rtl"===V(s||a).direction&&(f+=A(a.clientWidth,s?s.clientWidth:0)-l),{width:l,height:c,x:f,y:u}))}function ew(){return{top:0,right:0,bottom:0,left:0}}function ex(e){return Object.assign({},ew(),e)}function eO(e,t){return t.reduce(function(t,o){return t[o]=e,t},{})}function eR(e,t){void 0===t&&(t={});var o,r,n,i,a,p,s,l,c=t,f=c.placement,u=void 0===f?e.placement:f,d=c.strategy,m=void 0===d?e.strategy:d,h=c.boundary,v=c.rootBoundary,g=c.elementContext,y=void 0===g?ee:g,b=c.altBoundary,w=c.padding,x=void 0===w?0:w,O=ex("number"!=typeof x?x:eO(x,K)),R=e.rects.popper,E=e.elements[void 0!==b&&b?y===ee?"reference":ee:y],P=(o=Z(E)?E:E.contextElement||N(e.elements.popper),r=void 0===h?"clippingParents":h,n=void 0===v?$:v,s=(p=[].concat("clippingParents"===r?(i=U(q(o)),Z(a=["absolute","fixed"].indexOf(V(o).position)>=0&&j(o)?_(o):o)?i.filter(function(e){return Z(e)&&eg(e,a)&&"body"!==C(e)}):[]):[].concat(r),[n]))[0],(l=p.reduce(function(e,t){var r=eb(o,t,m);return e.top=A(r.top,e.top),e.right=k(r.right,e.right),e.bottom=k(r.bottom,e.bottom),e.left=A(r.left,e.left),e},eb(o,s,m))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),T=D(e.elements.reference),M=ec({reference:T,element:R,strategy:"absolute",placement:u}),L=ey(Object.assign({},R,M)),S=y===ee?L:T,W={top:P.top-S.top+O.top,bottom:S.bottom-P.bottom+O.bottom,left:P.left-S.left+O.left,right:S.right-P.right+O.right},B=e.modifiersData.offset;if(y===ee&&B){var H=B[u];Object.keys(W).forEach(function(e){var t=[Y,X].indexOf(e)>=0?1:-1,o=["top",X].indexOf(e)>=0?"y":"x";W[e]+=H[o]*t})}return W}function eE(e,t,o){return A(e,k(t,o))}function eP(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function eT(e){return["top",Y,X,G].some(function(t){return e[t]>=0})}var eZ=(i=void 0===(n=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,i=void 0===n||n,a=r.resize,p=void 0===a||a,s=T(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach(function(e){e.addEventListener("scroll",o.update,ea)}),p&&s.addEventListener("resize",o.update,ea),function(){i&&l.forEach(function(e){e.removeEventListener("scroll",o.update,ea)}),p&&s.removeEventListener("resize",o.update,ea)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=ec({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=o.adaptive,i=o.roundOffsets,a=void 0===i||i,p={placement:ep(t.placement),variation:es(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,eu(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===n||n,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,eu(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];j(n)&&C(n)&&(Object.assign(n.style,o),Object.keys(r).forEach(function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce(function(e,t){return e[t]="",e},{});j(r)&&C(r)&&(Object.assign(r.style,i),Object.keys(n).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=void 0===n?[0,0]:n,a=eo.reduce(function(e,o){var r,n,a,p,s,l;return e[o]=(r=t.rects,a=[G,"top"].indexOf(n=ep(o))>=0?-1:1,s=(p="function"==typeof i?i(Object.assign({},r,{placement:o})):i)[0],l=p[1],s=s||0,l=(l||0)*a,[G,Y].indexOf(n)>=0?{x:l,y:s}:{x:s,y:l}),e},{}),p=a[t.placement],s=p.x,l=p.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,a=o.altAxis,p=void 0===a||a,s=o.fallbackPlacements,l=o.padding,c=o.boundary,f=o.rootBoundary,u=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=ep(v)===v,y=s||(g||!m?[em(v)]:function(e){if(ep(e)===J)return[];var t=em(e);return[ev(e),t,ev(t)]}(v)),b=[v].concat(y).reduce(function(e,o){var r,n,i,a,p,s,u,d,v,g,y,b;return e.concat(ep(o)===J?(n=(r={placement:o,boundary:c,rootBoundary:f,padding:l,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,p=r.padding,s=r.flipVariations,d=void 0===(u=r.allowedAutoPlacements)?eo:u,0===(y=(g=(v=es(n))?s?et:et.filter(function(e){return es(e)===v}):K).filter(function(e){return d.indexOf(e)>=0})).length&&(y=g),Object.keys(b=y.reduce(function(e,o){return e[o]=eR(t,{placement:o,boundary:i,rootBoundary:a,padding:p})[ep(o)],e},{})).sort(function(e,t){return b[e]-b[t]})):o)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,E=b[0],P=0;P<b.length;P++){var T=b[P],Z=ep(T),j=es(T)===Q,M=["top",X].indexOf(Z)>=0,A=M?"width":"height",k=eR(t,{placement:T,boundary:c,rootBoundary:f,altBoundary:u,padding:l}),L=M?j?Y:G:j?X:"top";w[A]>x[A]&&(L=em(L));var S=em(L),W=[];if(i&&W.push(k[Z]<=0),p&&W.push(k[L]<=0,k[S]<=0),W.every(function(e){return e})){E=T,R=!1;break}O.set(T,W)}if(R)for(var D=m?3:1,B=function(e){var t=b.find(function(t){var o=O.get(t);if(o)return o.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},C=D;C>0&&"break"!==B(C);C--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=o.altAxis,a=o.boundary,p=o.rootBoundary,s=o.altBoundary,l=o.padding,c=o.tether,f=void 0===c||c,u=o.tetherOffset,d=void 0===u?0:u,m=eR(t,{boundary:a,rootBoundary:p,padding:l,altBoundary:s}),h=ep(t.placement),v=es(t.placement),g=!v,y=el(h),b="x"===y?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,R="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,E="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(w){if(void 0===n||n){var Z,j="y"===y?"top":G,M="y"===y?X:Y,L="y"===y?"height":"width",S=w[y],W=S+m[j],D=S-m[M],B=f?-O[L]/2:0,C=v===Q?x[L]:O[L],N=v===Q?-O[L]:-x[L],H=t.elements.arrow,V=f&&H?F(H):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ew(),q=I[j],U=I[M],z=eE(0,x[L],V[L]),J=g?x[L]/2-B-z-q-E.mainAxis:C-z-q-E.mainAxis,K=g?-x[L]/2+B+z+U+E.mainAxis:N+z+U+E.mainAxis,$=t.elements.arrow&&_(t.elements.arrow),ee=$?"y"===y?$.clientTop||0:$.clientLeft||0:0,et=null!=(Z=null==P?void 0:P[y])?Z:0,eo=eE(f?k(W,S+J-et-ee):W,S,f?A(D,S+K-et):D);w[y]=eo,T[y]=eo-S}if(void 0!==i&&i){var er,en,ei="x"===y?"top":G,ea="x"===y?X:Y,ec=w[b],ef="y"===b?"height":"width",eu=ec+m[ei],ed=ec-m[ea],em=-1!==["top",G].indexOf(h),eh=null!=(en=null==P?void 0:P[b])?en:0,ev=em?eu:ec-x[ef]-O[ef]-eh+E.altAxis,eg=em?ec+x[ef]+O[ef]-eh-E.altAxis:ed,ey=f&&em?(er=eE(ev,ec,eg))>eg?eg:er:eE(f?ev:eu,ec,f?eg:ed);w[b]=ey,T[b]=ey-ec}t.modifiersData[r]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o,r=e.state,n=e.name,i=e.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,s=ep(r.placement),l=el(s),c=[G,Y].indexOf(s)>=0?"height":"width";if(a&&p){var f=ex("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:eO(t,K)),u=F(a),d="y"===l?"top":G,m="y"===l?X:Y,h=r.rects.reference[c]+r.rects.reference[l]-p[l]-r.rects.popper[c],v=p[l]-r.rects.reference[l],g=_(a),y=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=f[d],w=y-u[c]-f[m],x=y/2-u[c]/2+(h/2-v/2),O=eE(b,x,w);r.modifiersData[n]=((o={})[l]=O,o.centerOffset=O-x,o)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&eg(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=eR(t,{elementContext:"reference"}),p=eR(t,{altBoundary:!0}),s=eP(a,r),l=eP(p,n,i),c=eT(s),f=eT(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}}]}).defaultModifiers)?[]:n,p=void 0===(a=r.defaultOptions)?en:a,function(e,t,o){void 0===o&&(o=p);var r,n,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},en,p),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],l=!1,c={state:a,setOptions:function(o){var r,n,l,u,d,m="function"==typeof o?o(a.options):o;f(),a.options=Object.assign({},p,a.options,m),a.scrollParents={reference:Z(e)?U(e):e.contextElement?U(e.contextElement):[],popper:U(t)};var h=(n=Object.keys(r=[].concat(i,a.options.modifiers).reduce(function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,u=new Set,d=[],n.forEach(function(e){l.set(e.name,e)}),n.forEach(function(e){u.has(e.name)||function e(t){u.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!u.has(t)){var o=l.get(t);o&&e(o)}}),d.push(t)}(e)}),er.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=h.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,o=e.options,r=e.effect;if("function"==typeof r){var n=r({state:a,name:t,instance:c,options:void 0===o?{}:o});s.push(n||function(){})}}),c.update()},forceUpdate:function(){if(!l){var e,t,o,r,n,i,p,s,f,u,d,m,h=a.elements,v=h.reference,g=h.popper;if(ei(v,g)){a.rects={reference:(t=_(g),o="fixed"===a.options.strategy,r=j(t),s=j(t)&&(i=L((n=t.getBoundingClientRect()).width)/t.offsetWidth||1,p=L(n.height)/t.offsetHeight||1,1!==i||1!==p),f=N(t),u=D(v,s,o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!o)&&(("body"!==C(t)||I(f))&&(d=(e=t)!==T(e)&&j(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:B(e)),j(t)?(m=D(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):f&&(m.x=H(f))),{x:u.left+d.scrollLeft-m.x,y:u.top+d.scrollTop-m.y,width:u.width,height:u.height}),popper:F(g)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var y=0;y<a.orderedModifiers.length;y++){if(!0===a.reset){a.reset=!1,y=-1;continue}var b=a.orderedModifiers[y],w=b.fn,x=b.options,O=void 0===x?{}:x,R=b.name;"function"==typeof w&&(a=w({state:a,options:O,name:R,instance:c})||a)}}}},update:(r=function(){return new Promise(function(e){c.forceUpdate(),e(a)})},function(){return n||(n=new Promise(function(e){Promise.resolve().then(function(){n=void 0,e(r())})})),n}),destroy:function(){f(),l=!0}};if(!ei(e,t))return c;function f(){s.forEach(function(e){return e()}),s=[]}return c.setOptions(o).then(function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)}),c}),ej=o(5988),eM=o(1866),eA=o(4143),ek=o(738);function eL(e){return(0,ek.ZP)("MuiPopper",e)}(0,eA.Z)("MuiPopper",["root"]);var eS=o(7437);function eW(e){return"function"==typeof e?e():e}let eD=e=>{let{classes:t}=e;return(0,f.Z)({root:["root"]},eL,t)},eB={},eC=s.forwardRef(function(e,t){var o;let{anchorEl:r,children:n,direction:i,disablePortal:a,modifiers:p,open:l,placement:c,popperOptions:f,popperRef:u,slotProps:d={},slots:m={},TransitionProps:h,ownerState:v,...g}=e,y=s.useRef(null),b=(0,R.Z)(y,t),w=s.useRef(null),x=(0,R.Z)(w,u),O=s.useRef(x);(0,E.Z)(()=>{O.current=x},[x]),s.useImperativeHandle(u,()=>w.current,[]);let P=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(c,i),[T,Z]=s.useState(P),[j,M]=s.useState(eW(r));s.useEffect(()=>{w.current&&w.current.forceUpdate()}),s.useEffect(()=>{r&&M(eW(r))},[r]),(0,E.Z)(()=>{if(!j||!l)return;let e=e=>{Z(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:t=>{let{state:o}=t;e(o)}}];null!=p&&(t=t.concat(p)),f&&null!=f.modifiers&&(t=t.concat(f.modifiers));let o=eZ(j,y.current,{placement:P,...f,modifiers:t});return O.current(o),()=>{o.destroy(),O.current(null)}},[j,a,p,l,f,P]);let A={placement:T};null!==h&&(A.TransitionProps=h);let k=eD(e),L=null!==(o=m.root)&&void 0!==o?o:"div",S=(0,ej.Z)({elementType:L,externalSlotProps:d.root,externalForwardedProps:g,additionalProps:{role:"tooltip",ref:b},ownerState:e,className:k.root});return(0,eS.jsx)(L,{...S,children:"function"==typeof n?n(A):n})}),eN=s.forwardRef(function(e,t){let o;let{anchorEl:r,children:n,container:i,direction:a="ltr",disablePortal:p=!1,keepMounted:l=!1,modifiers:c,open:f,placement:u="bottom",popperOptions:d=eB,popperRef:m,style:h,transition:v=!1,slotProps:g={},slots:y={},...b}=e,[w,x]=s.useState(!0);if(!l&&!f&&(!v||w))return null;if(i)o=i;else if(r){let e=eW(r);o=e&&void 0!==e.nodeType?(0,P.Z)(e).body:(0,P.Z)(null).body}let O=!f&&l&&(!v||w)?"none":void 0,R=v?{in:f,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:void 0;return(0,eS.jsx)(eM.Z,{disablePortal:p,container:o,children:(0,eS.jsx)(eC,{anchorEl:r,direction:a,disablePortal:p,modifiers:c,ref:t,open:v?!w:f,placement:u,popperOptions:d,popperRef:m,slotProps:g,slots:y,...b,style:{position:"fixed",top:0,left:0,display:O,...h},TransitionProps:R,children:n})})}),eH=(0,g.ZP)(eN,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eV=s.forwardRef(function(e,t){var o;let r=(0,d.V)(),{anchorEl:n,component:i,components:a,componentsProps:p,container:s,disablePortal:l,keepMounted:c,modifiers:f,open:u,placement:m,popperOptions:h,popperRef:v,transition:g,slots:y,slotProps:b,...x}=(0,w.i)({props:e,name:"MuiPopper"}),O=null!==(o=null==y?void 0:y.root)&&void 0!==o?o:null==a?void 0:a.Root,R={anchorEl:n,container:s,disablePortal:l,keepMounted:c,modifiers:f,open:u,placement:m,popperOptions:h,popperRef:v,transition:g,...x};return(0,eS.jsx)(eH,{as:i,direction:r?"rtl":"ltr",slots:{root:O},slotProps:null!=b?b:p,...R,ref:t})});var eI=o(9665),eF=o(118),eq=o(3025).Z,eU=o(7184);function ez(e){return(0,ek.ZP)("MuiTooltip",e)}let e_=(0,eA.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),eX=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat((0,x.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,f.Z)(a,ez,t)},eY=(0,g.ZP)(eV,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((0,b.Z)(e=>{let{theme:t}=e;return{zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:e=>{let{ownerState:t}=e;return!t.disableInteractive},style:{pointerEvents:"auto"}},{props:e=>{let{open:t}=e;return!t},style:{pointerEvents:"none"}},{props:e=>{let{ownerState:t}=e;return t.arrow},style:{['&[data-popper-placement*="bottom"] .'.concat(e_.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(e_.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(e_.arrow)]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},['&[data-popper-placement*="left"] .'.concat(e_.arrow)]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:e=>{let{ownerState:t}=e;return t.arrow&&!t.isRtl},style:{['&[data-popper-placement*="right"] .'.concat(e_.arrow)]:{left:0,marginLeft:"-0.71em"}}},{props:e=>{let{ownerState:t}=e;return t.arrow&&!!t.isRtl},style:{['&[data-popper-placement*="right"] .'.concat(e_.arrow)]:{right:0,marginRight:"-0.71em"}}},{props:e=>{let{ownerState:t}=e;return t.arrow&&!t.isRtl},style:{['&[data-popper-placement*="left"] .'.concat(e_.arrow)]:{right:0,marginRight:"-0.71em"}}},{props:e=>{let{ownerState:t}=e;return t.arrow&&!!t.isRtl},style:{['&[data-popper-placement*="left"] .'.concat(e_.arrow)]:{left:0,marginLeft:"-0.71em"}}}]}})),eG=(0,g.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,x.Z)(o.placement.split("-")[0]))]]}})((0,b.Z)(e=>{let{theme:t}=e;return{backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,u.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[".".concat(e_.popper,'[data-popper-placement*="left"] &')]:{transformOrigin:"right center"},[".".concat(e_.popper,'[data-popper-placement*="right"] &')]:{transformOrigin:"left center"},[".".concat(e_.popper,'[data-popper-placement*="top"] &')]:{transformOrigin:"center bottom",marginBottom:"14px"},[".".concat(e_.popper,'[data-popper-placement*="bottom"] &')]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:e=>{let{ownerState:t}=e;return t.arrow},style:{position:"relative",margin:0}},{props:e=>{let{ownerState:t}=e;return t.touch},style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat(Math.round(16/14*1e5)/1e5,"em"),fontWeight:t.typography.fontWeightRegular}},{props:e=>{let{ownerState:t}=e;return!t.isRtl},style:{[".".concat(e_.popper,'[data-popper-placement*="left"] &')]:{marginRight:"14px"},[".".concat(e_.popper,'[data-popper-placement*="right"] &')]:{marginLeft:"14px"}}},{props:e=>{let{ownerState:t}=e;return!t.isRtl&&t.touch},style:{[".".concat(e_.popper,'[data-popper-placement*="left"] &')]:{marginRight:"24px"},[".".concat(e_.popper,'[data-popper-placement*="right"] &')]:{marginLeft:"24px"}}},{props:e=>{let{ownerState:t}=e;return!!t.isRtl},style:{[".".concat(e_.popper,'[data-popper-placement*="left"] &')]:{marginLeft:"14px"},[".".concat(e_.popper,'[data-popper-placement*="right"] &')]:{marginRight:"14px"}}},{props:e=>{let{ownerState:t}=e;return!!t.isRtl&&t.touch},style:{[".".concat(e_.popper,'[data-popper-placement*="left"] &')]:{marginLeft:"24px"},[".".concat(e_.popper,'[data-popper-placement*="right"] &')]:{marginRight:"24px"}}},{props:e=>{let{ownerState:t}=e;return t.touch},style:{[".".concat(e_.popper,'[data-popper-placement*="top"] &')]:{marginBottom:"24px"}}},{props:e=>{let{ownerState:t}=e;return t.touch},style:{[".".concat(e_.popper,'[data-popper-placement*="bottom"] &')]:{marginTop:"24px"}}}]}})),eJ=(0,g.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((0,b.Z)(e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,u.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),eK=!1,eQ=new c.V,e$={x:0,y:0};function e0(e,t){return function(o){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t&&t(o,...n),e(o,...n)}}var e1=s.forwardRef(function(e,t){var o,r,n,i,a,p,f,u,g,b,x,R,E,P,T,Z,j,M,A;let k=(0,w.i)({props:e,name:"MuiTooltip"}),{arrow:L=!1,children:S,classes:W,components:D={},componentsProps:B={},describeChild:C=!1,disableFocusListener:N=!1,disableHoverListener:H=!1,disableInteractive:V=!1,disableTouchListener:I=!1,enterDelay:F=100,enterNextDelay:q=0,enterTouchDelay:U=700,followCursor:z=!1,id:_,leaveDelay:X=0,leaveTouchDelay:Y=1500,onClose:G,onOpen:J,open:K,placement:Q="bottom",PopperComponent:$,PopperProps:ee={},slotProps:et={},slots:eo={},title:er,TransitionComponent:en=O.Z,TransitionProps:ei,...ea}=k,ep=s.isValidElement(S)?S:(0,eS.jsx)("span",{children:S}),es=(0,y.Z)(),el=(0,d.V)(),[ec,ef]=s.useState(),[eu,ed]=s.useState(null),em=s.useRef(!1),eh=V||z,ev=(0,c.Z)(),eg=(0,c.Z)(),ey=(0,c.Z)(),eb=(0,c.Z)(),[ew,ex]=(0,eU.Z)({controlled:K,default:!1,name:"Tooltip",state:"open"}),eO=ew,eR=eq(_),eE=s.useRef(),eP=(0,eI.Z)(()=>{void 0!==eE.current&&(document.body.style.WebkitUserSelect=eE.current,eE.current=void 0),eb.clear()});s.useEffect(()=>eP,[eP]);let eT=e=>{eQ.clear(),eK=!0,ex(!0),J&&!eO&&J(e)},eZ=(0,eI.Z)(e=>{eQ.start(800+X,()=>{eK=!1}),ex(!1),G&&eO&&G(e),ev.start(es.transitions.duration.shortest,()=>{em.current=!1})}),ej=e=>{em.current&&"touchstart"!==e.type||(ec&&ec.removeAttribute("title"),eg.clear(),ey.clear(),F||eK&&q?eg.start(eK?q:F,()=>{eT(e)}):eT(e))},eM=e=>{eg.clear(),ey.start(X,()=>{eZ(e)})},[,eA]=s.useState(!1),ek=e=>{(0,m.Z)(e.target)||(eA(!1),eM(e))},eL=e=>{ec||ef(e.currentTarget),(0,m.Z)(e.target)&&(eA(!0),ej(e))},eW=e=>{em.current=!0;let t=ep.props;t.onTouchStart&&t.onTouchStart(e)};s.useEffect(()=>{if(eO)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&eZ(e)}},[eZ,eO]);let eD=(0,eF.Z)((0,v.Z)(ep),ef,t);er||0===er||(eO=!1);let eB=s.useRef(),eC={},eN="string"==typeof er;C?(eC.title=eO||!eN||H?null:er,eC["aria-describedby"]=eO?eR:null):(eC["aria-label"]=eN?er:null,eC["aria-labelledby"]=eO&&!eN?eR:null);let eH={...eC,...ea,...ep.props,className:(0,l.Z)(ea.className,ep.props.className),onTouchStart:eW,ref:eD,...z?{onMouseMove:e=>{let t=ep.props;t.onMouseMove&&t.onMouseMove(e),e$={x:e.clientX,y:e.clientY},eB.current&&eB.current.update()}}:{}},ez={};I||(eH.onTouchStart=e=>{eW(e),ey.clear(),ev.clear(),eP(),eE.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eb.start(U,()=>{document.body.style.WebkitUserSelect=eE.current,ej(e)})},eH.onTouchEnd=e=>{ep.props.onTouchEnd&&ep.props.onTouchEnd(e),eP(),ey.start(Y,()=>{eZ(e)})}),H||(eH.onMouseOver=e0(ej,eH.onMouseOver),eH.onMouseLeave=e0(eM,eH.onMouseLeave),eh||(ez.onMouseOver=ej,ez.onMouseLeave=eM)),N||(eH.onFocus=e0(eL,eH.onFocus),eH.onBlur=e0(ek,eH.onBlur),eh||(ez.onFocus=eL,ez.onBlur=ek));let e_=s.useMemo(()=>{var e;let t=[{name:"arrow",enabled:!!eu,options:{element:eu,padding:4}}];return(null===(e=ee.popperOptions)||void 0===e?void 0:e.modifiers)&&(t=t.concat(ee.popperOptions.modifiers)),{...ee.popperOptions,modifiers:t}},[eu,ee]),e1={...k,isRtl:el,arrow:L,disableInteractive:eh,placement:Q,PopperComponentProp:$,touch:em.current},e2=eX(e1),e4=null!==(a=null!==(i=eo.popper)&&void 0!==i?i:D.Popper)&&void 0!==a?a:eY,e7=null!==(u=null!==(f=null!==(p=eo.transition)&&void 0!==p?p:D.Transition)&&void 0!==f?f:en)&&void 0!==u?u:O.Z,e6=null!==(b=null!==(g=eo.tooltip)&&void 0!==g?g:D.Tooltip)&&void 0!==b?b:eG,e8=null!==(R=null!==(x=eo.arrow)&&void 0!==x?x:D.Arrow)&&void 0!==R?R:eJ,e5=(0,h.Z)(e4,{...ee,...null!==(E=et.popper)&&void 0!==E?E:B.popper,className:(0,l.Z)(e2.popper,null==ee?void 0:ee.className,null===(o=null!==(P=et.popper)&&void 0!==P?P:B.popper)||void 0===o?void 0:o.className)},e1),e9=(0,h.Z)(e7,{...ei,...null!==(T=et.transition)&&void 0!==T?T:B.transition},e1),e3=(0,h.Z)(e6,{...null!==(Z=et.tooltip)&&void 0!==Z?Z:B.tooltip,className:(0,l.Z)(e2.tooltip,null===(r=null!==(j=et.tooltip)&&void 0!==j?j:B.tooltip)||void 0===r?void 0:r.className)},e1),te=(0,h.Z)(e8,{...null!==(M=et.arrow)&&void 0!==M?M:B.arrow,className:(0,l.Z)(e2.arrow,null===(n=null!==(A=et.arrow)&&void 0!==A?A:B.arrow)||void 0===n?void 0:n.className)},e1);return(0,eS.jsxs)(s.Fragment,{children:[s.cloneElement(ep,eH),(0,eS.jsx)(e4,{as:null!=$?$:eV,placement:Q,anchorEl:z?{getBoundingClientRect:()=>({top:e$.y,left:e$.x,right:e$.x,bottom:e$.y,width:0,height:0})}:ec,popperRef:eB,open:!!ec&&eO,id:eR,transition:!0,...ez,...e5,popperOptions:e_,children:e=>{let{TransitionProps:t}=e;return(0,eS.jsx)(e7,{timeout:es.transitions.duration.shorter,...t,...e9,children:(0,eS.jsxs)(e6,{...e3,children:[er,L?(0,eS.jsx)(e8,{...te,ref:ed}):null]})})}})]})})}}]);
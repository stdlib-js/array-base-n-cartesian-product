// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";return function(e,n){var t,o,f,u,r,s,i,h,d,l,p,a;for(t=arguments.length,f=[e,n],i=[0,0],h=(o=[e.length,n.length])[0]*o[1],l=2;l<t;l++)s=arguments[l],f.push(s),o.push(s.length),i.push(0),h*=o[l];for(u=[],l=0;l<h;l++){for(a=l,p=t-1;p>=0;p--)a-=d=a%o[p],a/=o[p],i[p]=d;for(r=[],p=0;p<t;p++)r.push(f[p][i[p]]);u.push(r)}return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).nCartesianProduct=n();
//# sourceMappingURL=browser.js.map

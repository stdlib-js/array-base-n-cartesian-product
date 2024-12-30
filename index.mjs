// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function h(h,r){var t,u,e,n,f,o,p,s,l,g,a,c;for(t=arguments.length,e=[h,r],p=[0,0],s=(u=[h.length,r.length])[0]*u[1],g=2;g<t;g++)o=arguments[g],e.push(o),u.push(o.length),p.push(0),s*=u[g];for(n=[],g=0;g<s;g++){for(c=g,a=t-1;a>=0;a--)c-=l=c%u[a],c/=u[a],p[a]=l;for(f=[],a=0;a<t;a++)f.push(e[a][p[a]]);n.push(f)}return n}export{h as default};
//# sourceMappingURL=index.mjs.map

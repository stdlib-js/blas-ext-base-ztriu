"use strict";var h=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var R=h(function(er,_){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),V=require('@stdlib/strided-base-reinterpret-complex128/dist'),M=require('@stdlib/math-base-special-fast-max/dist'),P=require('@stdlib/math-base-special-fast-min/dist');function Q(e,r,u,w,l,v,x,a,q,m,f){var s,n,i,p,j,y,d,c,b,g,t,o;if(s=V(w,0),n=V(a,0),i=l*2,p=v*2,j=q*2,y=m*2,d=x*2,c=f*2,K([l,v])){for(o=0;o<e;o++){for(t=M(0,o+u);t<r;t++)b=d+t*p,g=c+t*y,n[g]=s[b],n[g+1]=s[b+1];d+=i,c+=j}return a}for(o=0;o<r;o++){for(t=0;t<=P(o-u,e-1);t++)b=d+t*i,g=c+t*j,n[g]=s[b],n[g+1]=s[b+1];d+=p,c+=y}return a}_.exports=Q
});var S=h(function(ar,O){
var U=require('@stdlib/blas-base-assert-is-layout/dist'),W=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),X=R();function Y(e,r,u,w,l,v,x,a){var q,m,f,s,n,i;if(!U(e))throw new TypeError(z('nullFx',e));if(q=W(e),q?i=u:i=r,v<F(1,i))throw new RangeError(z('nullJL',i,v));if(a<F(1,i))throw new RangeError(z('nullGM',i,a));return q?(m=v,f=1,s=a,n=1):(m=1,f=v,s=1,n=a),X(r,u,w,l,m,f,0,x,s,n,0)}O.exports=Y
});var C=h(function(ir,T){
var Z=R();function $(e,r,u,w,l,v,x,a,q,m,f){return Z(e,r,u,w,l,v,x,a,q,m,f)}T.exports=$
});var I=h(function(tr,H){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=S(),N=C();k(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),E,J=B(A(__dirname,"./native.js"));L(J)?E=D:E=J;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

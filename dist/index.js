"use strict";var p=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var R=p(function(er,_){
var K=require('@stdlib/ndarray-base-assert-is-row-major/dist'),V=require('@stdlib/strided-base-reinterpret-complex128/dist'),M=require('@stdlib/math-base-special-fast-max/dist'),P=require('@stdlib/math-base-special-fast-min/dist');function Q(t,r,u,w,b,v,x,e,q,m,l){var s,n,a,f,j,y,c,h,g,d,i,o;if(s=V(w,0),n=V(e,0),a=b*2,f=v*2,j=q*2,y=m*2,c=x*2,h=l*2,K([b,v])){for(o=0;o<t;o++){for(i=M(0,o+u);i<r;i++)g=c+i*f,d=h+i*y,n[d]=s[g],n[d+1]=s[g+1];c+=a,h+=j}return e}for(o=0;o<r;o++){for(i=0;i<=P(o-u,t-1);i++)g=c+i*a,d=h+i*j,n[d]=s[g],n[d+1]=s[g+1];c+=f,h+=y}return e}_.exports=Q
});var S=p(function(ar,O){
var U=require('@stdlib/blas-base-layout-resolve-str/dist'),W=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),X=R();function Y(t,r,u,w,b,v,x,e){var q,m,l,s,n,a,f;if(f=U(t),f===null)throw new TypeError(z('38TFx',t));if(q=W(f),q?a=u:a=r,v<F(1,a))throw new RangeError(z('38TJL',a,v));if(e<F(1,a))throw new RangeError(z('38TGM',a,e));return q?(m=v,l=1,s=e,n=1):(m=1,l=v,s=1,n=e),X(r,u,w,b,m,l,0,x,s,n,0)}O.exports=Y
});var C=p(function(ir,T){
var Z=R();function $(t,r,u,w,b,v,x,e,q,m,l){return Z(t,r,u,w,b,v,x,e,q,m,l)}T.exports=$
});var I=p(function(tr,H){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=S(),N=C();k(G,"ndarray",N);H.exports=G
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),D=I(),E,J=B(A(__dirname,"./native.js"));L(J)?E=D:E=J;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

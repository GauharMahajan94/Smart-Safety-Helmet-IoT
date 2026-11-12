(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="160",dg=0,Zu=1,fg=2,ef=1,pg=2,Ei=3,rr=0,fn=1,Ci=2,Qi=0,fs=1,Qu=2,th=3,eh=4,mg=5,Er=100,gg=101,_g=102,nh=103,ih=104,vg=200,yg=201,Sg=202,bg=203,yl=204,Sl=205,xg=206,Mg=207,Eg=208,wg=209,Tg=210,Ag=211,Rg=212,Cg=213,Ig=214,Lg=0,Dg=1,Pg=2,_a=3,Ug=4,Ng=5,Fg=6,Og=7,nf=0,Bg=1,zg=2,tr=0,Vg=1,kg=2,Gg=3,Hg=4,Wg=5,Xg=6,rf=300,bs=301,xs=302,bl=303,xl=304,nc=306,Ml=1e3,qn=1001,El=1002,sn=1003,rh=1004,Ic=1005,Nn=1006,Yg=1007,co=1008,er=1009,jg=1010,$g=1011,Zl=1012,sf=1013,Ki=1014,Zi=1015,lo=1016,of=1017,af=1018,Dr=1020,qg=1021,Jn=1023,Jg=1024,Kg=1025,Pr=1026,Ms=1027,Zg=1028,cf=1029,Qg=1030,lf=1031,uf=1033,Lc=33776,Dc=33777,Pc=33778,Uc=33779,sh=35840,oh=35841,ah=35842,ch=35843,hf=36196,lh=37492,uh=37496,hh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,yh=37816,Sh=37817,bh=37818,xh=37819,Mh=37820,Eh=37821,Nc=36492,wh=36494,Th=36495,t_=36283,Ah=36284,Rh=36285,Ch=36286,df=3e3,Ur=3001,e_=3200,n_=3201,ff=0,i_=1,zn="",je="srgb",Ni="srgb-linear",Ql="display-p3",ic="display-p3-linear",va="linear",be="srgb",ya="rec709",Sa="p3",Gr=7680,Ih=519,r_=512,s_=513,o_=514,pf=515,a_=516,c_=517,l_=518,u_=519,Lh=35044,Dh="300 es",wl=1035,Di=2e3,ba=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const to=Math.PI/180,uo=180/Math.PI;function Ps(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function tu(n,t){return(n%t+t)%t}function h_(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function d_(n,t,e){return n!==t?(e-n)/(t-n):0}function eo(n,t,e){return(1-e)*n+e*t}function f_(n,t,e,i){return eo(n,t,1-Math.exp(-e*i))}function p_(n,t=1){return t-Math.abs(tu(n,t*2)-t)}function m_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function g_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function __(n,t){return n+Math.floor(Math.random()*(t-n+1))}function v_(n,t){return n+Math.random()*(t-n)}function y_(n){return n*(.5-Math.random())}function S_(n){n!==void 0&&(Ph=n);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b_(n){return n*to}function x_(n){return n*uo}function Tl(n){return(n&n-1)===0&&n!==0}function M_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function E_(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ps={DEG2RAD:to,RAD2DEG:uo,generateUUID:Ps,clamp:$e,euclideanModulo:tu,mapLinear:h_,inverseLerp:d_,lerp:eo,damp:f_,pingpong:p_,smoothstep:m_,smootherstep:g_,randInt:__,randFloat:v_,randFloatSpread:y_,seededRandom:S_,degToRad:b_,radToDeg:x_,isPowerOfTwo:Tl,ceilPowerOfTwo:M_,floorPowerOfTwo:xa,setQuaternionFromProperEuler:E_,normalize:nn,denormalize:ss};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,r,s,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],w=r[1],y=r[4],E=r[7],L=r[2],T=r[5],A=r[8];return s[0]=o*_+a*w+c*L,s[3]=o*m+a*y+c*T,s[6]=o*d+a*E+c*A,s[1]=l*_+u*w+h*L,s[4]=l*m+u*y+h*T,s[7]=l*d+u*E+h*A,s[2]=f*_+p*w+g*L,s[5]=f*m+p*y+g*T,s[8]=f*d+p*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*l-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fc.makeScale(t,e)),this}rotate(t){return this.premultiply(Fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new Zt;function mf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w_(){const n=Ma("canvas");return n.style.display="block",n}const Uh={};function no(n){n in Uh||(Uh[n]=!0,console.warn(n))}const Nh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[Ni]:{transfer:va,primaries:ya,toReference:n=>n,fromReference:n=>n},[je]:{transfer:be,primaries:ya,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ic]:{transfer:va,primaries:Sa,toReference:n=>n.applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Nh)},[Ql]:{transfer:be,primaries:Sa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Nh).convertLinearToSRGB()}},T_=new Set([Ni,ic]),pe={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!T_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Uo[t].toReference,r=Uo[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Uo[n].primaries},getTransfer:function(n){return n===zn?va:Uo[n].transfer}};function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hr;class gf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hr===void 0&&(Hr=Ma("canvas")),Hr.width=t.width,Hr.height=t.height;const i=Hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ms(e[i]/255)*255):e[i]=ms(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A_=0;class _f{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Ps(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bc(r[o].image)):s.push(Bc(r[o]))}else s=Bc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Tn extends Ds{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,i=qn,r=qn,s=Nn,o=co,a=Jn,c=er,l=Tn.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ps(),this.name="",this.source=new _f(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ur?je:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?Ur:df}set encoding(t){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ur?je:zn}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=rf;Tn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,i=0,r=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,E=(p+1)/2,L=(d+1)/2,T=(u+f)/4,A=(h+_)/4,W=(g+m)/4;return y>E&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=W/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=W/s),this.set(i,r,s,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends Ds{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?je:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _f(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends C_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class vf extends Tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class I_ extends Tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,d*w);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const E=a*w;if(c=c*m+f*E,l=l*m+p*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new I,Oh=new yo;class So{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),No.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(t.matrixWorld),this.union(No)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Fo.subVectors(this.max,Xs),Wr.subVectors(t.a,Xs),Xr.subVectors(t.b,Xs),Yr.subVectors(t.c,Xs),Hi.subVectors(Xr,Wr),Wi.subVectors(Yr,Xr),gr.subVectors(Wr,Yr);let e=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-gr.z,gr.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,gr.z,0,-gr.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-gr.y,gr.x,0];return!Vc(e,Wr,Xr,Yr,Fo)||(e=[1,0,0,0,1,0,0,0,1],!Vc(e,Wr,Xr,Yr,Fo))?!1:(Oo.crossVectors(Hi,Wi),e=[Oo.x,Oo.y,Oo.z],Vc(e,Wr,Xr,Yr,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,No=new So,Wr=new I,Xr=new I,Yr=new I,Hi=new I,Wi=new I,gr=new I,Xs=new I,Fo=new I,Oo=new I,_r=new I;function Vc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_r.fromArray(n,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),c=t.dot(_r),l=e.dot(_r),u=i.dot(_r);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const L_=new So,Ys=new I,kc=new I;class rc{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):L_.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(kc)),this.expandByPoint(Ys.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new I,Gc=new I,Bo=new I,Xi=new I,Hc=new I,zo=new I,Wc=new I;class yf{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Gc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(Gc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=Xi.dot(this.direction),c=-Xi.dot(Bo),l=Xi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gc).addScaledVector(Bo,f),p}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,r,s){Hc.subVectors(e,t),zo.subVectors(i,t),Wc.crossVectors(Hc,zo);let o=this.direction.dot(Wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);const c=a*this.direction.dot(zo.crossVectors(Xi,zo));if(c<0)return null;const l=a*this.direction.dot(Hc.cross(Xi));if(l<0||c+l>o)return null;const u=-a*Xi.dot(Wc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,i,r,s,o,a,c,l,u,h,f,p,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,_,m)}set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/jr.setFromMatrixColumn(t,0).length(),s=1/jr.setFromMatrixColumn(t,1).length(),o=1/jr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(D_,t,P_)}lookAt(t,e,i){const r=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),Vo.crossVectors(bn,Yi),r[0]=Yi.x,r[4]=Vo.x,r[8]=bn.x,r[1]=Yi.y,r[5]=Vo.y,r[9]=bn.y,r[2]=Yi.z,r[6]=Vo.z,r[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],y=i[7],E=i[11],L=i[15],T=r[0],A=r[4],W=r[8],b=r[12],M=r[1],V=r[5],H=r[9],tt=r[13],C=r[2],B=r[6],G=r[10],j=r[14],X=r[3],Y=r[7],$=r[11],et=r[15];return s[0]=o*T+a*M+c*C+l*X,s[4]=o*A+a*V+c*B+l*Y,s[8]=o*W+a*H+c*G+l*$,s[12]=o*b+a*tt+c*j+l*et,s[1]=u*T+h*M+f*C+p*X,s[5]=u*A+h*V+f*B+p*Y,s[9]=u*W+h*H+f*G+p*$,s[13]=u*b+h*tt+f*j+p*et,s[2]=g*T+_*M+m*C+d*X,s[6]=g*A+_*V+m*B+d*Y,s[10]=g*W+_*H+m*G+d*$,s[14]=g*b+_*tt+m*j+d*et,s[3]=w*T+y*M+E*C+L*X,s[7]=w*A+y*V+E*B+L*Y,s[11]=w*W+y*H+E*G+L*$,s[15]=w*b+y*tt+E*j+L*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+e*c*p-e*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],w=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,y=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,E=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,L=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,T=e*w+i*y+r*E+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=w*A,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*A,t[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*d+i*c*d)*A,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*p-i*c*p)*A,t[4]=y*A,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*A,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*d-e*c*d)*A,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*p+e*c*p)*A,t[8]=E*A,t[9]=(g*h*s-u*_*s-g*i*p+e*_*p+u*i*d-e*h*d)*A,t[10]=(o*_*s-g*a*s+g*i*l-e*_*l-o*i*d+e*a*d)*A,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*A,t[12]=L*A,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*A,t[14]=(g*a*r-o*_*r-g*i*c+e*_*c+o*i*m-e*a*m)*A,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,w=c*l,y=c*u,E=c*h,L=i.x,T=i.y,A=i.z;return r[0]=(1-(_+d))*L,r[1]=(p+E)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(p-E)*T,r[5]=(1-(f+d))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+y)*A,r[9]=(m-w)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Xn.copy(this);const l=1/s,u=1/o,h=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,e.setFromRotationMatrix(Xn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Di){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,g;if(a===Di)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ba)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Di){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*l,p=(i+r)*u;let g,_;if(a===Di)g=(o+s)*h,_=-2*h;else if(a===ba)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const jr=new I,Xn=new Le,D_=new I(0,0,0),P_=new I(1,1,1),Yi=new I,Vo=new I,bn=new I,Bh=new Le,zh=new yo;class sc{constructor(t=0,e=0,i=0,r=sc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sc.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let U_=0;const Vh=new I,$r=new yo,bi=new Le,ko=new I,js=new I,N_=new I,F_=new yo,kh=new I(1,0,0),Gh=new I(0,1,0),Hh=new I(0,0,1),O_={type:"added"},B_={type:"removed"};class qe extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new sc,i=new yo,r=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new Zt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ko.copy(t):ko.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(js,ko,this.up):bi.lookAt(ko,js,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(bi),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(O_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,N_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,F_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new I,xi=new I,Xc=new I,Mi=new I,qr=new I,Jr=new I,Wh=new I,Yc=new I,jc=new I,$c=new I;let Go=!1;class $n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Yn.subVectors(t,e),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Yn.subVectors(r,e),xi.subVectors(i,e),Xc.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(xi),c=Yn.dot(Xc),l=xi.dot(xi),u=xi.dot(Xc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(t,e,i,r,s,o,a,c){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),this.getInterpolation(t,e,i,r,s,o,a,c)}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static isFrontFacing(t,e,i,r){return Yn.subVectors(i,e),xi.subVectors(t,e),Yn.cross(xi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),$n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return $n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Jr.subVectors(s,i),Yc.subVectors(t,i);const c=qr.dot(Yc),l=Jr.dot(Yc);if(c<=0&&l<=0)return e.copy(i);jc.subVectors(t,r);const u=qr.dot(jc),h=Jr.dot(jc);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(qr,o);$c.subVectors(t,s);const p=qr.dot($c),g=Jr.dot($c);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Jr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wh.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Wh,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(qr,o).addScaledVector(Jr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function qc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=pe.workingColorSpace){if(t=tu(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=qc(o,s,t+1/3),this.g=qc(o,s,t),this.b=qc(o,s,t-1/3)}return pe.toWorkingColorSpace(this,r),this}setStyle(t,e=je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=bf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Oc(t.r),this.g=Oc(t.g),this.b=Oc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return pe.fromWorkingColorSpace(Ze.copy(this),t),Math.round($e(Ze.r*255,0,255))*65536+Math.round($e(Ze.g*255,0,255))*256+Math.round($e(Ze.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,r=Ze.g,s=Ze.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=je){pe.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,r=Ze.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Ho);const i=eo(ji.h,Ho.h,e),r=eo(ji.s,Ho.s,e),s=eo(ji.l,Ho.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ee;ee.NAMES=bf;let z_=0;class Us extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=fs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Sl,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xf extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new I,Wo=new vt;class pi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lh&&(t.usage=this.usage),t}}class Mf extends pi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ef extends pi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ue extends pi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let V_=0;const Dn=new Le,Jc=new qe,Kr=new I,xn=new So,$s=new So,We=new I;class Gn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?Ef:Mf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(xn.min,$s.min),xn.expandByPoint(We),We.addVectors(xn.max,$s.max),xn.expandByPoint(We)):(xn.expandByPoint($s.min),xn.expandByPoint($s.max))}xn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)We.fromBufferAttribute(a,l),c&&(Kr.fromBufferAttribute(t,l),We.add(Kr)),r=Math.max(r,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let M=0;M<a;M++)l[M]=new I,u[M]=new I;const h=new I,f=new I,p=new I,g=new vt,_=new vt,m=new vt,d=new I,w=new I;function y(M,V,H){h.fromArray(r,M*3),f.fromArray(r,V*3),p.fromArray(r,H*3),g.fromArray(o,M*2),_.fromArray(o,V*2),m.fromArray(o,H*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const tt=1/(_.x*m.y-m.x*_.y);isFinite(tt)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(tt),w.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(tt),l[M].add(d),l[V].add(d),l[H].add(d),u[M].add(w),u[V].add(w),u[H].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let M=0,V=E.length;M<V;++M){const H=E[M],tt=H.start,C=H.count;for(let B=tt,G=tt+C;B<G;B+=3)y(i[B+0],i[B+1],i[B+2])}const L=new I,T=new I,A=new I,W=new I;function b(M){A.fromArray(s,M*3),W.copy(A);const V=l[M];L.copy(V),L.sub(A.multiplyScalar(A.dot(V))).normalize(),T.crossVectors(W,V);const tt=T.dot(u[M])<0?-1:1;c[M*4]=L.x,c[M*4+1]=L.y,c[M*4+2]=L.z,c[M*4+3]=tt}for(let M=0,V=E.length;M<V;++M){const H=E[M],tt=H.start,C=H.count;for(let B=tt,G=tt+C;B<G;B+=3)b(i[B+0]),b(i[B+1]),b(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new pi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new Le,vr=new yf,Xo=new rc,Yh=new I,Zr=new I,Qr=new I,ts=new I,Kc=new I,Yo=new I,jo=new vt,$o=new vt,qo=new vt,jh=new I,$h=new I,qh=new I,Jo=new I,Ko=new I;class hi extends qe{constructor(t=new Gn,e=new xf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Kc.fromBufferAttribute(h,t),o?Yo.addScaledVector(Kc,u):Yo.addScaledVector(Kc.sub(e),u))}e.add(Yo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),vr.copy(t.ray).recast(t.near),!(Xo.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Xo,Yh)===null||vr.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Xh.copy(s).invert(),vr.copy(t.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=y;E<L;E+=3){const T=a.getX(E),A=a.getX(E+1),W=a.getX(E+2);r=Zo(this,d,t,i,l,u,h,T,A,W),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);r=Zo(this,o,t,i,l,u,h,w,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,L=y;E<L;E+=3){const T=E,A=E+1,W=E+2;r=Zo(this,d,t,i,l,u,h,T,A,W),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=m,y=m+1,E=m+2;r=Zo(this,o,t,i,l,u,h,w,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function k_(n,t,e,i,r,s,o,a){let c;if(t.side===fn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===rr,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ko);return l<e.near||l>e.far?null:{distance:l,point:Ko.clone(),object:n}}function Zo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Zr),n.getVertexPosition(c,Qr),n.getVertexPosition(l,ts);const u=k_(n,t,e,i,Zr,Qr,ts,Jo);if(u){r&&(jo.fromBufferAttribute(r,a),$o.fromBufferAttribute(r,c),qo.fromBufferAttribute(r,l),u.uv=$n.getInterpolation(Jo,Zr,Qr,ts,jo,$o,qo,new vt)),s&&(jo.fromBufferAttribute(s,a),$o.fromBufferAttribute(s,c),qo.fromBufferAttribute(s,l),u.uv1=$n.getInterpolation(Jo,Zr,Qr,ts,jo,$o,qo,new vt),u.uv2=u.uv1),o&&(jh.fromBufferAttribute(o,a),$h.fromBufferAttribute(o,c),qh.fromBufferAttribute(o,l),u.normal=$n.getInterpolation(Jo,Zr,Qr,ts,jh,$h,qh,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};$n.getNormal(Zr,Qr,ts,h.normal),u.face=h}return u}class Me extends Gn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function g(_,m,d,w,y,E,L,T,A,W,b){const M=E/A,V=L/W,H=E/2,tt=L/2,C=T/2,B=A+1,G=W+1;let j=0,X=0;const Y=new I;for(let $=0;$<G;$++){const et=$*V-tt;for(let nt=0;nt<B;nt++){const k=nt*M-H;Y[_]=k*w,Y[m]=et*y,Y[d]=C,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(nt/A),h.push(1-$/W),j+=1}}for(let $=0;$<W;$++)for(let et=0;et<A;et++){const nt=f+et+B*$,k=f+et+B*($+1),q=f+(et+1)+B*($+1),ct=f+(et+1)+B*$;c.push(nt,k,ct),c.push(k,q,ct),X+=6}a.addGroup(p,X,b),p+=X,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=Es(n[e]);for(const r in i)t[r]=i[r]}return t}function G_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wf(n){return n.getRenderTarget()===null?n.outputColorSpace:pe.workingColorSpace}const H_={clone:Es,merge:rn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=G_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Tf extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends Tf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class Y_ extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(es,ns,t,e);r.layers=this.layers,this.add(r);const s=new Fn(es,ns,t,e);s.layers=this.layers,this.add(s);const o=new Fn(es,ns,t,e);o.layers=this.layers,this.add(o);const a=new Fn(es,ns,t,e);a.layers=this.layers,this.add(a);const c=new Fn(es,ns,t,e);c.layers=this.layers,this.add(c);const l=new Fn(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Af extends Tn{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class j_ extends Or{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ur?je:zn),this.texture=new Af(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Me(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Qi});s.uniforms.tEquirect.value=e;const o=new hi(r,s),a=e.minFilter;return e.minFilter===co&&(e.minFilter=Nn),new Y_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Zc=new I,$_=new I,q_=new Zt;class xr{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Zc.subVectors(i,e).cross($_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||q_.getNormalMatrix(t),r=this.coplanarPoint(Zc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new rc,Qo=new I;class eu{constructor(t=new xr,e=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],w=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-p,E-d).normalize(),i[1].setComponents(c+s,f+l,m+p,E+d).normalize(),i[2].setComponents(c+o,f+u,m+g,E+w).normalize(),i[3].setComponents(c-o,f-u,m-g,E-w).normalize(),i[4].setComponents(c-a,f-h,m-_,E-y).normalize(),e===Di)i[5].setComponents(c+a,f+h,m+_,E+y).normalize();else if(e===ba)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Qo.x=r.normal.x>0?t.max.x:t.min.x,Qo.y=r.normal.y>0?t.max.y:t.min.y,Qo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function J_(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,h){const f=u.array,p=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,l),p.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];e?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class oc extends Gn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const w=d*f-o;for(let y=0;y<l;y++){const E=y*h-s;g.push(E,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<a;w++){const y=w+l*d,E=w+l*(d+1),L=w+1+l*(d+1),T=w+1+l*d;p.push(y,E,T),p.push(E,L,T)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.width,t.height,t.widthSegments,t.heightSegments)}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,av=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ry=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,my=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_y=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,by=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:K_,alphahash_pars_fragment:Z_,alphamap_fragment:Q_,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,batching_pars_vertex:s0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:c0,bsdfs:l0,iridescence_fragment:u0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:_0,color_pars_vertex:v0,color_vertex:y0,common:S0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:x0,displacementmap_pars_vertex:M0,displacementmap_vertex:E0,emissivemap_fragment:w0,emissivemap_pars_fragment:T0,colorspace_fragment:A0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:I0,envmap_pars_fragment:L0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:P0,fog_vertex:U0,fog_pars_vertex:N0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_fragment:z0,lightmap_pars_fragment:V0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:G0,lights_pars_begin:H0,lights_toon_fragment:X0,lights_toon_pars_fragment:Y0,lights_phong_fragment:j0,lights_phong_pars_fragment:$0,lights_physical_fragment:q0,lights_physical_pars_fragment:J0,lights_fragment_begin:K0,lights_fragment_maps:Z0,lights_fragment_end:Q0,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:rv,map_pars_fragment:sv,map_particle_fragment:ov,map_particle_pars_fragment:av,metalnessmap_fragment:cv,metalnessmap_pars_fragment:lv,morphcolor_vertex:uv,morphnormal_vertex:hv,morphtarget_pars_vertex:dv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:_v,normal_vertex:vv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:xv,iridescence_pars_fragment:Mv,opaque_fragment:Ev,packing:wv,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Nv,skinbase_vertex:Fv,skinning_pars_vertex:Ov,skinning_vertex:Bv,skinnormal_vertex:zv,specularmap_fragment:Vv,specularmap_pars_fragment:kv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Hv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:Yv,uv_pars_vertex:jv,uv_vertex:$v,worldpos_vertex:qv,background_vert:Jv,background_frag:Kv,backgroundCube_vert:Zv,backgroundCube_frag:Qv,cube_vert:ty,cube_frag:ey,depth_vert:ny,depth_frag:iy,distanceRGBA_vert:ry,distanceRGBA_frag:sy,equirect_vert:oy,equirect_frag:ay,linedashed_vert:cy,linedashed_frag:ly,meshbasic_vert:uy,meshbasic_frag:hy,meshlambert_vert:dy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:_y,meshphong_vert:vy,meshphong_frag:yy,meshphysical_vert:Sy,meshphysical_frag:by,meshtoon_vert:xy,meshtoon_frag:My,points_vert:Ey,points_frag:wy,shadow_vert:Ty,shadow_frag:Ay,sprite_vert:Ry,sprite_frag:Cy},rt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ri={basic:{uniforms:rn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:rn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:rn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:rn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:rn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:rn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:rn([rt.points,rt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:rn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:rn([rt.common,rt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:rn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:rn([rt.sprite,rt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:rn([rt.common,rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:rn([rt.lights,rt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};ri.physical={uniforms:rn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ta={r:0,b:0,g:0};function Iy(n,t,e,i,r,s,o){const a=new ee(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(m,d){let w=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===nc)?(u===void 0&&(u=new hi(new Me(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Es(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=pe.getTransfer(y.colorSpace)!==be,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new hi(new oc(2,2),new Br({name:"BackgroundMaterial",uniforms:Es(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=pe.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(ta,wf(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Ly(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(C,B,G,j,X){let Y=!1;if(o){const $=_(j,G,B);l!==$&&(l=$,p(l.object)),Y=d(C,j,G,X),Y&&w(C,j,G,X)}else{const $=B.wireframe===!0;(l.geometry!==j.id||l.program!==G.id||l.wireframe!==$)&&(l.geometry=j.id,l.program=G.id,l.wireframe=$,Y=!0)}X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,W(C,B,G,j),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,B,G){const j=G.wireframe===!0;let X=a[C.id];X===void 0&&(X={},a[C.id]=X);let Y=X[B.id];Y===void 0&&(Y={},X[B.id]=Y);let $=Y[j];return $===void 0&&($=m(f()),Y[j]=$),$}function m(C){const B=[],G=[],j=[];for(let X=0;X<r;X++)B[X]=0,G[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:j,object:C,attributes:{},index:null}}function d(C,B,G,j){const X=l.attributes,Y=B.attributes;let $=0;const et=G.getAttributes();for(const nt in et)if(et[nt].location>=0){const q=X[nt];let ct=Y[nt];if(ct===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(ct=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(ct=C.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;$++}return l.attributesNum!==$||l.index!==j}function w(C,B,G,j){const X={},Y=B.attributes;let $=0;const et=G.getAttributes();for(const nt in et)if(et[nt].location>=0){let q=Y[nt];q===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));const ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),X[nt]=ct,$++}l.attributes=X,l.attributesNum=$,l.index=j}function y(){const C=l.newAttributes;for(let B=0,G=C.length;B<G;B++)C[B]=0}function E(C){L(C,0)}function L(C,B){const G=l.newAttributes,j=l.enabledAttributes,X=l.attributeDivisors;G[C]=1,j[C]===0&&(n.enableVertexAttribArray(C),j[C]=1),X[C]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),X[C]=B)}function T(){const C=l.newAttributes,B=l.enabledAttributes;for(let G=0,j=B.length;G<j;G++)B[G]!==C[G]&&(n.disableVertexAttribArray(G),B[G]=0)}function A(C,B,G,j,X,Y,$){$===!0?n.vertexAttribIPointer(C,B,G,X,Y):n.vertexAttribPointer(C,B,G,j,X,Y)}function W(C,B,G,j){if(i.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const X=j.attributes,Y=G.getAttributes(),$=B.defaultAttributeValues;for(const et in Y){const nt=Y[et];if(nt.location>=0){let k=X[et];if(k===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){const q=k.normalized,ct=k.itemSize,gt=e.get(k);if(gt===void 0)continue;const mt=gt.buffer,Vt=gt.type,Ht=gt.bytesPerElement,Mt=i.isWebGL2===!0&&(Vt===n.INT||Vt===n.UNSIGNED_INT||k.gpuType===sf);if(k.isInterleavedBufferAttribute){const ie=k.data,U=ie.stride,Qe=k.offset;if(ie.isInstancedInterleavedBuffer){for(let yt=0;yt<nt.locationSize;yt++)L(nt.location+yt,ie.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let yt=0;yt<nt.locationSize;yt++)E(nt.location+yt);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let yt=0;yt<nt.locationSize;yt++)A(nt.location+yt,ct/nt.locationSize,Vt,q,U*Ht,(Qe+ct/nt.locationSize*yt)*Ht,Mt)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<nt.locationSize;ie++)L(nt.location+ie,k.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<nt.locationSize;ie++)E(nt.location+ie);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ie=0;ie<nt.locationSize;ie++)A(nt.location+ie,ct/nt.locationSize,Vt,q,ct*Ht,ct/nt.locationSize*ie*Ht,Mt)}}else if($!==void 0){const q=$[et];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(nt.location,q);break;case 3:n.vertexAttrib3fv(nt.location,q);break;case 4:n.vertexAttrib4fv(nt.location,q);break;default:n.vertexAttrib1fv(nt.location,q)}}}}T()}function b(){H();for(const C in a){const B=a[C];for(const G in B){const j=B[G];for(const X in j)g(j[X].object),delete j[X];delete B[G]}delete a[C]}}function M(C){if(a[C.id]===void 0)return;const B=a[C.id];for(const G in B){const j=B[G];for(const X in j)g(j[X].object),delete j[X];delete B[G]}delete a[C.id]}function V(C){for(const B in a){const G=a[B];if(G[C.id]===void 0)continue;const j=G[C.id];for(const X in j)g(j[X].object),delete j[X];delete G[C.id]}}function H(){tt(),u=!0,l!==c&&(l=c,p(l.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:tt,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:E,disableUnusedAttributes:T}}function Dy(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),e.update(h,s,1)}function c(u,h,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,u,h,f),e.update(h,s,f)}function l(u,h,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Py(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,E=o||t.has("OES_texture_float"),L=y&&E,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:T}}function Uy(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new xr,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const w=s?0:i,y=w*4;let E=d.clippingState||null;c.value=E,E=u(g,f,y,p);for(let L=0;L!==y;++L)E[L]=e[L];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,E=p;y!==_;++y,E+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ny(n){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=bs:a===xl&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===xl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new j_(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Cf extends Tf{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,Jh=[.125,.215,.35,.446,.526,.582],wr=20,Qc=new Cf,Kh=new ee;let tl=null,el=0,nl=0;const Mr=(1+Math.sqrt(5))/2,is=1/Mr,Zh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Mr,is),new I(0,Mr,-is),new I(is,0,Mr),new I(-is,0,Mr),new I(Mr,is,0),new I(-Mr,is,0)];class Qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:lo,format:Jn,colorSpace:Ni,depthBuffer:!1},r=td(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(s)),this._blurMaterial=Oy(s,t,e)}return r}_compileMaterial(t){const e=new hi(this._lodPlanes[0],t);this._renderer.compile(e,Qc)}_sceneToCubeUV(t,e,i,r){const a=new Fn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kh),u.toneMapping=tr,u.autoClear=!1;const p=new xf({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new hi(new Me,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Kh),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):w===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;ea(r,w*y,d>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===bs||t.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ea(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Qc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zh[(r-1)%Zh.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new hi(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const d=[];let w=0;for(let A=0;A<wr;++A){const W=A/_,b=Math.exp(-W*W/2);d.push(b),A===0?w+=b:A<m&&(w+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const E=this._sizeLods[r],L=3*E*(r>y-us?r-y+us:0),T=4*(this._cubeSize-E);ea(e,L,T,3*E,2*E),c.setRenderTarget(e),c.render(h,Qc)}}function Fy(n){const t=[],e=[],i=[];let r=n;const s=n-us+1+Jh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-us?c=Jh[o-n+us-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),y=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,W=T>2?0:-1,b=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];w.set(b,_*g*T),y.set(f,m*g*T);const M=[T,T,T,T,T,T];E.set(M,d*g*T)}const L=new Gn;L.setAttribute("position",new pi(w,_)),L.setAttribute("uv",new pi(y,m)),L.setAttribute("faceIndex",new pi(E,d)),t.push(L),r>us&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function td(n,t,e){const i=new Or(n,t,e);return i.texture.mapping=nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Oy(n,t,e){const i=new Float32Array(wr),r=new I(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ed(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function nd(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function By(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===bl||c===xl,u=c===bs||c===xs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new Qh(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new Qh(n));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vy(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let y=0,E=w.length;y<E;y+=3){const L=w[y+0],T=w[y+1],A=w[y+2];f.push(L,T,T,A,A,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,E=w.length/3-1;y<E;y+=3){const L=y+0,T=y+1,A=y+2;f.push(L,T,T,A,A,L)}}else return;const m=new(mf(f)?Ef:Mf)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ky(n,t,e,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){n.drawElements(s,g,a,p*c),e.update(g,s,1)}function h(p,g,_){if(_===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,p*c,_),e.update(g,s,_)}function f(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let d=0;for(let w=0;w<_;w++)d+=g[w];e.update(d,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Gy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Hy(n,t){return n[0]-t[0]}function Wy(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Xy(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let B=function(){tt.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],W=u.morphAttributes.color||[];let b=0;y===!0&&(b=1),E===!0&&(b=2),L===!0&&(b=3);let M=u.attributes.position.count*b,V=1;M>t.maxTextureSize&&(V=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const H=new Float32Array(M*V*4*_),tt=new vf(H,M,V,_);tt.type=Zi,tt.needsUpdate=!0;const C=b*4;for(let G=0;G<_;G++){const j=T[G],X=A[G],Y=W[G],$=M*V*4*G;for(let et=0;et<j.count;et++){const nt=et*C;y===!0&&(o.fromBufferAttribute(j,et),H[$+nt+0]=o.x,H[$+nt+1]=o.y,H[$+nt+2]=o.z,H[$+nt+3]=0),E===!0&&(o.fromBufferAttribute(X,et),H[$+nt+4]=o.x,H[$+nt+5]=o.y,H[$+nt+6]=o.z,H[$+nt+7]=0),L===!0&&(o.fromBufferAttribute(Y,et),H[$+nt+8]=o.x,H[$+nt+9]=o.y,H[$+nt+10]=o.z,H[$+nt+11]=Y.itemSize===4?o.w:1)}}m={count:_,texture:tt,size:new vt(M,V)},s.set(u,m),u.addEventListener("dispose",B)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const w=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<g;E++){const L=_[E];L[0]=E,L[1]=f[E]}_.sort(Wy);for(let E=0;E<8;E++)E<g&&_[E][1]?(a[E][0]=_[E][0],a[E][1]=_[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Hy);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let w=0;for(let E=0;E<8;E++){const L=a[E],T=L[0],A=L[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+E)!==m[T]&&u.setAttribute("morphTarget"+E,m[T]),d&&u.getAttribute("morphNormal"+E)!==d[T]&&u.setAttribute("morphNormal"+E,d[T]),r[E]=A,w+=A):(m&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const y=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Yy(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class If extends Tn{constructor(t,e,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Ki),i===void 0&&u===Ms&&(i=Dr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lf=new Tn,Df=new If(1,1);Df.compareFunction=pf;const Pf=new vf,Uf=new I_,Nf=new Af,id=[],rd=[],sd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Ns(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=id[r];if(s===void 0&&(s=new Float32Array(r),id[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function qy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function Jy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function Ky(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,i))return;ad.set(i),n.uniformMatrix2fv(this.addr,!1,ad),ke(e,i)}}function Zy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),ke(e,i)}}function Qy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,i))return;sd.set(i),n.uniformMatrix4fv(this.addr,!1,sd),ke(e,i)}}function tS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function eS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function nS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function iS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function rS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function oS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function aS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function cS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Df:Lf;e.setTexture2D(t||s,r)}function lS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Uf,r)}function uS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Nf,r)}function hS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Pf,r)}function dS(n){switch(n){case 5126:return jy;case 35664:return $y;case 35665:return qy;case 35666:return Jy;case 35674:return Ky;case 35675:return Zy;case 35676:return Qy;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}function fS(n,t){n.uniform1fv(this.addr,t)}function pS(n,t){const e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function mS(n,t){const e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function gS(n,t){const e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function _S(n,t){const e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vS(n,t){const e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yS(n,t){const e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function SS(n,t){n.uniform1iv(this.addr,t)}function bS(n,t){n.uniform2iv(this.addr,t)}function xS(n,t){n.uniform3iv(this.addr,t)}function MS(n,t){n.uniform4iv(this.addr,t)}function ES(n,t){n.uniform1uiv(this.addr,t)}function wS(n,t){n.uniform2uiv(this.addr,t)}function TS(n,t){n.uniform3uiv(this.addr,t)}function AS(n,t){n.uniform4uiv(this.addr,t)}function RS(n,t,e){const i=this.cache,r=t.length,s=ac(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Lf,s[o])}function CS(n,t,e){const i=this.cache,r=t.length,s=ac(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Uf,s[o])}function IS(n,t,e){const i=this.cache,r=t.length,s=ac(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Nf,s[o])}function LS(n,t,e){const i=this.cache,r=t.length,s=ac(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),ke(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Pf,s[o])}function DS(n){switch(n){case 5126:return fS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return bS;case 35668:case 35672:return xS;case 35669:case 35673:return MS;case 5125:return ES;case 36294:return wS;case 36295:return TS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return LS}}class PS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dS(e.type)}}class US{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DS(e.type)}}class NS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function cd(n,t){n.seq.push(t),n.map[t.id]=t}function FS(n,t,e){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cd(e,l===void 0?new PS(a,n,t):new US(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new NS(a),cd(e,h)),e=h}}}class la{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);FS(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function ld(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const OS=37297;let BS=0;function zS(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function VS(n){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(n);let i;switch(t===e?i="":t===Sa&&e===ya?i="LinearDisplayP3ToLinearSRGB":t===ya&&e===Sa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case ic:return[i,"LinearTransferOETF"];case je:case Ql:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ud(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+zS(n.getShaderSource(t),o)}else return r}function kS(n,t){const e=VS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function GS(n,t){let e;switch(t){case Vg:e="Linear";break;case kg:e="Reinhard";break;case Gg:e="OptimizedCineon";break;case Hg:e="ACESFilmic";break;case Xg:e="AgX";break;case Wg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function HS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function WS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function XS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function YS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function hs(n){return n!==""}function hd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(jS,qS)}const $S=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qS(n,t){let e=Xt[t];if(e===void 0){const i=$S.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(n){return n.replace(JS,KS)}function KS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pd(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function QS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case xs:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tb(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function eb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nf:t="ENVMAP_BLENDING_MULTIPLY";break;case Bg:t="ENVMAP_BLENDING_MIX";break;case zg:t="ENVMAP_BLENDING_ADD";break}return t}function nb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ib(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ZS(e),l=QS(e),u=tb(e),h=eb(e),f=nb(e),p=e.isWebGL2?"":HS(e),g=WS(e),_=XS(s),m=r.createProgram();let d,w,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),d.length>0&&(d+=`
`),w=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hs).join(`
`),w.length>0&&(w+=`
`)):(d=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),w=[p,pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tr?"#define TONE_MAPPING":"",e.toneMapping!==tr?Xt.tonemapping_pars_fragment:"",e.toneMapping!==tr?GS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,kS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=Al(o),o=hd(o,e),o=dd(o,e),a=Al(a),a=hd(a,e),a=dd(a,e),o=fd(o),a=fd(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const E=y+d+o,L=y+w+a,T=ld(r,r.VERTEX_SHADER,E),A=ld(r,r.FRAGMENT_SHADER,L);r.attachShader(m,T),r.attachShader(m,A),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function W(H){if(n.debug.checkShaderErrors){const tt=r.getProgramInfoLog(m).trim(),C=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(A).trim();let G=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,A);else{const X=ud(r,T,"vertex"),Y=ud(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+X+`
`+Y)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(C===""||B==="")&&(j=!1);j&&(H.diagnostics={runnable:G,programLog:tt,vertexShader:{log:C,prefix:d},fragmentShader:{log:B,prefix:w}})}r.deleteShader(T),r.deleteShader(A),b=new la(r,m),M=YS(r,m)}let b;this.getUniforms=function(){return b===void 0&&W(this),b};let M;this.getAttributes=function(){return M===void 0&&W(this),M};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(m,OS)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BS++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let rb=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ob(t),e.set(t,i)),i}}class ob{constructor(t){this.id=rb++,this.code=t,this.usedTimes=0}}function ab(n,t,e,i,r,s,o){const a=new Sf,c=new sb,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,M,V,H,tt){const C=H.fog,B=tt.geometry,G=b.isMeshStandardMaterial?H.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),X=j&&j.mapping===nc?j.image.height:null,Y=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=$!==void 0?$.length:0;let nt=0;B.morphAttributes.position!==void 0&&(nt=1),B.morphAttributes.normal!==void 0&&(nt=2),B.morphAttributes.color!==void 0&&(nt=3);let k,q,ct,gt;if(Y){const tn=ri[Y];k=tn.vertexShader,q=tn.fragmentShader}else k=b.vertexShader,q=b.fragmentShader,c.update(b),ct=c.getVertexShaderID(b),gt=c.getFragmentShaderID(b);const mt=n.getRenderTarget(),Vt=tt.isInstancedMesh===!0,Ht=tt.isBatchedMesh===!0,Mt=!!b.map,ie=!!b.matcap,U=!!j,Qe=!!b.aoMap,yt=!!b.lightMap,Ot=!!b.bumpMap,dt=!!b.normalMap,Ee=!!b.displacementMap,jt=!!b.emissiveMap,x=!!b.metalnessMap,v=!!b.roughnessMap,F=b.anisotropy>0,Z=b.clearcoat>0,K=b.iridescence>0,Q=b.sheen>0,ft=b.transmission>0,at=F&&!!b.anisotropyMap,ut=Z&&!!b.clearcoatMap,xt=Z&&!!b.clearcoatNormalMap,$t=Z&&!!b.clearcoatRoughnessMap,J=K&&!!b.iridescenceMap,fe=K&&!!b.iridescenceThicknessMap,Qt=Q&&!!b.sheenColorMap,Dt=Q&&!!b.sheenRoughnessMap,_t=!!b.specularMap,ht=!!b.specularColorMap,Wt=!!b.specularIntensityMap,le=ft&&!!b.transmissionMap,Re=ft&&!!b.thicknessMap,Jt=!!b.gradientMap,it=!!b.alphaMap,R=b.alphaTest>0,st=!!b.alphaHash,ot=!!b.extensions,Et=!!B.attributes.uv1,St=!!B.attributes.uv2,_e=!!B.attributes.uv3;let ve=tr;return b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ve=n.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:q,defines:b.defines,customVertexShaderID:ct,customFragmentShaderID:gt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ht,instancing:Vt,instancingColor:Vt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ni,map:Mt,matcap:ie,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:yt,bumpMap:Ot,normalMap:dt,displacementMap:f&&Ee,emissiveMap:jt,normalMapObjectSpace:dt&&b.normalMapType===i_,normalMapTangentSpace:dt&&b.normalMapType===ff,metalnessMap:x,roughnessMap:v,anisotropy:F,anisotropyMap:at,clearcoat:Z,clearcoatMap:ut,clearcoatNormalMap:xt,clearcoatRoughnessMap:$t,iridescence:K,iridescenceMap:J,iridescenceThicknessMap:fe,sheen:Q,sheenColorMap:Qt,sheenRoughnessMap:Dt,specularMap:_t,specularColorMap:ht,specularIntensityMap:Wt,transmission:ft,transmissionMap:le,thicknessMap:Re,gradientMap:Jt,opaque:b.transparent===!1&&b.blending===fs,alphaMap:it,alphaTest:R,alphaHash:st,combine:b.combine,mapUv:Mt&&_(b.map.channel),aoMapUv:Qe&&_(b.aoMap.channel),lightMapUv:yt&&_(b.lightMap.channel),bumpMapUv:Ot&&_(b.bumpMap.channel),normalMapUv:dt&&_(b.normalMap.channel),displacementMapUv:Ee&&_(b.displacementMap.channel),emissiveMapUv:jt&&_(b.emissiveMap.channel),metalnessMapUv:x&&_(b.metalnessMap.channel),roughnessMapUv:v&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ut&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(b.sheenRoughnessMap.channel),specularMapUv:_t&&_(b.specularMap.channel),specularColorMapUv:ht&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:le&&_(b.transmissionMap.channel),thicknessMapUv:Re&&_(b.thicknessMap.channel),alphaMapUv:it&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||F),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:St,vertexUv3s:_e,pointsUvs:tt.isPoints===!0&&!!B.attributes.uv&&(Mt||it),fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:tt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Mt&&b.map.isVideoTexture===!0&&pe.getTransfer(b.map.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ci,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ot&&b.extensions.derivatives===!0,extensionFragDepth:ot&&b.extensions.fragDepth===!0,extensionDrawBuffers:ot&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ot&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)M.push(V),M.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function E(b){const M=g[b.type];let V;if(M){const H=ri[M];V=H_.clone(H.uniforms)}else V=b.uniforms;return V}function L(b,M){let V;for(let H=0,tt=l.length;H<tt;H++){const C=l[H];if(C.cacheKey===M){V=C,++V.usedTimes;break}}return V===void 0&&(V=new ib(n,M,b,s),l.push(V)),V}function T(b){if(--b.usedTimes===0){const M=l.indexOf(b);l[M]=l[l.length-1],l.pop(),b.destroy()}}function A(b){c.remove(b)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:W}}function cb(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function lb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function md(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||lb),i.length>1&&i.sort(f||md),r.length>1&&r.sort(f||md)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ub(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new gd,n.set(i,[o])):r>=s.length?(o=new gd,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ee};break;case"SpotLight":e={position:new I,direction:new I,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function db(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let fb=0;function pb(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mb(n,t){const e=new hb,i=db(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Le,a=new Le;function c(u,h){let f=0,p=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,m=0,d=0,w=0,y=0,E=0,L=0,T=0,A=0,W=0,b=0;u.sort(pb);const M=h===!0?Math.PI:1;for(let H=0,tt=u.length;H<tt;H++){const C=u[H],B=C.color,G=C.intensity,j=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=B.r*G*M,p+=B.g*G*M,g+=B.b*G*M;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(C.sh.coefficients[Y],G);b++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*M),C.castShadow){const $=C.shadow,et=i.get(C);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,r.directionalShadow[_]=et,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=C.shadow.matrix,E++}r.directional[_]=Y,_++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(G*M),Y.distance=j,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,r.spot[d]=Y;const $=C.shadow;if(C.map&&(r.spotLightMap[A]=C.map,A++,$.updateMatrices(C),C.castShadow&&W++),r.spotLightMatrix[d]=$.matrix,C.castShadow){const et=i.get(C);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,r.spotShadow[d]=et,r.spotShadowMap[d]=X,T++}d++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(B).multiplyScalar(G),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),r.rectArea[w]=Y,w++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity*M),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const $=C.shadow,et=i.get(C);et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,r.pointShadow[m]=et,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=C.shadow.matrix,L++}r.point[m]=Y,m++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(G*M),Y.groundColor.copy(C.groundColor).multiplyScalar(G*M),r.hemi[y]=Y,y++}}w>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const V=r.hash;(V.directionalLength!==_||V.pointLength!==m||V.spotLength!==d||V.rectAreaLength!==w||V.hemiLength!==y||V.numDirectionalShadows!==E||V.numPointShadows!==L||V.numSpotShadows!==T||V.numSpotMaps!==A||V.numLightProbes!==b)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=w,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=T+A-W,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=b,V.directionalLength=_,V.pointLength=m,V.spotLength=d,V.rectAreaLength=w,V.hemiLength=y,V.numDirectionalShadows=E,V.numPointShadows=L,V.numSpotShadows=T,V.numSpotMaps=A,V.numLightProbes=b,r.version=fb++)}function l(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let w=0,y=u.length;w<y;w++){const E=u[w];if(E.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),f++}else if(E.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:r}}function _d(n,t){const e=new mb(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){e.setup(i,h)}function l(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gb(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new _d(n,t),e.set(s,[c])):o>=a.length?(c=new _d(n,t),a.push(c)):c=a[o],c}function r(){e=new WeakMap}return{get:i,dispose:r}}class _b extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vb extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bb(n,t,e){let i=new eu;const r=new vt,s=new vt,o=new Xe,a=new _b({depthPacking:n_}),c=new vb,l={},u=e.maxTextureSize,h={[rr]:fn,[fn]:rr,[Ci]:Ci},f=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:yb,fragmentShader:Sb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new hi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let d=this.type;this.render=function(T,A,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const tt=d!==Ei&&this.type===Ei,C=d===Ei&&this.type!==Ei;for(let B=0,G=T.length;B<G;B++){const j=T[B],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||tt===!0||C===!0){const et=this.type!==Ei?{minFilter:sn,magFilter:sn}:{};X.map!==null&&X.map.dispose(),X.map=new Or(r.x,r.y,et),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const $=X.getViewportCount();for(let et=0;et<$;et++){const nt=X.getViewport(et);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),H.viewport(o),X.updateMatrices(j,et),i=X.getFrustum(),E(A,W,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Ei&&w(X,W),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,V)};function w(T,A){const W=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,W,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,W,p,_,null)}function y(T,A,W,b){let M=null;const V=W.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)M=V;else if(M=W.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,tt=A.uuid;let C=l[H];C===void 0&&(C={},l[H]=C);let B=C[tt];B===void 0&&(B=M.clone(),C[tt]=B,A.addEventListener("dispose",L)),M=B}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Ei?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,W.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=n.properties.get(M);H.light=W}return M}function E(T,A,W,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ei)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld);const tt=t.update(T),C=T.material;if(Array.isArray(C)){const B=tt.groups;for(let G=0,j=B.length;G<j;G++){const X=B[G],Y=C[X.materialIndex];if(Y&&Y.visible){const $=y(T,Y,b,M);T.onBeforeShadow(n,T,A,W,tt,$,X),n.renderBufferDirect(W,null,tt,$,T,X),T.onAfterShadow(n,T,A,W,tt,$,X)}}}else if(C.visible){const B=y(T,C,b,M);T.onBeforeShadow(n,T,A,W,tt,B,null),n.renderBufferDirect(W,null,tt,B,T,null),T.onAfterShadow(n,T,A,W,tt,B,null)}}const H=T.children;for(let tt=0,C=H.length;tt<C;tt++)E(H[tt],A,W,b,M)}function L(T){T.target.removeEventListener("dispose",L);for(const W in l){const b=l[W],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function xb(n,t,e){const i=e.isWebGL2;function r(){let R=!1;const st=new Xe;let ot=null;const Et=new Xe(0,0,0,0);return{setMask:function(St){ot!==St&&!R&&(n.colorMask(St,St,St,St),ot=St)},setLocked:function(St){R=St},setClear:function(St,_e,ve,Ge,tn){tn===!0&&(St*=Ge,_e*=Ge,ve*=Ge),st.set(St,_e,ve,Ge),Et.equals(st)===!1&&(n.clearColor(St,_e,ve,Ge),Et.copy(st))},reset:function(){R=!1,ot=null,Et.set(-1,0,0,0)}}}function s(){let R=!1,st=null,ot=null,Et=null;return{setTest:function(St){St?Ht(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(St){st!==St&&!R&&(n.depthMask(St),st=St)},setFunc:function(St){if(ot!==St){switch(St){case Lg:n.depthFunc(n.NEVER);break;case Dg:n.depthFunc(n.ALWAYS);break;case Pg:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case Ug:n.depthFunc(n.EQUAL);break;case Ng:n.depthFunc(n.GEQUAL);break;case Fg:n.depthFunc(n.GREATER);break;case Og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=St}},setLocked:function(St){R=St},setClear:function(St){Et!==St&&(n.clearDepth(St),Et=St)},reset:function(){R=!1,st=null,ot=null,Et=null}}}function o(){let R=!1,st=null,ot=null,Et=null,St=null,_e=null,ve=null,Ge=null,tn=null;return{setTest:function(ye){R||(ye?Ht(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(ye){st!==ye&&!R&&(n.stencilMask(ye),st=ye)},setFunc:function(ye,en,ti){(ot!==ye||Et!==en||St!==ti)&&(n.stencilFunc(ye,en,ti),ot=ye,Et=en,St=ti)},setOp:function(ye,en,ti){(_e!==ye||ve!==en||Ge!==ti)&&(n.stencilOp(ye,en,ti),_e=ye,ve=en,Ge=ti)},setLocked:function(ye){R=ye},setClear:function(ye){tn!==ye&&(n.clearStencil(ye),tn=ye)},reset:function(){R=!1,st=null,ot=null,Et=null,St=null,_e=null,ve=null,Ge=null,tn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,w=null,y=null,E=null,L=null,T=null,A=null,W=null,b=new ee(0,0,0),M=0,V=!1,H=null,tt=null,C=null,B=null,G=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),X=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=Y>=2);let et=null,nt={};const k=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ct=new Xe().fromArray(k),gt=new Xe().fromArray(q);function mt(R,st,ot,Et){const St=new Uint8Array(4),_e=n.createTexture();n.bindTexture(R,_e),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ot;ve++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(st+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return _e}const Vt={};Vt[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Vt[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Vt[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Vt[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ht(n.DEPTH_TEST),c.setFunc(_a),jt(!1),x(Zu),Ht(n.CULL_FACE),dt(Qi);function Ht(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Mt(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function ie(R,st){return p[R]!==st?(n.bindFramebuffer(R,st),p[R]=st,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=st),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function U(R,st){let ot=_,Et=!1;if(R)if(ot=g.get(st),ot===void 0&&(ot=[],g.set(st,ot)),R.isWebGLMultipleRenderTargets){const St=R.texture;if(ot.length!==St.length||ot[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,ve=St.length;_e<ve;_e++)ot[_e]=n.COLOR_ATTACHMENT0+_e;ot.length=St.length,Et=!0}}else ot[0]!==n.COLOR_ATTACHMENT0&&(ot[0]=n.COLOR_ATTACHMENT0,Et=!0);else ot[0]!==n.BACK&&(ot[0]=n.BACK,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Qe(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const yt={[Er]:n.FUNC_ADD,[gg]:n.FUNC_SUBTRACT,[_g]:n.FUNC_REVERSE_SUBTRACT};if(i)yt[nh]=n.MIN,yt[ih]=n.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(yt[nh]=R.MIN_EXT,yt[ih]=R.MAX_EXT)}const Ot={[vg]:n.ZERO,[yg]:n.ONE,[Sg]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[Tg]:n.SRC_ALPHA_SATURATE,[Eg]:n.DST_COLOR,[xg]:n.DST_ALPHA,[bg]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[wg]:n.ONE_MINUS_DST_COLOR,[Mg]:n.ONE_MINUS_DST_ALPHA,[Ag]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Cg]:n.CONSTANT_ALPHA,[Ig]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(R,st,ot,Et,St,_e,ve,Ge,tn,ye){if(R===Qi){d===!0&&(Mt(n.BLEND),d=!1);return}if(d===!1&&(Ht(n.BLEND),d=!0),R!==mg){if(R!==w||ye!==V){if((y!==Er||T!==Er)&&(n.blendEquation(n.FUNC_ADD),y=Er,T=Er),ye)switch(R){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,L=null,A=null,W=null,b.set(0,0,0),M=0,w=R,V=ye}return}St=St||st,_e=_e||ot,ve=ve||Et,(st!==y||St!==T)&&(n.blendEquationSeparate(yt[st],yt[St]),y=st,T=St),(ot!==E||Et!==L||_e!==A||ve!==W)&&(n.blendFuncSeparate(Ot[ot],Ot[Et],Ot[_e],Ot[ve]),E=ot,L=Et,A=_e,W=ve),(Ge.equals(b)===!1||tn!==M)&&(n.blendColor(Ge.r,Ge.g,Ge.b,tn),b.copy(Ge),M=tn),w=R,V=!1}function Ee(R,st){R.side===Ci?Mt(n.CULL_FACE):Ht(n.CULL_FACE);let ot=R.side===fn;st&&(ot=!ot),jt(ot),R.blending===fs&&R.transparent===!1?dt(Qi):dt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const Et=R.stencilWrite;l.setTest(Et),Et&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),F(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ht(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(R){H!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),H=R)}function x(R){R!==dg?(Ht(n.CULL_FACE),R!==tt&&(R===Zu?n.cullFace(n.BACK):R===fg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),tt=R}function v(R){R!==C&&(X&&n.lineWidth(R),C=R)}function F(R,st,ot){R?(Ht(n.POLYGON_OFFSET_FILL),(B!==st||G!==ot)&&(n.polygonOffset(st,ot),B=st,G=ot)):Mt(n.POLYGON_OFFSET_FILL)}function Z(R){R?Ht(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function K(R){R===void 0&&(R=n.TEXTURE0+j-1),et!==R&&(n.activeTexture(R),et=R)}function Q(R,st,ot){ot===void 0&&(et===null?ot=n.TEXTURE0+j-1:ot=et);let Et=nt[ot];Et===void 0&&(Et={type:void 0,texture:void 0},nt[ot]=Et),(Et.type!==R||Et.texture!==st)&&(et!==ot&&(n.activeTexture(ot),et=ot),n.bindTexture(R,st||Vt[R]),Et.type=R,Et.texture=st)}function ft(){const R=nt[et];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $t(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(R){ct.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ct.copy(R))}function le(R){gt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),gt.copy(R))}function Re(R,st){let ot=h.get(st);ot===void 0&&(ot=new WeakMap,h.set(st,ot));let Et=ot.get(R);Et===void 0&&(Et=n.getUniformBlockIndex(st,R.name),ot.set(R,Et))}function Jt(R,st){const Et=h.get(st).get(R);u.get(st)!==Et&&(n.uniformBlockBinding(st,Et,R.__bindingPointIndex),u.set(st,Et))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},et=null,nt={},p={},g=new WeakMap,_=[],m=null,d=!1,w=null,y=null,E=null,L=null,T=null,A=null,W=null,b=new ee(0,0,0),M=0,V=!1,H=null,tt=null,C=null,B=null,G=null,ct.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ht,disable:Mt,bindFramebuffer:ie,drawBuffers:U,useProgram:Qe,setBlending:dt,setMaterial:Ee,setFlipSided:jt,setCullFace:x,setLineWidth:v,setPolygonOffset:F,setScissorTest:Z,activeTexture:K,bindTexture:Q,unbindTexture:ft,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:_t,texImage3D:ht,updateUBOMapping:Re,uniformBlockBinding:Jt,texStorage2D:Qt,texStorage3D:Dt,texSubImage2D:xt,texSubImage3D:$t,compressedTexSubImage2D:J,compressedTexSubImage3D:fe,scissor:Wt,viewport:le,reset:it}}function Mb(n,t,e,i,r,s,o){const a=r.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return p?new OffscreenCanvas(x,v):Ma("canvas")}function _(x,v,F,Z){let K=1;if((x.width>Z||x.height>Z)&&(K=Z/Math.max(x.width,x.height)),K<1||v===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const Q=v?xa:Math.floor,ft=Q(K*x.width),at=Q(K*x.height);h===void 0&&(h=g(ft,at));const ut=F?g(ft,at):h;return ut.width=ft,ut.height=at,ut.getContext("2d").drawImage(x,0,0,ft,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+ft+"x"+at+")."),ut}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function m(x){return Tl(x.width)&&Tl(x.height)}function d(x){return a?!1:x.wrapS!==qn||x.wrapT!==qn||x.minFilter!==sn&&x.minFilter!==Nn}function w(x,v){return x.generateMipmaps&&v&&x.minFilter!==sn&&x.minFilter!==Nn}function y(x){n.generateMipmap(x)}function E(x,v,F,Z,K=!1){if(a===!1)return v;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Q=v;if(v===n.RED&&(F===n.FLOAT&&(Q=n.R32F),F===n.HALF_FLOAT&&(Q=n.R16F),F===n.UNSIGNED_BYTE&&(Q=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Q=n.R8UI),F===n.UNSIGNED_SHORT&&(Q=n.R16UI),F===n.UNSIGNED_INT&&(Q=n.R32UI),F===n.BYTE&&(Q=n.R8I),F===n.SHORT&&(Q=n.R16I),F===n.INT&&(Q=n.R32I)),v===n.RG&&(F===n.FLOAT&&(Q=n.RG32F),F===n.HALF_FLOAT&&(Q=n.RG16F),F===n.UNSIGNED_BYTE&&(Q=n.RG8)),v===n.RGBA){const ft=K?va:pe.getTransfer(Z);F===n.FLOAT&&(Q=n.RGBA32F),F===n.HALF_FLOAT&&(Q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Q=ft===be?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function L(x,v,F){return w(x,F)===!0||x.isFramebufferTexture&&x.minFilter!==sn&&x.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function T(x){return x===sn||x===rh||x===Ic?n.NEAREST:n.LINEAR}function A(x){const v=x.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&u.delete(v)}function W(x){const v=x.target;v.removeEventListener("dispose",W),V(v)}function b(x){const v=i.get(x);if(v.__webglInit===void 0)return;const F=x.source,Z=f.get(F);if(Z){const K=Z[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(x),Object.keys(Z).length===0&&f.delete(F)}i.remove(x)}function M(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const F=x.source,Z=f.get(F);delete Z[v.__cacheKey],o.memory.textures--}function V(x){const v=x.texture,F=i.get(x),Z=i.get(v);if(Z.__webglTexture!==void 0&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let Q=0;Q<F.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(F.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)n.deleteFramebuffer(F.__webglFramebuffer[K]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let K=0,Q=v.length;K<Q;K++){const ft=i.get(v[K]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(v[K])}i.remove(v),i.remove(x)}let H=0;function tt(){H=0}function C(){const x=H;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),H+=1,x}function B(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function G(x,v){const F=i.get(x);if(x.isVideoTexture&&Ee(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const Z=x.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(F,x,v);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function j(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){ct(F,x,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function X(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){ct(F,x,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function Y(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){gt(F,x,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const $={[Ml]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},et={[sn]:n.NEAREST,[rh]:n.NEAREST_MIPMAP_NEAREST,[Ic]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Yg]:n.LINEAR_MIPMAP_NEAREST,[co]:n.LINEAR_MIPMAP_LINEAR},nt={[r_]:n.NEVER,[u_]:n.ALWAYS,[s_]:n.LESS,[pf]:n.LEQUAL,[o_]:n.EQUAL,[l_]:n.GEQUAL,[a_]:n.GREATER,[c_]:n.NOTEQUAL};function k(x,v,F){if(F?(n.texParameteri(x,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,$[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,et[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,et[v.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==qn||v.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==sn&&v.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===sn||v.minFilter!==Ic&&v.minFilter!==co||v.type===Zi&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===lo&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(x,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function q(x,v){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",A));const Z=v.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const Q=B(v);if(Q!==x.__cacheKey){K[Q]===void 0&&(K[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[Q].usedTimes++;const ft=K[x.__cacheKey];ft!==void 0&&(K[x.__cacheKey].usedTimes--,ft.usedTimes===0&&M(v)),x.__cacheKey=Q,x.__webglTexture=K[Q].texture}return F}function ct(x,v,F){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const K=q(x,v),Q=v.source;e.bindTexture(Z,x.__webglTexture,n.TEXTURE0+F);const ft=i.get(Q);if(Q.version!==ft.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const at=pe.getPrimaries(pe.workingColorSpace),ut=v.colorSpace===zn?null:pe.getPrimaries(v.colorSpace),xt=v.colorSpace===zn||at===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const $t=d(v)&&m(v.image)===!1;let J=_(v.image,$t,!1,r.maxTextureSize);J=jt(v,J);const fe=m(J)||a,Qt=s.convert(v.format,v.colorSpace);let Dt=s.convert(v.type),_t=E(v.internalFormat,Qt,Dt,v.colorSpace,v.isVideoTexture);k(Z,v,fe);let ht;const Wt=v.mipmaps,le=a&&v.isVideoTexture!==!0&&_t!==hf,Re=ft.__version===void 0||K===!0,Jt=L(v,J,fe);if(v.isDepthTexture)_t=n.DEPTH_COMPONENT,a?v.type===Zi?_t=n.DEPTH_COMPONENT32F:v.type===Ki?_t=n.DEPTH_COMPONENT24:v.type===Dr?_t=n.DEPTH24_STENCIL8:_t=n.DEPTH_COMPONENT16:v.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pr&&_t===n.DEPTH_COMPONENT&&v.type!==Zl&&v.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ki,Dt=s.convert(v.type)),v.format===Ms&&_t===n.DEPTH_COMPONENT&&(_t=n.DEPTH_STENCIL,v.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Dr,Dt=s.convert(v.type))),Re&&(le?e.texStorage2D(n.TEXTURE_2D,1,_t,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,_t,J.width,J.height,0,Qt,Dt,null));else if(v.isDataTexture)if(Wt.length>0&&fe){le&&Re&&e.texStorage2D(n.TEXTURE_2D,Jt,_t,Wt[0].width,Wt[0].height);for(let it=0,R=Wt.length;it<R;it++)ht=Wt[it],le?e.texSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,Qt,Dt,ht.data):e.texImage2D(n.TEXTURE_2D,it,_t,ht.width,ht.height,0,Qt,Dt,ht.data);v.generateMipmaps=!1}else le?(Re&&e.texStorage2D(n.TEXTURE_2D,Jt,_t,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Qt,Dt,J.data)):e.texImage2D(n.TEXTURE_2D,0,_t,J.width,J.height,0,Qt,Dt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){le&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,_t,Wt[0].width,Wt[0].height,J.depth);for(let it=0,R=Wt.length;it<R;it++)ht=Wt[it],v.format!==Jn?Qt!==null?le?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,J.depth,Qt,ht.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,_t,ht.width,ht.height,J.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,J.depth,Qt,Dt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,_t,ht.width,ht.height,J.depth,0,Qt,Dt,ht.data)}else{le&&Re&&e.texStorage2D(n.TEXTURE_2D,Jt,_t,Wt[0].width,Wt[0].height);for(let it=0,R=Wt.length;it<R;it++)ht=Wt[it],v.format!==Jn?Qt!==null?le?e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,Qt,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,it,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,Qt,Dt,ht.data):e.texImage2D(n.TEXTURE_2D,it,_t,ht.width,ht.height,0,Qt,Dt,ht.data)}else if(v.isDataArrayTexture)le?(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Jt,_t,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Qt,Dt,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,J.width,J.height,J.depth,0,Qt,Dt,J.data);else if(v.isData3DTexture)le?(Re&&e.texStorage3D(n.TEXTURE_3D,Jt,_t,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Qt,Dt,J.data)):e.texImage3D(n.TEXTURE_3D,0,_t,J.width,J.height,J.depth,0,Qt,Dt,J.data);else if(v.isFramebufferTexture){if(Re)if(le)e.texStorage2D(n.TEXTURE_2D,Jt,_t,J.width,J.height);else{let it=J.width,R=J.height;for(let st=0;st<Jt;st++)e.texImage2D(n.TEXTURE_2D,st,_t,it,R,0,Qt,Dt,null),it>>=1,R>>=1}}else if(Wt.length>0&&fe){le&&Re&&e.texStorage2D(n.TEXTURE_2D,Jt,_t,Wt[0].width,Wt[0].height);for(let it=0,R=Wt.length;it<R;it++)ht=Wt[it],le?e.texSubImage2D(n.TEXTURE_2D,it,0,0,Qt,Dt,ht):e.texImage2D(n.TEXTURE_2D,it,_t,Qt,Dt,ht);v.generateMipmaps=!1}else le?(Re&&e.texStorage2D(n.TEXTURE_2D,Jt,_t,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Qt,Dt,J)):e.texImage2D(n.TEXTURE_2D,0,_t,Qt,Dt,J);w(v,fe)&&y(Z),ft.__version=Q.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function gt(x,v,F){if(v.image.length!==6)return;const Z=q(x,v),K=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);const Q=i.get(K);if(K.version!==Q.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);const ft=pe.getPrimaries(pe.workingColorSpace),at=v.colorSpace===zn?null:pe.getPrimaries(v.colorSpace),ut=v.colorSpace===zn||ft===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const xt=v.isCompressedTexture||v.image[0].isCompressedTexture,$t=v.image[0]&&v.image[0].isDataTexture,J=[];for(let it=0;it<6;it++)!xt&&!$t?J[it]=_(v.image[it],!1,!0,r.maxCubemapSize):J[it]=$t?v.image[it].image:v.image[it],J[it]=jt(v,J[it]);const fe=J[0],Qt=m(fe)||a,Dt=s.convert(v.format,v.colorSpace),_t=s.convert(v.type),ht=E(v.internalFormat,Dt,_t,v.colorSpace),Wt=a&&v.isVideoTexture!==!0,le=Q.__version===void 0||Z===!0;let Re=L(v,fe,Qt);k(n.TEXTURE_CUBE_MAP,v,Qt);let Jt;if(xt){Wt&&le&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ht,fe.width,fe.height);for(let it=0;it<6;it++){Jt=J[it].mipmaps;for(let R=0;R<Jt.length;R++){const st=Jt[R];v.format!==Jn?Dt!==null?Wt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R,0,0,st.width,st.height,Dt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R,ht,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R,0,0,st.width,st.height,Dt,_t,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R,ht,st.width,st.height,0,Dt,_t,st.data)}}}else{Jt=v.mipmaps,Wt&&le&&(Jt.length>0&&Re++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ht,J[0].width,J[0].height));for(let it=0;it<6;it++)if($t){Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,J[it].width,J[it].height,Dt,_t,J[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ht,J[it].width,J[it].height,0,Dt,_t,J[it].data);for(let R=0;R<Jt.length;R++){const ot=Jt[R].image[it].image;Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R+1,0,0,ot.width,ot.height,Dt,_t,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R+1,ht,ot.width,ot.height,0,Dt,_t,ot.data)}}else{Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,_t,J[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ht,Dt,_t,J[it]);for(let R=0;R<Jt.length;R++){const st=Jt[R];Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R+1,0,0,Dt,_t,st.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,R+1,ht,Dt,_t,st.image[it])}}}w(v,Qt)&&y(n.TEXTURE_CUBE_MAP),Q.__version=K.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function mt(x,v,F,Z,K,Q){const ft=s.convert(F.format,F.colorSpace),at=s.convert(F.type),ut=E(F.internalFormat,ft,at,F.colorSpace);if(!i.get(v).__hasExternalTextures){const $t=Math.max(1,v.width>>Q),J=Math.max(1,v.height>>Q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,Q,ut,$t,J,v.depth,0,ft,at,null):e.texImage2D(K,Q,ut,$t,J,0,ft,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),dt(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,i.get(F).__webglTexture,0,Ot(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,i.get(F).__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(x,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer&&!v.stencilBuffer){let Z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||dt(v)){const K=v.depthTexture;K&&K.isDepthTexture&&(K.type===Zi?Z=n.DEPTH_COMPONENT32F:K.type===Ki&&(Z=n.DEPTH_COMPONENT24));const Q=Ot(v);dt(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,Z,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,Z,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(v.depthBuffer&&v.stencilBuffer){const Z=Ot(v);F&&dt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,v.width,v.height):dt(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let K=0;K<Z.length;K++){const Q=Z[K],ft=s.convert(Q.format,Q.colorSpace),at=s.convert(Q.type),ut=E(Q.internalFormat,ft,at,Q.colorSpace),xt=Ot(v);F&&dt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,ut,v.width,v.height):dt(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,ut,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ut,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const Z=i.get(v.depthTexture).__webglTexture,K=Ot(v);if(v.depthTexture.format===Pr)dt(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ms)dt(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(x){const v=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ht(v.__webglFramebuffer,x)}else if(F){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Vt(v.__webglDepthbuffer[Z],x,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Vt(v.__webglDepthbuffer,x,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(x,v,F){const Z=i.get(x);v!==void 0&&mt(Z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Mt(x)}function U(x){const v=x.texture,F=i.get(x),Z=i.get(v);x.addEventListener("dispose",W),x.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++);const K=x.isWebGLCubeRenderTarget===!0,Q=x.isWebGLMultipleRenderTargets===!0,ft=m(x)||a;if(K){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=n.createFramebuffer()}else F.__webglFramebuffer[at]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)F.__webglFramebuffer[at]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Q)if(r.drawBuffers){const at=x.texture;for(let ut=0,xt=at.length;ut<xt;ut++){const $t=i.get(at[ut]);$t.__webglTexture===void 0&&($t.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&dt(x)===!1){const at=Q?v:[v];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const xt=at[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const $t=s.convert(xt.format,xt.colorSpace),J=s.convert(xt.type),fe=E(xt.internalFormat,$t,J,xt.colorSpace,x.isXRRenderTarget===!0),Qt=Ot(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,fe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(F.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),k(n.TEXTURE_CUBE_MAP,v,ft);for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)mt(F.__webglFramebuffer[at][ut],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else mt(F.__webglFramebuffer[at],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);w(v,ft)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const at=x.texture;for(let ut=0,xt=at.length;ut<xt;ut++){const $t=at[ut],J=i.get($t);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),k(n.TEXTURE_2D,$t,ft),mt(F.__webglFramebuffer,x,$t,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),w($t,ft)&&y(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?at=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Z.__webglTexture),k(at,v,ft),a&&v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)mt(F.__webglFramebuffer[ut],x,v,n.COLOR_ATTACHMENT0,at,ut);else mt(F.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,at,0);w(v,ft)&&y(at),e.unbindTexture()}x.depthBuffer&&Mt(x)}function Qe(x){const v=m(x)||a,F=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0,K=F.length;Z<K;Z++){const Q=F[Z];if(w(Q,v)){const ft=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(Q).__webglTexture;e.bindTexture(ft,at),y(ft),e.unbindTexture()}}}function yt(x){if(a&&x.samples>0&&dt(x)===!1){const v=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],F=x.width,Z=x.height;let K=n.COLOR_BUFFER_BIT;const Q=[],ft=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(x),ut=x.isWebGLMultipleRenderTargets===!0;if(ut)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){Q.push(n.COLOR_ATTACHMENT0+xt),x.depthBuffer&&Q.push(ft);const $t=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if($t===!1&&(x.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ut&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]),$t===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ft]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ft])),ut){const J=i.get(v[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,K,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);const $t=i.get(v[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Ot(x){return Math.min(r.maxSamples,x.samples)}function dt(x){const v=i.get(x);return a&&x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function jt(x,v){const F=x.colorSpace,Z=x.format,K=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===wl||F!==Ni&&F!==zn&&(pe.getTransfer(F)===be?a===!1?t.has("EXT_sRGB")===!0&&Z===Jn?(x.format=wl,x.minFilter=Nn,x.generateMipmaps=!1):v=gf.sRGBToLinear(v):(Z!==Jn||K!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=C,this.resetTextureUnits=tt,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt}function Eb(n,t,e){const i=e.isWebGL2;function r(s,o=zn){let a;const c=pe.getTransfer(o);if(s===er)return n.UNSIGNED_BYTE;if(s===of)return n.UNSIGNED_SHORT_4_4_4_4;if(s===af)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jg)return n.BYTE;if(s===$g)return n.SHORT;if(s===Zl)return n.UNSIGNED_SHORT;if(s===sf)return n.INT;if(s===Ki)return n.UNSIGNED_INT;if(s===Zi)return n.FLOAT;if(s===lo)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qg)return n.ALPHA;if(s===Jn)return n.RGBA;if(s===Jg)return n.LUMINANCE;if(s===Kg)return n.LUMINANCE_ALPHA;if(s===Pr)return n.DEPTH_COMPONENT;if(s===Ms)return n.DEPTH_STENCIL;if(s===wl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zg)return n.RED;if(s===cf)return n.RED_INTEGER;if(s===Qg)return n.RG;if(s===lf)return n.RG_INTEGER;if(s===uf)return n.RGBA_INTEGER;if(s===Lc||s===Dc||s===Pc||s===Uc)if(c===be)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sh||s===oh||s===ah||s===ch)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lh||s===uh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lh)return c===be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===uh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hh||s===dh||s===fh||s===ph||s===mh||s===gh||s===_h||s===vh||s===yh||s===Sh||s===bh||s===xh||s===Mh||s===Eh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return c===be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc||s===wh||s===Th)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Nc)return c===be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Th)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===t_||s===Ah||s===Rh||s===Ch)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ch)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class wb extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ab extends Ds{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const w=[],y=[],E=new vt;let L=null;const T=new Fn;T.layers.enable(1),T.viewport=new Xe;const A=new Fn;A.layers.enable(2),A.viewport=new Xe;const W=[T,A],b=new wb;b.layers.enable(1),b.layers.enable(2);let M=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=w[k];return q===void 0&&(q=new rl,w[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=w[k];return q===void 0&&(q=new rl,w[k]=q),q.getGripSpace()},this.getHand=function(k){let q=w[k];return q===void 0&&(q=new rl,w[k]=q),q.getHandSpace()};function H(k){const q=y.indexOf(k.inputSource);if(q===-1)return;const ct=w[q];ct!==void 0&&(ct.update(k.inputSource,k.frame,l||o),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function tt(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",C);for(let k=0;k<w.length;k++){const q=y[k];q!==null&&(y[k]=null,w[k].disconnect(q))}M=null,V=null,t.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,q),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Or(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:er,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ct=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=_.stencil?Ms:Pr,ct=_.stencil?Dr:Ki);const mt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(mt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Or(f.textureWidth,f.textureHeight,{format:Jn,type:er,depthTexture:new If(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Vt=t.properties.get(d);Vt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(k){for(let q=0;q<k.removed.length;q++){const ct=k.removed[q],gt=y.indexOf(ct);gt>=0&&(y[gt]=null,w[gt].disconnect(ct))}for(let q=0;q<k.added.length;q++){const ct=k.added[q];let gt=y.indexOf(ct);if(gt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=y.length){y.push(ct),gt=Vt;break}else if(y[Vt]===null){y[Vt]=ct,gt=Vt;break}if(gt===-1)break}const mt=w[gt];mt&&mt.connect(ct)}}const B=new I,G=new I;function j(k,q,ct){B.setFromMatrixPosition(q.matrixWorld),G.setFromMatrixPosition(ct.matrixWorld);const gt=B.distanceTo(G),mt=q.projectionMatrix.elements,Vt=ct.projectionMatrix.elements,Ht=mt[14]/(mt[10]-1),Mt=mt[14]/(mt[10]+1),ie=(mt[9]+1)/mt[5],U=(mt[9]-1)/mt[5],Qe=(mt[8]-1)/mt[0],yt=(Vt[8]+1)/Vt[0],Ot=Ht*Qe,dt=Ht*yt,Ee=gt/(-Qe+yt),jt=Ee*-Qe;q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(jt),k.translateZ(Ee),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const x=Ht+Ee,v=Mt+Ee,F=Ot-jt,Z=dt+(gt-jt),K=ie*Mt/v*x,Q=U*Mt/v*x;k.projectionMatrix.makePerspective(F,Z,K,Q,x,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function X(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;b.near=A.near=T.near=k.near,b.far=A.far=T.far=k.far,(M!==b.near||V!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),M=b.near,V=b.far);const q=k.parent,ct=b.cameras;X(b,q);for(let gt=0;gt<ct.length;gt++)X(ct[gt],q);ct.length===2?j(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),Y(k,b,q)};function Y(k,q,ct){ct===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=uo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let $=null;function et(k,q){if(u=q.getViewerPose(l||o),g=q,u!==null){const ct=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let gt=!1;ct.length!==b.cameras.length&&(b.cameras.length=0,gt=!0);for(let mt=0;mt<ct.length;mt++){const Vt=ct[mt];let Ht=null;if(p!==null)Ht=p.getViewport(Vt);else{const ie=h.getViewSubImage(f,Vt);Ht=ie.viewport,mt===0&&(t.setRenderTargetTextures(d,ie.colorTexture,f.ignoreDepthValues?void 0:ie.depthStencilTexture),t.setRenderTarget(d))}let Mt=W[mt];Mt===void 0&&(Mt=new Fn,Mt.layers.enable(mt),Mt.viewport=new Xe,W[mt]=Mt),Mt.matrix.fromArray(Vt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Vt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),mt===0&&(b.matrix.copy(Mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),gt===!0&&b.cameras.push(Mt)}}for(let ct=0;ct<w.length;ct++){const gt=y[ct],mt=w[ct];gt!==null&&mt!==void 0&&mt.update(gt,q,l||o)}$&&$(k,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const nt=new Rf;nt.setAnimationLoop(et),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function Rb(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,wf(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,w,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,w,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cb(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,y){const E=y.program;i.uniformBlockBinding(w,E)}function l(w,y){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(w,L);const T=t.render.frame;s[w.id]!==T&&(f(w),s[w.id]=T)}function u(w){const y=h();w.__bindingPointIndex=y;const E=n.createBuffer(),L=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=r[w.id],E=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,A=E.length;T<A;T++){const W=Array.isArray(E[T])?E[T]:[E[T]];for(let b=0,M=W.length;b<M;b++){const V=W[b];if(p(V,T,b,L)===!0){const H=V.__offset,tt=Array.isArray(V.value)?V.value:[V.value];let C=0;for(let B=0;B<tt.length;B++){const G=tt[B],j=_(G);typeof G=="number"||typeof G=="boolean"?(V.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+C,V.__data)):G.isMatrix3?(V.__data[0]=G.elements[0],V.__data[1]=G.elements[1],V.__data[2]=G.elements[2],V.__data[3]=0,V.__data[4]=G.elements[3],V.__data[5]=G.elements[4],V.__data[6]=G.elements[5],V.__data[7]=0,V.__data[8]=G.elements[6],V.__data[9]=G.elements[7],V.__data[10]=G.elements[8],V.__data[11]=0):(G.toArray(V.__data,C),C+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,E,L){const T=w.value,A=y+"_"+E;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const W=L[A];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return L[A]=T,!0}else if(W.equals(T)===!1)return W.copy(T),!0}return!1}function g(w){const y=w.uniforms;let E=0;const L=16;for(let A=0,W=y.length;A<W;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,V=b.length;M<V;M++){const H=b[M],tt=Array.isArray(H.value)?H.value:[H.value];for(let C=0,B=tt.length;C<B;C++){const G=tt[C],j=_(G),X=E%L;X!==0&&L-X<j.boundary&&(E+=L-X),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=j.storage}}}const T=E%L;return T>0&&(E+=L-T),w.__size=E,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Ff{constructor(t={}){const{canvas:e=w_(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const y=this;let E=!1,L=0,T=0,A=null,W=-1,b=null;const M=new Xe,V=new Xe;let H=null;const tt=new ee(0);let C=0,B=e.width,G=e.height,j=1,X=null,Y=null;const $=new Xe(0,0,B,G),et=new Xe(0,0,B,G);let nt=!1;const k=new eu;let q=!1,ct=!1,gt=null;const mt=new Le,Vt=new vt,Ht=new I,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return A===null?j:1}let U=i;function Qe(S,P){for(let O=0;O<S.length;O++){const z=S[O],N=e.getContext(z,P);if(N!==null)return N}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",R,!1),e.addEventListener("webglcontextcreationerror",st,!1),U===null){const P=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&P.shift(),U=Qe(P,S),U===null)throw Qe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let yt,Ot,dt,Ee,jt,x,v,F,Z,K,Q,ft,at,ut,xt,$t,J,fe,Qt,Dt,_t,ht,Wt,le;function Re(){yt=new zy(U),Ot=new Py(U,yt,t),yt.init(Ot),ht=new Eb(U,yt,Ot),dt=new xb(U,yt,Ot),Ee=new Gy(U),jt=new cb,x=new Mb(U,yt,dt,jt,Ot,ht,Ee),v=new Ny(y),F=new By(y),Z=new J_(U,Ot),Wt=new Ly(U,yt,Z,Ot),K=new Vy(U,Z,Ee,Wt),Q=new Yy(U,K,Z,Ee),Qt=new Xy(U,Ot,x),$t=new Uy(jt),ft=new ab(y,v,F,yt,Ot,Wt,$t),at=new Rb(y,jt),ut=new ub,xt=new gb(yt,Ot),fe=new Iy(y,v,F,dt,Q,f,c),J=new bb(y,Q,Ot),le=new Cb(U,Ee,Ot,dt),Dt=new Dy(U,yt,Ee,Ot),_t=new ky(U,yt,Ee,Ot),Ee.programs=ft.programs,y.capabilities=Ot,y.extensions=yt,y.properties=jt,y.renderLists=ut,y.shadowMap=J,y.state=dt,y.info=Ee}Re();const Jt=new Ab(y,U);this.xr=Jt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=yt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=yt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(B,G,!1))},this.getSize=function(S){return S.set(B,G)},this.setSize=function(S,P,O=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,G=P,e.width=Math.floor(S*j),e.height=Math.floor(P*j),O===!0&&(e.style.width=S+"px",e.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(B*j,G*j).floor()},this.setDrawingBufferSize=function(S,P,O){B=S,G=P,j=O,e.width=Math.floor(S*O),e.height=Math.floor(P*O),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy($)},this.setViewport=function(S,P,O,z){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,P,O,z),dt.viewport(M.copy($).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,P,O,z){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,P,O,z),dt.scissor(V.copy(et).multiplyScalar(j).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){dt.setScissorTest(nt=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(S=!0,P=!0,O=!0){let z=0;if(S){let N=!1;if(A!==null){const lt=A.texture.format;N=lt===uf||lt===lf||lt===cf}if(N){const lt=A.texture.type,pt=lt===er||lt===Ki||lt===Zl||lt===Dr||lt===of||lt===af,bt=fe.getClearColor(),Tt=fe.getClearAlpha(),qt=bt.r,Bt=bt.g,kt=bt.b;pt?(p[0]=qt,p[1]=Bt,p[2]=kt,p[3]=Tt,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=qt,g[1]=Bt,g[2]=kt,g[3]=Tt,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}P&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",R,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),xt.dispose(),jt.dispose(),v.dispose(),F.dispose(),Q.dispose(),Wt.dispose(),le.dispose(),ft.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",tn),Jt.removeEventListener("sessionend",ye),gt&&(gt.dispose(),gt=null),en.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Ee.autoReset,P=J.enabled,O=J.autoUpdate,z=J.needsUpdate,N=J.type;Re(),Ee.autoReset=S,J.enabled=P,J.autoUpdate=O,J.needsUpdate=z,J.type=N}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ot(S){const P=S.target;P.removeEventListener("dispose",ot),Et(P)}function Et(S){St(S),jt.remove(S)}function St(S){const P=jt.get(S).programs;P!==void 0&&(P.forEach(function(O){ft.releaseProgram(O)}),S.isShaderMaterial&&ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,O,z,N,lt){P===null&&(P=Mt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,bt=cg(S,P,O,z,N);dt.setMaterial(z,pt);let Tt=O.index,qt=1;if(z.wireframe===!0){if(Tt=K.getWireframeAttribute(O),Tt===void 0)return;qt=2}const Bt=O.drawRange,kt=O.attributes.position;let Ie=Bt.start*qt,Sn=(Bt.start+Bt.count)*qt;lt!==null&&(Ie=Math.max(Ie,lt.start*qt),Sn=Math.min(Sn,(lt.start+lt.count)*qt)),Tt!==null?(Ie=Math.max(Ie,0),Sn=Math.min(Sn,Tt.count)):kt!=null&&(Ie=Math.max(Ie,0),Sn=Math.min(Sn,kt.count));const He=Sn-Ie;if(He<0||He===1/0)return;Wt.setup(N,z,bt,O,Tt);let vi,we=Dt;if(Tt!==null&&(vi=Z.get(Tt),we=_t,we.setIndex(vi)),N.isMesh)z.wireframe===!0?(dt.setLineWidth(z.wireframeLinewidth*ie()),we.setMode(U.LINES)):we.setMode(U.TRIANGLES);else if(N.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),dt.setLineWidth(Kt*ie()),N.isLineSegments?we.setMode(U.LINES):N.isLineLoop?we.setMode(U.LINE_LOOP):we.setMode(U.LINE_STRIP)}else N.isPoints?we.setMode(U.POINTS):N.isSprite&&we.setMode(U.TRIANGLES);if(N.isBatchedMesh)we.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)we.renderInstances(Ie,He,N.count);else if(O.isInstancedBufferGeometry){const Kt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Tc=Math.min(O.instanceCount,Kt);we.renderInstances(Ie,He,Tc)}else we.render(Ie,He)};function _e(S,P,O){S.transparent===!0&&S.side===Ci&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,Po(S,P,O),S.side=rr,S.needsUpdate=!0,Po(S,P,O),S.side=Ci):Po(S,P,O)}this.compile=function(S,P,O=null){O===null&&(O=S),m=xt.get(O),m.init(),w.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(y._useLegacyLights);const z=new Set;return S.traverse(function(N){const lt=N.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){const bt=lt[pt];_e(bt,O,N),z.add(bt)}else _e(lt,O,N),z.add(lt)}),w.pop(),m=null,z},this.compileAsync=function(S,P,O=null){const z=this.compile(S,P,O);return new Promise(N=>{function lt(){if(z.forEach(function(pt){jt.get(pt).currentProgram.isReady()&&z.delete(pt)}),z.size===0){N(S);return}setTimeout(lt,10)}yt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ve=null;function Ge(S){ve&&ve(S)}function tn(){en.stop()}function ye(){en.start()}const en=new Rf;en.setAnimationLoop(Ge),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(S){ve=S,Jt.setAnimationLoop(S),S===null?en.stop():en.start()},Jt.addEventListener("sessionstart",tn),Jt.addEventListener("sessionend",ye),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(P),P=Jt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,P,A),m=xt.get(S,w.length),m.init(),w.push(m),mt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),k.setFromProjectionMatrix(mt),ct=this.localClippingEnabled,q=$t.init(this.clippingPlanes,ct),_=ut.get(S,d.length),_.init(),d.push(_),ti(S,P,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,q===!0&&$t.beginShadows();const O=m.state.shadowsArray;if(J.render(O,S,P),q===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(_,S),m.setupLights(y._useLegacyLights),P.isArrayCamera){const z=P.cameras;for(let N=0,lt=z.length;N<lt;N++){const pt=z[N];Yu(_,S,pt,pt.viewport)}}else Yu(_,S,P);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,P),Wt.resetDefaultState(),W=-1,b=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ti(S,P,O,z){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){z&&Ht.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);const pt=Q.update(S),bt=S.material;bt.visible&&_.push(S,pt,bt,O,Ht.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){const pt=Q.update(S),bt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ht.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ht.copy(pt.boundingSphere.center)),Ht.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(bt)){const Tt=pt.groups;for(let qt=0,Bt=Tt.length;qt<Bt;qt++){const kt=Tt[qt],Ie=bt[kt.materialIndex];Ie&&Ie.visible&&_.push(S,pt,Ie,O,Ht.z,kt)}}else bt.visible&&_.push(S,pt,bt,O,Ht.z,null)}}const lt=S.children;for(let pt=0,bt=lt.length;pt<bt;pt++)ti(lt[pt],P,O,z)}function Yu(S,P,O,z){const N=S.opaque,lt=S.transmissive,pt=S.transparent;m.setupLightsView(O),q===!0&&$t.setGlobalState(y.clippingPlanes,O),lt.length>0&&ag(N,lt,P,O),z&&dt.viewport(M.copy(z)),N.length>0&&Do(N,P,O),lt.length>0&&Do(lt,P,O),pt.length>0&&Do(pt,P,O),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function ag(S,P,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const lt=Ot.isWebGL2;gt===null&&(gt=new Or(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?lo:er,minFilter:co,samples:lt?4:0})),y.getDrawingBufferSize(Vt),lt?gt.setSize(Vt.x,Vt.y):gt.setSize(xa(Vt.x),xa(Vt.y));const pt=y.getRenderTarget();y.setRenderTarget(gt),y.getClearColor(tt),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear();const bt=y.toneMapping;y.toneMapping=tr,Do(S,O,z),x.updateMultisampleRenderTarget(gt),x.updateRenderTargetMipmap(gt);let Tt=!1;for(let qt=0,Bt=P.length;qt<Bt;qt++){const kt=P[qt],Ie=kt.object,Sn=kt.geometry,He=kt.material,vi=kt.group;if(He.side===Ci&&Ie.layers.test(z.layers)){const we=He.side;He.side=fn,He.needsUpdate=!0,ju(Ie,O,z,Sn,He,vi),He.side=we,He.needsUpdate=!0,Tt=!0}}Tt===!0&&(x.updateMultisampleRenderTarget(gt),x.updateRenderTargetMipmap(gt)),y.setRenderTarget(pt),y.setClearColor(tt,C),y.toneMapping=bt}function Do(S,P,O){const z=P.isScene===!0?P.overrideMaterial:null;for(let N=0,lt=S.length;N<lt;N++){const pt=S[N],bt=pt.object,Tt=pt.geometry,qt=z===null?pt.material:z,Bt=pt.group;bt.layers.test(O.layers)&&ju(bt,P,O,Tt,qt,Bt)}}function ju(S,P,O,z,N,lt){S.onBeforeRender(y,P,O,z,N,lt),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,P,O,z,S,lt),N.transparent===!0&&N.side===Ci&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,y.renderBufferDirect(O,P,z,N,S,lt),N.side=rr,N.needsUpdate=!0,y.renderBufferDirect(O,P,z,N,S,lt),N.side=Ci):y.renderBufferDirect(O,P,z,N,S,lt),S.onAfterRender(y,P,O,z,N,lt)}function Po(S,P,O){P.isScene!==!0&&(P=Mt);const z=jt.get(S),N=m.state.lights,lt=m.state.shadowsArray,pt=N.state.version,bt=ft.getParameters(S,N.state,lt,P,O),Tt=ft.getProgramCacheKey(bt);let qt=z.programs;z.environment=S.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(S.isMeshStandardMaterial?F:v).get(S.envMap||z.environment),qt===void 0&&(S.addEventListener("dispose",ot),qt=new Map,z.programs=qt);let Bt=qt.get(Tt);if(Bt!==void 0){if(z.currentProgram===Bt&&z.lightsStateVersion===pt)return qu(S,bt),Bt}else bt.uniforms=ft.getUniforms(S),S.onBuild(O,bt,y),S.onBeforeCompile(bt,y),Bt=ft.acquireProgram(bt,Tt),qt.set(Tt,Bt),z.uniforms=bt.uniforms;const kt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=$t.uniform),qu(S,bt),z.needsLights=ug(S),z.lightsStateVersion=pt,z.needsLights&&(kt.ambientLightColor.value=N.state.ambient,kt.lightProbe.value=N.state.probe,kt.directionalLights.value=N.state.directional,kt.directionalLightShadows.value=N.state.directionalShadow,kt.spotLights.value=N.state.spot,kt.spotLightShadows.value=N.state.spotShadow,kt.rectAreaLights.value=N.state.rectArea,kt.ltc_1.value=N.state.rectAreaLTC1,kt.ltc_2.value=N.state.rectAreaLTC2,kt.pointLights.value=N.state.point,kt.pointLightShadows.value=N.state.pointShadow,kt.hemisphereLights.value=N.state.hemi,kt.directionalShadowMap.value=N.state.directionalShadowMap,kt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,kt.spotShadowMap.value=N.state.spotShadowMap,kt.spotLightMatrix.value=N.state.spotLightMatrix,kt.spotLightMap.value=N.state.spotLightMap,kt.pointShadowMap.value=N.state.pointShadowMap,kt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Bt,z.uniformsList=null,Bt}function $u(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=la.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function qu(S,P){const O=jt.get(S);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function cg(S,P,O,z,N){P.isScene!==!0&&(P=Mt),x.resetTextureUnits();const lt=P.fog,pt=z.isMeshStandardMaterial?P.environment:null,bt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ni,Tt=(z.isMeshStandardMaterial?F:v).get(z.envMap||pt),qt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Bt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),kt=!!O.morphAttributes.position,Ie=!!O.morphAttributes.normal,Sn=!!O.morphAttributes.color;let He=tr;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(He=y.toneMapping);const vi=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,we=vi!==void 0?vi.length:0,Kt=jt.get(z),Tc=m.state.lights;if(q===!0&&(ct===!0||S!==b)){const Ln=S===b&&z.id===W;$t.setState(z,S,Ln)}let Ce=!1;z.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Tc.state.version||Kt.outputColorSpace!==bt||N.isBatchedMesh&&Kt.batching===!1||!N.isBatchedMesh&&Kt.batching===!0||N.isInstancedMesh&&Kt.instancing===!1||!N.isInstancedMesh&&Kt.instancing===!0||N.isSkinnedMesh&&Kt.skinning===!1||!N.isSkinnedMesh&&Kt.skinning===!0||N.isInstancedMesh&&Kt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Kt.instancingColor===!1&&N.instanceColor!==null||Kt.envMap!==Tt||z.fog===!0&&Kt.fog!==lt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==$t.numPlanes||Kt.numIntersection!==$t.numIntersection)||Kt.vertexAlphas!==qt||Kt.vertexTangents!==Bt||Kt.morphTargets!==kt||Kt.morphNormals!==Ie||Kt.morphColors!==Sn||Kt.toneMapping!==He||Ot.isWebGL2===!0&&Kt.morphTargetsCount!==we)&&(Ce=!0):(Ce=!0,Kt.__version=z.version);let pr=Kt.currentProgram;Ce===!0&&(pr=Po(z,P,N));let Ju=!1,Ws=!1,Ac=!1;const Je=pr.getUniforms(),mr=Kt.uniforms;if(dt.useProgram(pr.program)&&(Ju=!0,Ws=!0,Ac=!0),z.id!==W&&(W=z.id,Ws=!0),Ju||b!==S){Je.setValue(U,"projectionMatrix",S.projectionMatrix),Je.setValue(U,"viewMatrix",S.matrixWorldInverse);const Ln=Je.map.cameraPosition;Ln!==void 0&&Ln.setValue(U,Ht.setFromMatrixPosition(S.matrixWorld)),Ot.logarithmicDepthBuffer&&Je.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Je.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ws=!0,Ac=!0)}if(N.isSkinnedMesh){Je.setOptional(U,N,"bindMatrix"),Je.setOptional(U,N,"bindMatrixInverse");const Ln=N.skeleton;Ln&&(Ot.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Je.setValue(U,"boneTexture",Ln.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Je.setOptional(U,N,"batchingTexture"),Je.setValue(U,"batchingTexture",N._matricesTexture,x));const Rc=O.morphAttributes;if((Rc.position!==void 0||Rc.normal!==void 0||Rc.color!==void 0&&Ot.isWebGL2===!0)&&Qt.update(N,O,pr),(Ws||Kt.receiveShadow!==N.receiveShadow)&&(Kt.receiveShadow=N.receiveShadow,Je.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(mr.envMap.value=Tt,mr.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Ws&&(Je.setValue(U,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&lg(mr,Ac),lt&&z.fog===!0&&at.refreshFogUniforms(mr,lt),at.refreshMaterialUniforms(mr,z,j,G,gt),la.upload(U,$u(Kt),mr,x)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(la.upload(U,$u(Kt),mr,x),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Je.setValue(U,"center",N.center),Je.setValue(U,"modelViewMatrix",N.modelViewMatrix),Je.setValue(U,"normalMatrix",N.normalMatrix),Je.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ln=z.uniformsGroups;for(let Cc=0,hg=Ln.length;Cc<hg;Cc++)if(Ot.isWebGL2){const Ku=Ln[Cc];le.update(Ku,pr),le.bind(Ku,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function lg(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function ug(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,P,O){jt.get(S.texture).__webglTexture=P,jt.get(S.depthTexture).__webglTexture=O;const z=jt.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,P){const O=jt.get(S);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,O=0){A=S,L=P,T=O;let z=!0,N=null,lt=!1,pt=!1;if(S){const Tt=jt.get(S);Tt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Tt.__webglFramebuffer===void 0?x.setupRenderTarget(S):Tt.__hasExternalTextures&&x.rebindTextures(S,jt.get(S.texture).__webglTexture,jt.get(S.depthTexture).__webglTexture);const qt=S.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(pt=!0);const Bt=jt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[P])?N=Bt[P][O]:N=Bt[P],lt=!0):Ot.isWebGL2&&S.samples>0&&x.useMultisampledRTT(S)===!1?N=jt.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[O]:N=Bt,M.copy(S.viewport),V.copy(S.scissor),H=S.scissorTest}else M.copy($).multiplyScalar(j).floor(),V.copy(et).multiplyScalar(j).floor(),H=nt;if(dt.bindFramebuffer(U.FRAMEBUFFER,N)&&Ot.drawBuffers&&z&&dt.drawBuffers(S,N),dt.viewport(M),dt.scissor(V),dt.setScissorTest(H),lt){const Tt=jt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,Tt.__webglTexture,O)}else if(pt){const Tt=jt.get(S.texture),qt=P||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,O||0,qt)}W=-1},this.readRenderTargetPixels=function(S,P,O,z,N,lt,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=jt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){dt.bindFramebuffer(U.FRAMEBUFFER,bt);try{const Tt=S.texture,qt=Tt.format,Bt=Tt.type;if(qt!==Jn&&ht.convert(qt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Bt===lo&&(yt.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Bt!==er&&ht.convert(Bt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===Zi&&(Ot.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-z&&O>=0&&O<=S.height-N&&U.readPixels(P,O,z,N,ht.convert(qt),ht.convert(Bt),lt)}finally{const Tt=A!==null?jt.get(A).__webglFramebuffer:null;dt.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(S,P,O=0){const z=Math.pow(2,-O),N=Math.floor(P.image.width*z),lt=Math.floor(P.image.height*z);x.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,S.x,S.y,N,lt),dt.unbindTexture()},this.copyTextureToTexture=function(S,P,O,z=0){const N=P.image.width,lt=P.image.height,pt=ht.convert(O.format),bt=ht.convert(O.type);x.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,N,lt,pt,bt,P.image.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,pt,P.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,S.x,S.y,pt,bt,P.image),z===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,P,O,z,N=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=S.max.x-S.min.x+1,pt=S.max.y-S.min.y+1,bt=S.max.z-S.min.z+1,Tt=ht.convert(z.format),qt=ht.convert(z.type);let Bt;if(z.isData3DTexture)x.setTexture3D(z,0),Bt=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)x.setTexture2DArray(z,0),Bt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const kt=U.getParameter(U.UNPACK_ROW_LENGTH),Ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Sn=U.getParameter(U.UNPACK_SKIP_PIXELS),He=U.getParameter(U.UNPACK_SKIP_ROWS),vi=U.getParameter(U.UNPACK_SKIP_IMAGES),we=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Bt,N,P.x,P.y,P.z,lt,pt,bt,Tt,qt,we.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Bt,N,P.x,P.y,P.z,lt,pt,bt,Tt,we.data)):U.texSubImage3D(Bt,N,P.x,P.y,P.z,lt,pt,bt,Tt,qt,we),U.pixelStorei(U.UNPACK_ROW_LENGTH,kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vi),N===0&&z.generateMipmaps&&U.generateMipmap(Bt),dt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,dt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ql?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?Ur:df}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ur?je:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ib extends Ff{}Ib.prototype.isWebGL1Renderer=!0;class Lb extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Of extends Us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vd=new I,yd=new I,Sd=new Le,sl=new yf,na=new rc;class Db extends qe{constructor(t=new Gn,e=new Of){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)vd.fromBufferAttribute(e,r-1),yd.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=vd.distanceTo(yd);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=s,t.ray.intersectsSphere(na)===!1)return;Sd.copy(r).invert(),sl.copy(t.ray).applyMatrix4(Sd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let y=d,E=w-1;y<E;y+=p){const L=g.getX(y),T=g.getX(y+1);if(l.fromBufferAttribute(m,L),u.fromBufferAttribute(m,T),sl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const W=t.ray.origin.distanceTo(f);W<t.near||W>t.far||e.push({distance:W,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let y=d,E=w-1;y<E;y+=p){if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),sl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bd=new I,xd=new I;class Pb extends Db{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)bd.fromBufferAttribute(e,r),xd.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bd.distanceTo(xd);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new vt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,r=[],s=[],o=[],a=new I,c=new Le;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos($e(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bf extends Bi{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const i=e||new vt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ub extends Bf{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function iu(){let n=0,t=0,e=0,i=0;function r(s,o,a,c){n=s,t=a,e=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const ia=new I,ol=new iu,al=new iu,cl=new iu;class zf extends Bi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new I){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ia.subVectors(r[0],r[1]).add(r[0]),l=ia);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ia.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ol.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),al.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),cl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),al.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),cl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(ol.calc(c),al.calc(c),cl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,c=n*a;return(2*e-2*i+s+o)*c+(-3*e+3*i-2*s-o)*a+s*n+e}function Nb(n,t){const e=1-n;return e*e*t}function Fb(n,t){return 2*(1-n)*n*t}function Ob(n,t){return n*n*t}function io(n,t,e,i){return Nb(n,t)+Fb(n,e)+Ob(n,i)}function Bb(n,t){const e=1-n;return e*e*e*t}function zb(n,t){const e=1-n;return 3*e*e*n*t}function Vb(n,t){return 3*(1-n)*n*n*t}function kb(n,t){return n*n*n*t}function ro(n,t,e,i,r){return Bb(n,t)+zb(n,e)+Vb(n,i)+kb(n,r)}class Gb extends Bi{constructor(t=new vt,e=new vt,i=new vt,r=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new vt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ro(t,r.x,s.x,o.x,a.x),ro(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hb extends Bi{constructor(t=new I,e=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ro(t,r.x,s.x,o.x,a.x),ro(t,r.y,s.y,o.y,a.y),ro(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wb extends Bi{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xb extends Bi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yb extends Bi{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(io(t,r.x,s.x,o.x),io(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Bi{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(io(t,r.x,s.x,o.x),io(t,r.y,s.y,o.y),io(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jb extends Bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Md(a,c.x,l.x,u.x,h.x),Md(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new vt().fromArray(r))}return this}}var $b=Object.freeze({__proto__:null,ArcCurve:Ub,CatmullRomCurve3:zf,CubicBezierCurve:Gb,CubicBezierCurve3:Hb,EllipseCurve:Bf,LineCurve:Wb,LineCurve3:Xb,QuadraticBezierCurve:Yb,QuadraticBezierCurve3:Vf,SplineCurve:jb});class pn extends Gn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(p,2));function w(){const E=new I,L=new I;let T=0;const A=(e-t)/i;for(let W=0;W<=s;W++){const b=[],M=W/s,V=M*(e-t)+t;for(let H=0;H<=r;H++){const tt=H/r,C=tt*c+a,B=Math.sin(C),G=Math.cos(C);L.x=V*B,L.y=-M*i+m,L.z=V*G,h.push(L.x,L.y,L.z),E.set(B,A,G).normalize(),f.push(E.x,E.y,E.z),p.push(tt,1-M),b.push(g++)}_.push(b)}for(let W=0;W<r;W++)for(let b=0;b<s;b++){const M=_[b][W],V=_[b+1][W],H=_[b+1][W+1],tt=_[b][W+1];u.push(M,V,tt),u.push(V,H,tt),T+=6}l.addGroup(d,T,0),d+=T}function y(E){const L=g,T=new vt,A=new I;let W=0;const b=E===!0?t:e,M=E===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const V=g;for(let H=0;H<=r;H++){const C=H/r*c+a,B=Math.cos(C),G=Math.sin(C);A.x=b*G,A.y=m*M,A.z=b*B,h.push(A.x,A.y,A.z),f.push(0,M,0),T.x=B*.5+.5,T.y=G*.5*M+.5,p.push(T.x,T.y),g++}for(let H=0;H<r;H++){const tt=L+H,C=V+H;E===!0?u.push(C,C+1,tt):u.push(C+1,C,tt),W+=3}l.addGroup(d,W,E===!0?1:2),d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn extends Gn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const w=[],y=d/i;let E=0;d===0&&o===0?E=.5/e:d===i&&c===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(r+T*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+T*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+E,1-y),w.push(l++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const y=u[d][w+1],E=u[d][w],L=u[d+1][w],T=u[d+1][w+1];(d!==0||o>0)&&p.push(y,E,T),(d!==i-1||c<Math.PI)&&p.push(E,L,T)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ru extends Gn{constructor(t=new Vf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new vt;let u=new I;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(f,3)),this.setAttribute("uv",new Ue(p,2));function _(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),w(),d()}function m(y){u=t.getPointAt(y/e,u);const E=o.normals[y],L=o.binormals[y];for(let T=0;T<=r;T++){const A=T/r*Math.PI*2,W=Math.sin(A),b=-Math.cos(A);c.x=b*E.x+W*L.x,c.y=b*E.y+W*L.y,c.z=b*E.z+W*L.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let E=1;E<=r;E++){const L=(r+1)*(y-1)+(E-1),T=(r+1)*y+(E-1),A=(r+1)*y+E,W=(r+1)*(y-1)+E;g.push(L,T,W),g.push(T,A,W)}}function w(){for(let y=0;y<=e;y++)for(let E=0;E<=r;E++)l.x=y/e,l.y=E/r,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ru(new $b[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Oe extends Us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kf extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ll=new Le,Ed=new I,wd=new I;class qb{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jb extends qb{constructor(){super(new Cf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kb extends kf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Jb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zb extends kf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qb extends Pb{constructor(t=10,e=10,i=4473924,r=8947848){i=new ee(i),r=new ee(r);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===s?i:r;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new Gn;u.setAttribute("position",new Ue(c,3)),u.setAttribute("color",new Ue(l,3));const h=new Of({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);function tx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gf={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,su=Ye?Symbol.for("react.element"):60103,ou=Ye?Symbol.for("react.portal"):60106,cc=Ye?Symbol.for("react.fragment"):60107,lc=Ye?Symbol.for("react.strict_mode"):60108,uc=Ye?Symbol.for("react.profiler"):60114,hc=Ye?Symbol.for("react.provider"):60109,dc=Ye?Symbol.for("react.context"):60110,au=Ye?Symbol.for("react.async_mode"):60111,fc=Ye?Symbol.for("react.concurrent_mode"):60111,pc=Ye?Symbol.for("react.forward_ref"):60112,mc=Ye?Symbol.for("react.suspense"):60113,ex=Ye?Symbol.for("react.suspense_list"):60120,gc=Ye?Symbol.for("react.memo"):60115,_c=Ye?Symbol.for("react.lazy"):60116,nx=Ye?Symbol.for("react.block"):60121,ix=Ye?Symbol.for("react.fundamental"):60117,rx=Ye?Symbol.for("react.responder"):60118,sx=Ye?Symbol.for("react.scope"):60119;function In(n){if(typeof n=="object"&&n!==null){var t=n.$$typeof;switch(t){case su:switch(n=n.type,n){case au:case fc:case cc:case uc:case lc:case mc:return n;default:switch(n=n&&n.$$typeof,n){case dc:case pc:case _c:case gc:case hc:return n;default:return t}}case ou:return t}}}function Hf(n){return In(n)===fc}he.AsyncMode=au;he.ConcurrentMode=fc;he.ContextConsumer=dc;he.ContextProvider=hc;he.Element=su;he.ForwardRef=pc;he.Fragment=cc;he.Lazy=_c;he.Memo=gc;he.Portal=ou;he.Profiler=uc;he.StrictMode=lc;he.Suspense=mc;he.isAsyncMode=function(n){return Hf(n)||In(n)===au};he.isConcurrentMode=Hf;he.isContextConsumer=function(n){return In(n)===dc};he.isContextProvider=function(n){return In(n)===hc};he.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===su};he.isForwardRef=function(n){return In(n)===pc};he.isFragment=function(n){return In(n)===cc};he.isLazy=function(n){return In(n)===_c};he.isMemo=function(n){return In(n)===gc};he.isPortal=function(n){return In(n)===ou};he.isProfiler=function(n){return In(n)===uc};he.isStrictMode=function(n){return In(n)===lc};he.isSuspense=function(n){return In(n)===mc};he.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===cc||n===fc||n===uc||n===lc||n===mc||n===ex||typeof n=="object"&&n!==null&&(n.$$typeof===_c||n.$$typeof===gc||n.$$typeof===hc||n.$$typeof===dc||n.$$typeof===pc||n.$$typeof===ix||n.$$typeof===rx||n.$$typeof===sx||n.$$typeof===nx)};he.typeOf=In;Gf.exports=he;var ox=Gf.exports,Wf=ox,ax={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xf={};Xf[Wf.ForwardRef]=ax;Xf[Wf.Memo]=cx;var Yf={exports:{}},de={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Td=Object.getOwnPropertySymbols,lx=Object.prototype.hasOwnProperty,ux=Object.prototype.propertyIsEnumerable;function hx(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function dx(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var i=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(i.join("")!=="0123456789")return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(s){r[s]=s}),Object.keys(Object.assign({},r)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var fx=dx()?Object.assign:function(n,t){for(var e,i=hx(n),r,s=1;s<arguments.length;s++){e=Object(arguments[s]);for(var o in e)lx.call(e,o)&&(i[o]=e[o]);if(Td){r=Td(e);for(var a=0;a<r.length;a++)ux.call(e,r[a])&&(i[r[a]]=e[r[a]])}}return i};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu=fx,Zn=typeof Symbol=="function"&&Symbol.for,bo=Zn?Symbol.for("react.element"):60103,px=Zn?Symbol.for("react.portal"):60106,mx=Zn?Symbol.for("react.fragment"):60107,gx=Zn?Symbol.for("react.strict_mode"):60108,_x=Zn?Symbol.for("react.profiler"):60114,vx=Zn?Symbol.for("react.provider"):60109,yx=Zn?Symbol.for("react.context"):60110,Sx=Zn?Symbol.for("react.forward_ref"):60112,bx=Zn?Symbol.for("react.suspense"):60113,xx=Zn?Symbol.for("react.memo"):60115,Mx=Zn?Symbol.for("react.lazy"):60116,Ad=typeof Symbol=="function"&&Symbol.iterator;function xo(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$f={};function Fs(n,t,e){this.props=n,this.context=t,this.refs=$f,this.updater=e||jf}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error(xo(85));this.updater.enqueueSetState(this,n,t,"setState")};Fs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function qf(){}qf.prototype=Fs.prototype;function lu(n,t,e){this.props=n,this.context=t,this.refs=$f,this.updater=e||jf}var uu=lu.prototype=new qf;uu.constructor=lu;cu(uu,Fs.prototype);uu.isPureReactComponent=!0;var hu={current:null},Jf=Object.prototype.hasOwnProperty,Kf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(n,t,e){var i,r={},s=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Jf.call(t,i)&&!Kf.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=e;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];r.children=c}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bo,type:n,key:s,ref:o,props:r,_owner:hu.current}}function Ex(n,t){return{$$typeof:bo,type:n.type,key:t,ref:n.ref,props:n.props,_owner:n._owner}}function du(n){return typeof n=="object"&&n!==null&&n.$$typeof===bo}function wx(n){var t={"=":"=0",":":"=2"};return"$"+(""+n).replace(/[=:]/g,function(e){return t[e]})}var Qf=/\/+/g,Ea=[];function tp(n,t,e,i){if(Ea.length){var r=Ea.pop();return r.result=n,r.keyPrefix=t,r.func=e,r.context=i,r.count=0,r}return{result:n,keyPrefix:t,func:e,context:i,count:0}}function ep(n){n.result=null,n.keyPrefix=null,n.func=null,n.context=null,n.count=0,10>Ea.length&&Ea.push(n)}function Rl(n,t,e,i){var r=typeof n;(r==="undefined"||r==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(r){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case bo:case px:s=!0}}if(s)return e(i,n,t===""?"."+ul(n,0):t),1;if(s=0,t=t===""?".":t+":",Array.isArray(n))for(var o=0;o<n.length;o++){r=n[o];var a=t+ul(r,o);s+=Rl(r,a,e,i)}else if(n===null||typeof n!="object"?a=null:(a=Ad&&n[Ad]||n["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(n=a.call(n),o=0;!(r=n.next()).done;)r=r.value,a=t+ul(r,o++),s+=Rl(r,a,e,i);else if(r==="object")throw e=""+n,Error(xo(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e,""));return s}function Cl(n,t,e){return n==null?0:Rl(n,"",t,e)}function ul(n,t){return typeof n=="object"&&n!==null&&n.key!=null?wx(n.key):t.toString(36)}function Tx(n,t){n.func.call(n.context,t,n.count++)}function Ax(n,t,e){var i=n.result,r=n.keyPrefix;n=n.func.call(n.context,t,n.count++),Array.isArray(n)?Il(n,i,e,function(s){return s}):n!=null&&(du(n)&&(n=Ex(n,r+(!n.key||t&&t.key===n.key?"":(""+n.key).replace(Qf,"$&/")+"/")+e)),i.push(n))}function Il(n,t,e,i,r){var s="";e!=null&&(s=(""+e).replace(Qf,"$&/")+"/"),t=tp(t,s,i,r),Cl(n,Ax,t),ep(t)}var np={current:null};function zi(){var n=np.current;if(n===null)throw Error(xo(321));return n}var Rx={ReactCurrentDispatcher:np,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:hu,IsSomeRendererActing:{current:!1},assign:cu};de.Children={map:function(n,t,e){if(n==null)return n;var i=[];return Il(n,i,null,t,e),i},forEach:function(n,t,e){if(n==null)return n;t=tp(null,null,t,e),Cl(n,Tx,t),ep(t)},count:function(n){return Cl(n,function(){return null},null)},toArray:function(n){var t=[];return Il(n,t,null,function(e){return e}),t},only:function(n){if(!du(n))throw Error(xo(143));return n}};de.Component=Fs;de.Fragment=mx;de.Profiler=_x;de.PureComponent=lu;de.StrictMode=gx;de.Suspense=bx;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;de.cloneElement=function(n,t,e){if(n==null)throw Error(xo(267,n));var i=cu({},n.props),r=n.key,s=n.ref,o=n._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=hu.current),t.key!==void 0&&(r=""+t.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(c in t)Jf.call(t,c)&&!Kf.hasOwnProperty(c)&&(i[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)i.children=e;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}return{$$typeof:bo,type:n.type,key:r,ref:s,props:i,_owner:o}};de.createContext=function(n,t){return t===void 0&&(t=null),n={$$typeof:yx,_calculateChangedBits:t,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null},n.Provider={$$typeof:vx,_context:n},n.Consumer=n};de.createElement=Zf;de.createFactory=function(n){var t=Zf.bind(null,n);return t.type=n,t};de.createRef=function(){return{current:null}};de.forwardRef=function(n){return{$$typeof:Sx,render:n}};de.isValidElement=du;de.lazy=function(n){return{$$typeof:Mx,_ctor:n,_status:-1,_result:null}};de.memo=function(n,t){return{$$typeof:xx,type:n,compare:t===void 0?null:t}};de.useCallback=function(n,t){return zi().useCallback(n,t)};de.useContext=function(n,t){return zi().useContext(n,t)};de.useDebugValue=function(){};de.useEffect=function(n,t){return zi().useEffect(n,t)};de.useImperativeHandle=function(n,t,e){return zi().useImperativeHandle(n,t,e)};de.useLayoutEffect=function(n,t){return zi().useLayoutEffect(n,t)};de.useMemo=function(n,t){return zi().useMemo(n,t)};de.useReducer=function(n,t,e){return zi().useReducer(n,t,e)};de.useRef=function(n){return zi().useRef(n)};de.useState=function(n){return zi().useState(n)};de.version="16.14.0";Yf.exports=de;var Cx=Yf.exports;const Ix=tx(Cx);function wt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(h){o(h)}}function c(u){try{l(i.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,t||[])).next())})}function Rd(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Gt(n){return this instanceof Gt?(this.v=n,this):new Gt(n)}function di(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,h)}}function a(p,g){i[p]&&(r[p]=function(_){return new Promise(function(m,d){s.push([p,_,m,d])>1||c(p,_)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(_){f(s[0][3],_)}}function l(p){p.value instanceof Gt?Promise.resolve(p.value.v).then(u,h):f(s[0][2],p)}function u(p){c("next",p)}function h(p){c("throw",p)}function f(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function ua(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(o){return(e=!e)?{value:Gt(n[r](o)),done:!1}:s?s(o):o}:s}}function Nr(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof Rd=="function"?Rd(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}const Lx=new TextDecoder("utf-8"),Ll=n=>Lx.decode(n),Dx=new TextEncoder,fu=n=>Dx.encode(n),[Dw,Px]=(()=>{const n=()=>{throw new Error("BigInt is not available in this environment")};function t(){throw n()}return t.asIntN=()=>{throw n()},t.asUintN=()=>{throw n()},typeof BigInt<"u"?[BigInt,!0]:[t,!1]})(),[Mo]=(()=>{const n=()=>{throw new Error("BigInt64Array is not available in this environment")};class t{static get BYTES_PER_ELEMENT(){return 8}static of(){throw n()}static from(){throw n()}constructor(){throw n()}}return typeof BigInt64Array<"u"?[BigInt64Array,!0]:[t,!1]})(),[Eo]=(()=>{const n=()=>{throw new Error("BigUint64Array is not available in this environment")};class t{static get BYTES_PER_ELEMENT(){return 8}static of(){throw n()}static from(){throw n()}constructor(){throw n()}}return typeof BigUint64Array<"u"?[BigUint64Array,!0]:[t,!1]})(),Ux=n=>typeof n=="number",ip=n=>typeof n=="boolean",Be=n=>typeof n=="function",gn=n=>n!=null&&Object(n)===n,sr=n=>gn(n)&&Be(n.then),wo=n=>gn(n)&&Be(n[Symbol.iterator]),Os=n=>gn(n)&&Be(n[Symbol.asyncIterator]),Dl=n=>gn(n)&&gn(n.schema),rp=n=>gn(n)&&"done"in n&&"value"in n,sp=n=>gn(n)&&Be(n.stat)&&Ux(n.fd),op=n=>gn(n)&&pu(n.body),vc=n=>"_getDOMStream"in n&&"_getNodeStream"in n,Nx=n=>gn(n)&&Be(n.abort)&&Be(n.getWriter)&&!vc(n),pu=n=>gn(n)&&Be(n.cancel)&&Be(n.getReader)&&!vc(n),Fx=n=>gn(n)&&Be(n.end)&&Be(n.write)&&ip(n.writable)&&!vc(n),ap=n=>gn(n)&&Be(n.read)&&Be(n.pipe)&&ip(n.readable)&&!vc(n),Ox=n=>gn(n)&&Be(n.clear)&&Be(n.bytes)&&Be(n.position)&&Be(n.setPosition)&&Be(n.capacity)&&Be(n.getBufferIdentifier)&&Be(n.createLong),mu=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function Bx(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let o,a,c=0,l=0,u=n.length;++c<u;){if(o=t[l],a=n[c],!o||!a||o.buffer!==a.buffer||a.byteOffset<o.byteOffset){a&&(t[++l]=a);continue}if({byteOffset:e,byteLength:r}=o,{byteOffset:i,byteLength:s}=a,e+r<i||i+s<e){a&&(t[++l]=a);continue}t[l]=new Uint8Array(o.buffer,e,i-e+s)}return t}function Cd(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),o=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(o,e),n}function mi(n,t){const e=Bx(n),i=e.reduce((u,h)=>u+h.byteLength,0);let r,s,o,a=0,c=-1;const l=Math.min(t||Number.POSITIVE_INFINITY,i);for(const u=e.length;++c<u;){if(r=e[c],s=r.subarray(0,Math.min(r.length,l-a)),l<=a+s.length){s.length<r.length?e[c]=r.subarray(s.length):s.length===r.length&&c++,o?Cd(o,s,a):o=s;break}Cd(o||(o=new Uint8Array(l)),s,a),a+=s.length}return[o||new Uint8Array(0),e.slice(c),i-(o?o.byteLength:0)]}function me(n,t){let e=rp(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=fu(e)),e instanceof ArrayBuffer?new n(e):e instanceof mu?new n(e):Ox(e)?me(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const qs=n=>me(Int32Array,n),re=n=>me(Uint8Array,n),Pl=n=>(n.next(),n);function*zx(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof mu?e(t):wo(t)?t:e(t);return yield*Pl(function*(r){let s=null;do s=r.next(yield me(n,s));while(!s.done)}(i[Symbol.iterator]())),new n}const Vx=n=>zx(Uint8Array,n);function cp(n,t){return di(this,arguments,function*(){if(sr(t))return yield Gt(yield Gt(yield*ua(Nr(cp(n,yield Gt(t))))));const i=function(o){return di(this,arguments,function*(){yield yield Gt(yield Gt(o))})},r=function(o){return di(this,arguments,function*(){yield Gt(yield*ua(Nr(Pl(function*(a){let c=null;do c=a.next(yield c==null?void 0:c.value);while(!c.done)}(o[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof mu?i(t):wo(t)?r(t):Os(t)?t:i(t);return yield Gt(yield*ua(Nr(Pl(function(o){return di(this,arguments,function*(){let a=null;do a=yield Gt(o.next(yield yield Gt(me(n,a))));while(!a.done)})}(s[Symbol.asyncIterator]()))))),yield Gt(new n)})}const kx=n=>cp(Uint8Array,n);function gu(n,t,e){if(n!==0){e=e.slice(0,t+1);for(let i=-1;++i<=t;)e[i]+=n}return e}function Gx(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const Un={fromIterable(n){return ra(Hx(n))},fromAsyncIterable(n){return ra(Wx(n))},fromDOMStream(n){return ra(Xx(n))},fromNodeStream(n){return ra(jx(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},ra=n=>(n.next(),n);function*Hx(n){let t,e=!1,i=[],r,s,o,a=0;function c(){return s==="peek"?mi(i,o)[0]:([r,i,a]=mi(i,o),r)}({cmd:s,size:o}=yield null);const l=Vx(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(o-a)?l.next():l.next(o-a),!t&&r.byteLength>0&&(i.push(r),a+=r.byteLength),t||o<=a)do({cmd:s,size:o}=yield c());while(o<a);while(!t)}catch(u){(e=!0)&&typeof l.throw=="function"&&l.throw(u)}finally{e===!1&&typeof l.return=="function"&&l.return(null)}return null}function Wx(n){return di(this,arguments,function*(){let e,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?mi(r,a)[0]:([s,r,c]=mi(r,a),s)}({cmd:o,size:a}=yield yield Gt(null));const u=kx(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(a-c)?yield Gt(u.next()):yield Gt(u.next(a-c)),!e&&s.byteLength>0&&(r.push(s),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield Gt(l()));while(a<c);while(!e)}catch(h){(i=!0)&&typeof u.throw=="function"&&(yield Gt(u.throw(h)))}finally{i===!1&&typeof u.return=="function"&&(yield Gt(u.return(new Uint8Array(0))))}return yield Gt(null)})}function Xx(n){return di(this,arguments,function*(){let e=!1,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?mi(r,a)[0]:([s,r,c]=mi(r,a),s)}({cmd:o,size:a}=yield yield Gt(null));const u=new Yx(n);try{do if({done:e,value:s}=Number.isNaN(a-c)?yield Gt(u.read()):yield Gt(u.read(a-c)),!e&&s.byteLength>0&&(r.push(re(s)),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield Gt(l()));while(a<c);while(!e)}catch(h){(i=!0)&&(yield Gt(u.cancel(h)))}finally{i===!1?yield Gt(u.cancel()):n.locked&&u.releaseLock()}return yield Gt(null)})}class Yx{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return wt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return wt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=re(e)),e})}}const hl=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function jx(n){return di(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,o,a,c=0,l=[],u;function h(){return o==="peek"?mi(l,a)[0]:([u,l,c]=mi(l,a),u)}if({cmd:o,size:a}=yield yield Gt(null),n.isTTY)return yield yield Gt(new Uint8Array(0)),yield Gt(null);try{e[0]=hl(n,"end"),e[1]=hl(n,"error");do{if(e[2]=hl(n,"readable"),[i,s]=yield Gt(Promise.race(e.map(p=>p[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(a-c)?(u=re(n.read(a-c)),u.byteLength<a-c&&(u=re(n.read()))):u=re(n.read()),u.byteLength>0&&(l.push(u),c+=u.byteLength)),r||a<=c)do({cmd:o,size:a}=yield yield Gt(h()));while(a<c)}while(!r)}finally{yield Gt(f(e,i==="error"?s:null))}return yield Gt(null);function f(p,g){return u=l=null,new Promise((_,m)=>{for(const[d,w]of p)n.off(d,w);try{const d=n.destroy;d&&d.call(n,g),g=void 0}catch(d){g=d||g}finally{g!=null?m(g):_()}})}})}var wn;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(wn||(wn={}));var An;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(An||(An={}));var mn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(mn||(mn={}));var Fi;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(Fi||(Fi={}));var se;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(se||(se={}));var or;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(or||(or={}));var oe;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(oe||(oe={}));var D;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth"})(D||(D={}));var Ti;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(Ti||(Ti={}));const $x=void 0;function ho(n){if(n===null)return"null";if(n===$x)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof Mo||n instanceof Eo?`[${[...n].map(t=>ho(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}const qx=Symbol.for("isArrowBigNum");function Qn(n,...t){return t.length===0?Object.setPrototypeOf(me(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}Qn.prototype[qx]=!0;Qn.prototype.toJSON=function(){return`"${Fr(this)}"`};Qn.prototype.valueOf=function(){return lp(this)};Qn.prototype.toString=function(){return Fr(this)};Qn.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return lp(this);case"string":return Fr(this);case"default":return Ul(this)}return Fr(this)};function gs(...n){return Qn.apply(this,n)}function _s(...n){return Qn.apply(this,n)}function fo(...n){return Qn.apply(this,n)}Object.setPrototypeOf(gs.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(_s.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(fo.prototype,Object.create(Uint32Array.prototype));Object.assign(gs.prototype,Qn.prototype,{constructor:gs,signed:!0,TypedArray:Int32Array,BigIntArray:Mo});Object.assign(_s.prototype,Qn.prototype,{constructor:_s,signed:!1,TypedArray:Uint32Array,BigIntArray:Eo});Object.assign(fo.prototype,Qn.prototype,{constructor:fo,signed:!0,TypedArray:Uint32Array,BigIntArray:Eo});function lp(n){const{buffer:t,byteOffset:e,length:i,signed:r}=n,s=new Eo(t,e,i),o=r&&s[s.length-1]&BigInt(1)<<BigInt(63);let a=BigInt(o?1:0),c=BigInt(0);if(o){for(const l of s)a+=~l*(BigInt(1)<<BigInt(32)*c++);a*=BigInt(-1)}else for(const l of s)a+=l*(BigInt(1)<<BigInt(32)*c++);return a}let Fr,Ul;Px?(Ul=n=>n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:dl(n),Fr=n=>n.byteLength===8?`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`:dl(n)):(Fr=dl,Ul=Fr);function dl(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const o=i.length-1;do{for(e[0]=i[s=0];s<o;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class _u{static new(t,e){switch(e){case!0:return new gs(t);case!1:return new _s(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case Mo:return new gs(t)}return t.byteLength===16?new fo(t):new _s(t)}static signed(t){return new gs(t)}static unsigned(t){return new _s(t)}static decimal(t){return new fo(t)}constructor(t,e){return _u.new(t,e)}}var up,hp,dp,fp,pp,mp,gp,_p,vp,yp,Sp,bp,xp,Mp,Ep,wp,Tp,Ap,Rp;class At{static isNull(t){return(t==null?void 0:t.typeId)===D.Null}static isInt(t){return(t==null?void 0:t.typeId)===D.Int}static isFloat(t){return(t==null?void 0:t.typeId)===D.Float}static isBinary(t){return(t==null?void 0:t.typeId)===D.Binary}static isUtf8(t){return(t==null?void 0:t.typeId)===D.Utf8}static isBool(t){return(t==null?void 0:t.typeId)===D.Bool}static isDecimal(t){return(t==null?void 0:t.typeId)===D.Decimal}static isDate(t){return(t==null?void 0:t.typeId)===D.Date}static isTime(t){return(t==null?void 0:t.typeId)===D.Time}static isTimestamp(t){return(t==null?void 0:t.typeId)===D.Timestamp}static isInterval(t){return(t==null?void 0:t.typeId)===D.Interval}static isList(t){return(t==null?void 0:t.typeId)===D.List}static isStruct(t){return(t==null?void 0:t.typeId)===D.Struct}static isUnion(t){return(t==null?void 0:t.typeId)===D.Union}static isFixedSizeBinary(t){return(t==null?void 0:t.typeId)===D.FixedSizeBinary}static isFixedSizeList(t){return(t==null?void 0:t.typeId)===D.FixedSizeList}static isMap(t){return(t==null?void 0:t.typeId)===D.Map}static isDictionary(t){return(t==null?void 0:t.typeId)===D.Dictionary}static isDenseUnion(t){return At.isUnion(t)&&t.mode===An.Dense}static isSparseUnion(t){return At.isUnion(t)&&t.mode===An.Sparse}get typeId(){return D.NONE}}up=Symbol.toStringTag;At[up]=(n=>(n.children=null,n.ArrayType=Array,n[Symbol.toStringTag]="DataType"))(At.prototype);let ar=class extends At{toString(){return"Null"}get typeId(){return D.Null}};hp=Symbol.toStringTag;ar[hp]=(n=>n[Symbol.toStringTag]="Null")(ar.prototype);class cr extends At{constructor(t,e){super(),this.isSigned=t,this.bitWidth=e}get typeId(){return D.Int}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?Mo:Eo}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}dp=Symbol.toStringTag;cr[dp]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(cr.prototype);class po extends cr{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty(po.prototype,"ArrayType",{value:Int32Array});class mo extends At{constructor(t){super(),this.precision=t}get typeId(){return D.Float}get ArrayType(){switch(this.precision){case mn.HALF:return Uint16Array;case mn.SINGLE:return Float32Array;case mn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}fp=Symbol.toStringTag;mo[fp]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(mo.prototype);let wa=class extends At{constructor(){super()}get typeId(){return D.Binary}toString(){return"Binary"}};pp=Symbol.toStringTag;wa[pp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(wa.prototype);let Ta=class extends At{constructor(){super()}get typeId(){return D.Utf8}toString(){return"Utf8"}};mp=Symbol.toStringTag;Ta[mp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(Ta.prototype);let Aa=class extends At{constructor(){super()}get typeId(){return D.Bool}toString(){return"Bool"}};gp=Symbol.toStringTag;Aa[gp]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(Aa.prototype);let Ra=class extends At{constructor(t,e,i=128){super(),this.scale=t,this.precision=e,this.bitWidth=i}get typeId(){return D.Decimal}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}};_p=Symbol.toStringTag;Ra[_p]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(Ra.prototype);class Ca extends At{constructor(t){super(),this.unit=t}get typeId(){return D.Date}toString(){return`Date${(this.unit+1)*32}<${Fi[this.unit]}>`}}vp=Symbol.toStringTag;Ca[vp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Date"))(Ca.prototype);class go extends At{constructor(t,e){super(),this.unit=t,this.bitWidth=e}get typeId(){return D.Time}toString(){return`Time${this.bitWidth}<${se[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return Mo}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}yp=Symbol.toStringTag;go[yp]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(go.prototype);class Ia extends At{constructor(t,e){super(),this.unit=t,this.timezone=e}get typeId(){return D.Timestamp}toString(){return`Timestamp<${se[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}Sp=Symbol.toStringTag;Ia[Sp]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Timestamp"))(Ia.prototype);class La extends At{constructor(t){super(),this.unit=t}get typeId(){return D.Interval}toString(){return`Interval<${or[this.unit]}>`}}bp=Symbol.toStringTag;La[bp]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(La.prototype);let Da=class extends At{constructor(t){super(),this.children=[t]}get typeId(){return D.List}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}};xp=Symbol.toStringTag;Da[xp]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(Da.prototype);class an extends At{constructor(t){super(),this.children=t}get typeId(){return D.Struct}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Mp=Symbol.toStringTag;an[Mp]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(an.prototype);class Pa extends At{constructor(t,e,i){super(),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,o)=>(r[s]=o)&&r||r,Object.create(null))}get typeId(){return D.Union}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}Ep=Symbol.toStringTag;Pa[Ep]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(Pa.prototype);let Ua=class extends At{constructor(t){super(),this.byteWidth=t}get typeId(){return D.FixedSizeBinary}toString(){return`FixedSizeBinary[${this.byteWidth}]`}};wp=Symbol.toStringTag;Ua[wp]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(Ua.prototype);let Na=class extends At{constructor(t,e){super(),this.listSize=t,this.children=[e]}get typeId(){return D.FixedSizeList}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}};Tp=Symbol.toStringTag;Na[Tp]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(Na.prototype);class Fa extends At{constructor(t,e=!1){super(),this.children=[t],this.keysSorted=e}get typeId(){return D.Map}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}Ap=Symbol.toStringTag;Fa[Ap]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(Fa.prototype);const Jx=(n=>()=>++n)(-1);class ws extends At{constructor(t,e,i,r){super(),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?Jx():typeof i=="number"?i:i.low}get typeId(){return D.Dictionary}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}Rp=Symbol.toStringTag;ws[Rp]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(ws.prototype);function Ai(n){const t=n;switch(n.typeId){case D.Decimal:return n.bitWidth/32;case D.Timestamp:return 2;case D.Date:return 1+t.unit;case D.Interval:return 1+t.unit;case D.FixedSizeList:return t.listSize;case D.FixedSizeBinary:return t.byteWidth;default:return 1}}class ne{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return Kx(this,t,e)}getVisitFnByTypeId(t,e=!0){return os(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function Kx(n,t,e=!0){return typeof t=="number"?os(n,t,e):typeof t=="string"&&t in D?os(n,D[t],e):t&&t instanceof At?os(n,Id(t),e):t!=null&&t.type&&t.type instanceof At?os(n,Id(t.type),e):os(n,D.NONE,e)}function os(n,t,e=!0){let i=null;switch(t){case D.Null:i=n.visitNull;break;case D.Bool:i=n.visitBool;break;case D.Int:i=n.visitInt;break;case D.Int8:i=n.visitInt8||n.visitInt;break;case D.Int16:i=n.visitInt16||n.visitInt;break;case D.Int32:i=n.visitInt32||n.visitInt;break;case D.Int64:i=n.visitInt64||n.visitInt;break;case D.Uint8:i=n.visitUint8||n.visitInt;break;case D.Uint16:i=n.visitUint16||n.visitInt;break;case D.Uint32:i=n.visitUint32||n.visitInt;break;case D.Uint64:i=n.visitUint64||n.visitInt;break;case D.Float:i=n.visitFloat;break;case D.Float16:i=n.visitFloat16||n.visitFloat;break;case D.Float32:i=n.visitFloat32||n.visitFloat;break;case D.Float64:i=n.visitFloat64||n.visitFloat;break;case D.Utf8:i=n.visitUtf8;break;case D.Binary:i=n.visitBinary;break;case D.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case D.Date:i=n.visitDate;break;case D.DateDay:i=n.visitDateDay||n.visitDate;break;case D.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case D.Timestamp:i=n.visitTimestamp;break;case D.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case D.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case D.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case D.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case D.Time:i=n.visitTime;break;case D.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case D.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case D.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case D.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case D.Decimal:i=n.visitDecimal;break;case D.List:i=n.visitList;break;case D.Struct:i=n.visitStruct;break;case D.Union:i=n.visitUnion;break;case D.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case D.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case D.Dictionary:i=n.visitDictionary;break;case D.Interval:i=n.visitInterval;break;case D.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case D.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case D.FixedSizeList:i=n.visitFixedSizeList;break;case D.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${D[t]}'`)}function Id(n){switch(n.typeId){case D.Null:return D.Null;case D.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?D.Int8:D.Uint8;case 16:return e?D.Int16:D.Uint16;case 32:return e?D.Int32:D.Uint32;case 64:return e?D.Int64:D.Uint64}return D.Int}case D.Float:switch(n.precision){case mn.HALF:return D.Float16;case mn.SINGLE:return D.Float32;case mn.DOUBLE:return D.Float64}return D.Float;case D.Binary:return D.Binary;case D.Utf8:return D.Utf8;case D.Bool:return D.Bool;case D.Decimal:return D.Decimal;case D.Time:switch(n.unit){case se.SECOND:return D.TimeSecond;case se.MILLISECOND:return D.TimeMillisecond;case se.MICROSECOND:return D.TimeMicrosecond;case se.NANOSECOND:return D.TimeNanosecond}return D.Time;case D.Timestamp:switch(n.unit){case se.SECOND:return D.TimestampSecond;case se.MILLISECOND:return D.TimestampMillisecond;case se.MICROSECOND:return D.TimestampMicrosecond;case se.NANOSECOND:return D.TimestampNanosecond}return D.Timestamp;case D.Date:switch(n.unit){case Fi.DAY:return D.DateDay;case Fi.MILLISECOND:return D.DateMillisecond}return D.Date;case D.Interval:switch(n.unit){case or.DAY_TIME:return D.IntervalDayTime;case or.YEAR_MONTH:return D.IntervalYearMonth}return D.Interval;case D.Map:return D.Map;case D.List:return D.List;case D.Struct:return D.Struct;case D.Union:switch(n.mode){case An.Dense:return D.DenseUnion;case An.Sparse:return D.SparseUnion}return D.Union;case D.FixedSizeBinary:return D.FixedSizeBinary;case D.FixedSizeList:return D.FixedSizeList;case D.Dictionary:return D.Dictionary}throw new Error(`Unrecognized type '${D[n.typeId]}'`)}ne.prototype.visitInt8=null;ne.prototype.visitInt16=null;ne.prototype.visitInt32=null;ne.prototype.visitInt64=null;ne.prototype.visitUint8=null;ne.prototype.visitUint16=null;ne.prototype.visitUint32=null;ne.prototype.visitUint64=null;ne.prototype.visitFloat16=null;ne.prototype.visitFloat32=null;ne.prototype.visitFloat64=null;ne.prototype.visitDateDay=null;ne.prototype.visitDateMillisecond=null;ne.prototype.visitTimestampSecond=null;ne.prototype.visitTimestampMillisecond=null;ne.prototype.visitTimestampMicrosecond=null;ne.prototype.visitTimestampNanosecond=null;ne.prototype.visitTimeSecond=null;ne.prototype.visitTimeMillisecond=null;ne.prototype.visitTimeMicrosecond=null;ne.prototype.visitTimeNanosecond=null;ne.prototype.visitDenseUnion=null;ne.prototype.visitSparseUnion=null;ne.prototype.visitIntervalDayTime=null;ne.prototype.visitIntervalYearMonth=null;const Cp=new Float64Array(1),rs=new Uint32Array(Cp.buffer);function Ip(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function Zx(n){if(n!==n)return 32256;Cp[0]=n;const t=(rs[1]&2147483648)>>16&65535;let e=rs[1]&2146435072,i=0;return e>=1089470464?rs[0]>0?e=31744:(e=(e&2080374784)>>16,i=(rs[1]&1048575)>>10):e<=1056964608?(i=1048576+(rs[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(rs[1]&1048575)+512>>10),t|e|i&65535}class Ut extends ne{}function zt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const Qx=(n,t,e)=>{n[t]=Math.trunc(e/864e5)},vu=(n,t,e)=>{n[t]=Math.trunc(e%4294967296),n[t+1]=Math.trunc(e/4294967296)},tM=(n,t,e)=>{n[t]=Math.trunc(e*1e3%4294967296),n[t+1]=Math.trunc(e*1e3/4294967296)},eM=(n,t,e)=>{n[t]=Math.trunc(e*1e6%4294967296),n[t+1]=Math.trunc(e*1e6/4294967296)},Lp=(n,t,e,i)=>{if(e+1<t.length){const{[e]:r,[e+1]:s}=t;n.set(i.subarray(0,s-r),r)}},nM=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},Vi=({values:n},t,e)=>{n[t]=e},yu=({values:n},t,e)=>{n[t]=e},Dp=({values:n},t,e)=>{n[t]=Zx(e)},iM=(n,t,e)=>{switch(n.type.precision){case mn.HALF:return Dp(n,t,e);case mn.SINGLE:case mn.DOUBLE:return yu(n,t,e)}},Pp=({values:n},t,e)=>{Qx(n,t,e.valueOf())},Up=({values:n},t,e)=>{vu(n,t*2,e.valueOf())},rM=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},sM=({values:n,valueOffsets:t},e,i)=>Lp(n,t,e,i),oM=({values:n,valueOffsets:t},e,i)=>{Lp(n,t,e,fu(i))},aM=(n,t,e)=>{n.type.unit===Fi.DAY?Pp(n,t,e):Up(n,t,e)},Np=({values:n},t,e)=>vu(n,t*2,e/1e3),Fp=({values:n},t,e)=>vu(n,t*2,e),Op=({values:n},t,e)=>tM(n,t*2,e),Bp=({values:n},t,e)=>eM(n,t*2,e),cM=(n,t,e)=>{switch(n.type.unit){case se.SECOND:return Np(n,t,e);case se.MILLISECOND:return Fp(n,t,e);case se.MICROSECOND:return Op(n,t,e);case se.NANOSECOND:return Bp(n,t,e)}},zp=({values:n},t,e)=>{n[t]=e},Vp=({values:n},t,e)=>{n[t]=e},kp=({values:n},t,e)=>{n[t]=e},Gp=({values:n},t,e)=>{n[t]=e},lM=(n,t,e)=>{switch(n.type.unit){case se.SECOND:return zp(n,t,e);case se.MILLISECOND:return Vp(n,t,e);case se.MICROSECOND:return kp(n,t,e);case se.NANOSECOND:return Gp(n,t,e)}},uM=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},hM=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=kn.getVisitFn(i);if(Array.isArray(e))for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e[++o]);else for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e.get(++o))},dM=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=kn.getVisitFn(i);let{[t]:o,[t+1]:a}=r;const c=e instanceof Map?e.entries():Object.entries(e);for(const l of c)if(s(i,o,l),++o>=a)break},fM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),pM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),mM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),gM=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),_M=(n,t,e)=>{const i=n.type.children.map(s=>kn.getVisitFn(s.type)),r=e instanceof Map?mM(t,e):e instanceof ae?pM(t,e):Array.isArray(e)?fM(t,e):gM(t,e);n.type.children.forEach((s,o)=>r(i[o],n.children[o],s,o))},vM=(n,t,e)=>{n.type.mode===An.Dense?Hp(n,t,e):Wp(n,t,e)},Hp=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];kn.visit(r,n.valueOffsets[t],e)},Wp=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];kn.visit(r,t,e)},yM=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},SM=(n,t,e)=>{n.type.unit===or.DAY_TIME?Xp(n,t,e):Yp(n,t,e)},Xp=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},Yp=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},bM=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=kn.getVisitFn(r);if(Array.isArray(e))for(let o=-1,a=t*i;++o<i;)s(r,a+o,e[o]);else for(let o=-1,a=t*i;++o<i;)s(r,a+o,e.get(o))};Ut.prototype.visitBool=zt(nM);Ut.prototype.visitInt=zt(Vi);Ut.prototype.visitInt8=zt(Vi);Ut.prototype.visitInt16=zt(Vi);Ut.prototype.visitInt32=zt(Vi);Ut.prototype.visitInt64=zt(Vi);Ut.prototype.visitUint8=zt(Vi);Ut.prototype.visitUint16=zt(Vi);Ut.prototype.visitUint32=zt(Vi);Ut.prototype.visitUint64=zt(Vi);Ut.prototype.visitFloat=zt(iM);Ut.prototype.visitFloat16=zt(Dp);Ut.prototype.visitFloat32=zt(yu);Ut.prototype.visitFloat64=zt(yu);Ut.prototype.visitUtf8=zt(oM);Ut.prototype.visitBinary=zt(sM);Ut.prototype.visitFixedSizeBinary=zt(rM);Ut.prototype.visitDate=zt(aM);Ut.prototype.visitDateDay=zt(Pp);Ut.prototype.visitDateMillisecond=zt(Up);Ut.prototype.visitTimestamp=zt(cM);Ut.prototype.visitTimestampSecond=zt(Np);Ut.prototype.visitTimestampMillisecond=zt(Fp);Ut.prototype.visitTimestampMicrosecond=zt(Op);Ut.prototype.visitTimestampNanosecond=zt(Bp);Ut.prototype.visitTime=zt(lM);Ut.prototype.visitTimeSecond=zt(zp);Ut.prototype.visitTimeMillisecond=zt(Vp);Ut.prototype.visitTimeMicrosecond=zt(kp);Ut.prototype.visitTimeNanosecond=zt(Gp);Ut.prototype.visitDecimal=zt(uM);Ut.prototype.visitList=zt(hM);Ut.prototype.visitStruct=zt(_M);Ut.prototype.visitUnion=zt(vM);Ut.prototype.visitDenseUnion=zt(Hp);Ut.prototype.visitSparseUnion=zt(Wp);Ut.prototype.visitDictionary=zt(yM);Ut.prototype.visitInterval=zt(SM);Ut.prototype.visitIntervalDayTime=zt(Xp);Ut.prototype.visitIntervalYearMonth=zt(Yp);Ut.prototype.visitFixedSizeList=zt(bM);Ut.prototype.visitMap=zt(dM);const kn=new Ut,jn=Symbol.for("parent"),vs=Symbol.for("rowIndex");class Su{constructor(t,e){return this[jn]=t,this[vs]=e,new Proxy(this,new MM)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[vs],e=this[jn],i=e.type.children,r={};for(let s=-1,o=i.length;++s<o;)r[i[s].name]=_n.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${ho(t)}: ${ho(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new xM(this[jn],this[vs])}}class xM{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,_n.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(Su.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[jn]:{writable:!0,enumerable:!1,configurable:!1,value:null},[vs]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class MM{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[jn].type.children.map(e=>e.name)}has(t,e){return t[jn].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[jn].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[jn].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=_n.visit(t[jn].children[i],t[vs]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[jn].type.children.findIndex(s=>s.name===e);return r!==-1?(kn.visit(t[jn].children[r],t[vs],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Rt extends ne{}function Nt(n){return(t,e)=>t.getValid(e)?n(t,e):null}const EM=(n,t)=>864e5*n[t],bu=(n,t)=>4294967296*n[t+1]+(n[t]>>>0),wM=(n,t)=>4294967296*(n[t+1]/1e3)+(n[t]>>>0)/1e3,TM=(n,t)=>4294967296*(n[t+1]/1e6)+(n[t]>>>0)/1e6,jp=n=>new Date(n),AM=(n,t)=>jp(EM(n,t)),RM=(n,t)=>jp(bu(n,t)),CM=(n,t)=>null,$p=(n,t,e)=>{if(e+1>=t.length)return null;const i=t[e],r=t[e+1];return n.subarray(i,r)},IM=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},qp=({values:n},t)=>AM(n,t),Jp=({values:n},t)=>RM(n,t*2),hr=({stride:n,values:t},e)=>t[n*e],LM=({stride:n,values:t},e)=>Ip(t[n*e]),Kp=({values:n},t)=>n[t],DM=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),PM=({values:n,valueOffsets:t},e)=>$p(n,t,e),UM=({values:n,valueOffsets:t},e)=>{const i=$p(n,t,e);return i!==null?Ll(i):null},NM=({values:n},t)=>n[t],FM=({type:n,values:t},e)=>n.precision!==mn.HALF?t[e]:Ip(t[e]),OM=(n,t)=>n.type.unit===Fi.DAY?qp(n,t):Jp(n,t),Zp=({values:n},t)=>1e3*bu(n,t*2),Qp=({values:n},t)=>bu(n,t*2),tm=({values:n},t)=>wM(n,t*2),em=({values:n},t)=>TM(n,t*2),BM=(n,t)=>{switch(n.type.unit){case se.SECOND:return Zp(n,t);case se.MILLISECOND:return Qp(n,t);case se.MICROSECOND:return tm(n,t);case se.NANOSECOND:return em(n,t)}},nm=({values:n},t)=>n[t],im=({values:n},t)=>n[t],rm=({values:n},t)=>n[t],sm=({values:n},t)=>n[t],zM=(n,t)=>{switch(n.type.unit){case se.SECOND:return nm(n,t);case se.MILLISECOND:return im(n,t);case se.MICROSECOND:return rm(n,t);case se.NANOSECOND:return sm(n,t)}},VM=({values:n,stride:t},e)=>_u.decimal(n.subarray(t*e,t*(e+1))),kM=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:o}=e,c=r[0].slice(s,o-s);return new ae([c])},GM=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,o=i[0];return new xu(o.slice(r,s-r))},HM=(n,t)=>new Su(n,t),WM=(n,t)=>n.type.mode===An.Dense?om(n,t):am(n,t),om=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return _n.visit(i,n.valueOffsets[t])},am=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return _n.visit(i,t)},XM=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},YM=(n,t)=>n.type.unit===or.DAY_TIME?cm(n,t):lm(n,t),cm=({values:n},t)=>n.subarray(2*t,2*(t+1)),lm=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},jM=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new ae([s])};Rt.prototype.visitNull=Nt(CM);Rt.prototype.visitBool=Nt(IM);Rt.prototype.visitInt=Nt(NM);Rt.prototype.visitInt8=Nt(hr);Rt.prototype.visitInt16=Nt(hr);Rt.prototype.visitInt32=Nt(hr);Rt.prototype.visitInt64=Nt(Kp);Rt.prototype.visitUint8=Nt(hr);Rt.prototype.visitUint16=Nt(hr);Rt.prototype.visitUint32=Nt(hr);Rt.prototype.visitUint64=Nt(Kp);Rt.prototype.visitFloat=Nt(FM);Rt.prototype.visitFloat16=Nt(LM);Rt.prototype.visitFloat32=Nt(hr);Rt.prototype.visitFloat64=Nt(hr);Rt.prototype.visitUtf8=Nt(UM);Rt.prototype.visitBinary=Nt(PM);Rt.prototype.visitFixedSizeBinary=Nt(DM);Rt.prototype.visitDate=Nt(OM);Rt.prototype.visitDateDay=Nt(qp);Rt.prototype.visitDateMillisecond=Nt(Jp);Rt.prototype.visitTimestamp=Nt(BM);Rt.prototype.visitTimestampSecond=Nt(Zp);Rt.prototype.visitTimestampMillisecond=Nt(Qp);Rt.prototype.visitTimestampMicrosecond=Nt(tm);Rt.prototype.visitTimestampNanosecond=Nt(em);Rt.prototype.visitTime=Nt(zM);Rt.prototype.visitTimeSecond=Nt(nm);Rt.prototype.visitTimeMillisecond=Nt(im);Rt.prototype.visitTimeMicrosecond=Nt(rm);Rt.prototype.visitTimeNanosecond=Nt(sm);Rt.prototype.visitDecimal=Nt(VM);Rt.prototype.visitList=Nt(kM);Rt.prototype.visitStruct=Nt(HM);Rt.prototype.visitUnion=Nt(WM);Rt.prototype.visitDenseUnion=Nt(om);Rt.prototype.visitSparseUnion=Nt(am);Rt.prototype.visitDictionary=Nt(XM);Rt.prototype.visitInterval=Nt(YM);Rt.prototype.visitIntervalDayTime=Nt(cm);Rt.prototype.visitIntervalYearMonth=Nt(lm);Rt.prototype.visitFixedSizeList=Nt(jM);Rt.prototype.visitMap=Nt(GM);const _n=new Rt,si=Symbol.for("keys"),ys=Symbol.for("vals");class xu{constructor(t){return this[si]=new ae([t.children[0]]).memoize(),this[ys]=t.children[1],new Proxy(this,new qM)}[Symbol.iterator](){return new $M(this[si],this[ys])}get size(){return this[si].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[si],e=this[ys],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=_n.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${ho(t)}: ${ho(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class $M{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),_n.visit(this.vals,t)]})}}class qM{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[si].toArray().map(String)}has(t,e){return t[si].includes(e)}getOwnPropertyDescriptor(t,e){if(t[si].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[si].indexOf(e);if(i!==-1){const r=_n.visit(Reflect.get(t,ys),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[si].indexOf(e);return r!==-1?(kn.visit(Reflect.get(t,ys),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(xu.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[si]:{writable:!0,enumerable:!1,configurable:!1,value:null},[ys]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let Ld;function um(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,o=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),o<0&&(o=(o%r+r)%r),o<s&&(Ld=s,s=o,o=Ld),o>r&&(o=r),i?i(n,s,o):[s,o]}const Dd=n=>n!==n;function Bs(n){if(typeof n!=="object"||n===null)return Dd(n)?Dd:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?Gx(n,e):!1:n instanceof Map?KM(n):Array.isArray(n)?JM(n):n instanceof ae?ZM(n):QM(n,!0)}function JM(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Bs(n[e]);return yc(t)}function KM(n){let t=-1;const e=[];for(const i of n.values())e[++t]=Bs(i);return yc(e)}function ZM(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Bs(n.get(e));return yc(t)}function QM(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=Bs(n[e[r]]);return yc(i,e)}function yc(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return tE(n,e);case Map:return Pd(n,e,e.keys());case xu:case Su:case Object:case void 0:return Pd(n,e,t||Object.keys(e))}return e instanceof ae?eE(n,e):!1}}function tE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function eE(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function Pd(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let o=0;const a=n.length;let c=s.next(),l=i.next(),u=r.next();for(;o<a&&!l.done&&!u.done&&!c.done&&!(l.value!==u.value||!n[o](c.value));++o,l=i.next(),u=r.next(),c=s.next());return o===a&&l.done&&u.done&&c.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function hm(n,t,e,i){return(e&1<<i)!==0}function nE(n,t,e,i){return(e&1<<i)>>i}function Mu(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):Oa(new Eu(e,n,t,null,hm)).subarray(0,i)),r}return e}function Oa(n){const t=[];let e=0,i=0,r=0;for(const o of n)o&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class Eu{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function Nl(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const o of new Eu(n,t,e-t,n,nE))s+=o;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Nl(n,t,r)+Nl(n,i,e)+iE(n,r>>3,i-r>>3)}function iE(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),o=e===void 0?n.byteLength:r+e;for(;o-r>=4;)i+=fl(s.getUint32(r)),r+=4;for(;o-r>=2;)i+=fl(s.getUint16(r)),r+=2;for(;o-r>=1;)i+=fl(s.getUint8(r)),r+=1;return i}function fl(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const rE=-1;class Se{constructor(t,e,i,r,s,o=[],a){this.type=t,this.children=o,this.dictionary=a,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let c;s instanceof Se?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=Ai(t),s&&((c=s[0])&&(this.valueOffsets=c),(c=s[1])&&(this.values=c),(c=s[2])&&(this.nullBitmap=c),(c=s[3])&&(this.typeIds=c))),this.nullable=this._nullCount!==0&&this.nullBitmap&&this.nullBitmap.byteLength>0}get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((o,a)=>o+a.byteLength,t)}get nullCount(){let t=this._nullCount,e;return t<=rE&&(e=this.nullBitmap)&&(this._nullCount=t=this.length-Nl(e,this.offset,this.offset+this.length)),t}getValid(t){if(this.nullable&&this.nullCount>0){const e=this.offset+t;return(this.nullBitmap[e>>3]&1<<e%8)!==0}return!0}setValid(t,e){if(!this.nullable)return e;if(!this.nullBitmap||this.nullBitmap.byteLength<=t>>3){const{nullBitmap:c}=this._changeLengthAndBackfillNullBitmap(this.length);Object.assign(this,{nullBitmap:c,_nullCount:0})}const{nullBitmap:i,offset:r}=this,s=r+t>>3,o=(r+t)%8,a=i[s]>>o&1;return e?a===0&&(i[s]|=1<<o,this._nullCount=this.nullCount+1):a===1&&(i[s]&=~(1<<o),this._nullCount=this.nullCount-1),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,o=this.children){return new Se(t,e,i,r,s,o,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,o=+(this._nullCount===0)-1,a=r===16?i:1,c=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,o,c,s.length===0||this.valueOffsets?s:this._sliceChildren(s,a*t,a*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===D.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(Mu(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[Ti.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:o}=this;return(s=o[Ti.TYPE])&&(o[Ti.TYPE]=s.subarray(t,t+e)),(s=o[Ti.OFFSET])&&(o[Ti.OFFSET]=s.subarray(t,t+e+1))||(s=o[Ti.DATA])&&(o[Ti.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),o}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Se.prototype.children=Object.freeze([]);class so extends ne{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Se(e,i,r,0)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length>>3,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.data),s=re(t.nullBitmap),o=qs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Se(e,i,a,c,[o,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.data),s=re(t.nullBitmap),o=qs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Se(e,i,a,c,[o,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=re(t.nullBitmap),o=qs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Se(e,i,a,c,[o,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=re(t.nullBitmap),{length:o=r.reduce((c,{length:l})=>Math.max(c,l),0),nullCount:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=re(t.nullBitmap),o=me(e.ArrayType,t.typeIds),{["length"]:a=o.length,["nullCount"]:c=t.nullBitmap?-1:0}=t;if(At.isSparseUnion(e))return new Se(e,i,a,c,[void 0,void 0,s,o],r);const l=qs(t.valueOffsets);return new Se(e,i,a,c,[l,void 0,s,o],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.indices.ArrayType,t.data),{["dictionary"]:o=new ae([new so().visit({type:e.dictionary})])}=t,{["length"]:a=s.length,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Se(e,i,a,c,[void 0,s,r],[],o)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=re(t.nullBitmap),s=me(e.ArrayType,t.data),{["length"]:o=s.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new so().visit({type:e.valueType})}=t,s=re(t.nullBitmap),{["length"]:o=r.length/Ai(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Se(e,i,o,a,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new so().visit({type:e.childType})}=t,s=re(t.nullBitmap),o=qs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Se(e,i,a,c,[o,void 0,s],[r])}}function te(n){return new so().visit(n)}class Ud{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function dm(n){return n.reduce((t,e)=>t+e.nullCount,0)}function fm(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function pm(n,t,e,i){const r=[];for(let s=-1,o=n.length;++s<o;){const a=n[s],c=t[s],{length:l}=a;if(c>=i)break;if(e>=c+l)continue;if(c>=e&&c+l<=i){r.push(a);continue}const u=Math.max(0,e-c),h=Math.min(i-c,l);r.push(a.slice(u,h-u))}return r.length===0&&r.push(n[0].slice(0,0)),r}function wu(n,t,e,i){let r=0,s=0,o=t.length-1;do{if(r>=o-1)return e<t[o]?i(n,r,e-t[r]):null;s=r+Math.trunc((o-r)*.5),e<t[s]?o=s:r=s}while(r<o)}function Tu(n,t){return n.getValid(t)}function Ss(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return wu(i,this._offsets,e,t)}}function mm(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const o=wu(s,this._offsets,i,e);return t=void 0,o}}function gm(n){let t;function e(i,r,s){let o=s,a=0,c=0;for(let l=r-1,u=i.length;++l<u;){const h=i[l];if(~(a=n(h,t,o)))return c+a;o=0,c+=h.length}return-1}return function(i,r){t=i;const s=this.data,o=typeof r!="number"?e(s,0,0):wu(s,this._offsets,r,e);return t=void 0,o}}class Ct extends ne{}function sE(n,t){return t===null&&n.length>0?0:-1}function oE(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new Eu(e,n.offset+(t||0),n.length,e,hm)){if(!r)return i;++i}return-1}function Yt(n,t,e){if(t===void 0)return-1;if(t===null)return oE(n,e);const i=_n.getVisitFn(n),r=Bs(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}function _m(n,t,e){const i=_n.getVisitFn(n),r=Bs(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}Ct.prototype.visitNull=sE;Ct.prototype.visitBool=Yt;Ct.prototype.visitInt=Yt;Ct.prototype.visitInt8=Yt;Ct.prototype.visitInt16=Yt;Ct.prototype.visitInt32=Yt;Ct.prototype.visitInt64=Yt;Ct.prototype.visitUint8=Yt;Ct.prototype.visitUint16=Yt;Ct.prototype.visitUint32=Yt;Ct.prototype.visitUint64=Yt;Ct.prototype.visitFloat=Yt;Ct.prototype.visitFloat16=Yt;Ct.prototype.visitFloat32=Yt;Ct.prototype.visitFloat64=Yt;Ct.prototype.visitUtf8=Yt;Ct.prototype.visitBinary=Yt;Ct.prototype.visitFixedSizeBinary=Yt;Ct.prototype.visitDate=Yt;Ct.prototype.visitDateDay=Yt;Ct.prototype.visitDateMillisecond=Yt;Ct.prototype.visitTimestamp=Yt;Ct.prototype.visitTimestampSecond=Yt;Ct.prototype.visitTimestampMillisecond=Yt;Ct.prototype.visitTimestampMicrosecond=Yt;Ct.prototype.visitTimestampNanosecond=Yt;Ct.prototype.visitTime=Yt;Ct.prototype.visitTimeSecond=Yt;Ct.prototype.visitTimeMillisecond=Yt;Ct.prototype.visitTimeMicrosecond=Yt;Ct.prototype.visitTimeNanosecond=Yt;Ct.prototype.visitDecimal=Yt;Ct.prototype.visitList=Yt;Ct.prototype.visitStruct=Yt;Ct.prototype.visitUnion=Yt;Ct.prototype.visitDenseUnion=_m;Ct.prototype.visitSparseUnion=_m;Ct.prototype.visitDictionary=Yt;Ct.prototype.visitInterval=Yt;Ct.prototype.visitIntervalDayTime=Yt;Ct.prototype.visitIntervalYearMonth=Yt;Ct.prototype.visitFixedSizeList=Yt;Ct.prototype.visitMap=Yt;const Ba=new Ct;class It extends ne{}function Ft(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(t.typeId===D.Timestamp||t instanceof cr&&t.bitWidth!==64||t instanceof go&&t.bitWidth!==64||t instanceof mo&&t.precision!==mn.HALF))return new Ud(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new Ud(n.data.length,i=>{const s=n.data[i].length,o=n.slice(e,e+s);return e+=s,new aE(o)})}class aE{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}It.prototype.visitNull=Ft;It.prototype.visitBool=Ft;It.prototype.visitInt=Ft;It.prototype.visitInt8=Ft;It.prototype.visitInt16=Ft;It.prototype.visitInt32=Ft;It.prototype.visitInt64=Ft;It.prototype.visitUint8=Ft;It.prototype.visitUint16=Ft;It.prototype.visitUint32=Ft;It.prototype.visitUint64=Ft;It.prototype.visitFloat=Ft;It.prototype.visitFloat16=Ft;It.prototype.visitFloat32=Ft;It.prototype.visitFloat64=Ft;It.prototype.visitUtf8=Ft;It.prototype.visitBinary=Ft;It.prototype.visitFixedSizeBinary=Ft;It.prototype.visitDate=Ft;It.prototype.visitDateDay=Ft;It.prototype.visitDateMillisecond=Ft;It.prototype.visitTimestamp=Ft;It.prototype.visitTimestampSecond=Ft;It.prototype.visitTimestampMillisecond=Ft;It.prototype.visitTimestampMicrosecond=Ft;It.prototype.visitTimestampNanosecond=Ft;It.prototype.visitTime=Ft;It.prototype.visitTimeSecond=Ft;It.prototype.visitTimeMillisecond=Ft;It.prototype.visitTimeMicrosecond=Ft;It.prototype.visitTimeNanosecond=Ft;It.prototype.visitDecimal=Ft;It.prototype.visitList=Ft;It.prototype.visitStruct=Ft;It.prototype.visitUnion=Ft;It.prototype.visitDenseUnion=Ft;It.prototype.visitSparseUnion=Ft;It.prototype.visitDictionary=Ft;It.prototype.visitInterval=Ft;It.prototype.visitIntervalDayTime=Ft;It.prototype.visitIntervalYearMonth=Ft;It.prototype.visitFixedSizeList=Ft;It.prototype.visitMap=Ft;const Au=new It,cE=(n,t)=>n+t;class dr extends ne{visitNull(t,e){return 0}visitInt(t,e){return t.type.bitWidth/8}visitFloat(t,e){return t.type.ArrayType.BYTES_PER_ELEMENT}visitBool(t,e){return 1/8}visitDecimal(t,e){return t.type.bitWidth/8}visitDate(t,e){return(t.type.unit+1)*4}visitTime(t,e){return t.type.bitWidth/8}visitTimestamp(t,e){return t.type.unit===se.SECOND?4:8}visitInterval(t,e){return(t.type.unit+1)*4}visitStruct(t,e){return t.children.reduce((i,r)=>i+gi.visit(r,e),0)}visitFixedSizeBinary(t,e){return t.type.byteWidth}visitMap(t,e){return 8+t.children.reduce((i,r)=>i+gi.visit(r,e),0)}visitDictionary(t,e){var i;return t.type.indices.bitWidth/8+(((i=t.dictionary)===null||i===void 0?void 0:i.getByteLength(t.values[e]))||0)}}const lE=({valueOffsets:n},t)=>8+(n[t+1]-n[t]),uE=({valueOffsets:n},t)=>8+(n[t+1]-n[t]),hE=({valueOffsets:n,stride:t,children:e},i)=>{const r=e[0],{[i*t]:s}=n,{[i*t+1]:o}=n,a=gi.getVisitFn(r.type),c=r.slice(s,o-s);let l=8;for(let u=-1,h=o-s;++u<h;)l+=a(c,u);return l},dE=({stride:n,children:t},e)=>{const i=t[0],r=i.slice(e*n,n),s=gi.getVisitFn(i.type);let o=0;for(let a=-1,c=r.length;++a<c;)o+=s(r,a);return o},fE=(n,t)=>n.type.mode===An.Dense?vm(n,t):ym(n,t),vm=({type:n,children:t,typeIds:e,valueOffsets:i},r)=>{const s=n.typeIdToChildIndex[e[r]];return 8+gi.visit(t[s],i[r])},ym=({children:n},t)=>4+gi.visitMany(n,n.map(()=>t)).reduce(cE,0);dr.prototype.visitUtf8=lE;dr.prototype.visitBinary=uE;dr.prototype.visitList=hE;dr.prototype.visitFixedSizeList=dE;dr.prototype.visitUnion=fE;dr.prototype.visitDenseUnion=vm;dr.prototype.visitSparseUnion=ym;const gi=new dr;var Sm;const bm={},xm={};class ae{constructor(t){var e,i,r;const s=t[0]instanceof ae?t.flatMap(a=>a.data):t;if(s.length===0||s.some(a=>!(a instanceof Se)))throw new TypeError("Vector constructor expects an Array of Data instances.");const o=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:a,set:c,indexOf:l,byteLength:u}=bm[o.typeId],h=s[0];this.isValid=f=>Tu(h,f),this.get=f=>a(h,f),this.set=(f,p)=>c(h,f,p),this.indexOf=f=>l(h,f),this.getByteLength=f=>u(h,f),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,xm[o.typeId]),this._offsets=fm(s);break}this.data=s,this.type=o,this.stride=Ai(o),this.numChildren=(r=(i=o.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets[this._offsets.length-1]}get byteLength(){return this._byteLength===-1&&(this._byteLength=this.data.reduce((t,e)=>t+e.byteLength,0)),this._byteLength}get nullCount(){return this._nullCount===-1&&(this._nullCount=dm(this.data)),this._nullCount}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${D[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>0}getByteLength(t){return 0}[Symbol.iterator](){return Au.visit(this)}concat(...t){return new ae(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new ae(um(this,t,e,({data:i,_offsets:r},s,o)=>pm(i,r,s,o)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case D.Int:case D.Float:case D.Decimal:case D.Time:case D.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((o,{values:a,length:c})=>(o.array.set(a.subarray(0,c*r),o.offset),o.offset+=c*r,o),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new ae(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return At.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(At.isDictionary(this.type)){const t=new za(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new ae(e)}return new za(this)}unmemoize(){if(At.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new ae(e)}return this}}Sm=Symbol.toStringTag;ae[Sm]=(n=>{n.type=At.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._nullCount=-1,n._byteLength=-1,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(D).map(e=>D[e]).filter(e=>typeof e=="number"&&e!==D.NONE);for(const e of t){const i=_n.getVisitFnByTypeId(e),r=kn.getVisitFnByTypeId(e),s=Ba.getVisitFnByTypeId(e),o=gi.getVisitFnByTypeId(e);bm[e]={get:i,set:r,indexOf:s,byteLength:o},xm[e]=Object.create(n,{isValid:{value:Ss(Tu)},get:{value:Ss(_n.getVisitFnByTypeId(e))},set:{value:mm(kn.getVisitFnByTypeId(e))},indexOf:{value:gm(Ba.getVisitFnByTypeId(e))},getByteLength:{value:Ss(gi.getVisitFnByTypeId(e))}})}return"Vector"})(ae.prototype);class za extends ae{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(o){const a=s[o];if(a!==void 0)return a;const c=e.call(this,o);return s[o]=c,c}}),Object.defineProperty(this,"set",{value(o,a){i.call(this,o,a),s[o]=a}}),Object.defineProperty(this,"slice",{value:(o,a)=>new za(r.call(this,o,a))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new ae(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class Fl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(r),t.pad(4),t.writeInt32(i),t.writeInt64(e),t.offset()}}const pl=2,oi=4,Ii=4,ge=4,qi=new Int32Array(2),Nd=new Float32Array(qi.buffer),Fd=new Float64Array(qi.buffer),sa=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;let Pi=class Ol{constructor(t,e){this.low=t|0,this.high=e|0}static create(t,e){return t==0&&e==0?Ol.ZERO:new Ol(t,e)}toFloat64(){return(this.low>>>0)+this.high*4294967296}equals(t){return this.low==t.low&&this.high==t.high}};Pi.ZERO=new Pi(0,0);var Bl;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Bl||(Bl={}));let Ts=class Mm{constructor(t){this.bytes_=t,this.position_=0}static allocate(t){return new Mm(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return new Pi(this.readInt32(t),this.readInt32(t+4))}readUint64(t){return new Pi(this.readUint32(t),this.readUint32(t+4))}readFloat32(t){return qi[0]=this.readInt32(t),Nd[0]}readFloat64(t){return qi[sa?0:1]=this.readInt32(t),qi[sa?1:0]=this.readInt32(t+4),Fd[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,e.low),this.writeInt32(t+4,e.high)}writeUint64(t,e){this.writeUint32(t,e.low),this.writeUint32(t+4,e.high)}writeFloat32(t,e){Nd[0]=e,this.writeInt32(t,qi[0])}writeFloat64(t,e){Fd[0]=e,this.writeInt32(t,qi[sa?0:1]),this.writeInt32(t+4,qi[sa?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+oi+Ii)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<Ii;e++)t+=String.fromCharCode(this.readInt8(this.position_+oi+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);let r="",s=0;if(t+=oi,e===Bl.UTF8_BYTES)return this.bytes_.subarray(t,t+i);for(;s<i;){let o;const a=this.readUint8(t+s++);if(a<192)o=a;else{const c=this.readUint8(t+s++);if(a<224)o=(a&31)<<6|c&63;else{const l=this.readUint8(t+s++);if(a<240)o=(a&15)<<12|(c&63)<<6|l&63;else{const u=this.readUint8(t+s++);o=(a&7)<<18|(c&63)<<12|(l&63)<<6|u&63}}}o<65536?r+=String.fromCharCode(o):(o-=65536,r+=String.fromCharCode((o>>10)+55296,(o&1023)+56320))}return r}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+oi}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=Ii)throw new Error("FlatBuffers: file identifier must be length "+Ii);for(let e=0;e<Ii;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+oi+e))return!1;return!0}createLong(t,e){return Pi.create(t,e)}createScalarList(t,e){const i=[];for(let r=0;r<e;++r)t(r)!==null&&i.push(t(r));return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},Em=class wm{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null;let e;t?e=t:e=1024,this.bb=Ts.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=wm.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||!e.equals(i))&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Ts.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(oi,0),this.writeInt32(this.offset()-t+oi)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*pl;this.addInt16(s);let o=0;const a=this.space;t:for(e=0;e<this.vtables.length;e++){const c=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(c)){for(let l=pl;l<s;l+=pl)if(this.bb.readInt16(a+l)!=this.bb.readInt16(c+l))continue t;o=this.vtables[e];break}}return o?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,o-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?ge:0;if(e){const s=e;if(this.prep(this.minalign,oi+Ii+r),s.length!=Ii)throw new Error("FlatBuffers: file identifier must be length "+Ii);for(let o=Ii-1;o>=0;o--)this.writeInt8(s.charCodeAt(o))}this.prep(this.minalign,oi+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(this.bb.readInt16(r+e)!=0))throw new Error("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(oi,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(!t)return 0;let e;if(t instanceof Uint8Array)e=t;else{e=[];let i=0;for(;i<t.length;){let r;const s=t.charCodeAt(i++);if(s<55296||s>=56320)r=s;else{const o=t.charCodeAt(i++);r=(s<<10)+o+-56613888}r<128?e.push(r):(r<2048?e.push(r>>6&31|192):(r<65536?e.push(r>>12&15|224):e.push(r>>18&7|240,r>>12&63|128),e.push(r>>6&63|128)),e.push(r&63|128))}}this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length);for(let i=0,r=this.space,s=this.bb.bytes();i<e.length;i++)s[r++]=e[i];return this.endVector()}createLong(t,e){return Pi.create(t,e)}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t),this.endVector()}};class ze{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new ze).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+ge),(e||new ze).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return ze.startKeyValue(t),ze.addKey(t,e),ze.addValue(t,i),ze.endKeyValue(t)}}var As;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(As||(As={}));var Rs;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Rs||(Rs={}));var Va;(function(n){n[n.DenseArray=0]="DenseArray"})(Va||(Va={}));class En{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new En).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+ge),(e||new En).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return En.startInt(t),En.addBitWidth(t,e),En.addIsSigned(t,i),En.endInt(t)}}class Li{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new Li).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+ge),(e||new Li).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new En).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):Va.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,Va.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class Tr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+ge),(e||new Tr).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return Tr.startBinary(t),Tr.endBinary(t)}}class Ar{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new Ar).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+ge),(e||new Ar).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return Ar.startBool(t),Ar.endBool(t)}}var ka;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(ka||(ka={}));let ha=class as{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new as).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+ge),(e||new as).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):ka.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,ka.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return as.startDate(t),as.addUnit(t,e),as.endDate(t)}};class un{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new un).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+ge),(e||new un).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return un.startDecimal(t),un.addPrecision(t,e),un.addScale(t,i),un.addBitWidth(t,r),un.endDecimal(t)}}var Cs;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(Cs||(Cs={}));class ai{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new ai).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+ge),(e||new ai).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return ai.startFixedSizeBinary(t),ai.addByteWidth(t,e),ai.endFixedSizeBinary(t)}}class ci{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new ci).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+ge),(e||new ci).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return ci.startFixedSizeList(t),ci.addListSize(t,e),ci.endFixedSizeList(t)}}var Ga;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(Ga||(Ga={}));class li{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new li).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+ge),(e||new li).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ga.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,Ga.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return li.startFloatingPoint(t),li.addPrecision(t,e),li.endFloatingPoint(t)}}var Ha;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Ha||(Ha={}));class ui{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new ui).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+ge),(e||new ui).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ha.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Ha.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return ui.startInterval(t),ui.addUnit(t,e),ui.endInterval(t)}}class Rr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+ge),(e||new Rr).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return Rr.startList(t),Rr.endList(t)}}let da=class cs{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new cs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+ge),(e||new cs).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return cs.startMap(t),cs.addKeysSorted(t,e),cs.endMap(t)}};class Cr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new Cr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+ge),(e||new Cr).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return Cr.startNull(t),Cr.endNull(t)}}class Ir{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+ge),(e||new Ir).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return Ir.startStruct_(t),Ir.endStruct_(t)}}class On{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new On).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+ge),(e||new On).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Cs.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Cs.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return On.startTime(t),On.addUnit(t,e),On.addBitWidth(t,i),On.endTime(t)}}class Bn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+ge),(e||new Bn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Cs.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,Cs.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return Bn.startTimestamp(t),Bn.addUnit(t,e),Bn.addTimezone(t,i),Bn.endTimestamp(t)}}var Wa;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(Wa||(Wa={}));class hn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+ge),(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Wa.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,Wa.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return hn.startUnion(t),hn.addMode(t,e),hn.addTypeIds(t,i),hn.endUnion(t)}}class Lr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new Lr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+ge),(e||new Lr).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return Lr.startUtf8(t),Lr.endUtf8(t)}}var Te;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList"})(Te||(Te={}));let Pn=class fa{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+ge),(e||new fa).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Te.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new Li).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new fa).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new ze).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Te.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},ni=class wi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new wi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+ge),(e||new wi).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Rs.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Pn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new ze).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):this.bb.createLong(0,0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Rs.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return wi.startSchema(t),wi.addEndianness(t,e),wi.addFields(t,i),wi.addCustomMetadata(t,r),wi.addFeatures(t,s),wi.endSchema(t)}};class Mn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new Mn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+ge),(e||new Mn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):As.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new ni).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Fl).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new Fl).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new ze).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,As.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class ce{constructor(t=[],e,i){this.fields=t||[],this.metadata=e||new Map,i||(i=zl(t)),this.dictionaries=i}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new ce(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new ce(e,this.metadata)}assign(...t){const e=t[0]instanceof ce?t[0]:Array.isArray(t[0])?new ce(t[0]):new ce(t),i=[...this.fields],r=oa(oa(new Map,this.metadata),e.metadata),s=e.fields.filter(a=>{const c=i.findIndex(l=>l.name===a.name);return~c?(i[c]=a.clone({metadata:oa(oa(new Map,i[c].metadata),a.metadata)}))&&!1:!0}),o=zl(s,new Map);return new ce([...i,...s],r,new Map([...this.dictionaries,...o]))}}ce.prototype.fields=null;ce.prototype.metadata=null;ce.prototype.dictionaries=null;class xe{constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new xe(`${e}`,i,r,s)}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],xe.new(e,i,r,s)}}xe.prototype.type=null;xe.prototype.name=null;xe.prototype.nullable=null;xe.prototype.metadata=null;function oa(n,t){return new Map([...n||new Map,...t||new Map])}function zl(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(At.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&zl(s.children,t)}return t}var Od=Pi,pE=Em,mE=Ts;class _o{constructor(t,e=wn.V4,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}static decode(t){t=new mE(re(t));const e=Mn.getRootAsFooter(t),i=ce.decode(e.schema());return new gE(i,e)}static encode(t){const e=new pE,i=ce.encode(e,t.schema);Mn.startRecordBatchesVector(e,t.numRecordBatches);for(const o of[...t.recordBatches()].slice().reverse())lr.encode(e,o);const r=e.endVector();Mn.startDictionariesVector(e,t.numDictionaries);for(const o of[...t.dictionaryBatches()].slice().reverse())lr.encode(e,o);const s=e.endVector();return Mn.startFooter(e),Mn.addSchema(e,i),Mn.addVersion(e,wn.V4),Mn.addRecordBatches(e,r),Mn.addDictionaries(e,s),Mn.finishFooterBuffer(e,Mn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class gE extends _o{constructor(t,e){super(t,e.version()),this._footer=e}get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return lr.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return lr.decode(e)}return null}}class lr{constructor(t,e,i){this.metaDataLength=t,this.offset=typeof i=="number"?i:i.low,this.bodyLength=typeof e=="number"?e:e.low}static decode(t){return new lr(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=new Od(e.offset,0),s=new Od(e.bodyLength,0);return Fl.createBlock(t,r,i,s)}}const Ae=Object.freeze({done:!0,value:void 0});class Bd{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class Ru{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class _E extends Ru{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return wt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ae);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return Un.toDOMStream(this._closedPromiseResolve||this._error?this:this._values)}toNodeStream(t){return Un.toNodeStream(this._closedPromiseResolve||this._error?this:this._values)}throw(t){return wt(this,void 0,void 0,function*(){return yield this.abort(t),Ae})}return(t){return wt(this,void 0,void 0,function*(){return yield this.close(),Ae})}read(t){return wt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return wt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ae)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class pa extends _E{write(t){if((t=re(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Ll(this.toUint8Array(!0)):this.toUint8Array(!1).then(Ll)}toUint8Array(t=!1){return t?mi(this._values)[0]:wt(this,void 0,void 0,function*(){var e,i;const r=[];let s=0;try{for(var o=Nr(this),a;a=yield o.next(),!a.done;){const c=a.value;r.push(c),s+=c.byteLength}}catch(c){e={error:c}}finally{try{a&&!a.done&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return mi(r,s)[0]})}}class Xa{constructor(t){t&&(this.source=new vE(Un.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class Is{constructor(t){t instanceof Is?this.source=t.source:t instanceof pa?this.source=new Sr(Un.fromAsyncIterable(t)):ap(t)?this.source=new Sr(Un.fromNodeStream(t)):pu(t)?this.source=new Sr(Un.fromDOMStream(t)):op(t)?this.source=new Sr(Un.fromDOMStream(t.body)):wo(t)?this.source=new Sr(Un.fromIterable(t)):sr(t)?this.source=new Sr(Un.fromAsyncIterable(t)):Os(t)&&(this.source=new Sr(Un.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class vE{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ae)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ae)}}class Sr{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return wt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return wt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return wt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t,e="read"){return wt(this,void 0,void 0,function*(){return yield this.source.next({cmd:e,size:t})})}throw(t){return wt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Ae;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return wt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Ae;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class zd extends Xa{constructor(t,e){super(),this.position=0,this.buffer=re(t),this.size=typeof e>"u"?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class Ya extends Is{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=wt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return wt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return wt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return wt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,o=0,a=0;const c=Math.min(i,s+Math.min(i-s,t)),l=new Uint8Array(Math.max(0,(this.position=c)-s));for(;(s+=a)<c&&(o+=a)<l.byteLength;)({bytesRead:a}=yield e.read(l,o,l.byteLength-o,s));return l}return null})}readAt(t,e){return wt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),o=new Uint8Array(s-t);return(yield i.read(o,0,e,t)).buffer}return new Uint8Array(e)})}close(){return wt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return wt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return wt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const yE=65536;function ds(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const Ls=8,Cu=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class Tm{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?yE:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${ds(this.buffer[1])} ${ds(this.buffer[0])}`}}class ue extends Tm{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return ue.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return ue.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new ue(e);for(let s=0;s<i;){const o=Ls<i-s?Ls:i-s,a=new ue(new Uint32Array([Number.parseInt(t.slice(s,s+o),10),0])),c=new ue(new Uint32Array([Cu[o],0]));r.times(c),r.plus(a),s+=o}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)ue.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new ue(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new ue(new Uint32Array(t.buffer)).plus(e)}}class ln extends Tm{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return ln.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return ln.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new ln(e);for(let o=i?1:0;o<r;){const a=Ls<r-o?Ls:r-o,c=new ln(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0])),l=new ln(new Uint32Array([Cu[a],0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)ln.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new ln(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new ln(new Uint32Array(t.buffer)).plus(e)}}class ii{constructor(t){this.buffer=t}high(){return new ln(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new ln(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new ue(new Uint32Array([this.buffer[3],0])),i=new ue(new Uint32Array([this.buffer[2],0])),r=new ue(new Uint32Array([this.buffer[1],0])),s=new ue(new Uint32Array([this.buffer[0],0])),o=new ue(new Uint32Array([t.buffer[3],0])),a=new ue(new Uint32Array([t.buffer[2],0])),c=new ue(new Uint32Array([t.buffer[1],0])),l=new ue(new Uint32Array([t.buffer[0],0]));let u=ue.multiply(s,l);this.buffer[0]=u.low();const h=new ue(new Uint32Array([u.high(),0]));return u=ue.multiply(r,l),h.plus(u),u=ue.multiply(s,c),h.plus(u),this.buffer[1]=h.low(),this.buffer[3]=h.lessThan(u)?1:0,this.buffer[2]=h.high(),new ue(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(ue.multiply(i,l)).plus(ue.multiply(r,c)).plus(ue.multiply(s,a)),this.buffer[3]+=ue.multiply(e,l).plus(ue.multiply(i,c)).plus(ue.multiply(r,a)).plus(ue.multiply(s,o)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${ds(this.buffer[3])} ${ds(this.buffer[2])} ${ds(this.buffer[1])} ${ds(this.buffer[0])}`}static multiply(t,e){return new ii(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new ii(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return ii.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return ii.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new ii(e);for(let o=i?1:0;o<r;){const a=Ls<r-o?Ls:r-o,c=new ii(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0,0,0])),l=new ii(new Uint32Array([Cu[a],0,0,0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)ii.from(t[i],new Uint32Array(e.buffer,e.byteOffset+4*4*i,4));return e}}class Am extends ne{constructor(t,e,i,r){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r}visit(t){return super.visit(t instanceof xe?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return te({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t){return t.mode===An.Sparse?this.visitSparseUnion(t):this.visitDenseUnion(t)}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return te({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class SE extends Am{constructor(t,e,i,r){super(new Uint8Array(0),e,i,r),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):Oa(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return me(Uint8Array,me(Int32Array,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return me(Uint8Array,me(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return At.isTimestamp(t)||(At.isInt(t)||At.isTime(t))&&t.bitWidth===64||At.isDate(t)&&t.unit===Fi.MILLISECOND?me(Uint8Array,ln.convertArray(i[e])):At.isDecimal(t)?me(Uint8Array,ii.convertArray(i[e])):At.isBinary(t)||At.isFixedSizeBinary(t)?bE(i[e]):At.isBool(t)?Oa(i[e]):At.isUtf8(t)?fu(i[e].join("")):me(Uint8Array,me(t.ArrayType,i[e].map(r=>+r)))}}function bE(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Lt extends ne{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function yn(n,t){return t instanceof n.constructor}function To(n,t){return n===t||yn(n,t)}function ki(n,t){return n===t||yn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Sc(n,t){return n===t||yn(n,t)&&n.precision===t.precision}function xE(n,t){return n===t||yn(n,t)&&n.byteWidth===t.byteWidth}function Iu(n,t){return n===t||yn(n,t)&&n.unit===t.unit}function Ao(n,t){return n===t||yn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function Ro(n,t){return n===t||yn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function ME(n,t){return n===t||yn(n,t)&&n.children.length===t.children.length&&ur.compareManyFields(n.children,t.children)}function EE(n,t){return n===t||yn(n,t)&&n.children.length===t.children.length&&ur.compareManyFields(n.children,t.children)}function Lu(n,t){return n===t||yn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&ur.compareManyFields(n.children,t.children)}function wE(n,t){return n===t||yn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&ur.visit(n.indices,t.indices)&&ur.visit(n.dictionary,t.dictionary)}function Du(n,t){return n===t||yn(n,t)&&n.unit===t.unit}function TE(n,t){return n===t||yn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&ur.compareManyFields(n.children,t.children)}function AE(n,t){return n===t||yn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&ur.compareManyFields(n.children,t.children)}Lt.prototype.visitNull=To;Lt.prototype.visitBool=To;Lt.prototype.visitInt=ki;Lt.prototype.visitInt8=ki;Lt.prototype.visitInt16=ki;Lt.prototype.visitInt32=ki;Lt.prototype.visitInt64=ki;Lt.prototype.visitUint8=ki;Lt.prototype.visitUint16=ki;Lt.prototype.visitUint32=ki;Lt.prototype.visitUint64=ki;Lt.prototype.visitFloat=Sc;Lt.prototype.visitFloat16=Sc;Lt.prototype.visitFloat32=Sc;Lt.prototype.visitFloat64=Sc;Lt.prototype.visitUtf8=To;Lt.prototype.visitBinary=To;Lt.prototype.visitFixedSizeBinary=xE;Lt.prototype.visitDate=Iu;Lt.prototype.visitDateDay=Iu;Lt.prototype.visitDateMillisecond=Iu;Lt.prototype.visitTimestamp=Ao;Lt.prototype.visitTimestampSecond=Ao;Lt.prototype.visitTimestampMillisecond=Ao;Lt.prototype.visitTimestampMicrosecond=Ao;Lt.prototype.visitTimestampNanosecond=Ao;Lt.prototype.visitTime=Ro;Lt.prototype.visitTimeSecond=Ro;Lt.prototype.visitTimeMillisecond=Ro;Lt.prototype.visitTimeMicrosecond=Ro;Lt.prototype.visitTimeNanosecond=Ro;Lt.prototype.visitDecimal=To;Lt.prototype.visitList=ME;Lt.prototype.visitStruct=EE;Lt.prototype.visitUnion=Lu;Lt.prototype.visitDenseUnion=Lu;Lt.prototype.visitSparseUnion=Lu;Lt.prototype.visitDictionary=wE;Lt.prototype.visitInterval=Du;Lt.prototype.visitIntervalDayTime=Du;Lt.prototype.visitIntervalYearMonth=Du;Lt.prototype.visitFixedSizeList=TE;Lt.prototype.visitMap=AE;const ur=new Lt;function Vl(n,t){return ur.compareSchemas(n,t)}function ml(n,t){return RE(n,t.map(e=>e.data.concat()))}function RE(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((h,f)=>Math.max(h,f.length),0)};let s=0,o=0,a=-1;const c=t.length;let l,u=[];for(;r.numBatches-- >0;){for(o=Number.POSITIVE_INFINITY,a=-1;++a<c;)u[a]=l=t[a].shift(),o=Math.min(o,l?l.length:o);Number.isFinite(o)&&(u=CE(e,o,u,t,r),o>0&&(i[s++]=te({type:new an(e),length:o,nullCount:0,children:u.slice()})))}return[n=n.assign(e),i.map(h=>new dn(n,h))]}function CE(n,t,e,i,r){var s;const o=(t+63&-64)>>3;for(let a=-1,c=i.length;++a<c;){const l=e[a],u=l==null?void 0:l.length;if(u>=t)u===t?e[a]=l:(e[a]=l.slice(0,t),r.numBatches=Math.max(r.numBatches,i[a].unshift(l.slice(t,u-t))));else{const h=n[a];n[a]=h.clone({nullable:!0}),e[a]=(s=l==null?void 0:l._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:te({type:h.type,length:t,nullCount:t,nullBitmap:new Uint8Array(o)})}}return e}var Rm;class on{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new ce([]),this._offsets=[0],this;let r,s;t[0]instanceof ce&&(r=t.shift()),t[t.length-1]instanceof Uint32Array&&(s=t.pop());const o=c=>{if(c){if(c instanceof dn)return[c];if(c instanceof on)return c.batches;if(c instanceof Se){if(c.type instanceof an)return[new dn(new ce(c.type.children),c)]}else{if(Array.isArray(c))return c.flatMap(l=>o(l));if(typeof c[Symbol.iterator]=="function")return[...c].flatMap(l=>o(l));if(typeof c=="object"){const l=Object.keys(c),u=l.map(p=>new ae([c[p]])),h=new ce(l.map((p,g)=>new xe(String(p),u[g].type))),[,f]=ml(h,u);return f.length===0?[new dn(c)]:f}}}return[]},a=t.flatMap(c=>o(c));if(r=(i=r??((e=a[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new ce([]),!(r instanceof ce))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const c of a){if(!(c instanceof dn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Vl(r,c.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=a,this._offsets=s??fm(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=dm(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}set(t,e){}indexOf(t,e){return-1}getByteLength(t){return 0}[Symbol.iterator](){return this.batches.length>0?Au.visit(new ae(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new on(e,i.map(r=>new dn(e,r)))}slice(t,e){const i=this.schema;[t,e]=um({length:this.numRows},t,e);const r=pm(this.data,this._offsets,t,e);return new on(i,r.map(s=>new dn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=te({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new ae(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new ae([te({type:new ar,length:this.numRows})]));const s=i.fields.slice(),o=s[t].clone({type:e.type}),a=this.schema.fields.map((c,l)=>this.getChildAt(l));[s[t],a[t]]=[o,e],[i,r]=ml(i,a)}return new on(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new on(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((a,c,l)=>{const[u,h]=a,f=e.findIndex(p=>p.name===c.name);return~f?h[f]=l:u.push(l),a},[[],[]]),s=this.schema.assign(t.schema),o=[...e.map((a,c)=>[c,r[c]]).map(([a,c])=>c===void 0?this.getChildAt(a):t.getChildAt(c)),...i.map(a=>t.getChildAt(a))].filter(Boolean);return new on(...ml(s,o))}}Rm=Symbol.toStringTag;on[Rm]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=Ss(Tu),n.get=Ss(_n.getVisitFn(D.Struct)),n.set=mm(kn.getVisitFn(D.Struct)),n.indexOf=gm(Ba.getVisitFn(D.Struct)),n.getByteLength=Ss(gi.getVisitFn(D.Struct)),"Table"))(on.prototype);var Cm;let dn=class Zs{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof ce))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=te({nullCount:0,type:new an(this.schema.fields),children:this.schema.fields.map(e=>te({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Se))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=Vd(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((c,l,u)=>(c.children[u]=e[l],c.length=Math.max(c.length,e[l].length),c.fields[u]=xe.new({name:l,type:e[l].type,nullable:!0}),c),{length:0,fields:new Array,children:new Array}),o=new ce(i),a=te({type:new an(i),length:s,children:r,nullCount:0});[this.schema,this.data]=Vd(o,a.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=Im(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return _n.visit(this.data,t)}set(t,e){return kn.visit(this.data,t,e)}indexOf(t,e){return Ba.visit(this.data,t,e)}getByteLength(t){return gi.visit(this.data,t)}[Symbol.iterator](){return Au.visit(new ae([this.data]))}toArray(){return[...this]}concat(...t){return new on(this.schema,[this,...t])}slice(t,e){const[i]=new ae([this.data]).slice(t,e).data;return new Zs(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new ae([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new ae([te({type:new ar,length:this.numRows})]));const s=i.fields.slice(),o=r.children.slice(),a=s[t].clone({type:e.type});[s[t],o[t]]=[a,e.data[0]],i=new ce(s,new Map(this.schema.metadata)),r=te({type:new an(s),children:o})}return new Zs(i,r)}select(t){const e=this.schema.select(t),i=new an(e.fields),r=[];for(const s of t){const o=this.schema.fields.findIndex(a=>a.name===s);~o&&(r[o]=this.data.children[o])}return new Zs(e,te({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=te({type:new an(e.fields),length:this.numRows,children:i});return new Zs(e,r)}};Cm=Symbol.toStringTag;dn[Cm]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(dn.prototype);function Vd(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],o=(e+63&-64)>>3;for(const[a,c]of n.fields.entries()){const l=t[a];(!l||l.length!==e)&&(r[a]=c.clone({nullable:!0}),s[a]=(i=l==null?void 0:l._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:te({type:c.type,length:e,nullCount:e,nullBitmap:new Uint8Array(o)}))}return[n.assign(r),te({type:new an(r),length:e,children:s})]}function Im(n,t,e=new Map){for(let i=-1,r=n.length;++i<r;){const o=n[i].type,a=t[i];if(At.isDictionary(o)){if(!e.has(o.id))a.dictionary&&e.set(o.id,a.dictionary);else if(e.get(o.id)!==a.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}o.children&&o.children.length>0&&Im(o.children,a.children,e)}return e}class Pu extends dn{constructor(t){const e=t.fields.map(r=>te({type:r.type})),i=te({type:new an(t.fields),nullCount:0,children:e});super(t,i)}}var ja;(function(n){n[n.BUFFER=0]="BUFFER"})(ja||(ja={}));var $a;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})($a||($a={}));class Ji{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new Ji).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+ge),(e||new Ji).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):$a.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):ja.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,$a.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,ja.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return Ji.startBodyCompression(t),Ji.addCodec(t,e),Ji.addMethod(t,i),Ji.endBodyCompression(t)}}class Lm{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(i),t.writeInt64(e),t.offset()}}let Dm=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(i),t.writeInt64(e),t.offset()}},Ri=class kl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new kl).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+ge),(e||new kl).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Dm).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Lm).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new Ji).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},ls=class Gl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Gl).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+ge),(e||new Gl).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ri).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var qa;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(qa||(qa={}));let $i=class ei{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new ei).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+ge),(e||new ei).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):As.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):qa.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new ze).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,As.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,qa.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,t.createLong(0,0))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,o){return ei.startMessage(t),ei.addVersion(t,e),ei.addHeaderType(t,i),ei.addHeader(t,r),ei.addBodyLength(t,s),ei.addCustomMetadata(t,o),ei.endMessage(t)}};var IE=Pi;class LE extends ne{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Cr.startNull(e),Cr.endNull(e)}visitInt(t,e){return En.startInt(e),En.addBitWidth(e,t.bitWidth),En.addIsSigned(e,t.isSigned),En.endInt(e)}visitFloat(t,e){return li.startFloatingPoint(e),li.addPrecision(e,t.precision),li.endFloatingPoint(e)}visitBinary(t,e){return Tr.startBinary(e),Tr.endBinary(e)}visitBool(t,e){return Ar.startBool(e),Ar.endBool(e)}visitUtf8(t,e){return Lr.startUtf8(e),Lr.endUtf8(e)}visitDecimal(t,e){return un.startDecimal(e),un.addScale(e,t.scale),un.addPrecision(e,t.precision),un.addBitWidth(e,t.bitWidth),un.endDecimal(e)}visitDate(t,e){return ha.startDate(e),ha.addUnit(e,t.unit),ha.endDate(e)}visitTime(t,e){return On.startTime(e),On.addUnit(e,t.unit),On.addBitWidth(e,t.bitWidth),On.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return Bn.startTimestamp(e),Bn.addUnit(e,t.unit),i!==void 0&&Bn.addTimezone(e,i),Bn.endTimestamp(e)}visitInterval(t,e){return ui.startInterval(e),ui.addUnit(e,t.unit),ui.endInterval(e)}visitList(t,e){return Rr.startList(e),Rr.endList(e)}visitStruct(t,e){return Ir.startStruct_(e),Ir.endStruct_(e)}visitUnion(t,e){hn.startTypeIdsVector(e,t.typeIds.length);const i=hn.createTypeIdsVector(e,t.typeIds);return hn.startUnion(e),hn.addMode(e,t.mode),hn.addTypeIds(e,i),hn.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return Li.startDictionaryEncoding(e),Li.addId(e,new IE(t.id,0)),Li.addIsOrdered(e,t.isOrdered),i!==void 0&&Li.addIndexType(e,i),Li.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return ai.startFixedSizeBinary(e),ai.addByteWidth(e,t.byteWidth),ai.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return ci.startFixedSizeList(e),ci.addListSize(e,t.listSize),ci.endFixedSizeList(e)}visitMap(t,e){return da.startMap(e),da.addKeysSorted(e,t.keysSorted),da.endMap(e)}}const gl=new LE;function DE(n,t=new Map){return new ce(UE(n,t),ma(n.customMetadata),t)}function Pm(n){return new Rn(n.count,Um(n.columns),Nm(n.columns))}function PE(n){return new _i(Pm(n.data),n.id,n.isDelta)}function UE(n,t){return(n.fields||[]).filter(Boolean).map(e=>xe.fromJSON(e,t))}function kd(n,t){return(n.children||[]).filter(Boolean).map(e=>xe.fromJSON(e,t))}function Um(n){return(n||[]).reduce((t,e)=>[...t,new Vr(e.count,NE(e.VALIDITY)),...Um(e.children)],[])}function Nm(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new fi(t.length,r.VALIDITY.length)),r.TYPE&&t.push(new fi(t.length,r.TYPE.length)),r.OFFSET&&t.push(new fi(t.length,r.OFFSET.length)),r.DATA&&t.push(new fi(t.length,r.DATA.length)),t=Nm(r.children,t)}return t}function NE(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function FE(n,t){let e,i,r,s,o,a;return!t||!(s=n.dictionary)?(o=Hd(n,kd(n,t)),r=new xe(n.name,o,n.nullable,ma(n.customMetadata))):t.has(e=s.id)?(i=(i=s.indexType)?Gd(i):new po,a=new ws(t.get(e),i,e,s.isOrdered),r=new xe(n.name,a,n.nullable,ma(n.customMetadata))):(i=(i=s.indexType)?Gd(i):new po,t.set(e,o=Hd(n,kd(n,t))),a=new ws(o,i,e,s.isOrdered),r=new xe(n.name,a,n.nullable,ma(n.customMetadata))),r||null}function ma(n){return new Map(Object.entries(n||{}))}function Gd(n){return new cr(n.isSigned,n.bitWidth)}function Hd(n,t){const e=n.type.name;switch(e){case"NONE":return new ar;case"null":return new ar;case"binary":return new wa;case"utf8":return new Ta;case"bool":return new Aa;case"list":return new Da((t||[])[0]);case"struct":return new an(t||[]);case"struct_":return new an(t||[])}switch(e){case"int":{const i=n.type;return new cr(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new mo(mn[i.precision])}case"decimal":{const i=n.type;return new Ra(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new Ca(Fi[i.unit])}case"time":{const i=n.type;return new go(se[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new Ia(se[i.unit],i.timezone)}case"interval":{const i=n.type;return new La(or[i.unit])}case"union":{const i=n.type;return new Pa(An[i.mode],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new Ua(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new Na(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new Fa((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var zr=Pi,OE=Em,BE=Ts;class cn{constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=typeof t=="number"?t:t.low}static fromJSON(t,e){const i=new cn(0,wn.V4,e);return i._createHeader=zE(t,e),i}static decode(t){t=new BE(re(t));const e=$i.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),o=new cn(i,r,s);return o._createHeader=VE(e,s),o}static encode(t){const e=new OE;let i=-1;return t.isSchema()?i=ce.encode(e,t.header()):t.isRecordBatch()?i=Rn.encode(e,t.header()):t.isDictionaryBatch()&&(i=_i.encode(e,t.header())),$i.startMessage(e),$i.addVersion(e,wn.V4),$i.addHeader(e,i),$i.addHeaderType(e,t.headerType),$i.addBodyLength(e,new zr(t.bodyLength,0)),$i.finishMessageBuffer(e,$i.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof ce)return new cn(0,wn.V4,oe.Schema,t);if(t instanceof Rn)return new cn(e,wn.V4,oe.RecordBatch,t);if(t instanceof _i)return new cn(e,wn.V4,oe.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===oe.Schema}isRecordBatch(){return this.headerType===oe.RecordBatch}isDictionaryBatch(){return this.headerType===oe.DictionaryBatch}}class Rn{constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=typeof t=="number"?t:t.low}get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}}class _i{constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=typeof e=="number"?e:e.low}get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}}class fi{constructor(t,e){this.offset=typeof t=="number"?t:t.low,this.length=typeof e=="number"?e:e.low}}class Vr{constructor(t,e){this.length=typeof t=="number"?t:t.low,this.nullCount=typeof e=="number"?e:e.low}}function zE(n,t){return()=>{switch(t){case oe.Schema:return ce.fromJSON(n);case oe.RecordBatch:return Rn.fromJSON(n);case oe.DictionaryBatch:return _i.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${oe[t]}, type: ${t} }`)}}function VE(n,t){return()=>{switch(t){case oe.Schema:return ce.decode(n.header(new ni));case oe.RecordBatch:return Rn.decode(n.header(new Ri),n.version());case oe.DictionaryBatch:return _i.decode(n.header(new ls),n.version())}throw new Error(`Unrecognized Message type: { name: ${oe[t]}, type: ${t} }`)}}xe.encode=KE;xe.decode=qE;xe.fromJSON=FE;ce.encode=JE;ce.decode=kE;ce.fromJSON=DE;Rn.encode=ZE;Rn.decode=GE;Rn.fromJSON=Pm;_i.encode=QE;_i.decode=HE;_i.fromJSON=PE;Vr.encode=tw;Vr.decode=XE;fi.encode=ew;fi.decode=WE;function kE(n,t=new Map){const e=$E(n,t);return new ce(e,ga(n),t)}function GE(n,t=wn.V4){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new Rn(n.length(),YE(n),jE(n,t))}function HE(n,t=wn.V4){return new _i(Rn.decode(n.data(),t),n.id(),n.isDelta())}function WE(n){return new fi(n.offset(),n.length())}function XE(n){return new Vr(n.length(),n.nullCount())}function YE(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Vr.decode(e));return t}function jE(n,t){const e=[];for(let i,r=-1,s=-1,o=n.buffersLength();++r<o;)(i=n.buffers(r))&&(t<wn.V4&&(i.bb_pos+=8*(r+1)),e[++s]=fi.decode(i));return e}function $E(n,t){const e=[];for(let i,r=-1,s=-1,o=n.fieldsLength();++r<o;)(i=n.fields(r))&&(e[++s]=xe.decode(i,t));return e}function Wd(n,t){const e=[];for(let i,r=-1,s=-1,o=n.childrenLength();++r<o;)(i=n.children(r))&&(e[++s]=xe.decode(i,t));return e}function qE(n,t){let e,i,r,s,o,a;return!t||!(a=n.dictionary())?(r=Yd(n,Wd(n,t)),i=new xe(n.name(),r,n.nullable(),ga(n))):t.has(e=a.id().low)?(s=(s=a.indexType())?Xd(s):new po,o=new ws(t.get(e),s,e,a.isOrdered()),i=new xe(n.name(),o,n.nullable(),ga(n))):(s=(s=a.indexType())?Xd(s):new po,t.set(e,r=Yd(n,Wd(n,t))),o=new ws(r,s,e,a.isOrdered()),i=new xe(n.name(),o,n.nullable(),ga(n))),i||null}function ga(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function Xd(n){return new cr(n.isSigned(),n.bitWidth())}function Yd(n,t){const e=n.typeType();switch(e){case Te.NONE:return new ar;case Te.Null:return new ar;case Te.Binary:return new wa;case Te.Utf8:return new Ta;case Te.Bool:return new Aa;case Te.List:return new Da((t||[])[0]);case Te.Struct_:return new an(t||[])}switch(e){case Te.Int:{const i=n.type(new En);return new cr(i.isSigned(),i.bitWidth())}case Te.FloatingPoint:{const i=n.type(new li);return new mo(i.precision())}case Te.Decimal:{const i=n.type(new un);return new Ra(i.scale(),i.precision(),i.bitWidth())}case Te.Date:{const i=n.type(new ha);return new Ca(i.unit())}case Te.Time:{const i=n.type(new On);return new go(i.unit(),i.bitWidth())}case Te.Timestamp:{const i=n.type(new Bn);return new Ia(i.unit(),i.timezone())}case Te.Interval:{const i=n.type(new ui);return new La(i.unit())}case Te.Union:{const i=n.type(new hn);return new Pa(i.mode(),i.typeIdsArray()||[],t||[])}case Te.FixedSizeBinary:{const i=n.type(new ai);return new Ua(i.byteWidth())}case Te.FixedSizeList:{const i=n.type(new ci);return new Na(i.listSize(),(t||[])[0])}case Te.Map:{const i=n.type(new da);return new Fa((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Te[e]}" (${e})`)}function JE(n,t){const e=t.fields.map(s=>xe.encode(n,s));ni.startFieldsVector(n,e.length);const i=ni.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?ni.createCustomMetadataVector(n,[...t.metadata].map(([s,o])=>{const a=n.createString(`${s}`),c=n.createString(`${o}`);return ze.startKeyValue(n),ze.addKey(n,a),ze.addValue(n,c),ze.endKeyValue(n)})):-1;return ni.startSchema(n),ni.addFields(n,i),ni.addEndianness(n,nw?Rs.Little:Rs.Big),r!==-1&&ni.addCustomMetadata(n,r),ni.endSchema(n)}function KE(n,t){let e=-1,i=-1,r=-1;const s=t.type;let o=t.typeId;At.isDictionary(s)?(o=s.dictionary.typeId,r=gl.visit(s,n),i=gl.visit(s.dictionary,n)):i=gl.visit(s,n);const a=(s.children||[]).map(u=>xe.encode(n,u)),c=Pn.createChildrenVector(n,a),l=t.metadata&&t.metadata.size>0?Pn.createCustomMetadataVector(n,[...t.metadata].map(([u,h])=>{const f=n.createString(`${u}`),p=n.createString(`${h}`);return ze.startKeyValue(n),ze.addKey(n,f),ze.addValue(n,p),ze.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),Pn.startField(n),Pn.addType(n,i),Pn.addTypeType(n,o),Pn.addChildren(n,c),Pn.addNullable(n,!!t.nullable),e!==-1&&Pn.addName(n,e),r!==-1&&Pn.addDictionary(n,r),l!==-1&&Pn.addCustomMetadata(n,l),Pn.endField(n)}function ZE(n,t){const e=t.nodes||[],i=t.buffers||[];Ri.startNodesVector(n,e.length);for(const o of e.slice().reverse())Vr.encode(n,o);const r=n.endVector();Ri.startBuffersVector(n,i.length);for(const o of i.slice().reverse())fi.encode(n,o);const s=n.endVector();return Ri.startRecordBatch(n),Ri.addLength(n,new zr(t.length,0)),Ri.addNodes(n,r),Ri.addBuffers(n,s),Ri.endRecordBatch(n)}function QE(n,t){const e=Rn.encode(n,t.data);return ls.startDictionaryBatch(n),ls.addId(n,new zr(t.id,0)),ls.addIsDelta(n,t.isDelta),ls.addData(n,e),ls.endDictionaryBatch(n)}function tw(n,t){return Dm.createFieldNode(n,new zr(t.length,0),new zr(t.nullCount,0))}function ew(n,t){return Lm.createBuffer(n,new zr(t.offset,0),new zr(t.length,0))}const nw=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),Uu=n=>`Expected ${oe[n]} Message in stream, but was null or length 0.`,Nu=n=>`Header pointer of flatbuffer-encoded ${oe[n]} Message is null or length 0.`,Fm=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,Om=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class Bm{constructor(t){this.source=t instanceof Xa?t:new Xa(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Ae:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Uu(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=re(this.source.read(t));if(e.byteLength<t)throw new Error(Om(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=oe.Schema,i=this.readMessage(e),r=i==null?void 0:i.header();if(t&&!r)throw new Error(Nu(e));return r}readMetadataLength(){const t=this.source.read(bc),e=t&&new Ts(t),i=(e==null?void 0:e.readInt32(0))||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Ae;if(e.byteLength<t)throw new Error(Fm(t,e.byteLength));return{done:!1,value:cn.decode(e)}}}class iw{constructor(t,e){this.source=t instanceof Is?t:sp(t)?new Ya(t,e):new Is(t)}[Symbol.asyncIterator](){return this}next(){return wt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Ae:t})}throw(t){return wt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return wt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return wt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Uu(t));return e.value})}readMessageBody(t){return wt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=re(yield this.source.read(t));if(e.byteLength<t)throw new Error(Om(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(t=!1){return wt(this,void 0,void 0,function*(){const e=oe.Schema,i=yield this.readMessage(e),r=i==null?void 0:i.header();if(t&&!r)throw new Error(Nu(e));return r})}readMetadataLength(){return wt(this,void 0,void 0,function*(){const t=yield this.source.read(bc),e=t&&new Ts(t),i=(e==null?void 0:e.readInt32(0))||0;return{done:i===0,value:i}})}readMetadata(t){return wt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Ae;if(e.byteLength<t)throw new Error(Fm(t,e.byteLength));return{done:!1,value:cn.decode(e)}})}}class rw extends Bm{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof Bd?t:new Bd(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:cn.fromJSON(t.schema,oe.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:cn.fromJSON(e,oe.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:cn.fromJSON(e,oe.RecordBatch)}}return this._body=[],Ae}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE&&[s.TYPE]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(Uu(t));return e.value}readSchema(){const t=oe.Schema,e=this.readMessage(t),i=e==null?void 0:e.header();if(!e||!i)throw new Error(Nu(t));return i}}const bc=4,Hl="ARROW1",vo=new Uint8Array(Hl.length);for(let n=0;n<Hl.length;n+=1)vo[n]=Hl.codePointAt(n);function Fu(n,t=0){for(let e=-1,i=vo.length;++e<i;)if(vo[e]!==n[t+e])return!1;return!0}const Co=vo.length,zm=Co+bc,sw=Co*2+bc;class Ui extends Ru{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return sr(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return Un.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return Un.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof Ui?t:Dl(t)?lw(t):sp(t)?dw(t):sr(t)?wt(this,void 0,void 0,function*(){return yield Ui.from(yield t)}):op(t)||pu(t)||ap(t)||Os(t)?hw(new Is(t)):uw(new Xa(t))}static readAll(t){return t instanceof Ui?t.isSync()?jd(t):$d(t):Dl(t)||ArrayBuffer.isView(t)||wo(t)||rp(t)?jd(t):$d(t)}}class Ja extends Ui{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return di(this,arguments,function*(){yield Gt(yield*ua(Nr(this[Symbol.iterator]())))})}}class Ka extends Ui{constructor(t){super(t),this._impl=t}readAll(){var t,e;return wt(this,void 0,void 0,function*(){const i=new Array;try{for(var r=Nr(this),s;s=yield r.next(),!s.done;){const o=s.value;i.push(o)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(e=r.return)&&(yield e.call(r))}finally{if(t)throw t.error}}return i})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class Vm extends Ja{constructor(t){super(t),this._impl=t}}class ow extends Ka{constructor(t){super(t),this._impl=t}}class km{constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=te({type:new an(this.schema.fields),length:t.length,children:i});return new dn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:o}=this,a=s.get(i);if(r||!a){const c=o.dictionaries.get(i),l=this._loadVectors(t.data,e,[c]);return(a&&r?a.concat(new ae(l)):new ae(l)).memoize()}return a.memoize()}_loadVectors(t,e,i){return new Am(e,t.nodes,t.buffers,this.dictionaries).visitMany(i)}}class Za extends km{constructor(t,e){super(e),this._reader=Dl(t)?new rw(this._handle=t):new Bm(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=Hm(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ae}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ae}next(){if(this.closed)return Ae;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Pu(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class Qa extends km{constructor(t,e){super(e),this._reader=new iw(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return wt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return wt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=Hm(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return wt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ae})}return(t){return wt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ae})}next(){return wt(this,void 0,void 0,function*(){if(this.closed)return Ae;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Pu(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return wt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class Gm extends Za{constructor(t,e){super(t instanceof zd?t:new zd(t),e)}get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(oe.RecordBatch);if(r!=null&&r.isRecordBatch()){const s=r.header(),o=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(oe.DictionaryBatch);if(r!=null&&r.isDictionaryBatch()){const s=r.header(),o=this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}}_readFooter(){const{_handle:t}=this,e=t.size-zm,i=t.readInt32(e),r=t.readAt(e-i,i);return _o.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class aw extends Qa{constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof Ya?t:new Ya(t,i),r)}get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return wt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){var e;return wt(this,void 0,void 0,function*(){if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(oe.RecordBatch);if(r!=null&&r.isRecordBatch()){const s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null})}_readDictionaryBatch(t){var e;return wt(this,void 0,void 0,function*(){const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(oe.DictionaryBatch);if(r!=null&&r.isDictionaryBatch()){const s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}})}_readFooter(){return wt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-zm,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return _o.decode(r)})}_readNextMessageAndValidate(t){return wt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class cw extends Za{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new SE(e,t.nodes,t.buffers,this.dictionaries).visitMany(i)}}function Hm(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*jd(n){const t=Ui.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function $d(n){return di(this,arguments,function*(){const e=yield Gt(Ui.from(n));try{if(!(yield Gt(e.open({autoDestroy:!1}))).closed)do yield yield Gt(e);while(!(yield Gt(e.reset().open())).closed)}finally{yield Gt(e.cancel())}})}function lw(n){return new Ja(new cw(n))}function uw(n){const t=n.peek(Co+7&-8);return t&&t.byteLength>=4?Fu(t)?new Vm(new Gm(n.read())):new Ja(new Za(n)):new Ja(new Za(function*(){}()))}function hw(n){return wt(this,void 0,void 0,function*(){const t=yield n.peek(Co+7&-8);return t&&t.byteLength>=4?Fu(t)?new Vm(new Gm(yield n.read())):new Ka(new Qa(n)):new Ka(new Qa(function(){return di(this,arguments,function*(){})}()))})}function dw(n){return wt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new Ya(n,t);return t>=sw&&Fu(yield e.readAt(0,Co+7&-8))?new ow(new aw(e)):new Ka(new Qa(e))})}class Ne extends ne{constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof dn?s.data.children:s.data),i=new Ne;return i.visitMany(e(t)),i}visit(t){if(t instanceof ae)return this.visitMany(t.data),this;const{type:e}=t;if(!At.isDictionary(e)){const{length:i,nullCount:r}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");At.isNull(e)||Kn.call(this,r<=0?new Uint8Array(0):Mu(t.offset,i,t.nullBitmap)),this.nodes.push(new Vr(i,r))}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function Kn(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new fi(this._byteLength,t)),this._byteLength+=t,this}function fw(n){const{type:t,length:e,typeIds:i,valueOffsets:r}=n;if(Kn.call(this,i),t.mode===An.Sparse)return Wl.call(this,n);if(t.mode===An.Dense){if(n.offset<=0)return Kn.call(this,r),Wl.call(this,n);{const s=i.reduce((u,h)=>Math.max(u,h),i[0]),o=new Int32Array(s+1),a=new Int32Array(s+1).fill(-1),c=new Int32Array(e),l=gu(-r[0],e,r);for(let u,h,f=-1;++f<e;)(h=a[u=i[f]])===-1&&(h=a[u]=l[u]),c[f]=l[f]-h,++o[u];Kn.call(this,c);for(let u,h=-1,f=t.children.length;++h<f;)if(u=n.children[h]){const p=t.typeIds[h],g=Math.min(e,o[p]);this.visit(u.slice(a[p],g))}}}return this}function pw(n){let t;return n.nullCount>=n.length?Kn.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?Kn.call(this,Mu(n.offset,n.length,t)):Kn.call(this,Oa(n.values))}function fr(n){return Kn.call(this,n.values.subarray(0,n.length*n.stride))}function Wm(n){const{length:t,values:e,valueOffsets:i}=n,r=i[0],s=i[t],o=Math.min(s-r,e.byteLength-r);return Kn.call(this,gu(-i[0],t,i)),Kn.call(this,e.subarray(r,r+o)),this}function Ou(n){const{length:t,valueOffsets:e}=n;return e&&Kn.call(this,gu(e[0],t,e)),this.visit(n.children[0])}function Wl(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Ne.prototype.visitBool=pw;Ne.prototype.visitInt=fr;Ne.prototype.visitFloat=fr;Ne.prototype.visitUtf8=Wm;Ne.prototype.visitBinary=Wm;Ne.prototype.visitFixedSizeBinary=fr;Ne.prototype.visitDate=fr;Ne.prototype.visitTimestamp=fr;Ne.prototype.visitTime=fr;Ne.prototype.visitDecimal=fr;Ne.prototype.visitList=Ou;Ne.prototype.visitStruct=Wl;Ne.prototype.visitUnion=fw;Ne.prototype.visitInterval=fr;Ne.prototype.visitFixedSizeList=Ou;Ne.prototype.visitMap=Ou;class Xm extends Ru{constructor(t){super(),this._position=0,this._started=!1,this._sink=new pa,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._dictionaryDeltaOffsets=new Map,gn(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return sr(t)?t.then(e=>this.writeAll(e)):Os(t)?ku(this,t):Vu(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof pa?this._sink=t:(this._sink=new pa,t&&Nx(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&Fx(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._dictionaryDeltaOffsets=new Map,(!e||!Vl(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof on&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof dn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Vl(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof dn?t instanceof Pu||this._writeRecordBatch(t):t instanceof on?this.writeAll(t.batches):wo(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=cn.encode(t),s=r.byteLength,o=this._writeLegacyIpcFormat?4:8,a=s+o+i&~i,c=a-s-o;return t.headerType===oe.RecordBatch?this._recordBatchBlocks.push(new lr(a,t.bodyLength,this._position)):t.headerType===oe.DictionaryBatch&&this._dictionaryBlocks.push(new lr(a,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(a-o)),s>0&&this._write(r),this._writePadding(c)}_write(t){if(this._started){const e=re(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(cn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(vo)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Ne.assemble(t),o=new Rn(t.numRows,i,r),a=cn.from(o,e);return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){this._dictionaryDeltaOffsets.set(e,t.length+(this._dictionaryDeltaOffsets.get(e)||0));const{byteLength:r,nodes:s,bufferRegions:o,buffers:a}=Ne.assemble(new ae([t])),c=new Rn(t.length,s,o),l=new _i(c,e,i),u=cn.from(l,r);return this._writeMessage(u)._writeBodyBuffers(a)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,o=t.length;++s<o;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){for(let[e,i]of t.dictionaries){let r=this._dictionaryDeltaOffsets.get(e)||0;if(r===0||(i=i==null?void 0:i.slice(r)).length>0)for(const s of i.data)this._writeDictionaryBatch(s,e,r>0),r+=s.length}return this}}class Bu extends Xm{static writeAll(t,e){const i=new Bu(e);return sr(t)?t.then(r=>i.writeAll(r)):Os(t)?ku(i,t):Vu(i,t)}}class zu extends Xm{static writeAll(t){const e=new zu;return sr(t)?t.then(i=>e.writeAll(i)):Os(t)?ku(e,t):Vu(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeFooter(t){const e=_o.encode(new _o(t,wn.V4,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Vu(n,t){let e=t;t instanceof on&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function ku(n,t){var e,i,r,s;return wt(this,void 0,void 0,function*(){try{for(e=Nr(t);i=yield e.next(),!i.done;){const o=i.value;n.write(o)}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=e.return)&&(yield s.call(e))}finally{if(r)throw r.error}}return n.finish()})}function Qs(n){const t=Ui.from(n);return sr(t)?t.then(e=>Qs(e)):t.isAsync()?t.readAll().then(e=>new on(e)):new on(t.readAll())}function _l(n,t="stream"){return(t==="stream"?Bu:zu).writeAll(n).toUint8Array(!0)}var qd=function(){function n(t,e,i,r){var s=this;this.getCell=function(o,a){var c=o<s.headerRows&&a<s.headerColumns,l=o>=s.headerRows&&a<s.headerColumns,u=o<s.headerRows&&a>=s.headerColumns;if(c){var h=["blank"];return a>0&&h.push("level"+o),{type:"blank",classNames:h.join(" "),content:""}}else if(u){var f=a-s.headerColumns,h=["col_heading","level"+o,"col"+f];return{type:"columns",classNames:h.join(" "),content:s.getContent(s.columnsTable,f,o)}}else if(l){var p=o-s.headerRows,h=["row_heading","level"+a,"row"+p];return{type:"index",id:"T_".concat(s.uuid,"level").concat(a,"_row").concat(p),classNames:h.join(" "),content:s.getContent(s.indexTable,p,a)}}else{var p=o-s.headerRows,f=a-s.headerColumns,h=["data","row"+p,"col"+f],g=s.styler?s.getContent(s.styler.displayValuesTable,p,f):s.getContent(s.dataTable,p,f);return{type:"data",id:"T_".concat(s.uuid,"row").concat(p,"_col").concat(f),classNames:h.join(" "),content:g}}},this.getContent=function(o,a,c){var l=o.getChildAt(c);if(l===null)return"";var u=s.getColumnTypeId(o,c);switch(u){case D.Timestamp:return s.nanosToDate(l.get(a));default:return l.get(a)}},this.dataTable=Qs(t),this.indexTable=Qs(e),this.columnsTable=Qs(i),this.styler=r?{caption:r.caption,displayValuesTable:Qs(r.displayValues),styles:r.styles,uuid:r.uuid}:void 0}return Object.defineProperty(n.prototype,"rows",{get:function(){return this.indexTable.numRows+this.columnsTable.numCols},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"columns",{get:function(){return this.indexTable.numCols+this.columnsTable.numRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"headerRows",{get:function(){return this.rows-this.dataRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"headerColumns",{get:function(){return this.columns-this.dataColumns},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dataRows",{get:function(){return this.dataTable.numRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dataColumns",{get:function(){return this.dataTable.numCols},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"uuid",{get:function(){return this.styler&&this.styler.uuid},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"caption",{get:function(){return this.styler&&this.styler.caption},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"styles",{get:function(){return this.styler&&this.styler.styles},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"table",{get:function(){return this.dataTable},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"index",{get:function(){return this.indexTable},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"columnTable",{get:function(){return this.columnsTable},enumerable:!1,configurable:!0}),n.prototype.serialize=function(){return{data:_l(this.dataTable),index:_l(this.indexTable),columns:_l(this.columnsTable)}},n.prototype.getColumnTypeId=function(t,e){return t.schema.fields[e].type.typeId},n.prototype.nanosToDate=function(t){return new Date(t/1e6)},n}(),oo=function(){return oo=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},oo.apply(this,arguments)},ao;(function(n){n.COMPONENT_READY="streamlit:componentReady",n.SET_COMPONENT_VALUE="streamlit:setComponentValue",n.SET_FRAME_HEIGHT="streamlit:setFrameHeight"})(ao||(ao={}));var nr=function(){function n(){}return n.API_VERSION=1,n.RENDER_EVENT="streamlit:render",n.events=new EventTarget,n.registeredMessageListener=!1,n.setComponentReady=function(){n.registeredMessageListener||(window.addEventListener("message",n.onMessageEvent),n.registeredMessageListener=!0),n.sendBackMsg(ao.COMPONENT_READY,{apiVersion:n.API_VERSION})},n.setFrameHeight=function(t){t===void 0&&(t=document.body.scrollHeight),t!==n.lastFrameHeight&&(n.lastFrameHeight=t,n.sendBackMsg(ao.SET_FRAME_HEIGHT,{height:t}))},n.setComponentValue=function(t){var e;t instanceof qd?(e="dataframe",t=t.serialize()):gw(t)?(e="bytes",t=new Uint8Array(t.buffer)):t instanceof ArrayBuffer?(e="bytes",t=new Uint8Array(t)):e="json",n.sendBackMsg(ao.SET_COMPONENT_VALUE,{value:t,dataType:e})},n.onMessageEvent=function(t){var e=t.data.type;switch(e){case n.RENDER_EVENT:n.onRenderMessage(t.data);break}},n.onRenderMessage=function(t){var e=t.args;e==null&&(console.error("Got null args in onRenderMessage. This should never happen"),e={});var i=t.dfs&&t.dfs.length>0?n.argsDataframeToObject(t.dfs):{};e=oo(oo({},e),i);var r=!!t.disabled,s=t.theme;s&&mw(s);var o={disabled:r,args:e,theme:s},a=new CustomEvent(n.RENDER_EVENT,{detail:o});n.events.dispatchEvent(a)},n.argsDataframeToObject=function(t){var e=t.map(function(i){var r=i.key,s=i.value;return[r,n.toArrowTable(s)]});return Object.fromEntries(e)},n.toArrowTable=function(t){var e,i=(e=t.data,e.data),r=e.index,s=e.columns,o=e.styler;return new qd(i,r,s,o)},n.sendBackMsg=function(t,e){window.parent.postMessage(oo({isStreamlitMessage:!0,type:t},e),"*")},n}(),mw=function(n){var t=document.createElement("style");document.head.appendChild(t),t.innerHTML=`
    :root {
      --primary-color: `.concat(n.primaryColor,`;
      --background-color: `).concat(n.backgroundColor,`;
      --secondary-background-color: `).concat(n.secondaryBackgroundColor,`;
      --text-color: `).concat(n.textColor,`;
      --font: `).concat(n.font,`;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `)};function gw(n){var t=!1;try{t=n instanceof BigInt64Array||n instanceof BigUint64Array}catch{}return n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array||t}var _w=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();(function(n){_w(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.componentDidMount=function(){nr.setFrameHeight()},t.prototype.componentDidUpdate=function(){nr.setFrameHeight()},t})(Ix.PureComponent);const vw=document.getElementById("root");vw.innerHTML=`
<style>
* { box-sizing: border-box; }
body {
    margin: 0;
    background: #101827;
    color: white;
    font-family: Arial, sans-serif;
}
#viewer {
    width: 100%;
    height: 480px;
    cursor: grab;
    touch-action: none;
}
#viewer:active { cursor: grabbing; }
.controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 12px;
}
button {
    background: #26364d;
    color: white;
    border: 1px solid #475569;
    padding: 10px 13px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}
button:hover { background: #385273; }
#alert {
    padding: 13px;
    margin: 8px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    background: #174d45;
}
.hint {
    text-align: center;
    color: #94a3b8;
    font-size: 12px;
}
</style>
<div id="viewer"></div>
<div class="hint">Drag to rotate worker • Scroll to zoom</div>
<div class="controls">
    <button id="wear">Wear Helmet</button>
    <button id="remove">Remove Helmet</button>
    <button id="left">Tilt Left</button>
    <button id="right">Tilt Right</button>
    <button id="fall">Simulate Fall</button>
    <button id="reset">Reset Worker</button>
</div>
<div id="alert">NORMAL: Worker is ready.</div>
`;const vn=document.getElementById("viewer"),br=document.getElementById("alert"),Hn=new Lb;Hn.background=new ee("#101827");const ir=new Fn(45,vn.clientWidth/vn.clientHeight,.1,100);ir.position.set(0,2.2,8);ir.lookAt(0,1.4,0);const Io=new Ff({antialias:!0});Io.setPixelRatio(Math.min(window.devicePixelRatio,2));Io.setSize(vn.clientWidth,vn.clientHeight);vn.appendChild(Io.domElement);Hn.add(new Zb(16777215,1.8));const Ym=new Kb(16777215,2.2);Ym.position.set(4,7,6);Hn.add(Ym);const Gu=new Oe({color:"#c98d68",roughness:.8}),Xl=new Oe({color:"#f97316"}),Jd=new Oe({color:"#26364d"}),xc=new Oe({color:"#facc15"}),Hu=new Oe({color:"#fef08a"}),yw=new Oe({color:"#111827"}),Sw=new Oe({color:"#e5e7eb"}),zs=new Oe({color:"#111827"}),jm=new Oe({color:"#ffffff"}),$m=new Oe({color:"#451a1a"}),Mc=new Oe({color:"#17120f",roughness:.95});function Pt(n,t,e,i,r=null){const s=new hi(t,e);return s.position.set(...i),r&&s.scale.set(...r),n.add(s),s}const Pe=new Vn;Hn.add(Pe);Pe.position.y=1.4;Pt(Pe,new pn(.38,.52,1.05,32),Xl,[0,.05,0]);Pt(Pe,new Me(.78,.1,.04),Hu,[0,.25,.43]);Pt(Pe,new Me(.78,.1,.04),Hu,[0,-.18,.43]);Pt(Pe,new Me(.025,.85,.025),zs,[0,.05,.53]);Pt(Pe,new pn(.13,.15,.25,24),Gu,[0,.68,0]);const Fe=new Vn;Fe.position.set(0,1,0);Pe.add(Fe);Pt(Fe,new Cn(.38,32,32),Gu,[0,0,0],[.82,1.08,.82]);Pt(Fe,new Cn(.3,24,20),Mc,[0,.12,-.16],[1.05,.78,.78]);Pt(Fe,new Me(.11,.34,.28),Mc,[-.29,.02,-.015]);Pt(Fe,new Me(.11,.34,.28),Mc,[.29,.02,-.015]);Pt(Fe,new Cn(.2,24,16,0,Math.PI*2,0,Math.PI/2),Mc,[0,.27,.015],[1.05,.5,.85]);const tc=Pt(Fe,new Cn(.075,24,24),jm,[-.13,.07,.3]),ec=Pt(Fe,new Cn(.075,24,24),jm,[.13,.07,.3]);Pt(Fe,new Cn(.033,16,16),zs,[-.13,.07,.365]);Pt(Fe,new Cn(.033,16,16),zs,[.13,.07,.365]);const Js=Pt(Fe,new Me(.15,.035,.025),zs,[-.13,.19,.31]),Ks=Pt(Fe,new Me(.15,.035,.025),zs,[.13,.19,.31]);Pt(Fe,new Cn(.055,16,16),Gu,[0,-.04,.33]);function qm(n){const t=new zf(n.map(e=>new I(...e)));return new hi(new ru(t,20,.018,8,!1),$m)}const Yl=qm([[-.13,-.17,.305],[-.07,-.21,.325],[0,-.22,.33],[.07,-.21,.325],[.13,-.17,.305]]);Fe.add(Yl);const jl=qm([[-.12,-.22,.3],[-.06,-.18,.32],[0,-.17,.33],[.06,-.18,.32],[.12,-.22,.3]]);Fe.add(jl);const Kd=Pt(Fe,new Cn(.065,24,24),$m,[0,-.21,.32],[.85,1.2,.3]);let $l="normal";function Oi(n){$l=n,Yl.visible=!1,jl.visible=!1,Kd.visible=!1,tc.scale.set(1,1,1),ec.scale.set(1,1,1),Js.rotation.z=0,Ks.rotation.z=0,n==="normal"?(Yl.visible=!0,Js.position.y=.19,Ks.position.y=.19):n==="warning"?(jl.visible=!0,Js.position.y=.22,Ks.position.y=.22,Js.rotation.z=-.25,Ks.rotation.z=.25):n==="emergency"&&(Kd.visible=!0,tc.scale.y=1.45,ec.scale.y=1.45,Js.position.y=.25,Ks.position.y=.25)}Oi("normal");const Gi=new Vn;Gi.position.y=.35;Fe.add(Gi);Pt(Gi,new Cn(.48,40,24,0,Math.PI*2,0,Math.PI/2),xc,[0,.05,0],[1,.85,.9]);Pt(Gi,new pn(.57,.57,.07,48),xc,[0,.03,0],[1,1,.9]);Pt(Gi,new Me(.65,.06,.23),xc,[0,.02,.43]);Pt(Gi,new Me(.2,.12,.18),zs,[0,.43,0]);function Jm(n){const t=new Vn;return t.position.set(n*.48,.38,0),Pe.add(t),Pt(t,new pn(.13,.15,.55,20),Xl,[0,-.25,0]),Pt(t,new pn(.145,.145,.08,20),Hu,[0,-.38,0]),Pt(t,new pn(.11,.13,.42,20),Xl,[0,-.72,0]),Pt(t,new Cn(.13,20,20),Sw,[0,-.99,0]),t}const Km=Jm(-1),Wu=Jm(1),Vs=new Vn;Vs.position.set(0,-.99,.13);Vs.rotation.z=-.12;Wu.add(Vs);const bw=new Oe({color:"#8b5a2b",roughness:.85}),Zm=new Oe({color:"#9ca3af",metalness:.75,roughness:.3});Pt(Vs,new pn(.045,.055,.78,16),bw,[0,-.34,0]);Pt(Vs,new Me(.48,.16,.19),Zm,[0,.12,0]);Pt(Vs,new Me(.12,.2,.21),Zm,[-.23,.12,0]);function Qm(n){const t=new Vn;return t.position.set(n*.23,-.48,0),Pe.add(t),Pt(t,new pn(.18,.16,.65,20),Jd,[0,-.3,0]),Pt(t,new pn(.14,.13,.55,20),Jd,[0,-.87,0]),Pt(t,new Me(.3,.2,.48),yw,[0,-1.22,.1]),t}const tg=Qm(-1),eg=Qm(1),ks=-.42,xw=new Oe({color:"#77736b",roughness:1}),Mw=Pt(Hn,new oc(14,10),xw,[0,ks-.025,0]);Mw.rotation.x=-Math.PI/2;const ng=new Qb(14,28,"#475569","#334155");ng.position.y=ks;Hn.add(ng);const Zd=new Oe({color:"#f97316",roughness:.8}),Ew=new Oe({color:"#f8fafc",roughness:.8}),ww=new Oe({color:"#9a4934",roughness:1}),ig=new Oe({color:"#9a6a3a",roughness:1}),Tw=new Oe({color:"#2563eb",roughness:.65}),rg=new Oe({color:"#1e293b",metalness:.35,roughness:.6});function sg(n,t){const e=new Vn;Pt(e,new pn(.22,.22,.07,24),Zd,[0,.035,0]),Pt(e,new pn(.045,.16,.43,24),Zd,[0,.285,0]),Pt(e,new pn(.075,.095,.075,24),Ew,[0,.28,0]),e.position.set(n,ks,t),Hn.add(e)}sg(-2.15,.9);sg(2.15,-.8);const Aw=[[-2.15,.13,-.55],[-1.62,.13,-.55],[-2.15,.13,-.25],[-1.62,.13,-.25],[-1.88,.39,-.4]];Aw.forEach((n,t)=>{const e=Pt(Hn,new Me(.48,.24,.26),ww,n);e.rotation.y=t%2===0?.04:-.04});const Rw=Pt(Hn,new Me(1.35,.09,.22),ig,[2.05,ks+.045,.35]);Rw.rotation.y=-.18;const Cw=Pt(Hn,new Me(1.15,.09,.2),ig,[2,ks+.14,.35]);Cw.rotation.y=-.12;const Gs=new Vn;Pt(Gs,new Me(.72,.42,.42),Tw,[0,.21,0]);Pt(Gs,new Me(.76,.07,.46),rg,[0,.43,0]);Pt(Gs,new Me(.25,.07,.08),rg,[0,.51,0]);Pt(Gs,new Me(.1,.12,.035),xc,[0,.3,.22]);Gs.position.set(1.65,ks,1.45);Hn.add(Gs);function Hs(n,t){br.textContent=n,t==="danger"?(br.style.background="#7f1d1d",br.style.color="#fee2e2"):t==="warning"?(br.style.background="#713f12",br.style.color="#fef3c7"):(br.style.background="#174d45",br.style.color="#d1fae5")}function kr(n,t={}){nr.setComponentValue({action:n,...t,timestamp:Date.now()})}let Lo=0,Xu=1.4,Ec=0;function Iw(){Lo=0,Xu=1.4,Ec=0,Pe.rotation.x=0,Km.rotation.z=0,Wu.rotation.z=0,tg.rotation.z=0,eg.rotation.z=0,Oi("normal")}document.getElementById("remove").onclick=()=>{Gi.visible=!1,Oi("warning"),Hs("ALERT: HELMET REMOVED!","warning"),kr("remove")};document.getElementById("wear").onclick=()=>{Gi.visible=!0,Oi("normal"),Hs("NORMAL: HELMET WORN.","normal"),kr("wear")};document.getElementById("left").onclick=()=>{Lo=.45,Ec=.2,Oi("warning"),Hs("CAUTION: WORKER TILTED LEFT.","warning"),kr("left",{tilt:25})};document.getElementById("right").onclick=()=>{Lo=-.45,Ec=-.2,Oi("warning"),Hs("CAUTION: WORKER TILTED RIGHT.","warning"),kr("right",{tilt:-25})};document.getElementById("fall").onclick=()=>{Lo=Math.PI/2,Xu=.1,Km.rotation.z=.5,Wu.rotation.z=-.5,tg.rotation.z=.3,eg.rotation.z=-.3,Oi("emergency"),Hs("EMERGENCY: POSSIBLE WORKER FALL!","danger"),kr("fall",{tilt:90})};document.getElementById("reset").onclick=()=>{Gi.visible=!0,Iw(),Hs("NORMAL: WORKER RESET.","normal"),kr("reset",{tilt:0})};let wc=!1,ql=0,Jl=0,Qd=-999,tf=0;vn.addEventListener("pointerdown",n=>{wc=!0,ql=n.clientX,Jl=n.clientY,vn.setPointerCapture(n.pointerId)});vn.addEventListener("pointermove",n=>{if(!wc)return;const t=n.clientX-ql,e=n.clientY-Jl;Pe.rotation.y+=t*.01,Pe.rotation.x+=e*.01,Pe.rotation.x=ps.clamp(Pe.rotation.x,-.8,.8),ql=n.clientX,Jl=n.clientY;const i=ps.radToDeg(Pe.rotation.x),r=Date.now();Math.abs(i-Qd)>=3&&r-tf>=300&&(Qd=i,tf=r,Math.abs(i)>=20?Oi("warning"):Oi("normal"),kr("mouse_tilt",{tilt:Number(i.toFixed(1))}))});vn.addEventListener("pointerup",()=>{wc=!1});vn.addEventListener("pointercancel",()=>{wc=!1});vn.addEventListener("wheel",n=>{ir.position.z+=n.deltaY*.005,ir.position.z=ps.clamp(ir.position.z,4,12)});let aa=0,vl=2.5,ca=!1;function og(){requestAnimationFrame(og),Pe.rotation.z=ps.lerp(Pe.rotation.z,Lo,.08),Pe.position.y=ps.lerp(Pe.position.y,Xu,.08),Fe.rotation.y=ps.lerp(Fe.rotation.y,Ec,.08),aa+=1/60,!ca&&aa>=vl&&(ca=!0,tc.scale.y=.08,ec.scale.y=.08),ca&&aa>=vl+.15&&(ca=!1,tc.scale.y=$l==="emergency"?1.45:1,ec.scale.y=$l==="emergency"?1.45:1,vl=aa+2+Math.random()*3),Io.render(Hn,ir)}og();const Lw=new ResizeObserver(()=>{const n=vn.clientWidth,t=vn.clientHeight;n===0||t===0||(ir.aspect=n/t,ir.updateProjectionMatrix(),Io.setSize(n,t))});Lw.observe(vn);nr.events.addEventListener(nr.RENDER_EVENT,()=>{nr.setFrameHeight(600)});nr.setComponentReady();nr.setFrameHeight(600);

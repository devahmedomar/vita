"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[592],{8287:(d,h,o)=>{o.d(h,{Z:()=>l});var e=o(553),i=o(4946),p=o(9862);let l=(()=>{class r{constructor(t){this._HttpClient=t,this.apiUrl=e.N.baseUrl+"v4/public/post/all"}getBlogs(){return this._HttpClient.get(this.apiUrl)}getSingleBlog(t){return this._HttpClient.get(`https://api.vitaparapharma.com/api/v1/public/post/${t}`)}static#t=this.\u0275fac=function(a){return new(a||r)(i.LFG(p.eN))};static#r=this.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},1855:(d,h,o)=>{o.d(h,{p:()=>l});var e=o(9862),i=o(6306),p=o(4946);let l=(()=>{class r{constructor(t){this.http=t,this.apiUrl="https://api.vitaparapharma.com/api/v2/user/order/"}checkOrder(t,a,n){const s=this.apiUrl+"check/order",_=new e.WM({"Content-Type":"application/json",Authorization:`Bearer ${t}`}),c={orderItems:a,coupon:n};return console.log(c),this.http.post(s,c,{headers:_})}addOrder(t,a,n,s){const _=`${this.apiUrl+"new"}/on/${a}`,c=new e.WM({"Content-Type":"application/json",Authorization:`Bearer ${t}`}),u={orderItems:n,coupon:s};return console.log(u),this.http.post(_,u,{headers:c})}getAllOrders(){const t=localStorage.getItem("eToken"),a=new e.WM({Authorization:`Bearer ${t}`});return this.http.get(this.apiUrl+"all",{headers:a}).pipe((0,i.K)(n=>{throw"Error fetching orders: "+n}))}getOrderById(t,a){const n=`${this.apiUrl}/${a}`,s=new e.WM({Authorization:`Bearer ${t}`});return this.http.get(n,{headers:s})}static#t=this.\u0275fac=function(a){return new(a||r)(p.LFG(e.eN))};static#r=this.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);
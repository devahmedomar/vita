"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[592],{8287:(_,u,s)=>{s.d(u,{Z:()=>o});var n=s(9862),g=s(7394),c=s(553),l=s(9291),h=s(3911),d=s(8209);let o=(()=>{class e{constructor(t,r,a){this._HttpClient=t,this.translate=r,this.router=a,this.apiUrl=c.N.baseUrl+"v4/public/post/all",this.langChangeSubscription=new g.w0,this.translate.use(localStorage.getItem("lang")||"en"),this.langChangeSubscription=this.translate.onLangChange.subscribe(i=>{this.refreshPage()})}getBlogs(){const t=this.translate.currentLang,r=(new n.WM).set("Accept-Language",t);return this._HttpClient.get(this.apiUrl,{headers:r})}getSingleBlog(t){const r=this.translate.currentLang,a=(new n.WM).set("Accept-Language",r);return this._HttpClient.get(`https://api.vitaparapharma.com/api/v1/public/post/${t}`,{headers:a})}ngOnDestroy(){this.langChangeSubscription&&this.langChangeSubscription.unsubscribe()}refreshPage(){const t=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigateByUrl(t)})}getUserPost(t,r){const a=`https://api.vitaparapharma.com/api/v1/user/post/${t}`,i=new n.WM({Authorization:`Bearer ${r}`});return this._HttpClient.get(a,{headers:i})}likePost(t,r){const a=`https://api.vitaparapharma.com/api/v1/user/like/${t}`,i=new n.WM({Authorization:`Bearer ${r}`});return this._HttpClient.put(a,{},{headers:i})}unlikePost(t,r){const a=`https://api.vitaparapharma.com/api/v1/user/unlike/${t}`,i=new n.WM({Authorization:`Bearer ${r}`});return this._HttpClient.delete(a,{headers:i})}dislikePost(t,r){const a=`https://api.vitaparapharma.com/api/v1/user/dislike/${t}`,i=new n.WM({Authorization:`Bearer ${r}`});return this._HttpClient.put(a,{},{headers:i})}getTags(){return this._HttpClient.get("https://api.vitaparapharma.com/api/v4/public/tag")}static#t=this.\u0275fac=function(r){return new(r||e)(l.LFG(n.eN),l.LFG(h.sK),l.LFG(d.F0))};static#r=this.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},1855:(_,u,s)=>{s.d(u,{p:()=>l});var n=s(9862),g=s(6306),c=s(9291);let l=(()=>{class h{constructor(o){this.http=o,this.apiUrl="https://api.vitaparapharma.com/api/v2/user/order/"}checkOrder(o,e,p){const t=this.apiUrl+"check/order",r=new n.WM({"Content-Type":"application/json",Authorization:`Bearer ${o}`}),a={orderItems:e,coupon:p};return console.log(a),this.http.post(t,a,{headers:r})}addOrder(o,e,p,t){const r=`${this.apiUrl+"new"}/on/${e}`,a=new n.WM({"Content-Type":"application/json",Authorization:`Bearer ${o}`}),i={orderItems:p,coupon:t};return console.log(i),this.http.post(r,i,{headers:a})}getAllOrders(){const o=localStorage.getItem("eToken"),e=new n.WM({Authorization:`Bearer ${o}`});return this.http.get(this.apiUrl+"all",{headers:e}).pipe((0,g.K)(p=>{throw"Error fetching orders: "+p}))}getOrderById(o,e){const p=`${this.apiUrl}/${e}`,t=new n.WM({Authorization:`Bearer ${o}`});return this.http.get(p,{headers:t})}static#t=this.\u0275fac=function(e){return new(e||h)(c.LFG(n.eN))};static#r=this.\u0275prov=c.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);
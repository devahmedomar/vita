"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[520],{2451:(P,D,a)=>{a.d(D,{I:()=>W});var t=a(9291),f=a(5244),m=a(3596),c=a(4817),_=a(6814),l=a(8209),C=a(5219),g=a(4532);let v=(()=>{class o{transform(r){return Math.floor(r)}static#t=this.\u0275fac=function(i){return new(i||o)};static#r=this.\u0275pipe=t.Yjl({name:"floor",type:o,pure:!0})}return o})();const w=function(o){return{"filled-heart":o}};function n(o,p){if(1&o&&(t.ynx(0),t._UZ(1,"i",15),t.BQk()),2&o){const r=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.VKq(1,w,r.productCardData.inWishlist))}}const e=function(o){return{"outlined-heart":o}};function h(o,p){if(1&o&&t._UZ(0,"i",16),2&o){const r=t.oxw(2);t.Q6J("ngClass",t.VKq(1,e,!r.productCardData.inWishlist))}}function d(o,p){if(1&o){const r=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){t.CHM(r);const s=t.oxw();return t.KtG(s.toggleWishlist(s.productCardData.productId))}),t.TgZ(1,"div",10),t.YNc(2,n,2,3,"ng-container",6),t.YNc(3,h,1,3,"ng-template",null,11,t.W1O),t.qZA(),t._UZ(5,"p",12),t.qZA(),t.TgZ(6,"a",13),t._UZ(7,"img",14),t.qZA()}if(2&o){const r=t.MAs(4),i=t.oxw();t.xp6(2),t.Q6J("ngIf",i.productCardData.inWishlist)("ngIfElse",r),t.xp6(4),t.Q6J("routerLink",i.getRouterLink()),t.xp6(1),t.Q6J("src",i.productCardData.pictures[0],t.LSH)}}function u(o,p){if(1&o&&(t.TgZ(0,"div",17),t._uU(1),t.ALo(2,"floor"),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.hij("-",t.lcZ(2,1,(r.productCardData.priceBeforeDiscount-r.productCardData.priceAfterDiscount)/r.productCardData.priceBeforeDiscount*100),"%")}}function L(o,p){1&o&&(t.O4$(),t._UZ(0,"path",24))}function M(o,p){1&o&&(t.O4$(),t._UZ(0,"path",25))}const b=function(o,p){return{"bi-star-fill filled-star":o,"bi-star unfilled-star":p}};function T(o,p){if(1&o&&(t.O4$(),t.TgZ(0,"svg",21),t.YNc(1,L,1,0,"path",22),t.YNc(2,M,1,0,"path",23),t.qZA()),2&o){const r=p.$implicit,i=t.oxw(2);t.Q6J("ngClass",t.WLB(3,b,r<i.productCardData.rating,r>=i.productCardData.rating)),t.xp6(1),t.Q6J("ngIf",r<=i.productCardData.rating),t.xp6(1),t.Q6J("ngIf",r>i.productCardData.rating)}}const A=function(){return[1,2,3,4,5]};function U(o,p){1&o&&(t.TgZ(0,"div",18)(1,"span",19),t.YNc(2,T,3,6,"svg",20),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.DdM(1,A)))}function E(o,p){if(1&o&&(t.ynx(0),t._uU(1),t.ALo(2,"currency"),t.BQk()),2&o){const r=t.oxw();t.xp6(1),t.hij(" ",t.gM2(2,1,r.productCardData.priceAfterDiscount,"USD","symbol","1.2-2")," ")}}function y(o,p){if(1&o&&(t._uU(0),t.ALo(1,"currency")),2&o){const r=t.oxw();t.hij(" ",t.gM2(1,1,r.productCardData.priceBeforeDiscount,"USD","symbol","1.2-2")," ")}}function O(o,p){if(1&o){const r=t.EpF();t.TgZ(0,"div",26)(1,"button",27),t.NdJ("click",function(){t.CHM(r);const s=t.oxw();return t.KtG(s.toggleCartAction())}),t._uU(2),t.qZA()()}if(2&o){const r=t.oxw();t.xp6(1),t.Q6J("disabled",!r.isLoggedIn||0===r.productCardData.stockQuantity),t.xp6(1),t.hij(" ",r.isLoggedIn?0===r.productCardData.stockQuantity?"Out of Stock":r.productCardData.inCart?"Remove from Cart":"Add to Cart":"Login to Add to Cart"," ")}}const S=function(){return{color:"var(--secondaryColor)",margin:"0",paddingTop:"0"}};let W=(()=>{class o{constructor(r,i,s){this.loginService=r,this.productService=i,this.cartService=s,this.DataOfProduct=[],this.isLoggedIn=!1,this.notificationMessage=null,this.notificationType="success",this.productCardData={name:"",description:"",about:"",categoryId:0,discount:!0,inCart:!1,inWishlist:!1,mainCategoryId:0,pictures:[],priceBeforeDiscount:0,priceAfterDiscount:0,productId:1,rating:0,reviews:0,stockQuantity:0,tags:[],weight:0,price:0},this.CardData={id:0,haveSale:!1,imgURL:"",productName:"",productDescription:"",productPrice:0,productRate:0,sale:0},this.origin=""}ngOnInit(){this.loginService.isLoggedIn$().subscribe(r=>{this.isLoggedIn=r}),this.isLoggedIn&&this.checkWishlistStatus(),this.isLoggedIn&&this.checkCartStatus()}getRouterLink(){return"home"===this.origin?`shop/${this.productCardData.productId}`:"shop"===this.origin?`${this.productCardData.productId}`:"single-product"===this.origin?`../${this.productCardData.productId}`:"wishlist"===this.origin?`/shop/${this.productCardData.productId}`:"shop"}DisplaySalePos(){return!("shop"===this.origin||!this.productCardData.discount||isNaN((this.productCardData.priceBeforeDiscount-this.productCardData.priceAfterDiscount)/this.productCardData.priceBeforeDiscount*100))}checkCartStatus(){this.cartService.getCart().subscribe(r=>{r.success&&r.data&&r.data.cart&&r.data.cart.cartItems&&(this.productCardData.inCart=r.data.cart.cartItems.some(s=>s.productId===this.productCardData.productId),localStorage.setItem(`product_${this.productCardData.productId}_inCart`,this.productCardData.inCart?"true":"false"))},r=>{console.error("Error checking cart status:",r)})}toggleCartAction(){this.productCardData.inCart?this.removeFromCart(this.productCardData.productId):this.onAddToCart(this.productCardData.productId)}onAddToCart(r){this.isLoggedIn?this.cartService.updateCart(r,1).subscribe(i=>{i.success?(this.productCardData.inCart=!0,localStorage.setItem(`product_${r}_inCart`,"true"),this.showNotification("Product added to cart successfully.","success")):this.showNotification("Failed to add product to cart.","error")},i=>{console.error("Error adding product to cart",i),this.showNotification("An error occurred while adding the product to the cart.","error")}):this.showNotification("Please login first.","error")}removeFromCart(r){this.cartService.removeFromCart(r).subscribe(i=>{i.success?(this.productCardData.inCart=!1,localStorage.setItem(`product_${r}_inCart`,"false")):console.error("Failed to remove product from cart:",i.error)},i=>{console.error("Error removing product from cart:",i)})}showNotification(r,i){this.notificationMessage=r,this.notificationType=i,setTimeout(()=>{this.clearNotification()},3e3)}clearNotification(){this.notificationMessage=null}checkWishlistStatus(){this.productService.getWishlist().subscribe({next:r=>{this.productCardData.inWishlist=r.some(i=>i.toString()===this.productCardData.productId.toString())}})}toggleWishlist(r){this.isLoggedIn?this.productCardData.inWishlist?this.removeFromWishlist(r):this.addToWishlist(r):this.showNotification("Please login first.","error")}addToWishlist(r){this.productService.addToWishlist(r.toString()).subscribe(()=>{this.productCardData.inWishlist=!0},i=>{console.error("Error adding to wishlist:",i)})}removeFromWishlist(r){this.productService.removeFromWishlist(r.toString()).subscribe(()=>{this.productCardData.inWishlist=!1},i=>{console.error("Error removing from wishlist:",i)})}fetchProductRating(){this.productService.getSingleProduct(this.productCardData.productId).subscribe(r=>{this.productCardData.reviews=r.rating},r=>{console.error("Error fetching product rating:",r)})}getStars(r){const i=Math.floor(r),s=5-i,x=[];for(let I=0;I<i;I++)x.push(1);for(let I=0;I<s;I++)x.push(0);return x}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(f.r),t.Y36(m.M),t.Y36(c.N))};static#r=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-productcard"]],inputs:{productCardData:"productCardData",CardData:"CardData",origin:"origin"},decls:13,vars:17,consts:[[1,"card","flex","justify-content-center","product-card","position-relative","mb-5"],["styleClass","product-card",3,"header","subheader"],["pTemplate","header"],["class","sale-pos",4,"ngIf"],["class","custom-rating-read-only",4,"ngIf"],[1,"price"],[4,"ngIf","ngIfElse"],["showOriginalPrice",""],["pTemplate","footer"],[1,"d-flex","align-items-center","mt-3","wish",3,"click"],[2,"cursor","pointer"],["notInWishlist",""],[1,"m-0","p-0",2,"cursor","pointer"],[3,"routerLink"],["alt","Card",3,"src"],[1,"pi","pi-heart-fill","me-2",3,"ngClass"],[1,"pi","pi-heart","me-2",3,"ngClass"],[1,"sale-pos"],[1,"custom-rating-read-only"],[1,"custom-star"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","#FFAA8F","class","bi bi-star",3,"ngClass",4,"ngFor","ngForOf"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","#FFAA8F",1,"bi","bi-star",3,"ngClass"],["d","M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",4,"ngIf"],["d","M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z",4,"ngIf"],["d","M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"],["d","M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"],[1,"flex","gap-3","mt-1"],[1,"btn-main",3,"disabled","click"]],template:function(i,s){if(1&i&&(t.TgZ(0,"div",0)(1,"p-card",1),t.ALo(2,"slice"),t.ALo(3,"slice"),t.YNc(4,d,8,4,"ng-template",2),t.YNc(5,u,3,3,"div",3),t.TgZ(6,"div"),t.YNc(7,U,3,2,"div",4),t.TgZ(8,"div",5),t.YNc(9,E,3,6,"ng-container",6),t.YNc(10,y,2,6,"ng-template",null,7,t.W1O),t.qZA()(),t.YNc(12,O,3,2,"ng-template",8),t.qZA()()),2&i){const x=t.MAs(11);t.xp6(1),t.Akn(t.DdM(16,S)),t.Q6J("header",t.Dn7(2,8,s.productCardData.name,0,20))("subheader",t.Dn7(3,12,s.productCardData.about,0,100)),t.xp6(4),t.Q6J("ngIf",s.DisplaySalePos()),t.xp6(2),t.Q6J("ngIf",void 0!==s.productCardData.rating),t.xp6(2),t.Q6J("ngIf",0!==s.productCardData.priceAfterDiscount)("ngIfElse",x)}},dependencies:[_.mk,_.sg,_.O5,l.rH,C.jx,g.Z,_.OU,_.H9,v],styles:[".card[_ngcontent-%COMP%]{background-color:#fff!important}.product-card[_ngcontent-%COMP%]{box-shadow:#63636323 0 2px 8px;padding:10px;text-align:center;border:0;position:relative}.price[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin-top:10px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:195px}.custom-notification[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px;border-radius:8px;background-color:#000c;color:#fff;font-size:18px;text-align:center;z-index:1000;box-shadow:0 8px 16px #0000004d}.success[_ngcontent-%COMP%]{background-color:#80aa27}.error[_ngcontent-%COMP%]{background-color:#f44336}.message[_ngcontent-%COMP%]{margin-bottom:10px}.close-button[_ngcontent-%COMP%]{background:none;border:none;color:#fff;cursor:pointer;font-weight:700}i[_ngcontent-%COMP%]{position:absolute;top:2%;right:2%;font-size:20px;text-align:right}.pi-heart-fill[_ngcontent-%COMP%]{color:red}"]})}return o})()},3596:(P,D,a)=>{a.d(D,{M:()=>g});var t=a(9862),f=a(7398),m=a(6306),c=a(8504),_=a(2096),l=a(553),C=a(9291);let g=(()=>{class v{constructor(n){this._HttpClient=n,this.apiUrl="",this.ProductUrl="https://api.vitaparapharma.com/api/v3/public/product"}getSingleProduct(n){return this.apiUrl=l.N.baseUrl+"v4/public/product/"+n,this._HttpClient.get(this.apiUrl)}getCategoryListOfProduct(n){return this.apiUrl=l.N.baseUrl+"v1/public/category/all-lang/"+n,this._HttpClient.get(this.apiUrl)}getAllProducts(){return this._HttpClient.get(this.ProductUrl+"/all")}getProductsBySubCategory(n){return this.apiUrl=l.N.baseUrl+"v4/public/product/category/"+n,this._HttpClient.get(this.apiUrl)}getProductsByMainCategory(n){return this.apiUrl=l.N.baseUrl+"v4/public/product/main/category/"+n,this._HttpClient.get(this.apiUrl).pipe((0,f.U)(e=>{if(e&&e.success&&e.data&&Array.isArray(e.data.products))return e.data.products;throw new Error("Invalid response format or empty response")}),(0,m.K)(e=>(console.error("Error fetching products by main category:",e),(0,c._)("Error fetching products by main category: "+e.message))))}getWishlist(){const n=localStorage.getItem("eToken");if(!n)return(0,c._)("User not authenticated");const e=new t.WM({Authorization:`Bearer ${n}`});return this._HttpClient.get(`${l.N.baseUrl}v1/user/wishlist/my`,{headers:e}).pipe((0,f.U)(d=>{if(d&&d.data&&d.data.wishlist&&d.data.wishlist.wishlistItems)return d.data.wishlist.wishlistItems.map(u=>u.productId);throw new Error("Invalid response format")}),(0,m.K)(d=>(console.error("Error fetching wishlist:",d),(0,c._)("Error fetching wishlist: "+d.message))))}addToWishlist(n){const e=localStorage.getItem("eToken");if(!e)return(0,c._)("User not authenticated");const h=new t.WM({Authorization:`Bearer ${e}`});return this._HttpClient.put(`${l.N.baseUrl}v1/user/wishlist/add/${n}`,null,{headers:h}).pipe((0,f.U)(u=>u),(0,m.K)(u=>(console.error("Error adding to wishlist:",u),(0,c._)("Error adding to wishlist: "+u.message))))}removeFromWishlist(n){const e=localStorage.getItem("eToken");if(!e)return(0,c._)("User not authenticated");const h=new t.WM({Authorization:`Bearer ${e}`});return this._HttpClient.delete(`${l.N.baseUrl}/v1/user/wishlist/remove/${n}`,{headers:h}).pipe((0,f.U)(u=>u),(0,m.K)(u=>(console.error("Error removing from wishlist:",u),(0,c._)("Error removing from wishlist: "+u.message))))}searchProducts(n){return this._HttpClient.get(`${this.ProductUrl}/all`).pipe((0,f.U)(e=>{if(!e.success||!e.data||!Array.isArray(e.data.products))throw new Error("Invalid response format");return e.data.products.filter(h=>h.name.toLowerCase().includes(n.toLowerCase())||h.description.toLowerCase().includes(n.toLowerCase()))}),(0,m.K)(e=>(console.error("Error searching products:",e),(0,_.of)([]))))}static#t=this.\u0275fac=function(e){return new(e||v)(C.LFG(t.eN))};static#r=this.\u0275prov=C.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},2537:(P,D,a)=>{a.d(D,{w:()=>m});var t=a(9291),f=a(4713);let m=(()=>{class c extends f.s{static \u0275fac=function(){let l;return function(g){return(l||(l=t.n5z(c)))(g||c)}}();static \u0275cmp=t.Xpm({type:c,selectors:[["ChevronLeftIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(C,g){1&C&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1),t.qZA()),2&C&&(t.Tol(g.getClassNames()),t.uIk("aria-label",g.ariaLabel)("aria-hidden",g.ariaHidden)("role",g.role))},encapsulation:2})}return c})()}}]);
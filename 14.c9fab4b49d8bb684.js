"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[14],{1014:(re,u,r)=>{r.r(u),r.d(u,{ShopModule:()=>le});var d=r(6814),p=r(9310),e=r(4946),b=r(8975),m=r(281),_=r(2785),c=r(95);function T(n,o){1&n&&e._UZ(0,"div",8)}let x=(()=>{class n{constructor(){this.shopBreadCrumbData={title:"shop",prev:"home"},this.products=[]}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-shop"]],decls:20,vars:2,consts:[[3,"breadcrumbData"],[1,"container","my-5"],[1,"row"],[1,"col-md-6","mb-5"],[1,"col-md-6","mb-5","d-flex","justify-content-md-end"],["name","","id","",1,"form-control"],["value",""],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6"]],template:function(i,a){1&i&&(e._UZ(0,"app-navbar")(1,"app-breadcrumb",0),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3),e._uU(5,"Showing 1-12 of 21 results"),e.qZA(),e.TgZ(6,"div",4)(7,"div")(8,"select",5)(9,"option",6),e._uU(10,"Default Sorting"),e.qZA(),e.TgZ(11,"option",6),e._uU(12,"Default Sorting"),e.qZA(),e.TgZ(13,"option",6),e._uU(14,"Default Sorting"),e.qZA(),e.TgZ(15,"option",6),e._uU(16,"Default Sorting"),e.qZA()()()()(),e.TgZ(17,"div",2),e.YNc(18,T,1,0,"div",7),e.qZA()(),e._UZ(19,"app-footer")),2&i&&(e.xp6(1),e.Q6J("breadcrumbData",a.shopBreadCrumbData),e.xp6(17),e.Q6J("ngForOf",a.products))},dependencies:[d.sg,b.S,m.c,_.L,c.YN,c.Kr]})}return n})();var h=r(553),w=r(9862);let y=(()=>{class n{constructor(t){this._HttpClient=t,this.apiUrl=""}getSingleProduct(t){return this.apiUrl=h.N.baseUrl+"v4/public/product/"+t,this._HttpClient.get(this.apiUrl)}getCategoryListOfProduct(t){return this.apiUrl=h.N.baseUrl+"v4/public/product/"+t,this._HttpClient.get(this.apiUrl)}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(w.eN))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var C=r(6593),g=r(6022),v=r(9560);const I=[{path:"",component:x},{path:":id",component:(()=>{class n{constructor(t,i,a){this.route=t,this._ProductService=i,this.sanitizer=a,this.rate=4,this.prodNumber=1,this.activeIndex=0,this.productId="",this.safeProductDescription="",this.relatedProducts=[]}getSingleProduct(){this._ProductService.getSingleProduct(+this.productId).subscribe({next:t=>{this.singleProduct=t.data.product,this.safeProductDescription=this.sanitizer.bypassSecurityTrustHtml(this.singleProduct.description)},error:t=>{console.log(t)}})}ngOnInit(){this.route.paramMap.subscribe(t=>{this.productId=t.get("id")}),this.getSingleProduct()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.gz),e.Y36(y),e.Y36(C.H7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-single-product"]],decls:123,vars:24,consts:[[1,"single-product"],[1,"container","mt-5"],[1,"row"],[1,"col-md-5","position-relative"],[1,"sale-pos"],["alt","",1,"w-100",3,"src"],[1,"col-md-7","px-3","py-2"],[1,"subhead","text-muted",3,"innerHTML"],[1,"d-flex","align-items-center"],["starStyleClass","custom-stars",3,"ngModel","cancel","ngModelChange"],[1,"numreview","text-muted","m-0","p-0","ms-3"],[1,"d-flex","mt-3","mb-2"],[1,"old-price","me-4","text-decoration-line-through","text-muted"],[1,"price","text-black"],[1,"text-muted","desc"],[1,"d-flex","bg-white","py-3"],["buttonLayout","horizontal","spinnerMode","horizontal","inputId","integeronly","inputId","horizontal","decrementButtonClass","p-button-incdec","incrementButtonClass","p-button-incdec","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"ngModel","showButtons","min","max","ngModelChange"],[1,"btn-main","ms-3"],[1,"d-flex","align-items-center","mt-2","wish"],[2,"cursor","pointer"],[1,"pi","pi-heart","me-3"],[1,"m-0","p-0",2,"cursor","pointer"],[1,"category","my-3"],[1,"fs-5","text-muted"],[1,"col-md-6"],["id","myTab","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","additional-tab","data-bs-toggle","tab","data-bs-target","#additional-tab-pane","type","button","role","tab","aria-controls","additional-tab-pane","aria-selected","true",1,"nav-link","active"],["id","reviews-tab","data-bs-toggle","tab","data-bs-target","#reviews-tab-pane","type","button","role","tab","aria-controls","reviews-tab-pane","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["id","additional-tab-pane","role","tabpanel","aria-labelledby","additional-tab","tabindex","0",1,"tab-pane","fade","show","active"],[1,"d-flex"],[1,"additional-head","me-2"],[1,"additional-details"],["id","reviews-tab-pane","role","tabpanel","aria-labelledby","reviews-tab","tabindex","0",1,"tab-pane","fade"],[1,"review","my-2"],[1,"me-4"],[1,"image-review"],["src","assets/images/review.jpeg","loading","lazy","alt","review"],[1,"mb-0","text-uppercase"],[1,"review-details"],[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0","me-3"],[1,"col-12","ps-5","my-4","text-review"],[1,"col-12","ps-5","my-4","text-muted","text-uppercase","text-review"]],template:function(i,a){1&i&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6,"22 %"),e.qZA(),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"div",6)(9,"h3"),e._uU(10),e.qZA(),e._UZ(11,"p",7),e.TgZ(12,"div",8)(13,"p-rating",9),e.NdJ("ngModelChange",function(s){return a.singleProduct.rating=s}),e.qZA(),e.TgZ(14,"p",10),e._uU(15,"(1 customer review)"),e.qZA()(),e.TgZ(16,"div",11)(17,"div",12),e._uU(18),e.ALo(19,"currency"),e.qZA(),e.TgZ(20,"div",13),e._uU(21),e.ALo(22,"currency"),e.qZA()(),e.TgZ(23,"p",14),e._uU(24),e.qZA(),e.TgZ(25,"div",15)(26,"p-inputNumber",16),e.NdJ("ngModelChange",function(s){return a.prodNumber=s}),e.qZA(),e.TgZ(27,"button",17),e._uU(28,"Add To cart"),e.qZA()(),e.TgZ(29,"div",18)(30,"div",19),e._UZ(31,"i",20),e.qZA(),e.TgZ(32,"p",21),e._uU(33,"Add to Wishlist"),e.qZA()(),e.TgZ(34,"div",22)(35,"span",23),e._uU(36,"Category: "),e.qZA()()()(),e.TgZ(37,"div",2)(38,"div",24)(39,"ul",25)(40,"li",26)(41,"button",27),e._uU(42,"ADDITIONAL DETAILS"),e.qZA()(),e.TgZ(43,"li",26)(44,"button",28),e._uU(45,"REVIEWS"),e.qZA()()(),e.TgZ(46,"div",29)(47,"div",30)(48,"div",31)(49,"p",32),e._uU(50,"CAPACITY :"),e.qZA(),e.TgZ(51,"p",33),e._uU(52,"40 mL"),e.qZA()(),e.TgZ(53,"div",31)(54,"p",32),e._uU(55,"BRAND :"),e.qZA(),e.TgZ(56,"p",33),e._uU(57,"Diadermine"),e.qZA()(),e.TgZ(58,"div",31)(59,"p",32),e._uU(60,"BRAND :"),e.qZA(),e.TgZ(61,"p",33),e._uU(62,"Diadermine"),e.qZA()(),e.TgZ(63,"div",31)(64,"p",32),e._uU(65,"BRAND :"),e.qZA(),e.TgZ(66,"p",33),e._uU(67,"Diadermine"),e.qZA()(),e.TgZ(68,"div",31)(69,"p",32),e._uU(70,"BRAND :"),e.qZA(),e.TgZ(71,"p",33),e._uU(72,"Diadermine"),e.qZA()()(),e.TgZ(73,"div",34)(74,"div",35)(75,"div",8)(76,"div",36)(77,"div",37)(78,"div"),e._UZ(79,"img",38),e.qZA(),e.TgZ(80,"p",39),e._uU(81,"my review"),e.qZA()()(),e.TgZ(82,"div",40)(83,"div",41)(84,"p",42),e._uU(85,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(86,"p-rating",9),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(87,"div",2)(88,"div",43),e._uU(89," Amazing \u{1f60d} "),e.qZA()()(),e.TgZ(90,"div",35)(91,"div",8)(92,"div",36)(93,"div",37)(94,"div"),e._UZ(95,"img",38),e.qZA(),e.TgZ(96,"p",39),e._uU(97,"my review"),e.qZA()()(),e.TgZ(98,"div",40)(99,"div",41)(100,"p",42),e._uU(101,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(102,"p-rating",9),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(103,"div",2)(104,"div",44),e._uU(105," Aliquet dictum hac gravida neque, sit faucibus eleifend vel velit. Ultricies sed a aenean quis. Pharetra platea ultricies quis suspendisse ipsum morbi. Pharetra, vivamus amet bibendum placerat vestibulum pulvinar viverra quis vitae. Pellentesque nec hac tincidunt molestie ut donec pretium tristique. "),e.qZA()()(),e.TgZ(106,"div",35)(107,"div",8)(108,"div",36)(109,"div",37)(110,"div"),e._UZ(111,"img",38),e.qZA(),e.TgZ(112,"p",39),e._uU(113,"my review"),e.qZA()()(),e.TgZ(114,"div",40)(115,"div",41)(116,"p",42),e._uU(117,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(118,"p-rating",9),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(119,"div",2)(120,"div",43),e._uU(121," Aliquet dictum hac gravida neque, sit faucibus eleifend vel velit. Ultricies sed a aenean quis. Pharetra platea ultricies quis suspendisse ipsum morbi. Pharetra, vivamus amet bibendum placerat vestibulum pulvinar viverra quis vitae. Pellentesque nec hac tincidunt molestie ut donec pretium tristique. "),e.qZA()()()()()()()(),e._UZ(122,"app-footer"),e.qZA()),2&i&&(e.xp6(7),e.Q6J("src",null==a.singleProduct?null:a.singleProduct.pictures[0],e.LSH),e.xp6(3),e.Oqu(a.singleProduct.name),e.xp6(1),e.Q6J("innerHTML",a.safeProductDescription,e.oJD),e.xp6(2),e.Q6J("ngModel",a.singleProduct.rating)("cancel",!1),e.xp6(5),e.Oqu(e.xi3(19,18,a.singleProduct.priceBeforeDiscount,"USD")),e.xp6(3),e.Oqu(e.xi3(22,21,a.singleProduct.priceAfterDiscount,"USD")),e.xp6(3),e.hij(" ",a.singleProduct.about," "),e.xp6(2),e.Q6J("ngModel",a.prodNumber)("showButtons",!0)("min",1)("max",1e3),e.xp6(60),e.Q6J("ngModel",a.rate)("cancel",!1),e.xp6(16),e.Q6J("ngModel",a.rate)("cancel",!1),e.xp6(16),e.Q6J("ngModel",a.rate)("cancel",!1))},dependencies:[b.S,m.c,g.iG,c.JJ,c.On,v.Rn,d.H9],styles:[".single-product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Marcellus,Helvetica Neue;font-weight:400;font-size:30px;line-height:38px;letter-spacing:10px}.single-product[_ngcontent-%COMP%]   .subhead[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:300;font-size:16px;line-height:30px;color:#000}.single-product[_ngcontent-%COMP%]   .numreview[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:300;font-size:12px;line-height:14px;color:#000}.old-price[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:21px;line-height:20px}.single-product[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-family:Rubik,sans-serif;font-weight:300;font-size:16px;line-height:27px}.single-product[_ngcontent-%COMP%]   .wish[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:16px}.single-product[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:30px;margin-top:30px}.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Rubik,sans-serif;color:#000;font-size:24px;font-weight:400;line-height:28px;text-align:center;letter-spacing:4px;margin-bottom:40px}.image-review[_ngcontent-%COMP%]{display:flex;align-items:center}.image-review[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;margin-right:20px}.image-review[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.review-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.text-review[_ngcontent-%COMP%]{font-size:14px;font-weight:300;line-height:24px}"]})}return n})(),title:"single product"}];let A=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(I),p.Bz]})}return n})();var S=r(8169),f=r(5219),P=r(2537),Z=r(4562),E=r(7778),V=r(4480),D=r(3259);let ae=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[d.ez,f.m8,D.z,V.T,E.q,P.w,Z.X,f.m8]})}return n})();var oe=r(336);let le=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,A,S.m,g.Xt,c.u5,v.L$,ae,oe.hJ]})}return n})()}}]);
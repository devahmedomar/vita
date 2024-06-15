"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[14],{1014:(pe,u,l)=>{l.r(u),l.d(u,{ShopModule:()=>de});var d=l(6814),p=l(7276),e=l(4946),T=l(3858),x=l(8672),h=l(553),y=l(9862);let g=(()=>{class n{constructor(t){this._HttpClient=t,this.apiUrl="",this.ProductUrl="https://api.vitaparapharma.com/api/v3/public/product"}getSingleProduct(t){return this.apiUrl=h.N.baseUrl+"v4/public/product/"+t,this._HttpClient.get(this.apiUrl)}getCategoryListOfProduct(t){return this.apiUrl=h.N.baseUrl+"v1/public/category/all-lang/"+t,this._HttpClient.get(this.apiUrl)}getAllProducts(){return this._HttpClient.get(this.ProductUrl+"/all")}getProductsByCategory(t){return this._HttpClient.get(`${this.ProductUrl+"/category/"}${t}`)}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(y.eN))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var b=l(4131),m=l(281),w=l(2451),C=l(2785),c=l(95);function I(n,o){1&n&&e._UZ(0,"app-productcard",15),2&n&&e.Q6J("productCardData",o.$implicit)}let P=(()=>{class n{constructor(t,i,a){this._ProductServiseService=t,this.spinner=i,this.productService=a,this.shopBreadCrumbData={title:"shop",prev:"home"},this.paginatedProducts=[],this.loading=!1,this.pageIndex=0,this.pageSize=12,this.totalItems=0,this.selectedSortOption="default"}ngOnInit(){this.loading=!0,this.productService.getAllProducts().subscribe(t=>{t&&t.success&&(this.products=t.data.products,this.products&&(this.totalItems=this.products.length,this.paginate(),this.sortProducts())),this.loading=!1},t=>{this.loading=!1})}paginate(){const t=this.pageIndex*this.pageSize;this.paginatedProducts=this.products?.slice(t,t+this.pageSize)||[]}nextPage(){this.pageIndex<this.totalPages-1&&(this.pageIndex++,this.paginate(),this.scrollToTop())}prevPage(){this.pageIndex>0&&(this.pageIndex--,this.paginate(),this.scrollToTop())}get totalPages(){return Math.ceil(this.totalItems/this.pageSize)}sortByPopularity(){this.paginatedProducts.sort((t,i)=>i.stockQuantity-t.stockQuantity)}sortByAverageRating(){this.paginatedProducts.sort((t,i)=>i.rating-t.rating)}sortByLatest(){this.paginatedProducts.sort((t,i)=>i.productId-t.productId)}sortByPriceLowToHigh(){this.paginatedProducts=this.paginatedProducts.sort((t,i)=>t.price-i.price)}sortByPriceHighToLow(){this.paginatedProducts.sort((t,i)=>i.price-t.price)}sortProducts(){switch(this.selectedSortOption){case"popularity":this.sortByPopularity();break;case"rating":this.sortByAverageRating();break;case"latest":this.sortByLatest();break;case"lowToHigh":this.sortByPriceLowToHigh();break;case"highToLow":this.sortByPriceHighToLow();break;default:this.paginatedProducts.sort((t,i)=>t.productId-i.productId)}}onSortOptionChange(t){t&&t.target&&t.target.value&&(this.selectedSortOption=t.target.value,this.sortProducts(),this.pageIndex=0,this.paginate())}get sortedProducts(){return this.paginatedProducts}scrollToTop(){const t=document.getElementById("products");t&&t.scrollIntoView({behavior:"smooth"})}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(T.N),e.Y36(x.t2),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-shop"]],decls:30,vars:8,consts:[[3,"breadcrumbData"],["id","products",1,"container","my-5"],[1,"row"],[1,"col-md-6","mb-5"],[1,"col-md-6","mb-5","d-flex","justify-content-md-end"],[1,"form-control",3,"ngModel","ngModelChange","change"],["value","default"],["value","popularity"],["value","rating"],["value","latest"],["value","lowToHigh"],["value","highToLow"],["class","col-md-4 col-sm-6","origin","shop",3,"productCardData",4,"ngFor","ngForOf"],[1,"col-12","d-flex","justify-content-between"],[1,"",3,"disabled","click"],["origin","shop",1,"col-md-4","col-sm-6",3,"productCardData"]],template:function(i,a){1&i&&(e._UZ(0,"app-navbar")(1,"app-breadcrumb",0),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"div")(8,"select",5),e.NdJ("ngModelChange",function(s){return a.selectedSortOption=s})("change",function(s){return a.onSortOptionChange(s)}),e.TgZ(9,"option",6),e._uU(10,"Default Sorting"),e.qZA(),e.TgZ(11,"option",7),e._uU(12,"Sort by Popularity"),e.qZA(),e.TgZ(13,"option",8),e._uU(14,"Sort by Average Rating"),e.qZA(),e.TgZ(15,"option",9),e._uU(16,"Sort by Latest"),e.qZA(),e.TgZ(17,"option",10),e._uU(18,"Sort by Price Low to High"),e.qZA(),e.TgZ(19,"option",11),e._uU(20,"Sort by Price High to Low"),e.qZA()()()()(),e.TgZ(21,"div",2),e.YNc(22,I,1,1,"app-productcard",12),e.qZA(),e.TgZ(23,"div",2)(24,"div",13)(25,"button",14),e.NdJ("click",function(){return a.prevPage()}),e._uU(26," << "),e.qZA(),e.TgZ(27,"button",14),e.NdJ("click",function(){return a.nextPage()}),e._uU(28," >> "),e.qZA()()()(),e._UZ(29,"app-footer")),2&i&&(e.xp6(1),e.Q6J("breadcrumbData",a.shopBreadCrumbData),e.xp6(4),e.lnq(" Showing ",a.pageIndex*a.pageSize+1,"-",(a.pageIndex+1)*a.pageSize>a.totalItems?a.totalItems:(a.pageIndex+1)*a.pageSize," of ",a.totalItems," results "),e.xp6(3),e.Q6J("ngModel",a.selectedSortOption),e.xp6(14),e.Q6J("ngForOf",a.paginatedProducts),e.xp6(3),e.Q6J("disabled",0===a.pageIndex),e.xp6(2),e.Q6J("disabled",a.pageIndex>=a.totalPages-1))},dependencies:[d.sg,b.S,m.c,w.I,C.L,c.YN,c.Kr,c.EJ,c.JJ,c.On],styles:["button[_ngcontent-%COMP%]{background-color:#80aa27;color:#fff;padding:5px 10px;border:none}button[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus{opacity:.9}"]})}return n})();var A=l(6593),v=l(6022),f=l(9560);function S(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"p-rating",43),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.singleProduct.rating=a)}),e.qZA(),e.TgZ(2,"p",46),e._uU(3,"(1 customer review)"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.singleProduct.rating)("cancel",!1)}}const Z=[{path:"",component:P},{path:":id",component:(()=>{class n{constructor(t,i,a){this.route=t,this._ProductService=i,this.sanitizer=a,this.rate=4,this.prodNumber=1,this.activeIndex=0,this.productId="",this.categoryId=0,this.safeProductDescription="",this.relatedProducts=[]}getSingleProduct(){this._ProductService.getSingleProduct(+this.productId).subscribe({next:t=>{this.singleProduct=t.data.product,this.categoryId=this.singleProduct.categoryId,this.getCategoriesById(),this.safeProductDescription=this.sanitizer.bypassSecurityTrustHtml(this.singleProduct.description)},error:t=>{console.log(t)}})}getCategoriesById(){this._ProductService.getCategoryListOfProduct(this.categoryId).subscribe({next:t=>{this.category=t.data.category},error:t=>{console.log(t)}})}ngOnInit(){this.route.paramMap.subscribe(t=>{this.productId=t.get("id")}),this.getSingleProduct()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(p.gz),e.Y36(g),e.Y36(A.H7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-single-product"]],decls:122,vars:24,consts:[[1,"single-product"],[1,"container","mt-5"],[1,"row"],[1,"col-md-5","position-relative"],[1,"sale-pos"],["alt","",1,"w-100",3,"src"],[1,"col-md-7","px-3","py-2"],[1,"subhead","text-muted",3,"innerHTML"],["class","d-flex align-items-center",4,"ngIf"],[1,"d-flex","mt-3","mb-2"],[1,"old-price","me-4","text-decoration-line-through","text-muted"],[1,"price","text-black"],[1,"text-muted","desc"],[1,"d-flex","bg-white","py-3"],["buttonLayout","horizontal","spinnerMode","horizontal","inputId","integeronly","inputId","horizontal","decrementButtonClass","p-button-incdec","incrementButtonClass","p-button-incdec","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"ngModel","showButtons","min","max","ngModelChange"],[1,"btn-main","ms-3"],[1,"d-flex","align-items-center","mt-2","wish"],[2,"cursor","pointer"],[1,"pi","pi-heart","me-3"],[1,"m-0","p-0",2,"cursor","pointer"],[1,"category","my-3"],[1,"fs-5","text-muted"],[1,"fs-6","ms-2"],[1,"col-md-6"],["id","myTab","role","tablist",1,"nav","nav-tabs"],["role","presentation",1,"nav-item"],["id","additional-tab","data-bs-toggle","tab","data-bs-target","#additional-tab-pane","type","button","role","tab","aria-controls","additional-tab-pane","aria-selected","true",1,"nav-link","active"],["id","reviews-tab","data-bs-toggle","tab","data-bs-target","#reviews-tab-pane","type","button","role","tab","aria-controls","reviews-tab-pane","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["id","additional-tab-pane","role","tabpanel","aria-labelledby","additional-tab","tabindex","0",1,"tab-pane","fade","show","active"],[1,"d-flex"],[1,"additional-head","me-2"],[1,"additional-details"],["id","reviews-tab-pane","role","tabpanel","aria-labelledby","reviews-tab","tabindex","0",1,"tab-pane","fade"],[1,"review","my-2"],[1,"d-flex","align-items-center"],[1,"me-4"],[1,"image-review"],["src","assets/images/review.jpeg","loading","lazy","alt","review"],[1,"mb-0","text-uppercase"],[1,"review-details"],[1,"d-flex","justify-content-between","align-items-center"],[1,"mb-0","me-3"],["starStyleClass","custom-stars",3,"ngModel","cancel","ngModelChange"],[1,"col-12","ps-5","my-4","text-review"],[1,"col-12","ps-5","my-4","text-muted","text-uppercase","text-review"],[1,"numreview","text-muted","m-0","p-0","ms-3"]],template:function(i,a){1&i&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6,"22 %"),e.qZA(),e._UZ(7,"img",5),e.qZA(),e.TgZ(8,"div",6)(9,"h3"),e._uU(10),e.qZA(),e._UZ(11,"p",7),e.YNc(12,S,4,2,"div",8),e.TgZ(13,"div",9)(14,"div",10),e._uU(15),e.ALo(16,"currency"),e.qZA(),e.TgZ(17,"div",11),e._uU(18),e.ALo(19,"currency"),e.qZA()(),e.TgZ(20,"p",12),e._uU(21),e.qZA(),e.TgZ(22,"div",13)(23,"p-inputNumber",14),e.NdJ("ngModelChange",function(s){return a.prodNumber=s}),e.qZA(),e.TgZ(24,"button",15),e._uU(25,"Add To cart"),e.qZA()(),e.TgZ(26,"div",16)(27,"div",17),e._UZ(28,"i",18),e.qZA(),e.TgZ(29,"p",19),e._uU(30,"Add to Wishlist"),e.qZA()(),e.TgZ(31,"div",20)(32,"span",21),e._uU(33,"Category: "),e.qZA(),e.TgZ(34,"span",22),e._uU(35),e.qZA()()()(),e.TgZ(36,"div",2)(37,"div",23)(38,"ul",24)(39,"li",25)(40,"button",26),e._uU(41,"ADDITIONAL DETAILS"),e.qZA()(),e.TgZ(42,"li",25)(43,"button",27),e._uU(44,"REVIEWS"),e.qZA()()(),e.TgZ(45,"div",28)(46,"div",29)(47,"div",30)(48,"p",31),e._uU(49,"CAPACITY :"),e.qZA(),e.TgZ(50,"p",32),e._uU(51,"40 mL"),e.qZA()(),e.TgZ(52,"div",30)(53,"p",31),e._uU(54,"BRAND :"),e.qZA(),e.TgZ(55,"p",32),e._uU(56,"Diadermine"),e.qZA()(),e.TgZ(57,"div",30)(58,"p",31),e._uU(59,"BRAND :"),e.qZA(),e.TgZ(60,"p",32),e._uU(61,"Diadermine"),e.qZA()(),e.TgZ(62,"div",30)(63,"p",31),e._uU(64,"BRAND :"),e.qZA(),e.TgZ(65,"p",32),e._uU(66,"Diadermine"),e.qZA()(),e.TgZ(67,"div",30)(68,"p",31),e._uU(69,"BRAND :"),e.qZA(),e.TgZ(70,"p",32),e._uU(71,"Diadermine"),e.qZA()()(),e.TgZ(72,"div",33)(73,"div",34)(74,"div",35)(75,"div",36)(76,"div",37)(77,"div"),e._UZ(78,"img",38),e.qZA(),e.TgZ(79,"p",39),e._uU(80,"my review"),e.qZA()()(),e.TgZ(81,"div",40)(82,"div",41)(83,"p",42),e._uU(84,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(85,"p-rating",43),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(86,"div",2)(87,"div",44),e._uU(88," Amazing \u{1f60d} "),e.qZA()()(),e.TgZ(89,"div",34)(90,"div",35)(91,"div",36)(92,"div",37)(93,"div"),e._UZ(94,"img",38),e.qZA(),e.TgZ(95,"p",39),e._uU(96,"my review"),e.qZA()()(),e.TgZ(97,"div",40)(98,"div",41)(99,"p",42),e._uU(100,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(101,"p-rating",43),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(102,"div",2)(103,"div",45),e._uU(104," Aliquet dictum hac gravida neque, sit faucibus eleifend vel velit. Ultricies sed a aenean quis. Pharetra platea ultricies quis suspendisse ipsum morbi. Pharetra, vivamus amet bibendum placerat vestibulum pulvinar viverra quis vitae. Pellentesque nec hac tincidunt molestie ut donec pretium tristique. "),e.qZA()()(),e.TgZ(105,"div",34)(106,"div",35)(107,"div",36)(108,"div",37)(109,"div"),e._UZ(110,"img",38),e.qZA(),e.TgZ(111,"p",39),e._uU(112,"my review"),e.qZA()()(),e.TgZ(113,"div",40)(114,"div",41)(115,"p",42),e._uU(116,"NOVEMBER 8, 2020"),e.qZA(),e.TgZ(117,"p-rating",43),e.NdJ("ngModelChange",function(s){return a.rate=s}),e.qZA()()()(),e.TgZ(118,"div",2)(119,"div",44),e._uU(120," Aliquet dictum hac gravida neque, sit faucibus eleifend vel velit. Ultricies sed a aenean quis. Pharetra platea ultricies quis suspendisse ipsum morbi. Pharetra, vivamus amet bibendum placerat vestibulum pulvinar viverra quis vitae. Pellentesque nec hac tincidunt molestie ut donec pretium tristique. "),e.qZA()()()()()()()(),e._UZ(121,"app-footer"),e.qZA()),2&i&&(e.xp6(7),e.Q6J("src",null==a.singleProduct?null:a.singleProduct.pictures[0],e.LSH),e.xp6(3),e.Oqu(null==a.singleProduct?null:a.singleProduct.name),e.xp6(1),e.Q6J("innerHTML",a.safeProductDescription,e.oJD),e.xp6(1),e.Q6J("ngIf",a.singleProduct),e.xp6(3),e.Oqu(e.xi3(16,18,null==a.singleProduct?null:a.singleProduct.priceBeforeDiscount,"USD")),e.xp6(3),e.Oqu(e.xi3(19,21,null==a.singleProduct?null:a.singleProduct.priceAfterDiscount,"USD")),e.xp6(3),e.hij(" ",null==a.singleProduct?null:a.singleProduct.about," "),e.xp6(2),e.Q6J("ngModel",a.prodNumber)("showButtons",!0)("min",1)("max",1e3),e.xp6(12),e.Oqu(null==a.category?null:a.category.name),e.xp6(50),e.Q6J("ngModel",a.rate)("cancel",!1),e.xp6(16),e.Q6J("ngModel",a.rate)("cancel",!1),e.xp6(16),e.Q6J("ngModel",a.rate)("cancel",!1))},dependencies:[d.O5,b.S,m.c,v.iG,c.JJ,c.On,f.Rn,d.H9],styles:[".single-product[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:Marcellus,Helvetica Neue;font-weight:400;font-size:30px;line-height:38px;letter-spacing:10px}.single-product[_ngcontent-%COMP%]   .subhead[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:300;font-size:16px;line-height:30px;color:#000}.single-product[_ngcontent-%COMP%]   .numreview[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:300;font-size:12px;line-height:14px;color:#000}.old-price[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:21px;line-height:20px}.single-product[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-family:Rubik,sans-serif;font-weight:300;font-size:16px;line-height:27px}.single-product[_ngcontent-%COMP%]   .wish[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:500;font-size:16px}.single-product[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:30px;margin-top:30px}.related[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Rubik,sans-serif;color:#000;font-size:24px;font-weight:400;line-height:28px;text-align:center;letter-spacing:4px;margin-bottom:40px}.image-review[_ngcontent-%COMP%]{display:flex;align-items:center}.image-review[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;margin-right:20px}.image-review[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.review-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.text-review[_ngcontent-%COMP%]{font-size:14px;font-weight:300;line-height:24px}"]})}return n})(),title:"single product"}];let E=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(Z),p.Bz]})}return n})();var H=l(8169),_=l(5219),V=l(2537),O=l(4562),k=l(7778),D=l(4480),B=l(3259);let se=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[d.ez,_.m8,B.z,D.T,k.q,V.w,O.X,_.m8]})}return n})();var ce=l(336);let de=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,E,H.m,v.Xt,c.u5,f.L$,se,ce.hJ]})}return n})()}}]);
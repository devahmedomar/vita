"use strict";(self.webpackChunkVitaparapharma=self.webpackChunkVitaparapharma||[]).push([[528],{7528:(u,a,c)=>{c.r(a),c.d(a,{BlogModule:()=>h});var r=c(6814),n=c(4946),C=c(8287),_=c(6593),i=c(228),M=c(4131),O=c(281),P=c(2785);function s(o,l){if(1&o&&(n.TgZ(0,"article",25)(1,"div",26),n._UZ(2,"img",27),n.TgZ(3,"div",28),n._uU(4),n.qZA()(),n.TgZ(5,"div",29)(6,"h2",30)(7,"a",31),n._uU(8),n.qZA()(),n._UZ(9,"div",32),n.TgZ(10,"div",33)(11,"a",31),n._uU(12,"Read More"),n.qZA()()()()),2&o){const t=l.$implicit,e=l.index,g=n.oxw();n.xp6(2),n.Q6J("src",t.picture,n.LSH),n.xp6(2),n.hij(" ",t.creation," "),n.xp6(3),n.Q6J("routerLink","/blog/"+t.blogPostId),n.xp6(1),n.Oqu(t.title),n.xp6(1),n.Q6J("innerHTML",g.safeBlogContent[e],n.oJD),n.xp6(2),n.Q6J("routerLink","/blog/"+t.blogPostId)}}function m(o,l){if(1&o&&(n.TgZ(0,"article",30)(1,"div",31),n._UZ(2,"img",32),n.qZA(),n.TgZ(3,"h2",33),n._uU(4),n.qZA(),n.TgZ(5,"div",34)(6,"ul")(7,"li",35),n._UZ(8,"i",36),n.TgZ(9,"a",37),n._uU(10,"MAYAR"),n.qZA()(),n.TgZ(11,"li",35),n._UZ(12,"i",38),n.TgZ(13,"a",37)(14,"time"),n._uU(15),n.qZA()()(),n.TgZ(16,"li",35),n._UZ(17,"i",39),n.TgZ(18,"a",37),n._uU(19,"12 Comments"),n.qZA()()()(),n.TgZ(20,"div",40),n._UZ(21,"p",41),n.qZA(),n.TgZ(22,"div",35)(23,"a",42)(24,"i",43),n._uU(25),n.qZA()(),n.TgZ(26,"a",44)(27,"i",45),n._uU(28),n.qZA()()()()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("src",t.blog.pictureUrl,n.LSH),n.xp6(2),n.hij(" ",t.blog.title," "),n.xp6(11),n.Oqu(t.blog.creation),n.xp6(6),n.Q6J("innerHTML",t.safeBlogContent,n.oJD),n.xp6(4),n.hij(" ",t.blog.likes,""),n.xp6(3),n.hij(" ",t.blog.dislikes,"")}}function b(o,l){1&o&&n._UZ(0,"div",46)}const d=[{path:"",component:(()=>{class o{constructor(t,e){this._BlogService=t,this._sanitizer=e,this.blogBreadCrumbData={title:"blog",prev:"home"},this.term="",this.blogArr=[],this.safeBlogContent=[]}ngOnInit(){this._BlogService.getBlogs().subscribe({next:t=>{this.blogArr=t.data.posts,this.blogArr.forEach(e=>{const g=this._sanitizer.bypassSecurityTrustHtml(this.transformContent(e.content));this.safeBlogContent.push(g)})}})}transformContent(t){return t.split(" ").slice(0,30).join(" ")}static#n=this.\u0275fac=function(e){return new(e||o)(n.Y36(C.Z),n.Y36(_.H7))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-blog"]],decls:96,vars:2,consts:[[3,"breadcrumbData"],["id","blog",1,"blog"],["data-aos","fade-up",1,"container"],[1,"row"],[1,"col-lg-8","entries"],["class","entry row",4,"ngFor","ngForOf"],[1,"blog-pagination"],[1,"justify-content-center"],["href","#"],[1,"active"],[1,"col-lg-4"],[1,"sidebar"],[1,"sidebar-title"],[1,"sidebar-item","search-form"],["action",""],["type","text","placeholder","Search ..."],["type","submit"],[1,"pi","pi-search"],[1,"sidebar-title","text-uppercase"],[1,"sidebar-item","recent-posts"],[1,"post-item","clearfix"],["src","assets/images/sideblog.png","alt","","height","70"],["routerLink","/blog/1"],["datetime","2020-01-01"],[1,"sidebar-item","tags"],[1,"entry","row"],[1,"entry-img","col-md-4","position-relative"],["alt","",1,"img-fluid","h-100",3,"src"],[1,"layer"],[1,"right","col-md-8"],[1,"entry-title"],[3,"routerLink"],[1,"entry-content",3,"innerHTML"],[1,"read-more"]],template:function(e,g){1&e&&(n._UZ(0,"app-navbar")(1,"app-breadcrumb",0),n.TgZ(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4),n.YNc(6,s,13,6,"article",5),n.TgZ(7,"div",6)(8,"ul",7)(9,"li")(10,"a",8),n._uU(11,"1"),n.qZA()(),n.TgZ(12,"li",9)(13,"a",8),n._uU(14,"2"),n.qZA()(),n.TgZ(15,"li")(16,"a",8),n._uU(17,"3"),n.qZA()()()()(),n.TgZ(18,"div",10)(19,"div",11)(20,"h3",12),n._uU(21,"Search"),n.qZA(),n.TgZ(22,"div",13)(23,"form",14),n._UZ(24,"input",15),n.TgZ(25,"button",16),n._UZ(26,"i",17),n.qZA()()(),n.TgZ(27,"h3",18),n._uU(28,"Latest Articles"),n.qZA(),n.TgZ(29,"div",19)(30,"div",20),n._UZ(31,"img",21),n.TgZ(32,"h4")(33,"a",22),n._uU(34,"Nihil blanditiis at in nihil autem"),n.qZA()(),n.TgZ(35,"time",23),n._uU(36,"Jan 1, 2020"),n.qZA()(),n.TgZ(37,"div",20),n._UZ(38,"img",21),n.TgZ(39,"h4")(40,"a",22),n._uU(41,"Nihil blanditiis at in nihil autem"),n.qZA()(),n.TgZ(42,"time",23),n._uU(43,"Jan 1, 2020"),n.qZA()(),n.TgZ(44,"div",20),n._UZ(45,"img",21),n.TgZ(46,"h4")(47,"a",22),n._uU(48,"Nihil blanditiis at in nihil autem"),n.qZA()(),n.TgZ(49,"time",23),n._uU(50,"Jan 1, 2020"),n.qZA()(),n.TgZ(51,"div",20),n._UZ(52,"img",21),n.TgZ(53,"h4")(54,"a",22),n._uU(55,"Nihil blanditiis at in nihil autem"),n.qZA()(),n.TgZ(56,"time",23),n._uU(57,"Jan 1, 2020"),n.qZA()()(),n.TgZ(58,"h3",12),n._uU(59,"Tags"),n.qZA(),n.TgZ(60,"div",24)(61,"ul")(62,"li")(63,"a",8),n._uU(64,"App"),n.qZA()(),n.TgZ(65,"li")(66,"a",8),n._uU(67,"IT"),n.qZA()(),n.TgZ(68,"li")(69,"a",8),n._uU(70,"Business"),n.qZA()(),n.TgZ(71,"li")(72,"a",8),n._uU(73,"Mac"),n.qZA()(),n.TgZ(74,"li")(75,"a",8),n._uU(76,"Design"),n.qZA()(),n.TgZ(77,"li")(78,"a",8),n._uU(79,"Office"),n.qZA()(),n.TgZ(80,"li")(81,"a",8),n._uU(82,"Creative"),n.qZA()(),n.TgZ(83,"li")(84,"a",8),n._uU(85,"Studio"),n.qZA()(),n.TgZ(86,"li")(87,"a",8),n._uU(88,"Smart"),n.qZA()(),n.TgZ(89,"li")(90,"a",8),n._uU(91,"Tips"),n.qZA()(),n.TgZ(92,"li")(93,"a",8),n._uU(94,"Marketing"),n.qZA()()()()()()()()(),n._UZ(95,"app-footer")),2&e&&(n.xp6(1),n.Q6J("breadcrumbData",g.blogBreadCrumbData),n.xp6(5),n.Q6J("ngForOf",g.blogArr))},dependencies:[r.sg,i.rH,M.S,O.c,P.L],styles:['.blog[_ngcontent-%COMP%]{padding:40px 0 20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]{margin-bottom:60px;box-shadow:0 4px 16px #0000000c;background-color:#fff;overflow:hidden}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-img[_ngcontent-%COMP%]{max-height:440px;margin:0;padding:0!important}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;padding:0;margin:0 0 20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--secondaryColor);transition:.3s}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]{margin-bottom:15px;color:#4084fd}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;list-style:none;align-items:center;padding:0;margin:0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{padding-left:20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;margin-right:8px;line-height:0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777;font-size:14px;display:inline-block;line-height:1}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:24px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;color:var(--mainColor);text-decoration:underline;padding:6px 0;transition:.3s;font-size:15px;font-weight:500;letter-spacing:3px;text-underline-offset:6px;text-decoration-thickness:2px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;margin-top:30px;font-weight:700}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{overflow:hidden;background-color:#fafafa;padding:60px;position:relative;text-align:center;margin:20px 0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#444;line-height:1.6;margin-bottom:0;font-style:italic;font-weight:500;font-size:22px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background-color:var(--mainColor);margin-top:20px;margin-bottom:20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]{padding-top:10px;border-top:1px solid #e6e6e6}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--mainColor);display:inline}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mainColor);transition:.3s}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]{list-style:none;display:inline;padding:0 20px 0 0;font-size:14px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{list-style:none;display:inline;padding:0;font-size:14px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:before{padding-right:6px;color:#6c757d;content:","}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]{font-size:16px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:5px}.blog[_ngcontent-%COMP%]   .entry-single[_ngcontent-%COMP%]{margin-bottom:30px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]{padding:20px;margin-bottom:30px;box-shadow:0 4px 16px #0000001a}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;margin-right:20px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:22px;margin-bottom:0;padding:0;color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{margin:0 10px 10px 0}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#01297080;margin-right:5px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:italic;color:#b7b7b7}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]{margin-bottom:30px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%]{font-weight:700}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{margin-top:30px;position:relative}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%]{margin-right:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin-bottom:2px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;color:#444;transition:.3s}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#4154f1}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]{padding-left:10px;color:#012970}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{display:block;font-size:14px;color:#013ca3;margin-bottom:5px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment.comment-reply[_ngcontent-%COMP%]{padding-left:40px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]{margin-top:30px;padding:30px;box-shadow:0 4px 16px #0000001a}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;font-size:22px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:4px;padding:10px;font-size:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#a0aaf8}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;padding:10px;font-size:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#a0aaf8}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:25px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{border-radius:4px;padding:10px 20px;border:0;background-color:#012970}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background-color:#013289}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]{color:#024ed5}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;padding:0;margin:0;list-style:none}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px;transition:.3s}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mainColor);padding:7px 16px;display:flex;align-items:center;justify-content:center}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#fff}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{padding:30px;margin:0 0 60px 20px;box-shadow:0 4px 16px #0000001a}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;padding:0;margin:0 0 15px;color:var(--secondaryColor);position:relative}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]{margin-bottom:30px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{background:#fff;border:1px solid #ddd;padding:3px 10px;position:relative}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border:0;padding:4px;border-radius:4px;width:calc(100% - 40px)}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;border:0;background:none;font-size:16px;padding:0 15px;margin:-1px;background:var(--mainColor);color:#fff;transition:.3s;border-radius:0 4px 4px 0;line-height:0}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:0}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#5465f2}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{padding-top:10px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#012970;transition:.3s}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#4154f1}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;color:#aaa;font-size:14px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%] + .post-item[_ngcontent-%COMP%]{margin-top:15px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;float:left}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:400;margin-left:95px;line-height:16px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;transition:.3s}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{display:block;margin-left:95px;font-style:italic;font-size:14px;color:#aaa}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{margin-bottom:-10px}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--secondaryColor);font-size:14px;padding:6px 14px;margin:0 6px 8px 0;border:1px solid #d7e6ff;display:inline-block;transition:.3s}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;border:1px solid var(--mainColor);background:var(--mainColor)}.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:5px;color:#a5c5fe;font-size:14px}.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;top:20%;right:-30px;background-color:#000;color:#fff;height:50px;line-height:50px;text-align:center;margin:0;padding:0 10px 5px}.blog[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding:20px 0 0 66px}.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#616161;font-weight:400;font-size:16px;line-height:30px}.right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--secondaryColor);font-size:26px;font-weight:500;line-height:28px;letter-spacing:2px}.read-more[_ngcontent-%COMP%]{margin-bottom:20px}@media (min-width:320px){.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;left:10%;width:50%}}@media (min-width:375px){.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;left:10%;width:40%}}@media (min-width:425px){.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;left:10%;width:36%}}@media (min-width:768px){.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;left:10%;width:65%}}@media (min-width:1024px){.blog[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{position:absolute;left:10%;width:75%}}']})}return o})(),title:"Blog"},{path:":id",component:(()=>{class o{constructor(t,e,g){this._BlogService=t,this._ActivatedRoute=e,this._sanitizer=g,this.relatedProducts=[],this.safeBlogContent=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{let e=t.get("id");this._BlogService.getSingleBlog(e).subscribe({next:g=>{this.blog=g.data.post,this.safeBlogContent=this._sanitizer.bypassSecurityTrustHtml(this.blog.content)},error:g=>{console.error("Error fetching single blog:",g)}})}})}static#n=this.\u0275fac=function(e){return new(e||o)(n.Y36(C.Z),n.Y36(i.gz),n.Y36(_.H7))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-singleblog"]],decls:44,vars:2,consts:[[1,"breadcrumb","d-flex","justify-content-center","align-items-center","text-center","text-capitalize","text-white","breadcrumb-all"],[1,"overlay"],[1,"content","text-center"],[1,"text-uppercase"],["aria-label","breadcrumb",2,"--bs-breadcrumb-divider","url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")"],[1,"breadcrumb"],[1,"breadcrumb-item","text-uppercase"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active","text-uppercase"],["routerLink","../"],["id","blog",1,"blog"],[1,"container"],[1,"row"],[1,"col-12","entries"],["class","entry entry-single",4,"ngIf"],[1,"blog-author","d-flex","align-items-center"],[1,"image-container","me-3"],["src","assets/images/profile.jpeg","alt",""],[1,"mb-1"],[1,"social-links"],["href","https://twitters.com/#"],[1,"pi","pi-twitter"],["href","https://facebook.com/#"],[1,"pi","pi-facebook"],["href","https://instagram.com/#"],[1,"pi","pi-instagram"],[1,"blog-comments"],[1,"row","related","main-section"],[1,"text-center","mb-3"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"entry","entry-single"],[1,"entry-img"],["alt","",1,"img-fluid","w-100",3,"src"],[1,"entry-title"],[1,"entry-meta"],[1,"d-flex","align-items-center"],[1,"pi","pi-person"],["href","blog-single.html"],[1,"pi","pi-clock"],[1,"pi","pi-chat-dots"],[1,"entry-content"],[3,"innerHTML"],["href","javascript:void(0);",1,"me-3"],[1,"pi","pi-thumbs-up","text-black"],["href","blog-single.html",1,"me-3"],[1,"pi","pi-thumbs-down","text-black"],[1,"col-lg-4","col-md-6"]],template:function(e,g){1&e&&(n._UZ(0,"app-navbar"),n.TgZ(1,"div",0),n._UZ(2,"div",1),n.TgZ(3,"div",2)(4,"h2",3),n._uU(5,"Gallery post"),n.qZA(),n.TgZ(6,"nav",4)(7,"ol",5)(8,"li",6)(9,"a",7),n._uU(10,"Home"),n.qZA()(),n.TgZ(11,"li",8)(12,"a",9),n._uU(13,"Blog"),n.qZA()(),n.TgZ(14,"li",8),n._uU(15,"Gallery post"),n.qZA()()()()(),n.TgZ(16,"section",10)(17,"div",11)(18,"div",12)(19,"div",13),n.YNc(20,m,29,6,"article",14),n.TgZ(21,"div",15)(22,"div",16),n._UZ(23,"img",17),n.qZA(),n.TgZ(24,"div")(25,"h4"),n._uU(26,"MAYAR"),n.qZA(),n.TgZ(27,"p",18),n._uU(28," For county now sister engage had season better had waited. Occasional mrs interested far expression. Engage had season better had waited. Occasional mrs interested far expression. "),n.qZA(),n.TgZ(29,"div",19)(30,"a",20),n._UZ(31,"i",21),n.qZA(),n.TgZ(32,"a",22),n._UZ(33,"i",23),n.qZA(),n.TgZ(34,"a",24),n._UZ(35,"i",25),n.qZA()()()(),n._UZ(36,"div",26),n.qZA()()()(),n.TgZ(37,"div",11)(38,"div",27)(39,"h2",28),n._uU(40,"Related products"),n.qZA(),n.TgZ(41,"div",12),n.YNc(42,b,1,0,"div",29),n.qZA()()(),n._UZ(43,"app-footer")),2&e&&(n.xp6(20),n.Q6J("ngIf",g.blog),n.xp6(22),n.Q6J("ngForOf",g.relatedProducts))},dependencies:[r.sg,r.O5,i.rH,M.S,O.c],styles:['.breadcrumb-all[_ngcontent-%COMP%]{height:290px;position:relative}.content[_ngcontent-%COMP%]{position:relative;z-index:2;padding:20px}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#d0bdaf;z-index:1}.overlay[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(bgfooter.87643b489ddbf8ab.jpeg);background-repeat:repeat-x;background-size:cover;opacity:5%;z-index:-1}.breadcrumb-all[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:54px;font-weight:300;text-align:center}ol.breadcrumb[_ngcontent-%COMP%]{justify-content:center}ol.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], ol.breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff!important;font-size:14px;text-decoration:none}ol.breadcrumb[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{margin-top:3px}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{color:#fff!important;content:">"!important;font-size:14px;font-weight:500}.blog[_ngcontent-%COMP%]{padding:40px 20px 20px}.blog[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background-color:#fff}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]{padding:30px;margin-bottom:60px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-img[_ngcontent-%COMP%]{max-height:440px;margin:-30px -30px 20px;overflow:hidden}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;padding:0;margin:0 0 20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mainColor);transition:.3s}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]{margin-bottom:15px;color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;list-style:none;align-items:center;padding:0;margin:0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{padding-left:20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;margin-right:8px;line-height:0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777;font-size:14px;display:inline-block;line-height:1}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:24px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]{text-align-last:right}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;background:var(--mainColor);color:#fff;padding:6px 20px;transition:.3s;font-size:14px;border-radius:4px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--mainColor)}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;margin-top:30px;font-weight:700}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{overflow:hidden;background-color:#fff;padding:60px;position:relative;text-align:center;margin:20px 0}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#444;line-height:1.6;margin-bottom:0;font-style:italic;font-weight:500;font-size:22px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background-color:var(--mainColor);margin-top:20px;margin-bottom:20px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]{font-size:16px}.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-left:5px}.blog[_ngcontent-%COMP%]   .entry-single[_ngcontent-%COMP%]{margin-bottom:30px}.btn-outline-comment[_ngcontent-%COMP%]{border:2px solid var(--mainColor);color:var(--mainColor);transition:all .3s ease-in-out}.btn-outline-comment[_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]{padding:0 20px;margin-bottom:30px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;margin-right:20px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:22px;margin-bottom:0;padding:0;color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{margin:0 10px 10px 0}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mainColor);margin-right:5px}.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:italic;color:#b7b7b7}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]{padding:0 20px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%]{font-weight:700}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{margin-top:30px;position:relative}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%]{margin-right:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin-bottom:2px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;color:#444;transition:.3s}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]{padding-left:10px;color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{display:block;font-size:14px;color:var(--mainColor);margin-bottom:5px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment.comment-reply[_ngcontent-%COMP%]{padding-left:40px}.blog[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:0!important}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]{margin-top:30px;padding:30px;background-color:#fff}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700;font-size:22px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:4px;padding:10px;font-size:14px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;padding:10px;font-size:14px;background-color:var(--whiteGray)!important;height:100px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:25px}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{border-radius:4px;padding:10px 20px;border:0;background-color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background-color:var(--mainColor)}.blog[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100px;height:70px;border-radius:50%;overflow:hidden;margin-right:10px;margin-top:-10px}.blog[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}']})}return o})(),title:"Blog"}];let x=(()=>{class o{static#n=this.\u0275fac=function(e){return new(e||o)};static#t=this.\u0275mod=n.oAB({type:o});static#o=this.\u0275inj=n.cJS({imports:[i.Bz.forChild(d),i.Bz]})}return o})();var f=c(8169);let h=(()=>{class o{static#n=this.\u0275fac=function(e){return new(e||o)};static#t=this.\u0275mod=n.oAB({type:o});static#o=this.\u0275inj=n.cJS({imports:[r.ez,x,f.m]})}return o})()}}]);
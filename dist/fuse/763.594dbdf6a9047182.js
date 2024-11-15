"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[763],{6763:(Ae,Z,i)=>{i.r(Z),i.d(Z,{AcademyModule:()=>ve});var u=i(2510),f=i(4859),y=i(9549),v=i(7392),b=i(284),_=i(3162),C=i(4385),x=i(3267),T=i(455),k=i(266),e=i(4650);let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var B=i(4466),h=i(3848);let O=(()=>{class n{constructor(){}ngOnInit(){this.refreshPageOnce()}refreshPageOnce(){sessionStorage.getItem("hasRefreshed")||(sessionStorage.setItem("hasRefreshed","true"),location.reload())}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},dependencies:[u.lC],encapsulation:2,changeDetection:0}),n})();var D=i(262),S=i(2843),g=i(1135),w=i(8505),q=i(4004),N=i(3900),Y=i(9646),M=i(529);let m=(()=>{class n{constructor(t){this._httpClient=t,this._categories=new g.X(null),this._course=new g.X(null),this._courses=new g.X(null)}get categories$(){return this._categories.asObservable()}get courses$(){return this._courses.asObservable()}get course$(){return this._course.asObservable()}getCategories(){return this._httpClient.get("api/apps/academy/categories").pipe((0,w.b)(t=>{this._categories.next(t)}))}getCourses(){return this._httpClient.get("api/apps/academy/courses").pipe((0,w.b)(t=>{this._courses.next(t)}))}getCourseById(t){return this._httpClient.get("api/apps/academy/courses/course",{params:{id:t}}).pipe((0,q.U)(o=>(this._course.next(o),o)),(0,N.w)(o=>o?(0,Y.of)(o):(0,S._)("Could not found course with id of "+t+"!")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(M.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),R=(()=>{class n{constructor(t){this._academyService=t}resolve(t,o){return this._academyService.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),$=(()=>{class n{constructor(t){this._academyService=t}resolve(t,o){return this._academyService.getCourses()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),K=(()=>{class n{constructor(t,o){this._router=t,this._academyService=o}resolve(t,o){return this._academyService.getCourseById(t.paramMap.get("id")).pipe((0,D.K)(s=>{console.error(s);const a=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,S._)(s)}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(u.F0),e.LFG(m))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var L=i(7579),p=i(2722),j=i(9841),Q=i(712),d=i(5707),F=i(531),E=i(3238),l=i(6895);let J=(()=>{class n{constructor(){}transform(t,o,s){return Array.isArray(t)?t.map(a=>s.find(c=>c[o]===a)):s.find(a=>a[o]===t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"fuseFindByKey",type:n,pure:!1}),n})();function P(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",15),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("value",t.slug),e.xp6(1),e.Oqu(t.title)}}const z=function(n,r,t,o){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":r,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":o}};function G(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",43),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,z,"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430"===t.slug,"\u043e\u043f\u0442\u0438\u043a\u0430"===t.slug,"\u0442\u0435\u0440\u043c\u043e\u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430"===t.slug,"\u043a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0444\u0438\u0437\u0438\u043a\u0430"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}function X(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"transloco"),e.qZA(),e.BQk()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"course.start")))}function V(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"transloco"),e.qZA(),e.BQk()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"course.start")))}function H(n,r){if(1&n&&(e.ynx(0),e.YNc(1,X,4,3,"ng-container",28),e.YNc(2,V,4,3,"ng-container",28),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0)}}function W(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.ALo(3,"transloco"),e.qZA(),e.BQk()),2&n&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"course.continue")))}const ee=function(n){return[n]};function te(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",25)(2,"div",26)(3,"div",27),e.YNc(4,G,3,7,"ng-container",28),e.ALo(5,"fuseFindByKey"),e.qZA(),e.TgZ(6,"div",29),e._uU(7),e.ALo(8,"transloco"),e.qZA(),e.TgZ(9,"div",30),e._uU(10),e.ALo(11,"transloco"),e.qZA(),e._UZ(12,"div",31),e.TgZ(13,"div",32),e._UZ(14,"mat-icon",33),e.TgZ(15,"div",34),e._uU(16),e.ALo(17,"transloco"),e.qZA()()(),e.TgZ(18,"div",35)(19,"div",36),e._UZ(20,"div",37),e.ALo(21,"percent"),e._UZ(22,"mat-progress-bar",38),e.qZA(),e.TgZ(23,"div",39)(24,"a",40)(25,"span",41),e.YNc(26,H,3,2,"ng-container",28),e.YNc(27,W,4,3,"ng-container",28),e._UZ(28,"mat-icon",42),e.qZA()()()()(),e.BQk()),2&n){const t=r.$implicit,o=e.oxw(2);e.xp6(4),e.Q6J("ngIf",e.Dn7(5,14,t.category,"slug",o.categories)),e.xp6(3),e.Oqu(e.lcZ(8,18,t.titleKey)),e.xp6(3),e.Oqu(e.lcZ(11,20,t.descriptionKey)),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.AsE("",t.duration," ",e.lcZ(17,22,"course.minutes"),""),e.xp6(4),e.Q6J("matTooltip",e.lcZ(21,24,t.progress.currentStep/t.totalSteps))("matTooltipPosition","above")("matTooltipClass","-mb-0.5"),e.xp6(2),e.Q6J("value",100*t.progress.currentStep/t.totalSteps),e.xp6(2),e.Q6J("routerLink",e.VKq(26,ee,t.id)),e.xp6(2),e.Q6J("ngIf",0===t.progress.currentStep),e.xp6(1),e.Q6J("ngIf",t.progress.currentStep>0),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function ne(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",24),e.YNc(2,te,29,28,"ng-container",16),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.filteredCourses)("ngForTrackBy",t.trackByFn)}}function oe(n,r){1&n&&(e.TgZ(0,"div",44),e._UZ(1,"mat-icon",45),e.TgZ(2,"div",46),e._uU(3),e.ALo(4,"transloco"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:document-search"),e.xp6(2),e.Oqu(e.lcZ(4,2,"noCourses.message")))}let re=(()=>{class n{constructor(t,o,s,a,c,A){this._activatedRoute=t,this._changeDetectorRef=o,this._router=s,this._academyService=a,this._fuseNavigationService=c,this._translocoService=A,this.filters={categorySlug$:new g.X("all"),query$:new g.X(""),hideCompleted$:new g.X(!1)},this._unsubscribeAll=new L.x}ngOnInit(){this.currentLanguage=this._translocoService.getActiveLang()||"ru",this._translocoService.langChanges$.subscribe(o=>{this.currentLanguage=o}),this._academyService.categories$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(o=>{this.categories=o,this._changeDetectorRef.markForCheck()}),this._academyService.courses$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(o=>{this.courses=this.filteredCourses=o,this._changeDetectorRef.markForCheck()}),(0,j.a)([this.filters.categorySlug$,this.filters.query$,this.filters.hideCompleted$]).subscribe(([o,s,a])=>{this.filteredCourses=this.courses,"all"!==o&&(this.filteredCourses=this.filteredCourses.filter(c=>c.category===o)),""!==s&&(this.filteredCourses=this.filteredCourses.filter(c=>c.titleKey.toLowerCase().includes(s.toLowerCase())||c.descriptionKey.toLowerCase().includes(s.toLowerCase())||c.category.toLowerCase().includes(s.toLowerCase()))),a&&(this.filteredCourses=this.filteredCourses.filter(c=>0===c.progress.completed))});const t=this._fuseNavigationService.getComponent("mainNavigation");t&&t.toggle(!0)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(t){this.filters.query$.next(t)}filterByCategory(t){this.filters.categorySlug$.next(t.value)}toggleCompleted(t){this.filters.hideCompleted$.next(t.checked)}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.gz),e.Y36(e.sBO),e.Y36(u.F0),e.Y36(m),e.Y36(Q.Jf),e.Y36(d.Vn))},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy-list"]],decls:36,vars:27,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-gray-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"text-xl","font-semibold"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"max-w-2xl","mt-6","sm:text-2xl","text-center","tracking-tight","text-secondary"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"fuse-mat-no-subscript","w-full","sm:w-36"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-no-subscript","w-full","sm:w-72","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"placeholder","input"],["query",""],[1,"mt-8","sm:mt-0","sm:ml-auto",3,"color","change"],[4,"ngIf","ngIfElse"],["noCourses",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[1,"flex","flex-col","h-76","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"flex","items-center","justify-between"],[4,"ngIf"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","flex-col","w-full","mt-auto"],[1,"relative","h-0.5"],[1,"z-10","absolute","inset-x-0","h-6","-mt-3",3,"matTooltip","matTooltipPosition","matTooltipClass"],[1,"h-0.5",3,"value"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2)(3,"g",3),e._UZ(4,"circle",4)(5,"circle",5),e.qZA()(),e.kcU(),e.TgZ(6,"div",6)(7,"h2",7),e._uU(8),e.ALo(9,"transloco"),e.qZA(),e.TgZ(10,"div",8),e._uU(11),e.ALo(12,"transloco"),e.qZA(),e.TgZ(13,"div",9),e._uU(14),e.ALo(15,"transloco"),e.qZA()()(),e.TgZ(16,"div",10)(17,"div",11)(18,"div",12)(19,"mat-form-field",13)(20,"mat-select",14),e.NdJ("selectionChange",function(c){return o.filterByCategory(c)}),e.TgZ(21,"mat-option",15),e._uU(22),e.ALo(23,"transloco"),e.qZA(),e.YNc(24,P,3,2,"ng-container",16),e.qZA()(),e.TgZ(25,"mat-form-field",17),e._UZ(26,"mat-icon",18),e.TgZ(27,"input",19,20),e.NdJ("input",function(){e.CHM(s);const c=e.MAs(28);return e.KtG(o.filterByQuery(c.value))}),e.ALo(29,"transloco"),e.qZA()(),e.TgZ(30,"mat-slide-toggle",21),e.NdJ("change",function(c){return o.toggleCompleted(c)}),e._uU(31),e.ALo(32,"transloco"),e.qZA()(),e.YNc(33,ne,3,2,"ng-container",22),e.YNc(34,oe,5,4,"ng-template",null,23,e.W1O),e.qZA()()()}if(2&t){const s=e.MAs(35);e.xp6(8),e.Oqu(e.lcZ(9,15,"header.subject")),e.xp6(3),e.hij(" ",e.lcZ(12,17,"header.subtitle")," "),e.xp6(3),e.hij(" ",e.lcZ(15,19,"header.description")," "),e.xp6(6),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(1),e.Oqu(e.lcZ(23,21,"filters.all")),e.xp6(2),e.Q6J("ngForOf",o.categories)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("floatLabel","always"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(1),e.s9C("placeholder",e.lcZ(29,23,"filters.searchPlaceholder")),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.hij(" ",e.lcZ(32,25,"filters.showCompleted")," "),e.xp6(2),e.Q6J("ngIf",o.filteredCourses.length)("ngIfElse",s)}},dependencies:[u.yS,f.zs,y.KE,y.qo,v.Hw,b.Nt,_.pW,F.PQ,C.gD,E.ey,T.Rr,k.gM,l.mk,l.sg,l.O5,J,l.Zx,d.Ot],encapsulation:2,changeDetection:0}),n})();var ie=i(4880);const se=["courseSteps"],ce=function(n,r,t,o){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":r,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":o}};function ae(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",41),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,ce,"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430"===t.slug,"\u043e\u043f\u0442\u0438\u043a\u0430"===t.slug,"\u0442\u0435\u0440\u043c\u043e\u0434\u0438\u043d\u0430\u043c\u0438\u043a\u0430"===t.slug,"\u043a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0444\u0438\u0437\u0438\u043a\u0430"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}const le=function(n,r){return{"bg-primary":n,"bg-gray-300 dark:bg-gray-600":r}};function ue(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"div",48),e.BQk()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(1,le,t.order<o.currentStep,t.order>=o.currentStep))}}function ge(n,r){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",7),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function me(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",49),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}function pe(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",50),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}const de=function(n,r,t){return{"bg-primary dark:bg-primary text-on-primary group-hover:bg-primary-800 ring-transparent":n,"ring-primary":r,"ring-gray-300 dark:ring-gray-600 group-hover:ring-gray-400":t}};function fe(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",42),e.YNc(2,ue,2,4,"ng-container",9),e.TgZ(3,"div",43),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.goToStep(a.order))}),e.TgZ(4,"div",44),e.YNc(5,ge,2,1,"ng-container",9),e.YNc(6,me,3,1,"ng-container",9),e.YNc(7,pe,3,1,"ng-container",9),e.qZA(),e.TgZ(8,"div",45)(9,"div",46),e._uU(10),e.ALo(11,"transloco"),e.qZA(),e.TgZ(12,"div",47),e._uU(13),e.ALo(14,"transloco"),e.qZA()()()(),e.BQk()}if(2&n){const t=r.$implicit,o=r.last,s=e.oxw();e.xp6(1),e.ekj("current-step",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",!o),e.xp6(2),e.Q6J("ngClass",e.kEZ(13,de,t.order<s.currentStep,t.order===s.currentStep,t.order>s.currentStep)),e.xp6(1),e.Q6J("ngIf",t.order<s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order>s.currentStep),e.xp6(3),e.Oqu(e.lcZ(11,9,t.title)),e.xp6(3),e.Oqu(e.lcZ(14,11,t.subtitle))}}function xe(n,r){if(1&n&&e._UZ(0,"div",52),2&n){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.content,e.oJD)}}function he(n,r){1&n&&(e.ynx(0),e.TgZ(1,"mat-tab"),e.YNc(2,xe,1,1,"ng-template",51),e.qZA(),e.BQk())}const U=function(){return[".."]},ye=[{path:"",component:O,resolve:{categories:R},children:[{path:"",pathMatch:"full",component:re,resolve:{courses:$}},{path:":id",component:(()=>{class n{constructor(t,o,s,a,c,A,_e){this._document=t,this._academyService=o,this._changeDetectorRef=s,this._elementRef=a,this._fuseMediaWatcherService=c,this._fuseNavigationService=A,this._translocoService=_e,this.currentStep=0,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new L.x}ngOnInit(){this.currentLanguage=this._translocoService.getActiveLang()||"ru",this._translocoService.langChanges$.subscribe(o=>{this.currentLanguage=o}),this._academyService.categories$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(o=>{this.categories=o,this._changeDetectorRef.markForCheck()}),this._academyService.course$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(o=>{this.course=o,this.goToStep(o.progress.currentStep),this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaChange$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(({matchingAliases:o})=>{o.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()});const t=this._fuseNavigationService.getComponent("mainNavigation");t&&t.toggle(!0)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToStep(t){this.currentStep=t,this.courseSteps.selectedIndex=this.currentStep,this._changeDetectorRef.markForCheck()}goToPreviousStep(){0!==this.currentStep&&(this.goToStep(this.currentStep-1),this._scrollCurrentStepElementIntoView())}goToNextStep(){this.currentStep!==this.course.totalSteps-1&&(this.goToStep(this.currentStep+1),this._scrollCurrentStepElementIntoView())}trackByFn(t,o){return o.id||t}_scrollCurrentStepElementIntoView(){setTimeout(()=>{const t=this._document.getElementsByClassName("current-step")[0];t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.K0),e.Y36(m),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(ie.T),e.Y36(Q.Jf),e.Y36(d.Vn))},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy-details"]],viewQuery:function(t,o){if(1&t&&e.Gf(se,7),2&t){let s;e.iGM(s=e.CRH())&&(o.courseSteps=s.first)}},decls:73,vars:55,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-90","dark:bg-gray-900",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","items-start","p-8","border-b"],[1,"inline-flex","items-center","leading-6","text-primary","hover:underline",3,"routerLink"],[1,"inline-flex","items-center"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-1.5","font-medium","leading-5"],[4,"ngIf"],[1,"mt-3","text-2xl","font-semibold"],[1,"text-secondary"],[1,"mt-6","flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"py-2","px-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","overflow-hidden"],[1,"lg:hidden","flex","flex-0","items-center","py-2","pl-4","pr-6","sm:py-4","md:pl-6","md:pr-8","border-b","lg:border-b-0","bg-card","dark:bg-transparent"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"ml-2.5","text-md","sm:text-xl","font-medium","tracking-tight","truncate"],[1,"hidden","lg:block","flex-0","h-0.5","w-full",3,"value"],["cdkScrollable","",1,"flex-auto","overflow-y-auto"],[1,"fuse-mat-no-header",3,"animationDuration"],["courseSteps",""],[1,"z-10","sticky","hidden","lg:flex","bottom-4","p-4"],[1,"flex","items-center","justify-center","mx-auto","p-2","rounded-full","shadow-lg","bg-primary"],["mat-flat-button","",1,"flex-0",3,"color","click"],[1,"mr-2",3,"svgIcon"],[1,"mr-1"],[1,"flex","items-center","justify-center","mx-2.5","font-medium","leading-5","text-on-primary"],[1,"mx-0.5","text-hint"],[1,"ml-1"],[1,"ml-2",3,"svgIcon"],[1,"lg:hidden","flex","items-center","p-4","border-t","bg-card"],["mat-icon-button","",3,"click"],[1,"flex","items-center","justify-center","ml-1","lg:ml-2","font-medium","leading-5"],[1,"flex-auto","ml-6","rounded-full",3,"value"],["mat-icon-button","",1,"ml-4",3,"click"],["mat-icon-button","",1,"ml-0.5",3,"click"],[1,"mt-7","py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"relative","group","py-6"],[1,"relative","flex","items-start","cursor-pointer",3,"click"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring-2","ring-inset","bg-card","dark:bg-default",3,"ngClass"],[1,"ml-4"],[1,"font-medium","leading-4"],[1,"mt-1.5","text-md","leading-4","text-secondary"],[1,"absolute","top-6","left-4","w-0.5","h-full","-ml-px",3,"ngClass"],[1,"text-md","font-semibold","text-primary","dark:text-primary-500"],[1,"text-md","font-semibold","text-hint","group-hover:text-secondary"],["matTabContent",""],[1,"prose","prose-sm","min-w-full","mx-auto","sm:my-2","lg:mt-4","p-6","sm:p-10","sm:py-12","rounded-2xl","shadow","overflow-hidden","bg-card",3,"innerHTML"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"a",5)(6,"span",6),e._UZ(7,"mat-icon",7),e.TgZ(8,"span",8),e._uU(9),e.ALo(10,"transloco"),e.qZA()()(),e.YNc(11,ae,3,7,"ng-container",9),e.ALo(12,"fuseFindByKey"),e.TgZ(13,"div",10),e._uU(14),e.ALo(15,"transloco"),e.qZA(),e.TgZ(16,"div",11),e._uU(17),e.ALo(18,"transloco"),e.qZA(),e.TgZ(19,"div",12),e._UZ(20,"mat-icon",13),e.TgZ(21,"div",14),e._uU(22),e.ALo(23,"transloco"),e.qZA()()(),e.TgZ(24,"div",15)(25,"ol"),e.YNc(26,fe,15,17,"ng-container",16),e.qZA()()(),e.TgZ(27,"mat-drawer-content",17)(28,"div",18)(29,"a",19),e._UZ(30,"mat-icon",20),e.qZA(),e.TgZ(31,"h2",21),e._uU(32),e.ALo(33,"transloco"),e.qZA()(),e._UZ(34,"mat-progress-bar",22),e.TgZ(35,"div",23)(36,"mat-tab-group",24,25),e.YNc(38,he,3,0,"ng-container",16),e.qZA(),e.TgZ(39,"div",26)(40,"div",27)(41,"button",28),e.NdJ("click",function(){return o.goToPreviousStep()}),e._UZ(42,"mat-icon",29),e.TgZ(43,"span",30),e._uU(44),e.ALo(45,"transloco"),e.qZA()(),e.TgZ(46,"div",31)(47,"span"),e._uU(48),e.qZA(),e.TgZ(49,"span",32),e._uU(50,"/"),e.qZA(),e.TgZ(51,"span"),e._uU(52),e.qZA()(),e.TgZ(53,"button",28),e.NdJ("click",function(){return o.goToNextStep()}),e.TgZ(54,"span",33),e._uU(55),e.ALo(56,"transloco"),e.qZA(),e._UZ(57,"mat-icon",34),e.qZA()()()(),e.TgZ(58,"div",35)(59,"button",36),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(3);return e.KtG(c.toggle())}),e._UZ(60,"mat-icon",20),e.qZA(),e.TgZ(61,"div",37)(62,"span"),e._uU(63),e.qZA(),e.TgZ(64,"span",32),e._uU(65,"/"),e.qZA(),e.TgZ(66,"span"),e._uU(67),e.qZA()(),e._UZ(68,"mat-progress-bar",38),e.TgZ(69,"button",39),e.NdJ("click",function(){return o.goToPreviousStep()}),e._UZ(70,"mat-icon",20),e.qZA(),e.TgZ(71,"button",40),e.NdJ("click",function(){return o.goToNextStep()}),e._UZ(72,"mat-icon",20),e.qZA()()()()()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",o.drawerMode)("opened",o.drawerOpened),e.xp6(3),e.Q6J("routerLink",e.DdM(53,U)),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-sm-left"),e.xp6(2),e.Oqu(e.lcZ(10,35,"back")),e.xp6(2),e.Q6J("ngIf",e.Dn7(12,37,o.course.category,"slug",o.categories)),e.xp6(3),e.Oqu(e.lcZ(15,41,o.course.titleKey)),e.xp6(3),e.Oqu(e.lcZ(18,43,o.course.descriptionKey)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.AsE("",o.course.duration,"",e.lcZ(23,45,"course.minutes"),""),e.xp6(4),e.Q6J("ngForOf",o.course.steps)("ngForTrackBy",o.trackByFn),e.xp6(3),e.Q6J("routerLink",e.DdM(54,U)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),e.xp6(2),e.hij(" ",e.lcZ(33,47,o.course.titleKey)," "),e.xp6(2),e.Q6J("value",100*(o.currentStep+1)/o.course.totalSteps),e.xp6(2),e.Q6J("animationDuration","200"),e.xp6(2),e.Q6J("ngForOf",o.course.steps)("ngForTrackBy",o.trackByFn),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Oqu(e.lcZ(45,49,"back-to")),e.xp6(4),e.Oqu(o.currentStep+1),e.xp6(4),e.Oqu(o.course.totalSteps),e.xp6(1),e.Q6J("color","primary"),e.xp6(2),e.Oqu(e.lcZ(56,51,"next")),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:view-list"),e.xp6(3),e.Oqu(o.currentStep+1),e.xp6(4),e.Oqu(o.course.totalSteps),e.xp6(1),e.Q6J("value",100*(o.currentStep+1)/o.course.totalSteps),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"))},dependencies:[u.yS,f.lW,f.zs,v.Hw,_.pW,F.PQ,x.jA,x.kh,x.LW,l.mk,l.sg,l.O5,h.SP,h.uX,h.Vc,J,d.Ot],encapsulation:2,changeDetection:0}),n})(),resolve:{course:K}}]}];let ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(ye),f.ot,y.lN,v.Ps,b.c,_.Cv,C.LD,x.SJ,T.rP,k.AV,I,B.m,h.Nh,d.y4]}),n})()}}]);
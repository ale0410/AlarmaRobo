"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6533],{6533:(P,f,l)=>{l.r(f),l.d(f,{SignupPageModule:()=>w});var m=l(4755),g=l(5030),u=l(9972),h=l(96),_=l(9249);var e=l(2223),v=l(6118),p=l(5861),M=l(1085);let Z=(()=>{class i{constructor(n){var o=this;this.db=n,this.errorMessage="Lo sentimos, error interno. Operaci\xf3n no realizada.",this.notExist="La busqueda no arroj\xf3 resultados.",this.setWithId=function(){var t=(0,p.Z)(function*(r,s,a){yield o.db.collection(r).doc(s).set(a).catch(d=>{throw console.log(d),new Error(o.errorMessage)})});return function(r,s,a){return t.apply(this,arguments)}}(),this.set=function(){var t=(0,p.Z)(function*(r,s){yield o.db.collection(r).add(s).then(a=>a.id).catch(a=>{throw console.log(a),new Error(o.errorMessage)})});return function(r,s){return t.apply(this,arguments)}}(),this.update=function(){var t=(0,p.Z)(function*(r,s,a){yield o.db.collection(r).doc(s).update(a).catch(d=>{throw console.log(d),new Error(o.errorMessage)})});return function(r,s,a){return t.apply(this,arguments)}}(),this.delete=function(){var t=(0,p.Z)(function*(r,s){yield o.db.collection(r).doc(s).delete().catch(a=>{throw console.log(a),new Error(o.errorMessage)})});return function(r,s){return t.apply(this,arguments)}}(),this.getDocOnce=function(){var t=(0,p.Z)(function*(r,s){let a=null;if(yield o.db.collection(r).doc(s).get().forEach(d=>{d.exists&&(a=d)}),a)return a;throw new Error(o.notExist)});return function(r,s){return t.apply(this,arguments)}}(),this.getDbOnce=function(){var t=(0,p.Z)(function*(r){let s=null;if(yield o.db.collection(r).get().forEach(a=>{a.empty||(s=a)}),s)return s;throw new Error(o.notExist)});return function(r){return t.apply(this,arguments)}}()}getObserverDoc(n,o){return this.db.collection(n).doc(o).valueChanges()}getObserverDb(n){return this.db.collection(n).valueChanges()}}return i.\u0275fac=function(n){return new(n||i)(e.LFG(M.ST))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function C(i,c){1&i&&(e.TgZ(0,"div"),e._uU(1," spinnerr "),e.qZA())}function b(i,c){if(1&i&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.hij(" ",n.error," ")}}function y(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"form",2,3)(2,"ion-list",4)(3,"ion-item")(4,"ion-label",5),e._uU(5,"Usuario"),e.qZA(),e.TgZ(6,"ion-input",6,7),e.NdJ("ngModelChange",function(t){e.CHM(n);const r=e.oxw();return e.KtG(r.signup.username=t)}),e.qZA()(),e.TgZ(8,"ion-item")(9,"ion-label",5),e._uU(10,"Correo"),e.qZA(),e.TgZ(11,"ion-input",8,9),e.NdJ("ngModelChange",function(t){e.CHM(n);const r=e.oxw();return e.KtG(r.signup.email=t)}),e.qZA()(),e.TgZ(13,"ion-text",10)(14,"p",11),e._uU(15," Por favor, ingrese su Correo Electr\xf3nico. "),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label",5),e._uU(18,"Contrase\xf1a"),e.qZA(),e.TgZ(19,"ion-input",12,13),e.NdJ("ngModelChange",function(t){e.CHM(n);const r=e.oxw();return e.KtG(r.pass=t)}),e.qZA()(),e.TgZ(21,"ion-text",10)(22,"p",11),e._uU(23," La contrase\xf1a ingresada es muy corta. "),e.qZA()(),e.TgZ(24,"ion-text",10)(25,"p",11),e._uU(26," Por favor, ingrese una contrase\xf1a. "),e.qZA()(),e.TgZ(27,"ion-item")(28,"ion-label",5),e._uU(29,"Repita contrase\xf1a"),e.qZA(),e.TgZ(30,"ion-input",14),e.NdJ("ngModelChange",function(t){e.CHM(n);const r=e.oxw();return e.KtG(r.passCheck=t)}),e.qZA()(),e.TgZ(31,"ion-text",10)(32,"p",11),e._uU(33," Las contrase\xf1as no coinciden. "),e.qZA()()(),e.TgZ(34,"div",15)(35,"ion-button",16),e.NdJ("click",function(){e.CHM(n);const t=e.MAs(1),r=e.oxw();return e.KtG(r.onSignup(t))}),e._uU(36,"Crear"),e.qZA(),e.TgZ(37,"ion-button",17),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.onCancel())}),e._uU(38,"Cancelar"),e.qZA(),e.TgZ(39,"ion-button",17),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.signUpWithGoogle())}),e._uU(40,"Entrar con Google"),e.qZA()()()}if(2&i){const n=e.MAs(12),o=e.MAs(20),t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.signup.username),e.xp6(5),e.Q6J("ngModel",t.signup.email),e.xp6(3),e.Q6J("hidden",n.valid||!1===t.submitted),e.xp6(5),e.Q6J("ngModel",t.pass),e.xp6(3),e.Q6J("hidden",!o.errors||!1===t.submitted),e.xp6(3),e.Q6J("hidden",!o.errors||!1===t.submitted),e.xp6(5),e.Q6J("ngModel",t.passCheck),e.xp6(2),e.Q6J("hidden",t.passCheck===t.pass||o.errors)}}const T=[{path:"",component:(()=>{class i{constructor(n,o,t){this.router=n,this.auth=o,this.db=t,this.signup=_.u,this.submitted=!1,this.spinner=!1,this.error="",this.passCheck=""}onSignup(n){this.submitted=!0,n.valid&&this.passCheck===this.pass&&this.auth.signUp(n.form.value.email,n.form.value.password).then(o=>{null!=o.user&&(this.saveNewUser(o.user.uid),this.router.navigate(["/"]))}).catch(o=>this.error=o).finally(()=>{this.spinner=!1})}signUpWithGoogle(){this.submitted=!0,this.auth.signUpWithGoogle().then(n=>{null!=n.user&&(this.saveNewUser(n.user.uid),this.router.navigate(["/"]))}).catch(n=>this.error=n).finally(()=>{this.spinner=!1})}onCancel(){this.router.navigateByUrl("/login")}saveNewUser(n){this.signup.createdAt=(new Date).toJSON(),this.db.setWithId("usuarios",n,this.signup)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(h.F0),e.Y36(v.e),e.Y36(Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-signup"]],decls:8,vars:3,consts:[[4,"ngIf"],["novalidate","",4,"ngIf"],["novalidate",""],["signupForm","ngForm"],["lines","none"],["position","stacked","color","primary"],["name","username","type","text",3,"ngModel","ngModelChange"],["username","ngModel"],["name","email","type","text","required","",3,"ngModel","ngModelChange"],["mail","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","required","","minlength","6",3,"ngModel","ngModelChange"],["password","ngModel"],["name","passRepeat","type","password","required","",3,"ngModel","ngModelChange"],[1,"ion-padding"],["type","submit","expand","block",3,"click"],["color","light","type","submit","expand","block",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Registro"),e.qZA()()(),e.TgZ(4,"ion-content"),e.YNc(5,C,2,0,"div",0),e.YNc(6,b,2,1,"div",0),e.YNc(7,y,41,8,"form",1),e.qZA()),2&n&&(e.xp6(5),e.Q6J("ngIf",o.spinner),e.xp6(1),e.Q6J("ngIf",o.error),e.xp6(1),e.Q6J("ngIf",!o.spinner))},dependencies:[m.O5,g._Y,g.JJ,g.JL,g.Q7,g.wO,g.On,g.F,u.YG,u.W2,u.Gu,u.pK,u.Ie,u.Q$,u.q_,u.yW,u.wd,u.sr,u.j9],styles:[".list[_ngcontent-%COMP%]{margin-bottom:0}"]}),i})()}];let S=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(T),h.Bz]}),i})(),w=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,g.u5,u.Pc,S]}),i})()}}]);
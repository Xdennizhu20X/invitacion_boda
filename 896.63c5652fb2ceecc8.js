"use strict";(self.webpackChunkinvitacion_boda=self.webpackChunkinvitacion_boda||[]).push([[896],{5896:(O,c,i)=>{i.r(c),i.d(c,{InicioModule:()=>V});var g=i(6814),m=i(4670),t=i(4946);let p=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-invitado"]],decls:9,vars:0,consts:[[1,"bg-white","h-auto","py-20","w-full","flex","flex-col","justify-center","items-center","text-center"],["href","https://fonts.googleapis.com/css?family=Roboto","rel","stylesheet"],["data-aos","fade-down","data-aos-duration","1000","src","assets/img/email-heart.png","alt","",1,"w-12"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"text-6xl",2,"font-family","'Hilliamoon', sans-serif"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","300",1,"p-3","text-sm","text-gray-700",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","500",1,"p-3","text-sm","text-gray-700",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"link",1)(2,"img",2),t.TgZ(3,"h1",3),t._uU(4,"\xa1Estas invitado!"),t.qZA(),t.TgZ(5,"p",4),t._uU(6," Despu\xe9s de recorrer muchos lugares juntos y compartir momentos inolvidables, nos casamos. "),t.qZA(),t.TgZ(7,"p",5),t._uU(8," Comenzamos una nueva aventura y no ser\xeda posible celebrar nuestra boda sin la compa\xf1\xeda de nuestra familia y mejores amigos. "),t.qZA()())},styles:['@import"https://fonts.cdnfonts.com/css/hilliamoon";@import"https://fonts.cdnfonts.com/css/rihania-smith";@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";[_nghost-%COMP%]{display:block}']})}return s})(),y=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-recepcion"]],decls:12,vars:0,consts:[[1,"bg-[#e8eee6]","h-auto","py-10","w-full","flex","flex-col","justify-center","items-center","text-center"],["href","https://fonts.googleapis.com/css?family=Roboto","rel","stylesheet"],["data-aos","fade-down","data-aos-duration","1000",1,"text-sm","text-gray-700",2,"font-family","'Roboto', sans-serif","font-weight","700","font-style","normal"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"p-1","text-sm","text-gray-700",2,"font-family","'Roboto', sans-serif","font-weight","300","font-style","normal"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","300","href","https://maps.app.goo.gl/ig5wZ5azjUF31RmQ6","target","_blank","type","button",1,"mt-5","focus:outline-none","text-white","bg-[#92a58b]","hover:bg-[#798c72]","focus:ring-4","focus:ring-[#b3c5ab]","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"link",1),t.TgZ(2,"p",2),t._uU(3," Recepci\xf3n "),t.qZA(),t.TgZ(4,"p",3),t._uU(5," 16h00 "),t._UZ(6,"br"),t._uU(7," S\xe1bado, 31 de Agosto de 2024 "),t._UZ(8,"br"),t._uU(9," Malacatos, Loja - Ecuador "),t.qZA(),t.TgZ(10,"a",4),t._uU(11,"Conocer Ubicaci\xf3n"),t.qZA()())},styles:["[_nghost-%COMP%]{display:block}"]})}return s})();var v=i(5592),x=i(7394);class Z extends x.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const r={setInterval(s,o,...e){const{delegate:a}=r;return a?.setInterval?a.setInterval(s,o,...e):setInterval(s,o,...e)},clearInterval(s){const{delegate:o}=r;return(o?.clearInterval||clearInterval)(s)},delegate:void 0};var b=i(9039);const u={now:()=>(u.delegate||Date).now(),delegate:void 0};class d{constructor(o,e=d.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,a){return new this.schedulerActionCtor(this,o).schedule(a,e)}}d.now=u.now;const U=new class A extends d{constructor(o,e=d.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let a;this._active=!0;do{if(a=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,a){for(;o=e.shift();)o.unsubscribe();throw a}}}(class w extends Z{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var a;if(this.closed)return this;this.state=o;const n=this.id,l=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(l,n,e)),this.pending=!0,this.delay=e,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(l,this.id,e),this}requestAsyncId(o,e,a=0){return r.setInterval(o.flush.bind(o,this),a)}recycleAsyncId(o,e,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return e;null!=e&&r.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(o,e);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let n,a=!1;try{this.work(o)}catch(l){a=!0,n=l||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),n}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:a}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,b.P)(a,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var T=i(671);let C=(()=>{class s{constructor(){this._second=1e3,this._minute=60*this._second,this._hour=60*this._minute,this._day=24*this._hour,this.source=function q(s=0,o,e=U){let a=-1;return null!=o&&((0,T.K)(o)?e=o:a=o),new v.y(n=>{let l=function _(s){return s instanceof Date&&!isNaN(s)}(s)?+s-e.now():s;l<0&&(l=0);let z=0;return e.schedule(function(){n.closed||(n.next(z++),0<=a?this.schedule(void 0,a):n.complete())},l)})}(0,1e3)}ngOnInit(){this.clock=this.source.subscribe(e=>{this.now=new Date,this.end=new Date(2024,7,31,0,0,0),this.showDate()})}showDate(){let e=this.end-this.now;this.day=Math.floor(e/this._day),this.hours=Math.floor(e%this._day/this._hour),this.minutes=Math.floor(e%this._hour/this._minute),this.seconds=Math.floor(e%this._minute/this._second)}static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-contador"]],decls:37,vars:4,consts:[[1,"bg-cover","bg-no-repeat","bg-[url('assets/img/contador.webp')]","h-80","w-screen","text-center","flex","flex-col","gap-0","items-center","justify-end","pb-20"],["href","https://fonts.googleapis.com/css?family=Roboto","rel","stylesheet"],[1,"coming-soon"],["data-aos","fade-down","data-aos-duration","1000",1,"py-2","text-xl","font-bold","text-white",2,"font-family","'Roboto', sans-serif","font-weight","300","font-style","normal"],[1,"flex","space-x-5"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"flex","flex-col","leading-4","text-center"],[1,"text-white","font-bold",2,"font-family","'Roboto', sans-serif","font-weight","700","font-style","normal"],[1,"text-white","text-xs",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","300",1,"flex","flex-col","leading-4","text-center"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","400",1,"flex","flex-col","leading-4","text-center"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","500",1,"flex","flex-col","leading-4","text-center"],[1,"bg-cover","sepia-0","bg-[url('assets/img/fondo.JPG')]"],[1,"h-auto","pt-12","pb-5","w-full","flex","flex-col","justify-center","items-center","text-center"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","600","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",1,"w-12","fill-gray-400"],["d","M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"],["data-aos","fade-down","data-aos-duration","1000","src","assets/img/love.webp","alt","",1,"w-64","drop-shadow-4xl","pt-8"],[1,"w-full","flex","justify-end","-translate-y-10"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200","src","assets/img/myd.webp","alt","",1,"w-64","drop-shadow-4xl","justify-end","items-end"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"section"),t._UZ(2,"link",1),t.TgZ(3,"div",2)(4,"p",3),t._uU(5," Faltan "),t.qZA(),t.TgZ(6,"div",4)(7,"div",5)(8,"p",6),t._uU(9),t.qZA(),t.TgZ(10,"p",7),t._uU(11,"D\xedas"),t.qZA()(),t.TgZ(12,"div",8)(13,"p",6),t._uU(14),t.qZA(),t.TgZ(15,"p",7),t._uU(16,"Horas"),t.qZA()(),t.TgZ(17,"div",9)(18,"p",6),t._uU(19),t.qZA(),t.TgZ(20,"p",7),t._uU(21,"Minutos"),t.qZA()(),t.TgZ(22,"div",10)(23,"p",6),t._uU(24),t.qZA(),t.TgZ(25,"p",7),t._uU(26,"Segundos"),t.qZA()()()()()(),t.TgZ(27,"div",11)(28,"div",12),t._UZ(29,"link",1),t.O4$(),t.TgZ(30,"svg",13)(31,"title"),t._uU(32,"camera-outline"),t.qZA(),t._UZ(33,"path",14),t.qZA()(),t.kcU(),t._UZ(34,"img",15),t.TgZ(35,"div",16),t._UZ(36,"img",17),t.qZA()()),2&a&&(t.xp6(9),t.hij("",n.day," "),t.xp6(5),t.hij("",n.hours," "),t.xp6(5),t.hij("",n.minutes," "),t.xp6(5),t.hij("",n.seconds," "))},styles:["[_nghost-%COMP%]{display:block}"]})}return s})(),M=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-dresscode"]],decls:9,vars:0,consts:[[1,"bg-white","h-auto","py-12","w-full","flex","flex-col","justify-center","items-center","text-center"],["href","https://fonts.googleapis.com/css?family=Roboto","rel","stylesheet"],["data-aos","fade-down","data-aos-duration","1000",1,"text-6xl",2,"font-family","'Hilliamoon', sans-serif"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"p-3","text-sm","text-gray-600",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"],[1,"flex","items-center","justify-center","w-full"],["data-aos","fade-down","data-aos-duration","1000","src","assets/img/vestido.png","alt","",1,"w-40","drop-shadow-4xl"],["data-aos","fade-down","data-aos-duration","1000","src","assets/img/traje.png","alt","",1,"w-40","drop-shadow-4xl"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"link",1),t.TgZ(2,"h1",2),t._uU(3,"Dresscode"),t.qZA(),t.TgZ(4,"p",3),t._uU(5," Nos encantara verte formal. Nos reservamos el Blanco para la novia, y el caf\xe9 claro para el novio. "),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5)(8,"img",6),t.qZA()())},styles:["[_nghost-%COMP%]{display:block}"]})}return s})();var D=i(3519),f=i.n(D),I=i(9862);let j=(()=>{class s{constructor(e){this.http=e,this.apiUrl="http://localhost:3000/api/eventos"}createEvento(e){return this.http.post(this.apiUrl,e)}getEventos(){return this.http.get(this.apiUrl)}getEventoById(e){return this.http.get(`${this.apiUrl}/${e}`)}updateEvento(e,a){return this.http.put(`${this.apiUrl}/${e}`,a)}deleteEvento(e){return this.http.delete(`${this.apiUrl}/${e}`)}static#t=this.\u0275fac=function(a){return new(a||s)(t.LFG(I.eN))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),k=(()=>{class s{constructor(e){this.eventoService=e}openSaveDialog(){f().fire({title:"Detalles del evento",html:'\n        <div class="mb-4 flex flex-col justify-center items-center">\n          <label for="first-name" class="block text-sm font-medium text-gray-700">Nombre:</label>\n          <input id="first-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">\n        </div>\n        <div class="mb-4 flex flex-col justify-center items-center">\n          <label for="last-name" class="block text-sm font-medium text-gray-700">Apellido:</label>\n          <input id="last-name" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="text">\n        </div>\n        <div class="mb-4 flex flex-col justify-center items-center">\n          <label class="block text-sm font-medium text-gray-700">Asistencia:</label>\n          <div class="flex items-center">\n            <input type="radio" id="yes" name="attendance" value="yes" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">\n            <label for="yes" class="ml-2 block text-sm font-medium text-gray-700">S\xed</label>\n          </div>\n          <div class="flex items-center mt-2">\n            <input type="radio" id="no" name="attendance" value="no" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">\n            <label for="no" class="ml-2 block text-sm font-medium text-gray-700">No</label>\n          </div>\n        </div>\n        <div class="mb-4 flex flex-col justify-center items-center">\n          <label for="attendees" class="block text-sm font-medium text-gray-700">N\xfamero de asistentes:</label>\n          <input id="attendees" class="swal2-input mt-1 block w-[90%] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" type="number" min="0">\n        </div>\n      ',showDenyButton:!0,denyButtonText:"No guardar",showCancelButton:!0,confirmButtonText:"Guardar",customClass:{popup:"px-6 py-4 rounded-lg shadow-lg border border-gray-300",title:"text-xl font-medium text-gray-700",confirmButton:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",denyButton:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",cancelButton:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"},width:"100%",padding:"1rem",background:"white",preConfirm:()=>{const e=document.getElementById("first-name").value,a=document.getElementById("last-name").value,n=document.querySelector('input[name="attendance"]:checked')?.value,l=document.getElementById("attendees").value;return e&&a&&n&&l?{firstName:e,lastName:a,attendance:n,attendees:l}:(f().showValidationMessage("Por favor complete todos los campos"),!1)}}).then(e=>{e.isConfirmed?this.saveFile(e.value):e.isDenied?this.handleDenial():this.handleDismiss(e.dismiss)})}saveFile(e){this.eventoService.createEvento(e).subscribe(a=>{console.log("Datos guardados:",a)},a=>{console.error("Error al guardar los datos:",a)})}handleDenial(){console.log("No se guard\xf3 la informaci\xf3n")}handleDismiss(e){console.log("Se cancel\xf3 el di\xe1logo:",e)}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(j))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-calendario"]],decls:95,vars:0,consts:[[1,"bg-cover","bg-no-repeat","sepia-0","bg-[url('assets/img/calendario.webp')]","h-96","w-screen","text-center","flex","flex-col","gap-0","items-center","justify-center"],[1,"container","mx-auto","px-4","py-2"],[1,"text-center","mb-4"],["data-aos","fade-down","data-aos-duration","1000",1,"text-6xl","text-center","text-white",2,"font-family","'Hilliamoon', sans-serif"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"grid","grid-cols-7","gap-1","space-x-0"],[1,"font-bold","text-white","text-xs"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","300",1,"grid","grid-cols-7","gap-2","text-xs","text-white"],[1,"bg-white","rounded-full","w-5","translate-x-3","text-black"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","400","target","_blank","type","button",1,"mt-5","focus:outline-none","text-white","bg-[#92a58b]","hover:bg-[#798c72]","focus:ring-4","focus:ring-[#b3c5ab]","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4," Agosto 2024 "),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5),t._uU(7,"Do"),t.qZA(),t.TgZ(8,"div",5),t._uU(9,"Lu"),t.qZA(),t.TgZ(10,"div",5),t._uU(11,"Ma"),t.qZA(),t.TgZ(12,"div",5),t._uU(13,"Mi"),t.qZA(),t.TgZ(14,"div",5),t._uU(15,"Ju"),t.qZA(),t.TgZ(16,"div",5),t._uU(17,"Vi"),t.qZA(),t.TgZ(18,"div",5),t._uU(19,"Sa"),t.qZA()(),t.TgZ(20,"div",6),t._UZ(21,"div")(22,"div")(23,"div")(24,"div"),t.TgZ(25,"div"),t._uU(26,"1"),t.qZA(),t.TgZ(27,"div"),t._uU(28,"2"),t.qZA(),t.TgZ(29,"div"),t._uU(30,"3"),t.qZA(),t.TgZ(31,"div"),t._uU(32,"4"),t.qZA(),t.TgZ(33,"div"),t._uU(34,"5"),t.qZA(),t.TgZ(35,"div"),t._uU(36,"6"),t.qZA(),t.TgZ(37,"div"),t._uU(38,"7"),t.qZA(),t.TgZ(39,"div"),t._uU(40,"8"),t.qZA(),t.TgZ(41,"div"),t._uU(42,"9"),t.qZA(),t.TgZ(43,"div"),t._uU(44,"10"),t.qZA(),t.TgZ(45,"div"),t._uU(46,"11"),t.qZA(),t.TgZ(47,"div"),t._uU(48,"12"),t.qZA(),t.TgZ(49,"div"),t._uU(50,"13"),t.qZA(),t.TgZ(51,"div"),t._uU(52,"14"),t.qZA(),t.TgZ(53,"div"),t._uU(54,"15"),t.qZA(),t.TgZ(55,"div"),t._uU(56,"16"),t.qZA(),t.TgZ(57,"div"),t._uU(58,"17"),t.qZA(),t.TgZ(59,"div"),t._uU(60,"18"),t.qZA(),t.TgZ(61,"div"),t._uU(62,"19"),t.qZA(),t.TgZ(63,"div"),t._uU(64,"20"),t.qZA(),t.TgZ(65,"div"),t._uU(66,"21"),t.qZA(),t.TgZ(67,"div"),t._uU(68,"22"),t.qZA(),t.TgZ(69,"div"),t._uU(70,"23"),t.qZA(),t.TgZ(71,"div"),t._uU(72,"24"),t.qZA(),t.TgZ(73,"div"),t._uU(74,"25"),t.qZA(),t.TgZ(75,"div"),t._uU(76,"26"),t.qZA(),t.TgZ(77,"div"),t._uU(78,"27"),t.qZA(),t.TgZ(79,"div"),t._uU(80,"28"),t.qZA(),t.TgZ(81,"div"),t._uU(82,"29"),t.qZA(),t.TgZ(83,"div"),t._uU(84,"30"),t.qZA(),t.TgZ(85,"div",7),t._uU(86,"31"),t.qZA(),t._UZ(87,"div")(88,"div")(89,"div")(90,"div")(91,"div")(92,"div"),t.qZA()(),t.TgZ(93,"a",8),t.NdJ("click",function(){return n.openSaveDialog()}),t._uU(94,"Confirmar Asistencia"),t.qZA()())},styles:['@import"https://fonts.googleapis.com/css2?family=Playwrite+IS:wght@100..400&display=swap";[_nghost-%COMP%]{display:block}']})}return s})();var h=i(8201);let B=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-banc"]],decls:15,vars:2,consts:[[1,"bg-white","h-80","py-16","w-full","flex","flex-col","justify-start","items-center","text-center"],["href","https://fonts.googleapis.com/css?family=Roboto","rel","stylesheet"],["data-aos","fade-down","data-aos-duration","1000","src","assets/img/regalo.png","alt","",1,"w-10","drop-shadow-2xl"],["data-aos","fade-down","data-aos-duration","1000","data-aos-delay","200",1,"p-3","text-xs","text-gray-600",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"],["title","Datos Bancarios:","html",'\n  <h1 class="text-gray-900 text-center font-bold"> Novio: </h1>\n  <h1><strong class="text-[#92a58b]">Banco:</strong> Banco de Loja </h1>\n  <h1><strong class="text-[#92a58b]">CTA:</strong> Ahorros </h1>\n  <h1><strong class="text-[#92a58b]">Titular:</strong> Milton Montalvan</h1>\n  <h1><strong class="text-[#92a58b]">N\xb0 C\xe9dula:</strong> 1105157158</h1>\n  <h1><strong class="text-[#92a58b]">N\xb0 Cuenta:</strong> 2901864889</h1>\n  <h1 class="text-gray-900 text-center font-bold pt-3"> Novia: </h1>\n  <h1><strong class="text-[#92a58b]">Banco:</strong> Banco de Pichincha </h1>\n  <h1><strong class="text-[#92a58b]">CTA:</strong> Ahorros </h1>\n  <h1><strong class="text-[#92a58b]">Titular:</strong> Daniela Mu\xf1oz</h1>\n  <h1><strong class="text-[#92a58b]">N\xb0 C\xe9dula:</strong> 1104066939</h1>\n  <h1><strong class="text-[#92a58b]">N\xb0 Cuenta:</strong> 2211350691</h1>',"text","This cannot be undone",3,"focusCancel"],["deleteSwal",""],["data-aos","zoom-in","data-aos-duration","1000","target","_blank","type","button",1,"mt-5","focus:outline-none","text-white","bg-[#92a58b]","hover:bg-[#798c72]","focus:ring-4","focus:ring-[#b3c5ab]","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2",3,"swal"],[1,"bg-cover","bg-no-repeat","bg-[url('assets/img/love1.webp')]","h-96","w-screen","text-center","flex","flex-col","gap-0","items-center","justify-end","pb-10"],["data-aos","fade-down","data-aos-anchor-placement","top-bottom","data-aos-duration","1000","data-aos-delay","200",1,"p-2","text-sm","text-white",2,"font-family","'Roboto', sans-serif","font-weight","100","font-style","normal"],["data-aos","fade-down","data-aos-anchor-placement","top-bottom","data-aos-duration","1000","data-aos-delay","200",1,"text-6xl","text-white",2,"font-family","'Hilliamoon', sans-serif"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0),t._UZ(1,"link",1)(2,"img",2),t.TgZ(3,"p",3),t._uU(4," Su presencia en nuestra boda es el mejor regalo. Pero si desean hacernos otro obsequio puede ser en efectivo, o a los siguientes datos bancarios. "),t.qZA(),t._UZ(5,"swal",4,5),t.TgZ(7,"a",6),t._uU(8,"Ver datos bancarios"),t.qZA()(),t.TgZ(9,"div",7),t._UZ(10,"link",1),t.TgZ(11,"p",8),t._uU(12," Nuestra boda ser\xe1 una fiesta especial. Prep\xe1rense para re\xedr, bailar y celebrar el amor de una manera que solo nosotros lo podemos lograr. "),t.qZA(),t.TgZ(13,"h1",9),t._uU(14,"\xa1No Falten!"),t.qZA()()),2&a){const l=t.MAs(6);t.xp6(5),t.Q6J("focusCancel",!0),t.xp6(2),t.Q6J("swal",l)}},dependencies:[h.q1,h.iL],styles:["[_nghost-%COMP%]{display:block}"]})}return s})(),E=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-inicio"]],decls:14,vars:0,consts:[[1,"bg-cover","sepia-0","bg-[url('assets/img/iniciom.webp')]","h-screen","w-screen","text-center","flex","flex-col","gap-0","items-center","justify-center"],["href","https://unpkg.com/aos@2.3.1/dist/aos.css","rel","stylesheet"],["data-aos","fade-down","data-aos-duration","2000","src","assets/img/fecha2.png","alt","",1,"w-20"],["data-aos","fade-down","data-aos-duration","2000","data-aos-delay","200",1,"text-white","text-2xl",2,"font-family","Playwrite IS, cursive"],["data-aos","fade-down","data-aos-duration","2000","data-aos-delay","300","src","assets/img/flor.png","alt","",1,"w-40"],["autoplay","","controls","",1,"hidden"],["src","assets/audio/perfect.mp3","type","audio/mpeg"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"link",1)(2,"img",2),t.TgZ(3,"p",3),t._uU(4,"Milton y Daniela"),t.qZA(),t._UZ(5,"img",4),t.TgZ(6,"audio",5),t._UZ(7,"source",6),t.qZA()(),t._UZ(8,"app-invitado")(9,"app-recepcion")(10,"app-contador")(11,"app-dresscode")(12,"app-calendario")(13,"app-banc"))},dependencies:[p,y,C,M,k,B],styles:['@import"https://fonts.googleapis.com/css2?family=Playwrite+IS:wght@100..400&display=swap";[_nghost-%COMP%]{display:block}']})}return s})();var R=i(5832),N=i(2061),F=i(9147),S=i(7386),P=i(7292),H=i(7374);const L=[{path:"",component:E}];let V=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[g.ez,m.Bz.forChild(L),R.InvitadoModule,N.RecepcionModule,F.ContadorModule,S.DresscodeModule,P.CalendarioModule,H.BancModule]})}return s})()}}]);
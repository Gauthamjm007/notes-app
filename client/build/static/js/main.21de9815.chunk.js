(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){e.exports=a(143)},116:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=a(39),i=a(88),s=a(42),u=[];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NOTES":return Object(s.a)(t.payload);case"ADD_NOTES":return e.concat(t.payload);case"REMOVE_NOTES":return e.filter((function(e){return e._id!==t.payload}));case"EDIT_NOTES":return e.map((function(e){return e._id===t.payload.id?Object.assign(e,{},t.payload.data):Object.assign(e,{})}));default:return Object(s.a)(e)}}var d=[];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORY":return Object(s.a)(t.payload);case"ADD_CATEGORY":return e.concat(t.payload);case"REMOVE_CATEGORY":return e.filter((function(e){return e._id!==t.payload}));case"EDIT_CATEGORY":return e.map((function(e){return e._id===t.payload.id?Object.assign(e,{},t.payload.data):Object.assign(e,{})}));default:return Object(s.a)(e)}}var g=a(65),h=[];function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(g.a)({},t.payload);case"USER_REMOVE":return h;default:return Object(g.a)({},e)}}var E=function(){return Object(l.d)(Object(l.c)({notes:m,category:p,user:f}),Object(l.a)(i.a))},b=(a(116),a(22)),y=a(30),v=a(13),O=a(14),S=a(61),x=a(92),j=a.n(x).a.create({baseURL:"http://localhost:3037"}),w=function(){return function(e){j.get("/notes",{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){var a=t.data;e(T(a))}))}},T=function(e){return{type:"GET_NOTES",payload:e}},k=function(e){return{type:"REMOVE_NOTES",payload:e}},N=function(e,t){return{type:"EDIT_NOTES",payload:{id:t,data:e}}},C=function(e){return{type:"ADD_NOTES",payload:e}},R=a(51),_=a.n(R),I=a(56),D=a.n(I);var A=Object(O.b)((function(e){return{category:e.category}}))((function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"add"===e.status?o.a.createElement(_.a,{style:{width:"50px",height:"50px"},color:"primary"}):o.a.createElement(D.a,{style:{width:"50px",height:"50px"},color:"secondary"})),o.a.createElement(S.a,{enableReinitialize:!0,initialValues:{title:e.title,body:e.body,category:e.category},onSubmit:function(t,a){a.setSubmitting;setTimeout((function(){var a;alert(JSON.stringify(t)),"add"===e.status?e.dispatch((a=t,function(e){j.post("/notes",a,{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){console.log(t.data),e(C(a))}))})):e.dispatch(function(e,t){return function(a){j.put("/notes/".concat(t),e,{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(n){console.log(n.data),a(N(e,t))}))}}(t,e.id))}),400)}},(function(t){var a=t.values,n=t.handleChange,r=t.handleSubmit;return o.a.createElement("form",{onSubmit:r},o.a.createElement("input",{type:"text",name:"title",className:"form-control",placeholder:"Title",onChange:n,value:a.title}),o.a.createElement("br",null),o.a.createElement("textarea",{className:"form-control",type:"text",name:"body",placeholder:"body",onChange:n,value:a.body}),o.a.createElement("br",null),o.a.createElement("select",{id:"category",name:"category",onChange:n,className:"form-control"},"add"===e.status?o.a.createElement("option",{value:""},"SELECTED"):o.a.createElement("option",{selected:e.category}),e.category.map((function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit"))})))})),z=a(185),G=a(186),W=a(181),M=a(187),Y=a(190),V=a(188),B=a(191),L=a(189),U=function(){return function(e){j.get("/category",{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){var a=t.data;e(q(a))}))}},q=function(e){return{type:"GET_CATEGORY",payload:e}},P=function(e){return{type:"REMOVE_CATEGORY",payload:e}},F=function(e,t){return{type:"EDIT_CATEGORY",payload:{id:t,data:e}}},J=function(e){return{type:"ADD_CATEGORY",payload:e}},H=a(31),K=a(57),Q=a(12),X=a(182),Z=a(183),$=a(184),ee=a(97),te=a.n(ee),ae=a(98),ne=a.n(ae),oe=a(58),re=a(99),ce=a.n(re),le=a(46),ie=a.n(le),se=function(){return{type:"REMOVE_USER"}},ue=function(e){return{type:"SET_USER",payload:e}};function me(){var e=Object(K.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: ","px;\n  letter-spacing: 0.15px;\n  color: #ffffff;\n"]);return me=function(){return e},e}var de=oe.a.h6(me(),(function(e){return e.fontSize})),pe=Object(W.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(H.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(H.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Q.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(H.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(H.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(H.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var ge=Object(O.b)()((function(e){var t=pe();return o.a.createElement("div",{className:t.grow},o.a.createElement(X.a,{position:"fixed",style:{height:"70px"}},o.a.createElement(Z.a,null,o.a.createElement("div",null,o.a.createElement(de,{fontSize:18},o.a.createElement("b",null,"Notes only"))),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(b.b,{to:"/notes"},o.a.createElement($.a,{"aria-label":"show 17 new notifications"},o.a.createElement(te.a,{color:"secondary"})))),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(b.b,{to:"/category"},o.a.createElement($.a,{"aria-label":"show 17 new notifications"},o.a.createElement(ne.a,{color:"secondary"})))),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(b.b,{to:"/category"},o.a.createElement($.a,{"aria-label":"show 17 new notifications",onClick:function(){e.dispatch((function(e){j.delete("/logout",{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){t.data.notice&&(localStorage.removeItem("authToken"),e(se()),window.location.href="/")}))}))}},o.a.createElement(ce.a,{color:"secondary"})))))))})),he=Object(W.a)({root:{maxWidth:375,marginTop:15,maxHeight:375},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var fe=Object(O.b)((function(e){return{notes:e.notes}}))((function(e){var t=he();e.dispatch(U()),e.dispatch(w());var a=o.a.useState(""),n=Object(v.a)(a,2),r=n[0],c=n[1],l=o.a.useState("add"),i=Object(v.a)(l,2),s=i[0],u=i[1],m=o.a.useState(""),d=Object(v.a)(m,2),p=d[0],g=d[1],h=o.a.useState(""),f=Object(v.a)(h,2),E=f[0],b=f[1],y=o.a.useState(""),O=Object(v.a)(y,2),S=O[0],x=O[1],T=function(t){e.dispatch(function(e){return function(t){j.delete("/notes/".concat(e),{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(a){console.log(a.data);var n=a.data;console.log(n),t(k(e))})).catch((function(e){console.log(e)}))}}(t))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ge,null),o.a.createElement("div",{align:"center",style:{marginTop:"100px"}},o.a.createElement(z.a,{container:!0,component:"main"},o.a.createElement(z.a,{item:!0,xs:12,sm:3},o.a.createElement(z.a,{container:!0,justify:"center"},o.a.createElement(A,{id:r,title:p,body:E,category:S,status:s}))),o.a.createElement(z.a,{item:!0,xs:12,sm:3},o.a.createElement(G.a,{orientation:"vertical"})),o.a.createElement(z.a,{item:!0,xs:12,sm:5},o.a.createElement("div",null,void 0!==e.notes&&e.notes.map((function(e,a){return o.a.createElement(M.a,{className:t.root,variant:"outlined",style:{background:a%2===0?"#EC7063":"#A569BD"}},o.a.createElement("h3",{style:{color:"white"}},e.title),o.a.createElement(V.a,null,o.a.createElement(L.a,{variant:"body2",component:"p",style:{color:"white"}},e.body)),o.a.createElement(Y.a,null,o.a.createElement(B.a,{size:"small",onClick:function(){return T(e._id)},variant:"outlined",color:"primary"},"Remove"),o.a.createElement(B.a,{size:"small",variant:"outlined",color:"primary",onClick:function(){return function(e,t,a,n){u("add"===s?"edit":"add"),u("edit"===s?"add":"edit"),g(t),b(a),x(n),c(e),console.log(r,s)}(e._id,e.title,e.body,e.category)}},"Edit")))})))))))}));var Ee=Object(O.b)()((function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{marginTop:50,marginBottom:50}},"add"===e.status?o.a.createElement(_.a,{style:{width:"50px",height:"50px"}}):o.a.createElement(D.a,{style:{width:"50px",height:"50px"}})),o.a.createElement(S.a,{enableReinitialize:!0,initialValues:{name:e.category},onSubmit:function(t,a){a.setSubmitting;setTimeout((function(){var a;"add"===e.status?e.dispatch((a=t,function(e){j.post("/category",a,{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){console.log(t.data),e(J(a))}))})):e.dispatch(function(e,t){return function(a){j.put("/category/".concat(t),e,{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(n){console.log(n.data),a(F(e,t))}))}}(t,e.id))}),400)}},(function(e){var t=e.values,a=e.handleChange,n=e.handleSubmit;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",{class:"input-group mb-3",style:{width:600}},o.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:a,value:t.name,className:"form-control"}),o.a.createElement("div",{class:"input-group-append"},o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))))})))}));var be=Object(O.b)((function(e){return{category:e.category}}))((function(e){var t=o.a.useState(""),a=Object(v.a)(t,2),n=a[0],r=a[1],c=o.a.useState("add"),l=Object(v.a)(c,2),i=l[0],s=l[1],u=o.a.useState(""),m=Object(v.a)(u,2),d=m[0],p=m[1],g=function(t){e.dispatch(function(e){return function(t){j.delete("/category/".concat(e),{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(a){console.log(a.data),a.data.hasOwnProperty("name")?t(P(e)):alert("failed to delete the record please check your internet connection")}))}}(t))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ge,null),o.a.createElement("div",{align:"center",style:{marginTop:100}},o.a.createElement("div",null,o.a.createElement("h1",null,"Category"),o.a.createElement("table",{className:"table ",style:{maxWidth:700}},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Details"),o.a.createElement("th",{scope:"col"},"Remove"))),o.a.createElement("tbody",null,void 0!==e.category&&e.category.map((function(e){return o.a.createElement("tr",{key:e._id+e.name},o.a.createElement("td",null,e.name),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return t=e._id,a=e.name,console.log(t,a),s("add"===i?"edit":"add"),s("edit"===i?"add":"edit"),p(a),r(t),void console.log(n,i);var t,a},className:"btn btn-secondary"},"Edit")),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return g(e._id)},className:"btn btn-danger"},"Remove")))}))))),o.a.createElement(Ee,{category:d,id:n,status:i})))})),ye=a(196),ve=a(192),Oe=a(195),Se=a(102),xe=a(60),je=a.n(xe);function we(){var e=Object(K.a)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 300;\n  font-size: ","px;\n  line-height: 88px;\n  /* identical to box height */\n\n  letter-spacing: -1.5px;\n\n  color: #ffffff;\n\n  mix-blend-mode: normal;\n"]);return we=function(){return e},e}var Te=oe.a.h1(we(),(function(e){return e.fontSize})),ke=Object(W.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Ne=Object(O.b)()((function(e){var t=ke(),a=Object(n.useState)(""),r=Object(v.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(""),s=Object(v.a)(i,2),u=s[0],m=s[1];return localStorage.getItem("authToken")?o.a.createElement(y.a,{to:"/notes"}):o.a.createElement(z.a,{container:!0,component:"main",className:t.root},o.a.createElement(ve.a,null),o.a.createElement(z.a,{item:!0,xs:!1,sm:4,md:7,className:t.image},o.a.createElement(Te,{fontSize:56}," Welcome to notes only"),o.a.createElement(Te,{fontSize:24},"your notes taking companion")),o.a.createElement(z.a,{item:!0,xs:12,sm:8,md:5,component:Se.a,elevation:6,square:!0},o.a.createElement("div",{className:t.paper},o.a.createElement(ye.a,{className:t.avatar},o.a.createElement(je.a,null)),o.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign in - Notes Only"),o.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault();var a={email:c,password:u};e.dispatch(function(e,t){return function(a){j.post("/signin",e).then((function(e){e.data.hasOwnProperty("error")?ie.a.fire({icon:"error",title:"Oops...",text:e.data.error}):(console.log(e.headers,"headers"),localStorage.setItem("authToken",e.headers.xauth),j.get("/account",{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(e){var n=e.data;ie.a.fire({icon:"success",title:"Sucessfully Logged in",showConfirmButton:!1,timer:1500}),a(ue(n)),t()})))}))}}(a,(function(){return e.history.push("/notes")})))}},o.a.createElement(Oe.a,{variant:"outlined",margin:"normal",value:c,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){l(e.target.value)}}),o.a.createElement(Oe.a,{variant:"outlined",margin:"normal",value:u,required:!0,fullWidth:!0,name:"password",label:"Password",onChange:function(e){m(e.target.value)},type:"password",id:"password",autoComplete:"current-password"}),o.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),o.a.createElement(z.a,{container:!0},o.a.createElement(z.a,{item:!0},o.a.createElement(b.b,{to:"/signup"},"Don't have an account? Sign Up")))))))})),Ce=a(193),Re=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var _e=Object(O.b)()((function(e){var t=Re(),a=Object(n.useState)(""),r=Object(v.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(""),s=Object(v.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(v.a)(d,2),g=p[0],h=p[1];return o.a.createElement(Ce.a,{component:"main",maxWidth:"xs"},o.a.createElement(ve.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(ye.a,{className:t.avatar},o.a.createElement(je.a,null)),o.a.createElement(L.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault();var a={username:c,email:u,password:g};e.dispatch(function(e,t){return function(a){j.post("/signup",e).then((function(e){console.log(e.data),e.data.hasOwnProperty("errors")?ie.a.fire({icon:"error",title:"Oops...",text:e.data.message}):(ie.a.fire({icon:"success",title:"Sucessfully Registered,Now You can Log in",showConfirmButton:!1,timer:2e3}),t())}))}}(a,(function(){return e.history.push("/signin")})))}},o.a.createElement(z.a,{container:!0,spacing:2},o.a.createElement(z.a,{item:!0,xs:12},o.a.createElement(Oe.a,{autoComplete:"fname",name:"firstName",value:c,variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0,onChange:function(e){l(e.target.value)}})),o.a.createElement(z.a,{item:!0,xs:12},o.a.createElement(Oe.a,{variant:"outlined",required:!0,fullWidth:!0,value:u,onChange:function(e){m(e.target.value)},id:"email",label:"Email Address",name:"email",autoComplete:"email"})),o.a.createElement(z.a,{item:!0,xs:12},o.a.createElement(Oe.a,{variant:"outlined",required:!0,onChange:function(e){h(e.target.value)},value:g,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}))),o.a.createElement(B.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign Up"),o.a.createElement(z.a,{container:!0,justify:"flex-end"},o.a.createElement(z.a,{item:!0},o.a.createElement(b.b,{to:"/signin"},"Already have an account? Sign in"))))))})),Ie=a(100),De=a(194),Ae=(a(142),Object(Ie.a)({palette:{primary:{main:"#522d5b"},secondary:{main:"#ee4540"}},status:{danger:"orange"}}));var ze=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(De.a,{theme:Ae},o.a.createElement(b.a,null,o.a.createElement(y.b,{path:"/notes",component:fe}),o.a.createElement(y.b,{path:"/category",component:be}),o.a.createElement(y.b,{path:"/signin",component:Ne,exact:!0}),o.a.createElement(y.b,{path:"/",component:Ne,exact:!0}),o.a.createElement(y.b,{path:"/signup",component:_e,exact:!0}))))},Ge=E();Ge.subscribe((function(){console.log(Ge.getState())})),localStorage.getItem("authToken")&&(Ge.dispatch(U()),Ge.dispatch(w()),Ge.dispatch((function(e){j.get("/account",{headers:{"x-auth":localStorage.getItem("authToken")}}).then((function(t){var a=t.data;e(ue(a))}))})));var We=o.a.createElement(O.a,{store:Ge},o.a.createElement(ze,null));c.a.render(We,document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.21de9815.chunk.js.map
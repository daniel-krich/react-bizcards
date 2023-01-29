"use strict";(self.webpackChunkreact_module_final_app=self.webpackChunkreact_module_final_app||[]).push([[590],{6461:function(e,s,a){a.d(s,{U:function(){return l},B:function(){return i}});a(2791);var n=a(5630),r=a(3360),t=a(184);function i(e){var s=e.registerHandle,a=e.submitLabel;return(0,t.jsxs)(n.Z,{onSubmit:s,children:[(0,t.jsxs)(n.Z.Group,{className:"mb-3",children:[(0,t.jsx)(n.Z.Label,{children:"Name"}),(0,t.jsx)(n.Z.Control,{type:"text",placeholder:"Enter your name",name:"name",required:!0,minLength:3,maxLength:64})]}),(0,t.jsxs)(n.Z.Group,{className:"mb-3",children:[(0,t.jsx)(n.Z.Label,{children:"Email address"}),(0,t.jsx)(n.Z.Control,{type:"email",placeholder:"Enter email",name:"email",required:!0,minLength:5,maxLength:64})]}),(0,t.jsxs)(n.Z.Group,{className:"mb-3",children:[(0,t.jsx)(n.Z.Label,{children:"Password"}),(0,t.jsx)(n.Z.Control,{type:"password",placeholder:"Password",name:"password",required:!0,minLength:5,maxLength:64})]}),(0,t.jsx)(r.Z,{variant:"dark",type:"submit",children:a})]})}function l(e){var s=e.loginHandle;return(0,t.jsxs)(n.Z,{onSubmit:s,children:[(0,t.jsxs)(n.Z.Group,{className:"mb-3",controlId:"formEmail",children:[(0,t.jsx)(n.Z.Label,{children:"Email"}),(0,t.jsx)(n.Z.Control,{type:"email",placeholder:"Enter email",name:"email",required:!0,minLength:5,maxLength:64})]}),(0,t.jsxs)(n.Z.Group,{className:"mb-3",controlId:"formPassword",children:[(0,t.jsx)(n.Z.Label,{children:"Password"}),(0,t.jsx)(n.Z.Control,{type:"password",placeholder:"Enter password",name:"password",required:!0,minLength:5,maxLength:64})]}),(0,t.jsx)(r.Z,{variant:"dark",type:"submit",children:"Login"})]})}},15:function(e,s,a){a.d(s,{E:function(){return t}});var n=a(3144),r=a(5671),t=(0,n.Z)((function e(s,a,n,t,i){(0,r.Z)(this,e),this.name=s,this.description=a,this.address=n,this.phone=t,this.imageUrl=i}))},3590:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var n=a(9439),r=a(2791),t=a(7689),i=a(1654),l=a(7022),o=a(6461),m=a(6769),u=a(9085),d=a(4513),c=a(15),h=a(8002),p=a(184);function x(){var e=(0,t.s0)(),s=(0,r.useState)(null),a=(0,n.Z)(s,2),x=a[0],b=a[1];return(0,p.jsx)(h.ky,{children:(0,p.jsxs)(l.Z,{className:"bg-white rounded p-4",children:[(0,p.jsx)("h1",{children:"Business Registration"}),x?(0,p.jsx)(d.bv,{createBusinessCardHandle:function(s){s.preventDefault();try{var a=new c.E(s.target.businessName.value,s.target.businessDescription.value,s.target.businessAddress.value,s.target.businessPhone.value,s.target.businessImageUrl.value);(0,i.jW)(x.email,x.password,x.name,m.F.Business,[a]),u.Am.success("Registration completed, ".concat(x.name,"."),{position:u.Am.POSITION.TOP_RIGHT}),e("/login")}catch(n){u.Am.error("Email already exists.",{position:u.Am.POSITION.TOP_RIGHT})}},submitLabel:"Finish registration"}):(0,p.jsx)(o.B,{registerHandle:function(e){e.preventDefault();var s={email:e.target.email.value,password:e.target.password.value,name:e.target.name.value,type:m.F.Business};(0,i.R_)(s.email)?u.Am.error("Email already exists.",{position:u.Am.POSITION.TOP_RIGHT}):b(s)},submitLabel:"Continue"})]})})}}}]);
//# sourceMappingURL=590.2590b12e.chunk.js.map
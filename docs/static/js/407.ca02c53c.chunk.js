"use strict";(self.webpackChunkreact_module_final_app=self.webpackChunkreact_module_final_app||[]).push([[407],{15:function(e,n,r){r.d(n,{E:function(){return i}});var s=r(3144),t=r(5671),i=(0,s.Z)((function e(n,r,s,i,a){(0,t.Z)(this,e),this.name=n,this.description=r,this.address=s,this.phone=i,this.imageUrl=a}))},2407:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var s=r(9439),t=r(4446),i=r(7022),a=r(9085),u=r(4513),o=r(15),c=r(9690),d=r(7689),l=r(8002),f=r(184);function h(){var e=(0,c.v)(),n=(0,s.Z)(e,2),r=n[0],h=n[1],m=(0,d.s0)();return(0,f.jsx)(l.ky,{children:(0,f.jsxs)(i.Z,{className:"bg-white rounded p-4",children:[(0,f.jsx)("h1",{children:"Add a new card"}),(0,f.jsx)(u.bv,{createBusinessCardHandle:function(e){e.preventDefault();try{var n=new o.E(e.target.businessName.value,e.target.businessDescription.value,e.target.businessAddress.value,e.target.businessPhone.value,e.target.businessImageUrl.value),s=(0,t.e)(r.id,n);h(s),a.Am.success("Card creation completed.",{position:a.Am.POSITION.TOP_RIGHT}),m("/business-cards")}catch(i){a.Am.error(i.message,{position:a.Am.POSITION.TOP_RIGHT})}},submitLabel:"Create card"})]})})}},4446:function(e,n,r){r.d(n,{e:function(){return i},y:function(){return a}});var s=r(3433),t=r(9230),i=function(e,n){var r=localStorage.getItem(t.O),i=r?JSON.parse(r):[],a=i.find((function(n){return n.id===e}));if(a)return a.businessCards=[].concat((0,s.Z)(a.businessCards),[n]),localStorage.setItem(t.O,JSON.stringify(i)),a;throw new Error("User wasn't found")},a=function(e,n){var r,s,i=localStorage.getItem(t.O),a=i?JSON.parse(i):[],u=a.find((function(n){return n.id===e}));if(u)return u.businessCards=null!==(r=null===(s=u.businessCards)||void 0===s?void 0:s.filter((function(e,r){return r!==n})))&&void 0!==r?r:[],localStorage.setItem(t.O,JSON.stringify(a)),u;throw new Error("User wasn't found")}}}]);
//# sourceMappingURL=407.ca02c53c.chunk.js.map
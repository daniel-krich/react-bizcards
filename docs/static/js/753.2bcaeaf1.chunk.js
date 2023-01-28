"use strict";(self.webpackChunkreact_module_final_app=self.webpackChunkreact_module_final_app||[]).push([[753],{8753:function(e,r,a){a.r(r),a.d(r,{default:function(){return z}});var s=a(9439),n=a(7022),t=a(3360),c=a(9743),i=a(2677),d=a(1413),o=a(5987),l=a(1694),u=a.n(l),f=a(2791),m=a(162),v=a(6543),x=a(7472),h=a(184),b=["bsPrefix","className","variant","as"],j=f.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,n=e.variant,t=e.as,c=void 0===t?"img":t,i=(0,o.Z)(e,b),l=(0,m.vE)(a,"card-img");return(0,h.jsx)(c,(0,d.Z)({ref:r,className:u()(n?"".concat(l,"-").concat(n):l,s)},i))}));j.displayName="CardImg";var p=j,N=a(6040),Z=["bsPrefix","className","as"],y=f.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,n=e.as,t=void 0===n?"div":n,c=(0,o.Z)(e,Z),i=(0,m.vE)(a,"card-header"),l=(0,f.useMemo)((function(){return{cardHeaderBsPrefix:i}}),[i]);return(0,h.jsx)(N.Z.Provider,{value:l,children:(0,h.jsx)(t,(0,d.Z)((0,d.Z)({ref:r},c),{},{className:u()(s,i)}))})}));y.displayName="CardHeader";var g=y,C=["bsPrefix","className","bg","text","border","body","children","as"],w=(0,x.Z)("h5"),P=(0,x.Z)("h6"),I=(0,v.Z)("card-body"),O=(0,v.Z)("card-title",{Component:w}),S=(0,v.Z)("card-subtitle",{Component:P}),T=(0,v.Z)("card-link",{Component:"a"}),k=(0,v.Z)("card-text",{Component:"p"}),H=(0,v.Z)("card-footer"),R=(0,v.Z)("card-img-overlay"),E=f.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,n=e.bg,t=e.text,c=e.border,i=e.body,l=e.children,f=e.as,v=void 0===f?"div":f,x=(0,o.Z)(e,C),b=(0,m.vE)(a,"card");return(0,h.jsx)(v,(0,d.Z)((0,d.Z)({ref:r},x),{},{className:u()(s,b,n&&"bg-".concat(n),t&&"text-".concat(t),c&&"border-".concat(c)),children:i?(0,h.jsx)(I,{children:l}):l}))}));E.displayName="Card",E.defaultProps={body:!1};var _=Object.assign(E,{Img:p,Title:O,Subtitle:S,Body:I,Link:T,Text:k,Header:g,Footer:H,ImgOverlay:R});function A(e){var r=e.cardDetails,a=e.cardId,s=e.removeCardHandle;return(0,h.jsxs)(_,{className:"position-relative shadow",style:{width:300},children:[(0,h.jsx)(_.Img,{src:r.imageUrl}),(0,h.jsxs)(_.Body,{children:[(0,h.jsx)(_.Title,{as:"h3",children:r.name}),(0,h.jsx)(_.Title,{as:"h5",className:"mb-3",children:r.description}),(0,h.jsx)("hr",{}),(0,h.jsxs)(_.Text,{as:"p",children:[(0,h.jsx)("b",{children:"Address:"})," ",r.address]}),(0,h.jsxs)(_.Text,{as:"p",children:[(0,h.jsx)("b",{children:"Phone:"})," ",r.phone]}),(0,h.jsx)(t.Z,{className:"position-absolute bottom-0 start-50 translate-middle-x m-2",variant:"danger",onClick:function(){return s(a)},children:"Remove card"})]})]})}function B(e){var r=e.cards,a=e.removeCardHandle;return Array.isArray(r)&&r.length>0?(0,h.jsx)(c.Z,{xs:1,md:2,lg:3,className:"g-4 justify-content-evenly",children:r.map((function(e,r){return(0,h.jsx)(i.Z,{className:"d-flex justify-content-center",children:(0,h.jsx)(A,{cardId:r,cardDetails:e,removeCardHandle:a})},r)}))}):(0,h.jsx)("div",{className:"d-flex justify-content-center text-white",children:(0,h.jsx)("h1",{children:"No cards yet..."})})}var J=a(9690),U=a(4446),D=a(7689),G=a(9085);function z(){var e=(0,J.v)(),r=(0,s.Z)(e,2),a=r[0],c=r[1],i=(0,D.s0)();return(0,h.jsxs)(n.Z,{children:[(0,h.jsx)("h1",{className:"text-center m-0 mb-3 text-white",children:"Business cards"}),(0,h.jsx)("div",{className:"d-flex justify-content-center mb-5",children:(0,h.jsx)(t.Z,{className:"ms-3",variant:"light",onClick:function(){return i("/business-cards/create")},children:"Create a new card"})}),(0,h.jsx)(B,{cards:null===a||void 0===a?void 0:a.businessCards,removeCardHandle:function(e){G.Am.success('Removed "'.concat(a.businessCards[e].name,'" card.'),{position:G.Am.POSITION.TOP_RIGHT});var r=(0,U.y)(a.id,e);c(r)}})]})}},4446:function(e,r,a){a.d(r,{e:function(){return t},y:function(){return c}});var s=a(3433),n=a(9230),t=function(e,r){var a=localStorage.getItem(n.O),t=a?JSON.parse(a):[],c=t.find((function(r){return r.id===e}));if(c)return c.businessCards=[].concat((0,s.Z)(c.businessCards),[r]),localStorage.setItem(n.O,JSON.stringify(t)),c;throw new Error("User wasn't found")},c=function(e,r){var a,s,t=localStorage.getItem(n.O),c=t?JSON.parse(t):[],i=c.find((function(r){return r.id===e}));if(i)return i.businessCards=null!==(a=null===(s=i.businessCards)||void 0===s?void 0:s.filter((function(e,a){return a!==r})))&&void 0!==a?a:[],localStorage.setItem(n.O,JSON.stringify(c)),i;throw new Error("User wasn't found")}},9743:function(e,r,a){var s=a(1413),n=a(5987),t=a(1694),c=a.n(t),i=a(2791),d=a(162),o=a(184),l=["bsPrefix","className","as"],u=i.forwardRef((function(e,r){var a=e.bsPrefix,t=e.className,i=e.as,u=void 0===i?"div":i,f=(0,n.Z)(e,l),m=(0,d.vE)(a,"row"),v=(0,d.pi)(),x=(0,d.zG)(),h="".concat(m,"-cols"),b=[];return v.forEach((function(e){var r,a=f[e];delete f[e],r=null!=a&&"object"===typeof a?a.cols:a;var s=e!==x?"-".concat(e):"";null!=r&&b.push("".concat(h).concat(s,"-").concat(r))})),(0,o.jsx)(u,(0,s.Z)((0,s.Z)({ref:r},f),{},{className:c().apply(void 0,[t,m].concat(b))}))}));u.displayName="Row",r.Z=u}}]);
//# sourceMappingURL=753.2bcaeaf1.chunk.js.map
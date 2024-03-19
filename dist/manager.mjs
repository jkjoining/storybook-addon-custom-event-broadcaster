import { addons, types, useParameter } from '@storybook/manager-api';
import n, { memo, useState } from 'react';
import { Icons, Button, AddonPanel } from '@storybook/components';
import { styled, ThemeProvider, themes } from '@storybook/theming';

var X=Object.create;var F=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var S=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oe=(e,t,o,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of R(t))!te.call(e,r)&&r!==o&&F(e,r,{get:()=>t[r],enumerable:!(l=Z(t,r))||l.enumerable});return e};var re=(e,t,o)=>(o=e!=null?X(ee(e)):{},oe(t||!e||!e.__esModule?F(o,"default",{value:e,enumerable:!0}):o,e));var w=S((Pe,P)=>{var ne="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";P.exports=ne;});var A=S((we,I)=>{var le=w();function k(){}function N(){}N.resetWarningCache=k;I.exports=function(){function e(l,r,s,E,h,g){if(g!==le){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N,resetWarningCache:k};return o.PropTypes=o,o};});var B=S((Ie,_)=>{_.exports=A()();});var p="storybook/storybook-addon-custom-event-broadcaster",D=`${p}/panel`;var f=re(B());var y=styled.div({display:"flex",justifyContent:"flex-start",alignItems:"center",flex:1}),H=styled.div`
  width: 18px;
  height: 18px;
  &.tooltip {
    position: relative;
    &:hover {
      cursor: pointer;
      > [tooltip] {
        visibility: visible;
        opacity: 1;
      }
    }
    > [tooltip] {
      user-select: none;
      pointer-events: none;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      font-size: 0.75rem;
      line-height: 1;
      min-width: 3em;
      max-width: 21em;
      width: max-content;
      background: rgba(51, 51, 51, 0.7);
      color: white;
      padding: 8px 10px;
      z-index: 1001;
      left: 22px;
      top: -6px;
    }
  }
`;var q={appearance:"none",border:"0 none",display:"block",margin:"0",background:"#FFFFFF",padding:"6px 10px",fontSize:"14px",position:"relative",color:"#333333",boxShadow:"rgb(0 0 0 / 10%) 0 0 0 1px inset",borderRadius:"4px",lineHeight:"20px",flex:"1",textAlign:"left",overflow:"visible",maxHeight:"400px","@media (prefers-color-scheme: dark)":{background:"#333333",color:"#FFFFFF",boxShadow:"rgb(255 255 255 / 10%) 0 0 0 1px inset"}},W=styled.input(q),v=styled.textarea(q);var ae={borderCollapse:"collapse",borderSpacing:"0px",color:"rgb(0, 0, 0)",fontSize:"13px",lineHeight:"20px",textAlign:"left",width:"100%",margin:"0px","@media (prefers-color-scheme: dark)":{color:"#FFFFFF",boxShadow:"rgb(255 255 255 / 10%) 0 0 0 1px inset"}},$=styled.table(ae),se={borderTop:"1px solid rgb(230, 230, 230)"},j=styled.tr(se),z={paddingTop:"10px",paddingBottom:"10px"},c=styled.td(z),J=styled(c)`
  padding-left: 20px;
`,u=styled.th(z),U=styled(u)`
  padding-left: 20px;
`;var ce=(e,t,o="")=>{let l=t||null;try{let r=JSON.parse(l),s=document.getElementById("storybook-preview-iframe").contentWindow.document;o.length>0?s.querySelector(o).dispatchEvent(new CustomEvent(e,r)):s.dispatchEvent(new CustomEvent(e,r));}catch(r){console.log("Fire not successfull ",r);}},T=memo(({selectorDefault:e="",eventNameDefault:t="",eventDataDefault:o={}})=>{let[l,r]=useState(!1),[s,E]=useState(e),[h,g]=useState(t),[i,M]=useState(o),Q=()=>{r(!0);},G=m=>{E(m.target.value);};return n.createElement(j,null,n.createElement(J,null,n.createElement(W,{type:"text",value:h,onChange:m=>{g(m.target.value);}})),n.createElement(c,null,n.createElement(v,{value:i,onChange:m=>{M(m.target.value);}})),n.createElement(c,{style:{minWidth:200}},n.createElement(me,{value:i})),n.createElement(c,null,n.createElement(y,null,l===!1&&s.length===0?[n.createElement(H,{key:"iconBox",className:"tooltip"},n.createElement(Icons,{icon:"add",onClick:Q}),n.createElement("span",{tooltip:"message"},"Add Selektor"))]:n.createElement(v,{value:s,onChange:G}))),n.createElement(c,null,n.createElement(Button,{style:{margin:"0px 10px"},variant:"solid",onClick:()=>ce(h,i,s)},"send")))});T.propTypes={selectorDefault:f.default.string,eventNameDefault:f.default.string,eventDataDefault:f.default.string};T.defaultProps={selectorDefault:"",eventDataDefault:""};var b=T;function me({value:e}){if(e.length===0)return null;let t=JSON.parse(e),o=Object.keys(t);return n.createElement("ul",{style:{listStyleType:"none",padding:0}},o.map(l=>n.createElement("li",{key:l},l,": ",t[l])))}var fe=e=>e!==null&&e.length>0?e.map((o,l)=>{let r={selectorDefault:o.selector,eventNameDefault:o.eventName,eventDataDefault:JSON.stringify(o.eventData)||""};return n.createElement(b,{key:`key__${o.eventName}__${l}`,...r})}):n.createElement(b,{key:"single"});function be(){let e=useParameter("customEventPanel",null),[t,o]=useState(0),l=()=>{let r=t+1;o(r);};return n.createElement(n.Fragment,null,n.createElement($,null,n.createElement("thead",null,n.createElement("tr",null,n.createElement(U,null,"EventName"),n.createElement(u,null,"Data"),n.createElement(u,null,"(opt.) Selector"),n.createElement(u,null," "))),n.createElement("tbody",null,fe(e),[...Array(t).keys()].map((r,s)=>n.createElement(b,{key:`addRow_${s+1}`})))),n.createElement(y,null,n.createElement(Button,{variant:"outline",onClick:l,style:{flex:1,margin:"4px"}},"Add Row")))}var V=be;var K=e=>n.createElement(AddonPanel,{...e},n.createElement(ThemeProvider,{theme:themes.dark},n.createElement(V,null)));addons.register(p,()=>{addons.add(D,{type:types.PANEL,title:"Custom Events",match:({viewMode:e})=>e==="story",render:K});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map
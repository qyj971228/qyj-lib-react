var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};import{jsx as _jsx}from"react/jsx-runtime";import{useState}from"react";var STATUS={HOVERED:"hovered",NORMAL:"normal"};export default function Link(n){var e=n.page,n=n.children,r=useState(STATUS.NORMAL),t=r[0],o=r[1];return _jsx("a",__assign({className:t,href:e||"#",onMouseEnter:function(){o(STATUS.HOVERED)},onMouseLeave:function(){o(STATUS.NORMAL)},onClick:function(){console.log("click")}},{children:n}))}
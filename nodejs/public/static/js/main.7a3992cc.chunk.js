(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/logo.9b97c341.png"},function(e,t,a){e.exports=a(12)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),r=a.n(c);function o(e){let{fetchMessage:t}=e;const[a,c]=Object(n.useState)(!0),[r,o]=Object(n.useState)("");return Object(n.useEffect)(()=>{!async function(){const e=await t();c(!1),o(e)}()},[t]),l.a.createElement("div",{className:"message-container"},l.a.createElement("div",{className:"bot-message"},a?"...":r))}function s(e){let{text:t}=e;return l.a.createElement("div",{className:"message-container"},l.a.createElement("div",{className:"user-message"},t))}function m(e){let{messages:t}=e;const a=Object(n.useRef)(null);return Object(n.useEffect)(()=>{a.current.scrollIntoView({block:"end",behavior:"smooth"})}),l.a.createElement("div",{className:"messages"},t,l.a.createElement("div",{id:"el",ref:a}))}function i(e){let{onSend:t}=e;const[a,c]=Object(n.useState)("");return l.a.createElement("div",{className:"input"},l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),t(a),c("")}},l.a.createElement("input",{type:"text",onChange:e=>{c(e.target.value)},value:a,placeholder:"Enter your message here"}),l.a.createElement("button",null,l.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 500 500"},l.a.createElement("g",null,l.a.createElement("g",null,l.a.createElement("polygon",{points:"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"})))))))}a(10);var u={GetChatbotResponse:async e=>new Promise(function(t,a){"hi"===e?t("Welcome to chatbot!"):fetch("/chat",{method:"POST",body:JSON.stringify({message:e}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>t(e.message)).catch(e=>a(e))}),GetImageURL:async e=>new Promise(function(t,a){fetch("/generateImage",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>t(e.url)).catch(e=>a(e))})};var h=e=>{let{updateLogoUrl:t}=e;const[a,c]=Object(n.useState)({face:"",eyebrows:"",eye_color:"",facial_features:"",hair:"",clothes:"",height:"",weight:"",other_apparel:""}),[r,o]=Object(n.useState)(!1),s=e=>{const{name:t,value:n}=e.target;c({...a,[t]:n})};return l.a.createElement("div",{className:"floating-form-container"},l.a.createElement("button",{onClick:()=>{o(!0)}},"Create your Avatar"),r&&l.a.createElement("div",{className:"modal-overlay"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{class:"close-btn-header"},l.a.createElement("span",{className:"close-btn",onClick:()=>{o(!1)}},"\xd7")),l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),console.log("Form data submitted:",a),u.GetImageURL(a).then(e=>{t(e)}),o(!1)},className:"floating-form"},l.a.createElement("label",{for:"face"},"Face:"),l.a.createElement("input",{type:"text",name:"face",value:a.face,onChange:s}),l.a.createElement("br",null),l.a.createElement("label",null,"Eye Brows:",l.a.createElement("input",{type:"text",name:"eyebrows",value:a.eyebrows,onChange:s})),l.a.createElement("label",null,"Eye Color:",l.a.createElement("input",{type:"text",name:"eye_color",value:a.eye_color,onChange:s})),l.a.createElement("label",null,"Facial Features:",l.a.createElement("input",{type:"text",name:"facial_features",value:a.facial_features,onChange:s})),l.a.createElement("label",null,"Hair:",l.a.createElement("input",{type:"text",name:"hair",value:a.hair,onChange:s})),l.a.createElement("label",null,"Clothes:",l.a.createElement("input",{type:"text",name:"clothes",value:a.clothes,onChange:s})),l.a.createElement("label",null,"Height:",l.a.createElement("input",{type:"text",name:"height",value:a.height,onChange:s})),l.a.createElement("label",null,"Weight:",l.a.createElement("input",{type:"text",name:"weight",value:a.weight,onChange:s})),l.a.createElement("label",null,"Other Apparel:",l.a.createElement("input",{type:"text",name:"other_apparel",value:a.other_apparel,onChange:s})),l.a.createElement("button",{type:"submit"},"Submit")))))},E=(a(11),a(3)),g=a.n(E);function p(e){let{logoUrl:t}=e;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{class:"header-text"},"Your Personal Movie Assistant"),l.a.createElement("div",{class:"header-logo"},l.a.createElement("img",{src:t||g.a,width:"100px"})))}function f(){const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)("");Object(n.useEffect)(()=>{!async function(){t([l.a.createElement(o,{key:"0",fetchMessage:async()=>await u.GetChatbotResponse("hi")})])}()},[]);return l.a.createElement("div",{className:"chatbot"},l.a.createElement(p,{logoUrl:a}),l.a.createElement(m,{messages:e}),l.a.createElement(i,{onSend:async a=>{const n=e.concat(l.a.createElement(s,{key:e.length+1,text:a}),l.a.createElement(o,{key:e.length+2,fetchMessage:async()=>await u.GetChatbotResponse(a)}));t(n)}}),l.a.createElement(h,{updateLogoUrl:e=>{c(e)}}))}const b=document.getElementById("root");r.a.render(l.a.createElement(f,null),b)}],[[4,1,2]]]);
//# sourceMappingURL=main.7a3992cc.chunk.js.map
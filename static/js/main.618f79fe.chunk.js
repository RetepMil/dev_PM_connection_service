(this.webpackJsonpdev_pm_connection_service=this.webpackJsonpdev_pm_connection_service||[]).push([[0],{10:function(e,t,n){e.exports={introduce_container:"ModalIntroduce_introduce_container__3t9Lj",section_title:"ModalIntroduce_section_title__1l9wN",section_content:"ModalIntroduce_section_content__3SAzm",section_content_self_intro:"ModalIntroduce_section_content_self_intro__WMceG",self_introduction_nickname:"ModalIntroduce_self_introduction_nickname__8HwnU",self_introduction_content:"ModalIntroduce_self_introduction_content__3iIjO"}},11:function(e,t,n){e.exports={main_container:"Main_main_container__2uYHP",puzzle_rectangle:"Main_puzzle_rectangle__30xaA",top_circle:"Main_top_circle__3-j0k",right_circle:"Main_right_circle__2u6ee",left_circle:"Main_left_circle__2Hshs",logo:"Main_logo__2LD0N",subtitle:"Main_subtitle__1ixFb"}},12:function(e,t,n){e.exports={textarea_container:"ModalApply_textarea_container__2WnQU",btn:"ModalApply_btn__1cBMs",join_btn:"ModalApply_join_btn__1qEeY",delete_btn:"ModalApply_delete_btn__1lQVj",textarea:"ModalApply_textarea__1n1-r"}},22:function(e,t,n){e.exports={app_container:"App_app_container__3IUFK"}},3:function(e,t,n){e.exports={modal_container:"Modal_modal_container__vMegh",modal_title:"Modal_modal_title__3O4Ej",stack_container:"Modal_stack_container__1o3Xm",stack_type:"Modal_stack_type__2TDif",stack_item:"Modal_stack_item__1yf0I",dot:"Modal_dot__3QnL-",t:"Modal_t__3goMq",b:"Modal_b__RpX5m",r:"Modal_r__2UwIw",l:"Modal_l__pPI9b",stack_item_name:"Modal_stack_item_name__hnujg",close_button:"Modal_close_button__2oAQY"}},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,r=n(1),i=n(21),c=n.n(i),o=n(22),s=n.n(o),l=n(14),d=n(2),_=n(11),j=n.n(_),b=n(0),u=function(){return Object(b.jsxs)("div",{className:j.a.main_container,children:[Object(b.jsxs)("div",{className:j.a.puzzle_rectangle,children:[Object(b.jsx)("div",{className:j.a.top_circle}),Object(b.jsx)("div",{className:j.a.right_circle}),Object(b.jsx)("div",{className:j.a.left_circle})]}),Object(b.jsx)("div",{className:j.a.logo,children:"project"}),Object(b.jsxs)("div",{className:j.a.subtitle,children:["Realize your idea. ",Object(b.jsx)("br",{}),"We make your imagination a reality."]})]})},p=n(4),m=n(8),f=n.n(m),O=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0];t[1];return Object(b.jsxs)("div",{className:f.a.navigation_container,children:[Object(b.jsx)("div",{className:f.a.login_container,children:n?Object(b.jsx)("div",{}):Object(b.jsx)("button",{className:f.a.login_btn,children:"log in"})}),Object(b.jsx)(l.b,{to:"/mypage",children:Object(b.jsx)("div",{className:f.a.navigation_my_page_btn,children:Object(b.jsx)("span",{className:f.a.my_page,children:"my page"})})}),Object(b.jsx)("div",{className:f.a.divider1}),Object(b.jsx)(l.b,{to:"/findproject",children:Object(b.jsx)("div",{className:f.a.navigation_find_project_btn,children:Object(b.jsx)("span",{className:f.a.find_project,children:"find project"})})}),Object(b.jsx)("div",{className:f.a.divider2}),Object(b.jsx)(l.b,{to:"/findengineer",children:Object(b.jsx)("div",{className:f.a.navigation_find_engineer_btn,children:Object(b.jsx)("span",{className:f.a.find_engineer,children:"find engineer"})})})]})},x=n(13),h=n.n(x),g=n(15),v=["title","titleId"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function N(e,t){var n=e.title,i=e.titleId,c=w(e,v);return r.createElement("svg",y({width:59,height:59,viewBox:"0 0 59 59",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,a||(a=r.createElement("circle",{cx:29.5,cy:29.5,r:29.5,fill:"#0275FC",fillOpacity:.6})))}var k,M=r.forwardRef(N),I=(n.p,n(9)),P=n.n(I),S=n(3),E=n.n(S),F=["#98C7FF","#4FA0FF","#087AFF","#D4D4D4"],L=[E.a.t,E.a.b,E.a.r,E.a.l],A=function(e){var t=e.itemNames;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){var t=F[Math.floor(Math.random()*F.length)];return Object(b.jsxs)("div",{style:{backgroundColor:t},className:E.a.stack_item,children:[Object(b.jsx)("span",{className:E.a.stack_item_name,children:e}),L.map((function(e){var n=Math.random()<.5?t:"white";return Object(b.jsx)("div",{className:"".concat(e," ").concat(E.a.dot),style:{backgroundColor:n}},e)}))]},e)}))})},C=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function T(e,t){var n=e.title,a=e.titleId,i=R(e,C);return r.createElement("svg",D({width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,k||(k=r.createElement("path",{d:"M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM9 13.5L12 13.5L12 10.5L9 10.5L9 13.5Z",fill:"#4D4D4D"})))}var z,B,W=r.forwardRef(T),X=(n.p,["title","titleId"]);function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function K(e,t){var n=e.title,a=e.titleId,i=H(e,X);return r.createElement("svg",q({width:33,height:33,viewBox:"0 0 33 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,z||(z=r.createElement("line",{x1:8.13195,y1:8.13172,x2:24.3954,y2:24.3952,stroke:"#858585",strokeWidth:3})),B||(B=r.createElement("line",{x1:24.3951,y1:8.13171,x2:8.13168,y2:24.3952,stroke:"#858585",strokeWidth:3})))}var Y,Z=r.forwardRef(K),G=(n.p,["JavaScript","React","NGINX","Ruby","Redis","Redux","nodeJS"]),J=["Illustrator","zeplin","Rhino","AdobeXD","photoshop","Figma","AfterEffects","Sketch","photo.io"],Q=["App Service","Web Service"],U=function(e){var t=e.moveToAnotherModal;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(W,{style:{position:"absolute",top:"48px",right:"35%"},onClick:function(){return t("Introduce")}}),Object(b.jsx)("div",{className:E.a.modal_title,children:"Tech Stack"}),Object(b.jsxs)("div",{className:E.a.stack_container,children:[Object(b.jsx)("div",{className:E.a.stack_type,style:{left:"107px",top:"105px"},children:"developer"}),Object(b.jsx)(A,{itemNames:G})]}),Object(b.jsxs)("div",{className:E.a.stack_container,children:[Object(b.jsx)("div",{className:E.a.stack_type,style:{left:"464px",top:"105px"},children:"designer"}),Object(b.jsx)(A,{itemNames:J})]}),Object(b.jsxs)("div",{className:E.a.stack_container,children:[Object(b.jsx)("div",{className:E.a.stack_type,style:{left:"809px",top:"105px"},children:"manager"}),Object(b.jsx)(A,{itemNames:Q})]})]})},V=n(10),$=n.n(V),ee=["title","titleId"];function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ae(e,t){var n=e.title,a=e.titleId,i=ne(e,ee);return r.createElement("svg",te({width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,Y||(Y=r.createElement("path",{d:"M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5L5 13.5L5 10.5L2 10.5L2 13.5Z",fill:"#4D4D4D"})))}var re,ie,ce,oe=r.forwardRef(ae),se=(n.p,{img:"1.png",nickname:"\ucf54\ub529\ud558\ub294 \ud638\ub791\uc774",self_introduction:"\uc548\ub155\ud558\uc138\uc694 \uc800\ub294 \uc774\ub7f0 \uc0ac\ub78c\uc785\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uacfc \ud568\uaed8\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4",career:["\u3147\u3147\uacf5\ubaa8\uc804 \ucc38\uac00, \ubcf8\uc120 \uc9c4\ucd9c","\u3147\u3147\uc11c\ubc84 \ud50c\ub7ab\ud3fc \uac1c\ubc1c \ucc38\uc5ec"],portfolio:"\ubaa8\ub974\uacd8\ub2e4"}),le=function(e){var t=e.moveToAnotherModal,n=Object(r.useState)(se),a=Object(p.a)(n,1)[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(oe,{style:{position:"absolute",top:"48px",left:"35%"},onClick:function(){return t("TechStack")}}),Object(b.jsx)(W,{style:{position:"absolute",top:"48px",right:"35%"},onClick:function(){return t("ApplyMessage")}}),Object(b.jsx)("div",{className:E.a.modal_title,children:"Introduce"}),Object(b.jsxs)("div",{className:$.a.introduce_container,children:[Object(b.jsx)("div",{className:$.a.section_title,children:"Self Introduction"}),Object(b.jsxs)("div",{className:$.a.section_content,children:[Object(b.jsx)("img",{src:"/dev_PM_connection_service_FrontEnd"+"/img/".concat(a.image),style:{width:"200px",height:"200px",float:"left"}}),Object(b.jsxs)("div",{className:$.a.section_content_self_intro,children:[Object(b.jsx)("span",{className:$.a.self_introduction_nickname,children:a.nickname}),Object(b.jsx)("span",{className:$.a.self_introduction_content,children:a.self_introduction})]})]}),Object(b.jsx)("div",{className:$.a.section_title,children:"Career"}),Object(b.jsx)("div",{className:$.a.section_content,style:{flexDirection:"column"},children:a.career.map((function(e){return Object(b.jsx)("div",{style:{marginLeft:"35px",marginBottom:"10px"},children:e})}))}),Object(b.jsx)("div",{className:$.a.section_title,children:"Portfolio"}),Object(b.jsx)("div",{className:$.a.section_content,children:"Content"})]})]})},de=n(12),_e=n.n(de),je=function(e){var t=e.moveToAnotherModal,n=Object(r.useState)(""),a=Object(p.a)(n,2),i=(a[0],a[1]),c=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),i("");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(oe,{style:{position:"absolute",top:"48px",left:"35%"},onClick:function(){return t("Introduce")}}),Object(b.jsx)("div",{className:E.a.modal_title,children:"Apply"}),Object(b.jsxs)("form",{onSubmit:c,children:[Object(b.jsx)("div",{className:_e.a.textarea_container,children:Object(b.jsx)("textarea",{className:_e.a.textarea,placeholder:"\ud558\uace0 \uc2f6\uc740 \ub9d0\uc744 \uc5ec\uae30\uc5d0 \uc801\uc5b4\uc8fc\uc138\uc694",onChange:function(e){var t=e.target.value;i(t)},required:!0})}),Object(b.jsx)("button",{className:"".concat(_e.a.btn," ").concat(_e.a.join_btn),onSubmit:c,children:"join"}),Object(b.jsx)("button",{className:"".concat(_e.a.btn," ").concat(_e.a.delete_btn),onSubmit:c,children:"delete"})]})]})},be=function(e){var t=e.modalTypeInput,n=e.setIsModalOn,a=Object(r.useState)(""),i=Object(p.a)(a,2),c=i[0],o=i[1];Object(r.useEffect)((function(){o(t)}),[]);var s=function(e){o(e)};return Object(b.jsxs)("div",{className:E.a.modal_container,children:[function(e){switch(e){case"TechStack":return Object(b.jsx)(U,{moveToAnotherModal:s});case"Introduce":return Object(b.jsx)(le,{moveToAnotherModal:s});case"ApplyMessage":return Object(b.jsx)(je,{moveToAnotherModal:s});default:return Object(b.jsx)("div",{})}}(c),Object(b.jsx)(Z,{onClick:function(){n(!1)},style:{position:"absolute",top:"22px",right:"41.5px"}})]})},ue=n(6),pe=n(7),me=pe.a.div(re||(re=Object(ue.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  box-sizing: border-box;\n"]))),fe=function(e){var t=e.item;return Object(b.jsxs)(me,{children:[Object(b.jsx)("img",{height:"400px",width:"500px",alt:"Hello",src:"/dev_PM_connection_service_FrontEnd"+"/img/FindProjectDummys/".concat(t.image)}),Object(b.jsx)("span",{className:P.a.board_preview_text,style:{width:"500px"},children:t.name})]})},Oe=[{name:"\ud53c\ub4dc\ubc31 \ubcf4\uad00 \ud50c\ub7ab\ud3fc #posTree",image:"1.png"},{name:"ArtRecipe: \uc608\uc220\uc791\ud488 - \uc7ac\ub8cc\uc815\ubcf4 \uacf5\uc720 \ud50c\ub7ab\ud3fc",image:"2.png"},{name:"PODO. \ud559\uc2b5 \ubaa9\uc801\uc758 \uc601\uc0c1 \ubaa8\uc74c \uc6f9\uc0ac\uc774\ud2b8",image:"3.png"},{name:"BookItOut: \uace0\ub824\ub300\ud559\uad50 \ud559\ubd80\uc0dd\uc758 \uc6d0\ud65c\ud55c \uc9c0\uc2dd \uc815\ubcf4 \uc790\ub8cc \uc774\uc6a9\uc744 \uc704\ud55c \uc11c\ube44\uc2a4",image:"4.png"},{name:"\ubaa9\uc18c\ub9ac\ub85c \ub9cc\ub098\ub294 \ub300\ud559\uce5c\uad6c! \ud1b5\ud654\ub9c1",image:"5.png"},{name:"\ubaa8\uc758 \ub2f4\uae08\uc9c8 \uae30\ubc95 \uc2dc\uac01\ud654",image:"6.png"},{name:"Borrow Go! \ub300\ud559\uad50 \ub0b4 \ubb3c\uac74 \ub300\uc5ec \uc2dc\uc2a4\ud15c",image:"7.png"},{name:"\uace0\ub824\ub300\ud559\uad50 \uc2a4\ub9c8\ud2b8\ucea0\ud37c\uc2a4 \ucee4\ub125\ud130 - \uc548\uc804\ud55c \uc5f0\uad6c\uc2e4 Wb-App",image:"8.png"},{name:"\uc624\ub298 \ubb50 \uba39\uc9c0? \uc74c\uc2dd\uc120\ud638\ub3c4 \uc870\uc0ac \ud6c4 \uc778\uacf5\uc9c0\ub2a5\uc774 \ucd94\ucc9c",image:"9.png"}],xe=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(!0),i=Object(p.a)(a,2),c=i[0],o=i[1],s=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:P.a.search_filter_container,children:Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)("input",{className:P.a.search_textbox,type:"text",placeholder:"search",onChange:function(e){var t=e.target.value;n(t)}}),Object(b.jsx)("button",{className:P.a.search_btn,children:Object(b.jsx)(M,{})})]})}),Object(b.jsx)("div",{className:P.a.board_container,children:Object(b.jsxs)("div",{className:P.a.board_subcontainer,children:[Object(b.jsx)("div",{className:P.a.board_projects_for_you,children:"Projects for you!"}),Object(b.jsx)("div",{className:P.a.board_contents,children:Oe.map((function(e){return Object(b.jsx)(fe,{item:e})}))}),Object(b.jsxs)("div",{className:P.a.board_page_numbers,children:["1 2 3 4 5 ",">"]})]})}),c?Object(b.jsx)(be,{modalTypeInput:"TechStack",setIsModalOn:o}):null]})},he=function(){return Object(b.jsx)("div",{children:"FindEngineer!"})},ge=["title","titleId"];function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ve.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function we(e,t){var n=e.title,a=e.titleId,i=ye(e,ge);return r.createElement("svg",ve({width:27,height:88,viewBox:"0 0 27 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,ie||(ie=r.createElement("line",{x1:1.13397,y1:86.8013,x2:26.134,y2:43.5,stroke:"#858585",strokeWidth:2,className:"arrow"})),ce||(ce=r.createElement("line",{x1:.866025,y1:.5,x2:25.866,y2:43.8013,stroke:"#858585",strokeWidth:2,className:"arrow"})))}var Ne,ke,Me,Ie,Pe,Se,Ee,Fe=r.forwardRef(we),Le=(n.p,n(34),pe.a.img(Ne||(Ne=Object(ue.a)(["\n  width: 100%;\n  min-height: 80%;\n  object-fit: fill;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  &:hover {\n    transition: all 0.2s;\n    transform: scale(1.02);\n    cursor: pointer;\n  }\n"])))),Ae=pe.a.div(ke||(ke=Object(ue.a)(["\n  width: 25vw;\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  margin: 0 1.6vw;\n"]))),Ce=pe.a.span(Me||(Me=Object(ue.a)(["\n  font-size: 1rem;\n  padding-top: 30px;\n"]))),De=function(e){return e.length>29?e.slice(0,29)+"...":e},Re=function(e){var t=e.image,n=e.title;return Object(b.jsxs)(Ae,{children:[Object(b.jsx)(Le,{alt:"no",src:"/dev_PM_connection_service_FrontEnd"+"/img/".concat(t)}),Object(b.jsx)(Ce,{children:De(n)})]})},Te=pe.a.div(Ie||(Ie=Object(ue.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto 0;\n  display: flex;\n  order: 2px solid black;\n  overflow: hidden;\n"]))),ze=pe.a.div(Pe||(Pe=Object(ue.a)(["\n  display: flex;\n"]))),Be=pe.a.div(Se||(Se=Object(ue.a)(["\n  width: 100%;\n  height: 70%;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 2%;\n"]))),We=function(){var e=Object(r.useState)([{image:"1.png",title:"BookItOut: \uace0\ub824\ub300\ud559\uad50 \ud559\ubd80\uc0dd\uc758 \uc6d0\ud65c\ud55c \uc9c0\uc2dd \uc815\ubcf4 \uc790\ub8cc \uc774\uc6a9\uc744 \uc704\ud55c \uc571"},{image:"2.png",title:"\ubaa9\uc18c\ub9ac\ub85c \ub9cc\ub098\ub294 \ub300\ud559\uce5c\uad6c! \ud1b5\ud654\ub9c1"},{image:"3.png",title:"\ud53c\ub4dc\ubc31 \ubcf4\uad00 \ud50c\ub7ab\ud3fc #posTree"},{image:"4.png",title:"PODO. \ud559\uc2b5 \ubaa9\uc801\uc758 \uc601\uc0c1 \ubaa8\uc74c \uc6f9\uc0ac\uc774\ud2b8"},{image:"5.png",title:"ArtRecipe: \uc608\uc220\uc791\ud488\xb7\uc7ac\ub8cc\uc815\ubcf4 \uacf5\uc720 \ud50c\ub7ab\ud3fc"}]),t=Object(p.a)(e,2),n=t[0],a=(t[1],Object(r.useState)(1)),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useRef)();return Object(r.useEffect)((function(){s.current.style.transition="all 0.5s ease-in-out",s.current.style.transform="translateX(-".concat(28.2*(c-1),"vw)"),d.current.classList.contains("on")||d.current.classList.add("on"),l.current.classList.contains("on")||l.current.classList.add("on"),3===c&&l.current.classList.contains("on")&&l.current.classList.remove("on"),1===c&&d.current.classList.contains("on")&&d.current.classList.remove("on")}),[c]),Object(b.jsxs)(Be,{children:[Object(b.jsx)("button",{className:"arrows left-arrow",ref:d,children:Object(b.jsx)(Fe,{onClick:function(){o(c-3<=0?1:c-3)}})}),Object(b.jsx)(Te,{children:Object(b.jsx)(ze,{ref:s,children:n.map((function(e,t){return Object(b.jsx)(Re,{image:e.image,title:e.title},t)}))})}),Object(b.jsx)("button",{className:"arrows right-arrow",ref:l,children:Object(b.jsx)(Fe,{onClick:function(){o(c+5>5?3:c+3)}})})]})},Xe=pe.a.div(Ee||(Ee=Object(ue.a)(["\n  margin: auto;\n  width: 90vw;\n  height: 80vh;\n  padding: 1rem;\n  margin-top: 15vh;\n"]))),qe=function(){return Object(b.jsxs)(Xe,{children:[Object(b.jsx)("div",{style:{fontSize:"2rem",color:"#4D4D4D"},children:"|\xa0\xa0\xa0Our project"}),Object(b.jsx)(We,{})]})},He=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/dev_PM_connection_service_FrontEnd",element:Object(b.jsx)(u,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/mypage",element:Object(b.jsx)(qe,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/findproject",element:Object(b.jsx)(xe,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/findengineer",element:Object(b.jsx)(he,{})})]})]})};n(35),n(36);var Ke=function(){return Object(b.jsx)("div",{className:s.a.app_container,children:Object(b.jsx)(He,{})})};c.a.render(Object(b.jsx)(Ke,{}),document.getElementById("root"))},8:function(e,t,n){e.exports={navigation_container:"Navigation_navigation_container__3XHbv",login_container:"Navigation_login_container__3we0w",login_btn:"Navigation_login_btn__144TC",navigation_my_page_btn:"Navigation_navigation_my_page_btn__24aOY",navigation_find_project_btn:"Navigation_navigation_find_project_btn__1OiFK",navigation_find_engineer_btn:"Navigation_navigation_find_engineer_btn__3AkSn",divider1:"Navigation_divider1__3V7fl",divider2:"Navigation_divider2__igrgq",my_page:"Navigation_my_page__1RdEo",find_project:"Navigation_find_project__1q_KP",find_engineer:"Navigation_find_engineer__3EF9Z"}},9:function(e,t,n){e.exports={search_filter_container:"FindProject_search_filter_container__3gDnX",search_textbox:"FindProject_search_textbox__1GTfq",search_btn:"FindProject_search_btn__3KMD7",board_container:"FindProject_board_container__2W54h",board_subcontainer:"FindProject_board_subcontainer__HY5mr",board_projects_for_you:"FindProject_board_projects_for_you__6xhe9",board_contents:"FindProject_board_contents__zpSa3",board_page_numbers:"FindProject_board_page_numbers__1BxWL",board_preview_text:"FindProject_board_preview_text__3oWnK"}}},[[37,1,2]]]);
//# sourceMappingURL=main.618f79fe.chunk.js.map
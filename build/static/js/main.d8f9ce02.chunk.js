(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){},13:function(e,a,t){},16:function(e,a,t){e.exports=t(46)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),o=t.n(r),l=(t(22),t(23),t(24),t(4)),s=t(5),c=t(7),u=t(6),m=t(8),d=(t(10),function(e){var a=window.location.pathname+window.location.search,t=e.path===a?"nav-item active":"nav-item",n=e.disabled?"nav-link disabled":"nav-link";return i.a.createElement("li",{className:t},i.a.createElement("a",{href:e.path,className:n},e.name,e.path===a?i.a.createElement("span",{className:"sr-only"},"(current)"):""))}),p=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={isToggleOn:!1},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"showDropdown",value:function(e){e.preventDefault(),this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){var e=this,a="dropdown-menu"+(this.state.isToggleOn?" show":"");return i.a.createElement("li",{className:"nav-item dropdown"},i.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(a){e.showDropdown(a)}},this.props.name),i.a.createElement("div",{className:a,"aria-labelledby":"navbarDropdown"},this.props.children))}}]),a}(i.a.Component),b=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-sm bg-light"},i.a.createElement("a",{className:"navbar-brand",href:"/"},"Foodie & Co."),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement(d,{path:"/",name:"Home"}),i.a.createElement(d,{path:"/page2",name:"Account"}),i.a.createElement(d,{path:"/page3",name:"Contact us",disabled:"true"}),i.a.createElement(p,{name:"Community"},i.a.createElement("a",{className:"dropdown-item",href:"/"},"Action"),i.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action"),i.a.createElement("div",{className:"dropdown-divider"}),i.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))),i.a.createElement("form",{className:"form-inline my-2 my-lg-0"},i.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),i.a.createElement("button",{className:"btn btn-light btn-sm",type:"submit"},i.a.createElement("span",{className:"glyphicon glyphicon-search","aria-hidden":"true"})))))}}]),a}(i.a.Component),g=(t(25),t(14)),v=function(e){return i.a.createElement(g.push,e,i.a.createElement("a",{className:"menu-item",href:"/"},"Trending"),i.a.createElement("a",{className:"menu-item",href:"/burgers"},"Our Picks"),i.a.createElement("a",{className:"menu-item",href:"/pizzas"},"Vegetarian"),i.a.createElement("a",{className:"menu-item",href:"/desserts"},"Desserts"))},h=(t(43),t(13),t(15)),f=t.n(h),E=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,Object.assign({},{spaceBetween:30,slidesPerView:3,centeredSlides:!0,loop:!0,autoplay:{delay:3300,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{}},{styleName:"slider"}),i.a.createElement("div",{className:"slide1"},"Slide 1"),i.a.createElement("div",{className:"slide2"},"Slide 2"),i.a.createElement("div",{className:"slide3"},"Slide 3"),i.a.createElement("div",{className:"slide4"},"Slide 4"))}}]),a}(i.a.Component);function N(){return i.a.createElement("div",{id:"App"},i.a.createElement(v,{pageWrapId:"page-wrap",outerContainerId:"App"}),i.a.createElement("div",{id:"page-wrap"},i.a.createElement("link",{href:"css/bootstrap.min.css",rel:"stylesheet"}),i.a.createElement("link",{href:"css/homepage.css",rel:"stylesheet"}),i.a.createElement("link",{href:"jumbotron.css",rel:"stylesheet"}),i.a.createElement("body",null,i.a.createElement("div",null,i.a.createElement(b,null)),i.a.createElement("div",{className:"container-fluid container2"},i.a.createElement("image",{src:"website-mock-up/HatchfulExport-All/logo_transparent.png",id:"logo",alt:"Responsive image"})),i.a.createElement("div",{className:"breathingroom"}," ",i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.a.createElement(E,{className:"slider"}),i.a.createElement("div",{className:"bottomBar"}))))}var w=document.getElementById("root");o.a.render(i.a.createElement(N,null),w);var q=N;o.a.render(i.a.createElement(q,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d8f9ce02.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(6),c=a(7),o=a(9),l=a(8),s=a(10),r=a(0),m=a.n(r),u=a(13),d=a.n(u),p=a(5),I=a(2),v=(a(25),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).changeMenu=function(e){a.setState({lastItem:a.state.activeItem}),a.setState({activeItem:e})},a.state={activeItem:"Home",lastItem:"Home"},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("presentation").classList.add("preload"),setTimeout(function(){document.getElementById("presentation").className="content open"},500)}},{key:"render",value:function(){return m.a.createElement("main",null,m.a.createElement(b,{activeItem:this.state.activeItem,lastItem:this.state.lastItem}),m.a.createElement(E,{activeItem:this.state.activeItem,onChange:this.changeMenu}))}}]),t}(m.a.Component));function h(e){return m.a.createElement("div",{id:"presentation",className:"Home"!==e.activeItem?"content":"content open",style:"Home"===e.lastItem?{zIndex:0}:{zIndex:-1}},m.a.createElement("div",null,m.a.createElement("section",null,m.a.createElement("h2",null,"Ol\xe1, ",m.a.createElement("span",null,"meu nome \xe9")),m.a.createElement("h1",null,"Pedro"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis alias, atque molestias ullam inventore illo quos repellat modi, tempore excepturi. Recusandae eum quas dolor ab molestias optio, sequi quo?"),m.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis alias, atque molestias ullam inventore illo quos repellat modi, tempore excepturi. Recusandae eum quas dolor ab molestias optio, sequi quo?"))))}var E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={activeItemPosition:0,menuItems:[{text:"Home"},{text:"Habilidades"},{text:"Projetos"},{text:"Contato"}]},a.handleClick=a.handleClick.bind(Object(n.a)(Object(n.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this;return function(a){a.preventDefault();var n="Home";switch(e){case"Home":n="presentation";break;case"Habilidades":n="skills";break;case"Projetos":n="projects";break;case"Contato":n="contact"}var i=document.getElementById(n),c=i.getBoundingClientRect(),o=i.clientWidth||i.innerWidth,l=i.clientHeight||i.innerHeight,s=(c.left,c.top,a.clientX),r=a.clientY,m=Math.floor(s/o*100),u=Math.floor(r/l*100);i.style["transform-origin"]="".concat(m-10,"% ").concat(u,"%"),t.props.onChange(e),t.setState({activeItemPosition:document.getElementById(e).offsetTop})}}},{key:"render",value:function(){var e=this,t=this.state.menuItems.map(function(t){return m.a.createElement(f,{item:t,handleClick:e.handleClick})});return m.a.createElement("nav",{id:"content-middle"},m.a.createElement("a",{href:""},m.a.createElement("img",{src:a(27)})),m.a.createElement("div",{id:"menu"},m.a.createElement("span",{className:"menu-active",style:{top:this.state.activeItemPosition}}),t),m.a.createElement("div",{id:"social"},m.a.createElement("a",{href:""},m.a.createElement(p.a,{icon:I.d})),m.a.createElement("a",{href:""},m.a.createElement(p.a,{icon:I.b})),m.a.createElement("a",{href:""},m.a.createElement(p.a,{icon:I.c})),m.a.createElement("a",{href:""},m.a.createElement(p.a,{icon:I.a}))))}}]),t}(m.a.Component);function f(e){return m.a.createElement("div",{id:e.item.text,onClick:e.handleClick(e.item.text)},e.item.text)}var b=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{id:"content-left"},m.a.createElement(h,{activeItem:this.props.activeItem,lastItem:this.props.lastItem}),m.a.createElement(j,{activeItem:this.props.activeItem,lastItem:this.props.lastItem}),m.a.createElement(g,{activeItem:this.props.activeItem,lastItem:this.props.lastItem}),m.a.createElement(k,{activeItem:this.props.activeItem,lastItem:this.props.lastItem}))}}]),t}(m.a.Component);function j(e){return m.a.createElement("div",{id:"projects",className:"Projetos"!==e.activeItem?"content":"content open",style:"Projetos"===e.lastItem?{zIndex:0}:{zIndex:-1}},m.a.createElement("div",{id:"canvas"}))}function g(e){return m.a.createElement("div",{id:"skills",className:"Habilidades"!==e.activeItem?"content":"content open",style:"Habilidades"===e.lastItem?{zIndex:0}:{zIndex:-1}})}function k(e){return m.a.createElement("div",{id:"contact",className:"Contato"!==e.activeItem?"content":"content open",style:"Contato"===e.lastItem?{zIndex:0}:{zIndex:-1}})}d.a.render(m.a.createElement(v,null),document.getElementById("root"))},25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/Logo.46d40615.png"}},[[14,2,1]]]);
//# sourceMappingURL=main.89afea90.chunk.js.map
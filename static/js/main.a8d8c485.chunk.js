(this["webpackJsonpreact-image-search"]=this["webpackJsonpreact-image-search"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),s=(a(24),a(6)),u=a.n(s),o=a(17),l=a(2),m=a(3),h=a(5),p=a(4),f=(a(26),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("input",{className:"field",type:"text",id:"search",placeholder:"Search Image",onChange:this.onInputChange,value:this.state.term})))}}]),a}(n.Component)),g=(a(27),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this)).setSpans=function(){var e=r.imageRef.current.clientHeight,t=Math.ceil(e/10);r.setState({spans:t})},r.state={spans:0},r.imageRef=Object(n.createRef)(),r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(n.Component)),v=function(e){var t=e.images.map((function(e){return r.a.createElement(g,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},b=a(18),d=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID PtrnShP-IwPCr9KqFr9_AmIxeufLnea0g6lHXKZ386E"}}),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("h1",null,"Search Imgs App"),r.a.createElement("br",null),r.a.createElement(f,{onSubmit:this.onSearchSubmit}),r.a.createElement("br",null),r.a.createElement(v,{images:this.state.images}))}}]),a}(n.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a8d8c485.chunk.js.map
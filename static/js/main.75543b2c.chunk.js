(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,a,t){e.exports=t(69)},38:function(e,a,t){},58:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),s=t.n(c),o=t(7),i=t(1);var l=function(e){return r.a.createElement("span",null)},m=t(12),u=t(13),d=t(15),v=t(14),p=(t(38),function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.location,t=e.history;void 0===a.state&&t.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return e?r.a.createElement("div",{className:"detail__background",style:{backgroundImage:"url(".concat(e.background,")")}},r.a.createElement("div",{className:"detail__grid"},r.a.createElement("img",{className:"detail__poster",src:e.poster,alt:e.title}),r.a.createElement("div",{className:"detail__description"},r.a.createElement("h1",{className:"detail__title"},e.title),r.a.createElement("h5",{className:"detail__summary"},e.summary)))):null}}]),t}(r.a.Component)),_=t(17),E=t.n(_),g=t(29),h=t(30),y=t.n(h);t(58);var b=function(e){var a=e.id,t=e.year,n=e.title,c=e.summary,s=e.poster,i=e.genres,l=e.background;return r.a.createElement(o.b,{to:{pathname:"/movie/".concat(a),state:{year:t,title:n,summary:c,poster:s,genres:i,background:l}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},c.slice(0,500),"..."))))},f=(t(67),function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(g.a)(E.a.mark((function a(){var t,n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=download_count");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.large_cover_image,genres:e.genres,background:e.background_image})}))))}}]),t}(r.a.Component));t(68);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(o.b,{to:"/",className:"header__title"},"Home"),r.a.createElement(o.b,{to:"/about",className:"header__title"},"Leon"))};var k=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:f}),r.a.createElement(i.a,{path:"/about",component:l}),r.a.createElement(i.a,{path:"/movie/:id",component:p}))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.75543b2c.chunk.js.map
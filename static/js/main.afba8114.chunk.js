(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{21:function(e,a,t){e.exports=t(48)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),c=t.n(s),i=t(4),l=t.n(i),m=t(15),o=t(16),u=t(17),v=t(20),d=t(19),p=t(18),_=t.n(p);t(45);var E=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,500),"...")))};t(46);var g=function(){return r.a.createElement("hedaer",{className:"header"},r.a.createElement("div",{className:"header__title"},"LEON"),r.a.createElement("div",null),r.a.createElement("div",null))},y=(t(47),function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function a(){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=like_count");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.large_cover_image,genres:e.genres})})))))}}]),t}(r.a.Component));c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.afba8114.chunk.js.map
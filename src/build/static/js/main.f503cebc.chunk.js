(this["webpackJsonpblog-practice"]=this["webpackJsonpblog-practice"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/pic1.23522045.jpg"},21:function(e,t,n){e.exports=n.p+"static/media/pic2.be038e28.jpg"},22:function(e,t,n){e.exports=n.p+"static/media/pic3.5ec6ef92.jpg"},24:function(e,t,n){e.exports=n.p+"static/media/paint.bff43f46.jpg"},25:function(e,t,n){e.exports=n.p+"static/media/guitar.cc07907f.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/code.ecf4ff15.jpg"},27:function(e,t,n){e.exports=n.p+"static/media/profile.dda0ba82.jpg"},30:function(e,t,n){e.exports=n(52)},36:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);n(31);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),i=(n(36),n(7)),o=n(8),m=n(20),s=n.n(m),u=n(21),p=n.n(u),f=n(22),d=n.n(f),E=n(23),h=[s.a,p.a,d.a],g={duration:1e4,transitionDuration:1e3,infinite:!0,indicators:!0,scale:.4,arrows:!0},v=function(){return r.a.createElement("div",{className:"slide-container"},r.a.createElement(E.Zoom,g,h.map((function(e,t){return r.a.createElement("img",{key:t,style:{width:"100%"},src:e})}))))},b=n(24),y=n.n(b),j=n(25),w=n.n(j),x=n(26),A=n.n(x),I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Who am I?"),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("img",{src:A.a,alt:"code",width:"100%"}),r.a.createElement("p",null,"I'm a programmer. I spend most of my time learning new technologies and programming languages. ")),r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("img",{src:y.a,alt:"paint",width:"100%"}),r.a.createElement("p",null,"I'm an artist. I love visiting art museums and paint. ")),r.a.createElement("div",{class:"col-sm-4"},r.a.createElement("img",{src:w.a,alt:"guitar",width:"100%"}),r.a.createElement("p",null,"I'm a musician. I use the guitar to express the melody in my mind."))))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome to my React.js playground."),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(I,null)))},C=n(27),N=n.n(C),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About Me"),r.a.createElement("img",{src:N.a,alt:"profile",class:"prof"}),r.a.createElement("p",{className:"prof"},"Jin graduated from University of Wisconsin-Milwaukee with a Bachelor of Science Degree in Information Science & Psychology. Jin recieved undergraduate-level academic training on Information Systems, Web Development, Application Development, Cyber Security, Applied Behavior Analysis, and Psychological Statististics"))},O=[{name:"about",title:"About This Website",content:["This website demonstrates the usecases of React.js, Node.js, JavaScript, HTML, CSS, MongoDB, and AWS EC2.","Note that the upvote count and the comments are posted to MongoDB that runs on the AWS EC2 server."]},{name:"impressionism",title:"Impressionism",content:["Deemed by many to be unorthodox, impressionists like Van Gogh, C\xe9zanne, and Monet struggled to gain populatity in their time."]},{name:"modern-art",title:"Modern Art",content:["Is it an image of randomly scramble squares or is it portraying a sitting man playing flute?"]},{name:"learn-react",title:"Learn React",content:["Learn React.js by doing it! Even if it means 1000 fails!"]}],W=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(i.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles"),r.a.createElement(W,{articles:O}))},D=n(5),M=n.n(D),B=n(10),J=n(11),T=function(){return r.a.createElement("h1",null,"404: Page Not Found")},R=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))}))))},L=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,c=function(){var e=Object(B.a)(M.a.mark((function e(){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"upvotes"},r.a.createElement("p",null,"This post has been upvoted ",n," times."),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return c()}},"Upvote")))},P=function(e){var t=e.articleName,n=e.setArticleInfo,c=Object(a.useState)(""),l=Object(J.a)(c,2),i=l[0],o=l[1],m=Object(a.useState)(""),s=Object(J.a)(m,2),u=s[0],p=s[1],f=function(){var e=Object(B.a)(M.a.mark((function e(){var a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:u}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r),o(""),p("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Add a Comment"),r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"Comment:",r.a.createElement("textarea",{rows:"4",cols:"50",on:!0,value:u,onChange:function(e){return p(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return f()}},"Add Comment"))},H=function(e){var t=e.match.params.name,n=O.find((function(e){return e.name===t})),c=Object(a.useState)({upvotes:0,comments:[]}),l=Object(J.a)(c,2),i=l[0],o=l[1];if(Object(a.useEffect)((function(){(function(){var e=Object(B.a)(M.a.mark((function e(){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),o(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return r.a.createElement(T,null);var m=O.filter((function(e){return e.name!==t}));return r.a.createElement(r.a.Fragment,null,"  ",r.a.createElement("div",null,r.a.createElement("h1",null,n.title),n.content.map((function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement(R,{comments:i.comments}),r.a.createElement(L,{articleName:t,upvotes:i.upvotes,setArticleInfo:o}),r.a.createElement(P,{articleName:t,setArticleInfo:o}),r.a.createElement("h3",null,"Other Articles:"),r.a.createElement(W,{articles:m}))},U=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null," ",r.a.createElement(i.b,{to:"/about"},"About")),r.a.createElement("li",null," ",r.a.createElement(i.b,{to:"/articles-list"},"Articles"))))};n(51);var q=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:k,exact:!0}),r.a.createElement(o.a,{path:"/about",component:S}),r.a.createElement(o.a,{path:"/articles-list",component:F}),r.a.createElement(o.a,{path:"/article/:name",component:H}),r.a.createElement(o.a,{component:T}))))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f503cebc.chunk.js.map
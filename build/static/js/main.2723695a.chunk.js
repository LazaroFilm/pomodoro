(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/pomodoro.7ffd2e73.png"},15:function(e,t,a){e.exports=a.p+"static/media/PomodoroRing.5e48736b.m4a"},16:function(e,t,a){e.exports=a.p+"static/media/PomodoroTicking.a5369aef.m4a"},18:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),i=a.n(s),r=(a(23),a(24),a(6)),o=a(14),l=a.n(o),m=(a(25),a(33)),b=a(4),d=a(5);var u=function(e){var t=e.state,a=e.dispatch;return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron text-center mt-2 py-3"},c.a.createElement("h1",{className:"display-2",id:"time-left"},t.clockTime[0],":",1===t.clockTime[1].toString().length?"0".concat(t.clockTime[1]):t.clockTime[1]),c.a.createElement("div",{className:"lead alert badge-primary display-4",id:"timer-label"},c.a.createElement("strong",null,"Work Hard!")),c.a.createElement("hr",{className:"my-3"}),c.a.createElement("div",{className:"btn-group mt-2 lead",role:"group","aria-label":"Play/Pause Reset"},c.a.createElement(m.a,{className:"btn btn-dark btn-lg",id:"start_stop",role:"button",onClick:function(){a({type:"start-stop"})}},c.a.createElement(b.a,{icon:d.d})," ",c.a.createElement(b.a,{icon:d.c}))," ",c.a.createElement(m.a,{className:"btn btn-secondary btn-lg",id:"reset",role:"button",onClick:function(){return a({type:"reset"})}},c.a.createElement(b.a,{icon:d.e})))))};var p=function(e){var t=e.state,a=e.dispatch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex flex-row justify-content-center"},c.a.createElement("div",{id:"session-block",className:"p-2 text-center"},c.a.createElement("div",{id:"session-label",className:"alert alert-primary",role:"alert"},c.a.createElement("div",null,"Session:"),c.a.createElement("div",{className:"lead"},c.a.createElement("div",{className:"badge badge-primary"},c.a.createElement("span",{id:"session-length"},t.sessionTime)," min")),c.a.createElement("div",{className:"btn-group mt-2",role:"group","aria-label":"set session length"},c.a.createElement(m.a,{id:"session-decrement",className:"btn btn-primary",onClick:function(){return a({type:"session-decrement"})}},c.a.createElement(b.a,{icon:d.a,size:"2x"})),c.a.createElement(m.a,{id:"session-increment",className:"btn btn-primary",onClick:function(){return a({type:"session-increment"})}},c.a.createElement(b.a,{icon:d.b,size:"2x"}))))),c.a.createElement("div",{id:"break-block",className:"p-2 text-center"},c.a.createElement("div",{id:"break-label",className:"alert alert-success",role:"alert"},c.a.createElement("div",null,"Break:"),c.a.createElement("div",{className:"lead"},c.a.createElement("div",{className:"badge badge-success"},c.a.createElement("span",{id:"break-length"},t.breakTime)," min")),c.a.createElement("div",{className:"btn-group mt-2",role:"group","aria-label":"set break length"},c.a.createElement(m.a,{id:"break-decrement",className:"btn btn-success",onClick:function(){return a({type:"break-decrement"})}},c.a.createElement(b.a,{icon:d.a,size:"2x"})),c.a.createElement(m.a,{id:"break-increment",className:"btn btn-success",onClick:function(){return a({type:"break-increment"})}},c.a.createElement(b.a,{icon:d.b,size:"2x"})))))))},k=a(2);var g=function(e,t){switch(t.type){case"session-decrement":return e.sessionTime>0?"start"===e.isRunning?Object(k.a)({},e):e.sessionTime>0&&Object(k.a)(Object(k.a)({},e),{},{sessionTime:e.sessionTime-1,clockTime:[e.sessionTime-1,e.clockTime[1]]}):Object(k.a)({},e);case"session-increment":return"start"===e.isRunning?Object(k.a)({},e):Object(k.a)(Object(k.a)({},e),{},{sessionTime:e.sessionTime+1,clockTime:[e.sessionTime+1,e.clockTime[1]]});case"break-decrement":return"start"===e.isRunning?Object(k.a)({},e):e.breakTime>0?Object(k.a)(Object(k.a)({},e),{},{breakTime:e.breakTime-1}):Object(k.a)({},e);case"break-increment":return"start"===e.isRunning?Object(k.a)({},e):Object(k.a)(Object(k.a)({},e),{},{breakTime:e.breakTime+1});case"reset":return{isRunning:"stop",sessionTime:25,breakTime:5,clockTime:[25,0],test:"initial"};case"start-stop":return"start"===e.isRunning?(console.log("stopping now \ud83d\uded1"),Object(k.a)(Object(k.a)({},e),{},{isRunning:"stop"})):(console.log("starting now \u23f2\ufe0f"),Object(k.a)(Object(k.a)({},e),{},{isRunning:"start"}));case"tic-toc":return 0===e.clockTime[1]?Object(k.a)(Object(k.a)({},e),{},{clockTime:[e.clockTime[0]-1,59]}):Object(k.a)(Object(k.a)({},e),{},{clockTime:[e.clockTime[0],e.clockTime[1]-1]});default:throw new Error}},E=a(11),T=a(15),f=a.n(T),j=a(16),v=a.n(j);function O(){var e=Object(n.useReducer)(g,{isRunning:"stop",sessionTime:25,breakTime:5,clockTime:[25,0],test:"initial",intervalID:"testing"}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(),o=Object(r.a)(i,2),m=o[0],b=o[1],d=Object(E.a)(f.a),k=Object(r.a)(d,1)[0],T=Object(E.a)(v.a,{volume:.2}),j=Object(r.a)(T,1)[0];return Object(n.useEffect)((function(){if("start"===a.isRunning){j();var e=setInterval((function(){s({type:"tic-toc"})}),1e3);b(e)}else"stop"===a.isRunning&&clearInterval(m)}),[a.isRunning]),Object(n.useEffect)((function(){a.clockTime[0]<=0&&0===a.clockTime[1]&&(console.log("DING DING DING!"),clearInterval(m),k())}),[a.clockTime]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",{id:"pomodoro",className:"d-flex justify-content-center my-2"},c.a.createElement("img",{id:"pomodoro",src:l.a,alt:"Pomodoro"})),c.a.createElement(p,{state:a,dispatch:s}),c.a.createElement(u,{state:a,dispatch:s}),c.a.createElement("p",{id:"credits"},"by LazaroFilm - last update Oct 17 4:35 PM"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2723695a.chunk.js.map
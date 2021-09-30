(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(6),s=a.n(r),i=(a(11),a(2)),l=a.n(i),u=a(4),j=a(3),h=a(0),o=function(e){var t=e.currentWeather,a=e.language,c=e.metric,n=t.main,r=t.name,s=t.wind,i=t.weather,l=t.sys,u=n.temp,j=n.temp_min,o=n.temp_max,d=n.pressure,m=n.humidity,p=Math.round(o),b=Math.round(j),O=i[0],x=O.description,_=O.icon;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"weather__info",children:[Object(h.jsx)("h2",{className:"weather__city",children:"".concat(r,", ").concat(l.country)}),Object(h.jsxs)("h3",{className:"weather__temp",children:[Math.round(u),"standard"===c&&"K","metric"===c&&Object(h.jsx)("span",{children:"\xb0C"}),"imperial"===c&&Object(h.jsx)("span",{children:"\xb0F"})]}),Object(h.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(_,"@2x.png"),alt:"icon",className:"weather__image"}),Object(h.jsx)("h3",{className:"weather__description",children:"".concat(x.toUpperCase())})]}),Object(h.jsxs)("ul",{className:"weather__list",children:[Object(h.jsxs)("li",{className:"weather__item",children:["ru"===a&&"\u041c\u0430\u043a\u0441/\u041c\u0438\u043d: ","ua"===a&&"\u041c\u0430\u043a\u0441/\u041c\u0456\u043d: ","en"===a&&"High/Low: ",p,"standard"===c&&"K","metric"===c&&Object(h.jsx)("span",{children:"\xb0C"}),"imperial"===c&&Object(h.jsx)("span",{children:"\xb0F"}),"/",b,"standard"===c&&"K","metric"===c&&Object(h.jsx)("span",{children:"\xb0C"}),"imperial"===c&&Object(h.jsx)("span",{children:"\xb0F"})]}),Object(h.jsxs)("li",{className:"weather__item",children:["ru"===a&&"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ","ua"===a&&"\u0422\u0438\u0441\u043a: ","en"===a&&"Pressure: ",d,"en"===a?" hPa":" \u0433\u041f\u0430"]}),Object(h.jsxs)("li",{className:"weather__item",children:["ru"===a&&"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ","ua"===a&&"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c: ","en"===a&&"Humidity: ","".concat(m,"%")]}),Object(h.jsxs)("li",{className:"weather__item",children:["ru"===a&&"\u0421\u0438\u043b\u0430 \u0432\u0435\u0442\u0440\u0430: ","ua"===a&&"\u0421\u0438\u043b\u0430 \u0432\u0456\u0442\u0440\u0443: ","en"===a&&"Wind: ",s.speed,("standard"===c||"metric"===c)&&("ru"===a||"ua"===a)&&" \u043c/\u0441\u0435\u043a",("standard"===c||"metric"===c)&&"en"===a&&" m/sec","imperial"===c&&"ru"===a&&" \u043c\u0438\u043b\u044f/\u0447","imperial"===c&&"ua"===a&&" \u043c\u0438\u043b\u044f/\u0433\u043e\u0434","imperial"===c&&"en"===a&&" mph"]})]})]})},d="48c10b837a89cf30e61e5a411308c08c",m="http://api.openweathermap.org/data/2.5/",p=function(){var e=Object(u.a)(l.a.mark((function e(t,a,c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"weather?q=").concat(t,"&units=").concat(c,"&APPID=").concat(d,"&lang=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),b=(a(14),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("Chernivtsi"),s=Object(j.a)(r,2),i=s[0],d=s[1],m=Object(c.useState)(null),b=Object(j.a)(m,2),O=b[0],x=b[1],_=Object(c.useState)("en"),v=Object(j.a)(_,2),f=v[0],g=v[1],w=Object(c.useState)("metric"),N=Object(j.a)(w,2),y=N[0],C=N[1],k=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(i,f,y);case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k()}),[i,f,y]);var S,M,F;switch(f){case"en":S="Choose city",M="City is not found";break;case"ru":S="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",M="\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d";break;case"ua":S="\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e",M="\u041c\u0456\u0441\u0442\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"}return F=(null===O||void 0===O?void 0:O.name)?Object(h.jsx)(o,{currentWeather:O,language:f,metric:y}):Object(h.jsx)("h2",{className:"error-message",children:M}),Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("main",{className:"main container-lg",children:[Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),d(a),n("")},children:Object(h.jsx)("input",{type:"text",className:"search__field",placeholder:S,value:a,onChange:function(e){n(e.target.value)}})}),Object(h.jsxs)("div",{className:"select",children:[Object(h.jsxs)("select",{value:f,onChange:function(e){g(e.target.value)},className:"select__language",children:[Object(h.jsx)("option",{value:"en",className:"select__en",children:"English"}),Object(h.jsx)("option",{value:"ua",children:"Ukrainian"}),Object(h.jsx)("option",{value:"ru",children:"Russian"})]}),Object(h.jsxs)("select",{value:y,onChange:function(e){C(e.target.value)},className:"select__metric",children:[Object(h.jsx)("option",{value:"metric",children:"Metric"}),Object(h.jsx)("option",{value:"standard",children:"Standard"}),Object(h.jsx)("option",{value:"imperial",children:"Imperial"})]})]})]}),Object(h.jsx)("div",{className:"weather",children:O&&F})]})})});s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c841d519.chunk.js.map
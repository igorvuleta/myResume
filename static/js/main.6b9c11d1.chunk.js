(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=t(5),h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",rel:"nofollow",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e.name),l.a.createElement("h3",null,"I'm a Bischofswiesen based ",l.a.createElement("span",null,e.role),", and with my skills in ",l.a.createElement("span",null,"Javascript")," , ",l.a.createElement("span",null,"C#")," always looking for the right opportunity. Let's"," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"start scrolling"," "),"and learn more"," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me"),"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:"profilepic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address,l.a.createElement("br",null),e.country),l.a.createElement("br",null),l.a.createElement("span",null,e.email))))," ")," "))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null," My Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"row"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"three columns header-col",key:e.name},l.a.createElement("div",{className:"stupid"},l.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},"Project"),l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description)))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Objects are like people. They\u2019re living, breathing things that have knowledge inside them about how to do things and have memory inside them so they can remember things. And rather than interacting with them at a very low level, you interact with them at a very high level of abstraction..."),l.a.createElement("cite",null,"Steve Jobs")))," ",l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"Every time you write a comment, you should grimace and feel the failure of your ability of expression."),l.a.createElement("cite",null,"Robert C. Martin")))," "))," ")," ")," ")," ")}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("ul",{className:"social-links",key:e.name},l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className}))))}),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2018 by ",e.name),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},e.name)))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),f={imagebaseurl:"https://github.com/igorvuleta/myResume.git",name:"Igor Vuleta",role:"Frontend Developer",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/igor-vuleta-6b21a913b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/igorvuleta",className:"fa fa-github"}],aboutme:"I'm a Information Technology Bachelor, and a programming enthusiast. As a little child I was overwhelmed by Computers and I always wanted to know how the box works under the hood. As I explored Computers, with twelve years as a kid I began to explore the websites, and by even not understanding how the web works I managed to make a php website with a phpbb2 forum and it acctually worked. Later on after my University graduation I started to work in a Company which gave me the task of a Junior Frontend Developer. Armed with the experience they gave and taught me, I started to dig deeper in the world of javascript frameworks like react, angular 2(today angular 7), and polymer.js which made me fall in love with progressive web apps. Moving on to the peroid of now, I have also managed to get some experience with c# and xamarin to build simple but effective crossplatform mobile apps. I never actually did stop investing time into node.js and javascript.",address:"Bischofswiesen, Bavaria",country:"Germany",email:"ivuletasc2@gmail.com",education:[{UniversityName:"Sveu\u010diliste/Univerzitet'Vitez', Travnik ",specialization:"Bachelor in Information Technology",MonthOfPassing:"Nov",YearOfPassing:"2015",Achievements:"Three years of University starting with the simplest of the Algorithms, Data structure and programming. Through the University there was a diversity of programming languages that were studied under academicaly reasons, like C, C++, Java and Visual Basic. The primary focus was to give the student first insights into programming so a student can decide which subject to go after in the future."}],work:[{CompanyName:"Wanko GmbH, Ainring Germany",specialization:"Software Developer",MonthOfLeaving:"Current",YearOfLeaving:"2019",Achievements:"Onboard on a C# Web Application with Websocket API"},{CompanyName:"Makrohaus Crossmedia",specialization:"C# Mobile App Developer Praktikum",MonthOfLeaving:"Sep",YearOfLeaving:"2018",Achievements:"Learned to make simple mobile apps with C# using MVVM, SQLite and Xamarin."},{CompanyName:"Guinea",specialization:"Junior Frontend Developer",MonthOfLeaving:"Sep",YearOfLeaving:"2016",Achievements:"Refactored the Company Web Site using HTML, CSS and Javascript."}],skillsDescription:"My top skills.",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Es6"},{skillname:"Reactjs"},{skillname:"Csharp"}],portfolio:[{name:"Polymer PWA",description:"Progressive web app",url:"https://github.com/igorvuleta/igorvuleta.github.io"},{name:"Tennis App",description:"Mobile app written in C# and Xamarin",url:"https://github.com/igorvuleta/tennisapp"},{name:"Simple Node.js Server",description:"Express App that is in the process of becoming a Web Shop",url:"https://github.com/igorvuleta/node.js-server"},{name:"Static React App",description:"React App Resume made with React and JSX",url:"https://github.com/igorvuleta/myResume"}]},g=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:f}),l.a.createElement(p,{resumeData:f}),l.a.createElement(d,{resumeData:f}),l.a.createElement(E,{resumeData:f}),l.a.createElement(v,{resumeData:f}),l.a.createElement(b,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6b9c11d1.chunk.js.map
"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3761],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={slug:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",title:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",authors:["justcodebryan"],tags:["javascript"]},l=void 0,i={permalink:"/blog/Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",editUrl:"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-hoisting-of-varibles.md",source:"@site/blog/2022-09-10-hoisting-of-varibles.md",title:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",description:"JavaScript\u4e2d\u7684\u53d8\u91cf\u63d0\u5347\u95ee\u9898\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u9762\u8bd5\u9898\u76ee\uff0c\u5728\u9605\u8bfb\u300a\u4f60\u4e0d\u77e5\u9053\u7684 JavaScript\u300b\u8fd9\u672c\u4e66\u53c8\u6709\u4e86\u65b0\u7684\u611f\u609f\u3002",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:4.16,hasTruncateMarker:!1,authors:[{name:"justcodebryan",title:"Front End Engineer",url:"https://github.com/justcodebryan",imageURL:"https://github.com/justcodebryan.png",key:"justcodebryan"}],frontMatter:{slug:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",title:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",authors:["justcodebryan"],tags:["javascript"]},prevItem:{title:"\u524d\u7aefTDD\u521d\u63a2",permalink:"/blog/\u524d\u7aefTDD\u521d\u63a2"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u4e2d\u7684\u53d8\u91cf\u63d0\u5347\u95ee\u9898\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u9762\u8bd5\u9898\u76ee\uff0c\u5728\u9605\u8bfb\u300a\u4f60\u4e0d\u77e5\u9053\u7684 JavaScript\u300b\u8fd9\u672c\u4e66\u53c8\u6709\u4e86\u65b0\u7684\u611f\u609f\u3002"),(0,a.kt)("h1",{id:"\u53d8\u91cf\u63d0\u5347\u662f\u4ec0\u4e48"},"\u53d8\u91cf\u63d0\u5347\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"\u9996\u5148\u6765\u770b\u4e66\u4e2d\u7684\u4e24\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// example 1\na = 2;\nvar a;\nconsole.log(a); // ans\uff1a2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// example 2\nconsole.log(a);\nvar a = 2; // ans\uff1aundefined\n")),(0,a.kt)("p",null,"\u8fd9\u4e24\u4e2a\u4f8b\u5b50\u975e\u5e38\u7b80\u5355\uff0c\u89e3\u91ca\u5982\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f8b 1 \u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"var a"),"\u53d8\u91cf\u7684\u58f0\u660e\u88ab\u63d0\u5347\u5230\u4e86\u6700\u4e0a\u9762\uff0c\u6240\u4ee5\u5728\u4e0b\u9762\u8fdb\u884c\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u6210\u529f\u5730\u5c06 2 \u8d4b\u7ed9\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"a"),"\u8fd9\u4e2a\u53d8\u91cf\u3002\u53ef\u4ee5\u770b\u4f5c\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var a;\na = 2;\nconsole.log(a);\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f8b 2 \u4e2d\u53ef\u4ee5\u50cf\u4e0a\u9762\u4e00\u6837\u5148\u5c06\u53d8\u91cf\u63d0\u5347\u7684\u4ee3\u7801\u5728\u8111\u91cc\u60f3\u4e00\u60f3\uff0c\u5f97\u5230\u4e0b\u9762\u8fd9\u6837\u7684\u4ee3\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var a;\nconsole.log(a); // \u5b9a\u4e49\u4e86\u53d8\u91cfa\u4f46\u662f\u6ca1\u6709\u7ed9\u5b83\u8d4b\u503c\uff0c\u6240\u4ee5\u5b83\u7684\u503c\u73b0\u5728\u662fundefined\na = 2;\n")),(0,a.kt)("h1",{id:"\u51fd\u6570\u7684\u53d8\u91cf\u63d0\u5347"},"\u51fd\u6570\u7684\u53d8\u91cf\u63d0\u5347"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u4e2d\u7684\u51fd\u6570\u540c\u6837\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347\u8fd9\u4e00\u64cd\u4f5c\uff0c\u4f46\u662f\u51fd\u6570\u6709\u4e24\u79cd\u58f0\u660e\u5f62\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6570\u58f0\u660e - ",(0,a.kt)("inlineCode",{parentName:"li"},"function func() { };")),(0,a.kt)("li",{parentName:"ol"},"\u51fd\u6570\u8868\u8fbe\u5f0f - ",(0,a.kt)("inlineCode",{parentName:"li"},"var func = function() { };"))),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u51fd\u6570\u58f0\u660e\u624d\u4f1a\u5c06\u5176\u6574\u4e2a\u51fd\u6570\u63d0\u5347\u5230\u6574\u4e2a\u811a\u672c\u7684\u6700\u9876\u4e0a\u53bb\u58f0\u660e\uff0c\u4f46\u662f\u51fd\u6570\u8868\u8fbe\u5f0f\u4f1a\u50cf\u524d\u9762\u7684\u53d8\u91cf\u63d0\u5347\u4e00\u6837\uff0c\u5148\u58f0\u660e\u53d8\u91cf\u7136\u540e\u518d\u7ed9\u5b83\u8d4b\u503c\uff0c\u53ea\u4e0d\u8fc7\u662f\u8d4b\u7ed9\u53d8\u91cf\u4e00\u4e2a\u51fd\u6570(\u5b8c\u5168\u53ef\u4ee5\u5c06\u5176\u4e0e\u53d8\u91cf\u63d0\u5347\u4e00\u6837\u5904\u7406)\u3002\u5728\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u53d8\u91cf\u63d0\u5347\u4e2d\uff0c\u5982\u679c\u51fa\u73b0\u4e86\u5148\u8c03\u7528\u7136\u540e\u518d\u58f0\u660e\u7684\u60c5\u51b5\uff0c\u4f1a\u629b\u51fa\u7684\u9519\u8bef\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError"),"(\u7c7b\u578b\u9519\u8bef), \u800c\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ReferenceError"),"(\u5f15\u7528\u9519\u8bef)\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7406\u89e3\u4e3a\u5148\u8c03\u7528\u7684\u53d8\u91cf\u7684\u503c\u5e94\u8be5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c \u800c",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\u5e76\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e0d\u80fd\u8c03\u7528\uff0c\u6240\u4ee5\u4f1a\u629b\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"TypeError"),"\u3002"),(0,a.kt)("p",null,"\u5373\u4f7f\u662f\u5c06\u4e00\u4e2a\u5177\u540d\u7684\u51fd\u6570\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u4e5f\u662f\u4e0d\u80fd\u5728\u58f0\u660e\u4e4b\u524d\u8c03\u7528\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  foo(); // TypeError\n  bar(); // ReferenceError\n\n  var foo = function bar() {\n    ...\n  }\n")),(0,a.kt)("p",null,"\u7ecf\u8fc7\u53d8\u91cf\u63d0\u5347\u4ee5\u540e\uff0c\u4ee3\u7801\u5e94\u8be5\u53d8\u6210\u4ee5\u4e0b\u8fd9\u79cd\u60c5\u51b5\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  var foo;\n\n  foo(); // TypeError\n  bar(); // ReferenceError\n\n  foo = function() {\n    var bar = ...self...\n  }\n")),(0,a.kt)("p",null,"\u4e4b\u524d\u5728\u5b66\u4e60\u53d8\u91cf\u63d0\u5347\u8fd9\u4e00\u5757\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u65f6\u5e38\u4f1a\u6709\u7591\u95ee\uff0c\u5982\u679c\u591a\u4e2a\u51fd\u6570\u53d8\u91cf\u63d0\u5347\u5230\u5e95\u4f1a\u53d8\u6210\u4ec0\u4e48\u6837\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  foo();  // 1\n\n  var foo;\n\n  function foo() {\n    console.log(1);\n  }\n\n  foo = function() {\n    console.log(2);\n  }\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5c3d\u7ba1",(0,a.kt)("inlineCode",{parentName:"p"},"var foo"),"\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"function foo() ..."),"\u58f0\u660e\u4e4b\u524d\u7684\uff0c\u4f46\u662f\u4ed6\u662f\u91cd\u590d\u7684\u58f0\u660e\uff0c\u6240\u4ee5\u88ab\u5ffd\u7565\u4e86\uff0c\u56e0\u6b64\u51fd\u6570\u58f0\u660e\u4f1a\u88ab\u63d0\u5347\u5230\u666e\u901a\u53d8\u91cf\u4e4b\u524d\u3002\u4f46\u662f\u5c3d\u7ba1",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u4f1a\u88ab\u5ffd\u7565\u6389\uff0c\u4f46\u662f\u51fa\u73b0\u5728\u540e\u9762\u7684\u51fd\u6570\u58f0\u660e\u8fd8\u662f\u53ef\u4ee5\u8986\u76d6\u6389\u524d\u9762\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  foo();  // 3\n\n  function foo() {\n    console.log(1);\n  }\n\n  var foo = function() {\n    console.log(2);\n }\n\n  function foo() {\n    console.log(3);\n  }\n")),(0,a.kt)("h1",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Javascript"),"\u7f16\u8bd1\u5668\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"var a = 2"),"\u770b\u4f5c",(0,a.kt)("inlineCode",{parentName:"li"},"var a"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"a = 2"),"\u4e24\u4e2a\u8fc7\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u548c\u53d8\u91cf\u90fd\u4f1a\u63d0\u5347"),(0,a.kt)("li",{parentName:"ul"},"\u58f0\u660e\u672c\u8eab\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u662f\u5305\u62ec\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u8d4b\u503c\u5728\u5185\u7684\u8d4b\u503c\u64cd\u4f5c\u4e0d\u4f1a\u63d0\u5347"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fd\u6570\u58f0\u660e\u548c\u53d8\u91cf\u58f0\u660e\u540c\u65f6\u5b58\u5728\u4e14\u540c\u540d\uff0c\u53d8\u91cf\u7684\u58f0\u660e\u4f1a\u56e0\u4e3a\u91cd\u590d\u88ab\u5ffd\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u591a\u4e2a\u540c\u540d\u7684\u51fd\u6570\u58f0\u660e\uff0c\u540e\u9762\u7684\u58f0\u660e\u4f1a\u8986\u76d6\u6389\u524d\u9762\u7684\u58f0\u660e")))}s.isMDXComponent=!0}}]);
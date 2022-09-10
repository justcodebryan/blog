"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3898],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),k=r,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={slug:"\u524d\u7aefTDD\u521d\u63a2",title:"\u524d\u7aefTDD\u521d\u63a2",authors:["justcodebryan"],tags:["Front-end Engineering"]},i="\u6d4b\u8bd5\u5206\u7c7b",o={permalink:"/blog/\u524d\u7aefTDD\u521d\u63a2",editUrl:"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-fe-tdd.md",source:"@site/blog/2022-09-10-fe-tdd.md",title:"\u524d\u7aefTDD\u521d\u63a2",description:"\u6309\u7167\u8f6f\u4ef6\u5de5\u7a0b\u81ea\u5e95\u800c\u4e0a\u7684\u6982\u5ff5, \u524d\u7aef\u6d4b\u8bd5\u5206\u4e3a\u4ee5\u4e0b\u56db\u7c7b:",date:"2022-09-10T00:00:00.000Z",formattedDate:"September 10, 2022",tags:[{label:"Front-end Engineering",permalink:"/blog/tags/front-end-engineering"}],readingTime:8.105,hasTruncateMarker:!1,authors:[{name:"justcodebryan",title:"Front End Engineer",url:"https://github.com/justcodebryan",imageURL:"https://github.com/justcodebryan.png",key:"justcodebryan"}],frontMatter:{slug:"\u524d\u7aefTDD\u521d\u63a2",title:"\u524d\u7aefTDD\u521d\u63a2",authors:["justcodebryan"],tags:["Front-end Engineering"]},prevItem:{title:"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898",permalink:"/blog/\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898"},nextItem:{title:"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898",permalink:"/blog/Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898"}},p={authorsImageUrls:[void 0]},s=[{value:"\u6a21\u8303",id:"\u6a21\u8303",level:2},{value:"\u5e38\u7528<code>API</code>",id:"\u5e38\u7528api",level:2},{value:"Jest",id:"jest",level:2},{value:"globals API",id:"globals-api",level:3},{value:"\u5e38\u89c1\u65ad\u8a00",id:"\u5e38\u89c1\u65ad\u8a00",level:3},{value:"Enzyme",id:"enzyme",level:2},{value:"\u6e32\u67d3\u65b9\u6cd5",id:"\u6e32\u67d3\u65b9\u6cd5",level:3},{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:3},{value:"\u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a",id:"\u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a",level:2}],m={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6309\u7167\u8f6f\u4ef6\u5de5\u7a0b\u81ea\u5e95\u800c\u4e0a\u7684\u6982\u5ff5, \u524d\u7aef\u6d4b\u8bd5\u5206\u4e3a\u4ee5\u4e0b\u56db\u7c7b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u5143\u6d4b\u8bd5(Unit Testing)"),(0,r.kt)("p",{parentName:"li"},"\u6307\u7684\u662f\u4ee5\u539f\u4ef6\u7684\u5355\u5143\u4e3a\u5355\u4f4d\uff0c\u5bf9\u8f6f\u4ef6\u8fdb\u884c\u6d4b\u8bd5\u3002\u5355\u5143\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u6a21\u5757\u6216\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u57fa\u672c\u7279\u5f81\u5c31\u662f\u53ea\u8981\u8f93\u5165\u4e0d\u53d8\uff0c\u5fc5\u5b9a\u8fd4\u56de\u540c\u6837\u7684\u8f93\u51fa\u3002\u4e00\u4e2a\u8f6f\u4ef6\u8d8a\u5bb9\u6613\u4e9b\u5355\u5143\u6d4b\u8bd5\uff0c\u5c31\u8868\u660e\u5b83\u7684\u6a21\u5757\u5316\u7ed3\u6784\u8d8a\u597d\uff0c\u7ed9\u6a21\u5757\u4e4b\u95f4\u7684\u8026\u5408\u8d8a\u5f31\u3002React \u7684\u7ec4\u4ef6\u5316\u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u5929\u751f\u9002\u5408\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u96c6\u6210\u6d4b\u8bd5(Integration Testing)"),(0,r.kt)("p",{parentName:"li"},"\u5728\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u7840\u4e0a\uff0c\u5c06\u6240\u6709\u6a21\u5757\u6309\u7167\u8bbe\u8ba1\u8981\u6c42\u7ec4\u88c5\u6210\u5b50\u7cfb\u7edf\u6216\u8005\u7cfb\u7edf\uff0c\u8fdb\u884c\u6d4b\u8bd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7aef\u5bf9\u7aef\u6d4b\u8bd5(E2E Testing)"),(0,r.kt)("p",{parentName:"li"},"\u5728\u6b63\u5f0f\u5168\u9762\u7684\u6d4b\u8bd5\u4e4b\u524d\uff0c\u5bf9\u4e3b\u8981\u529f\u80fd\u8fdb\u884c\u7684\u4e0e\u6d4b\u8bd5\uff0c\u786e\u8ba4\u4e3b\u8981\u529f\u80fd\u662f\u5426\u6ee1\u8db3\u9700\u8981\uff0c\u8f6f\u4ef6\u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u529f\u80fd\u6d4b\u8bd5"),(0,r.kt)("p",{parentName:"li"},"\u76f8\u5f53\u4e8e\u662f\u9ed1\u76d2\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u8005\u4e0d\u4e86\u89e3\u7a0b\u5e8f\u7684\u5185\u90e8\u60c5\u51b5\uff0c\u4e0d\u9700\u8981\u5177\u5907\u7f16\u7a0b\u8bed\u8a00\u7684\u4e13\u95e8\u77e5\u8bc6\uff0c\u53ea\u77e5\u9053\u7a0b\u5e8f\u7684\u8f93\u5165\u3001\u8f93\u51fa\u548c\u529f\u80fd\uff0c\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u9488\u5bf9\u8f6f\u4ef6\u754c\u9762\u3001\u529f\u80fd\u548c\u5916\u90e8\u7ed3\u6784\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e0d\u8003\u8651\u5185\u90e8\u7684\u903b\u8f91"))),(0,r.kt)("p",null,"\u5efa\u8bae\u7684\u6d4b\u8bd5\u6570\u91cf:"),(0,r.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5 > E2E \u6d4b\u8bd5 > \u5feb\u7167\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u9009\u578b: ",(0,r.kt)("inlineCode",{parentName:"p"},"Jest")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Enzyme")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"enzyme-adapter-react-16")),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56, \u56e0\u4e3a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"React16"),"\u4ee5\u4e0a\u7684\u7248\u672c, \u6240\u4ee5\u9700\u8981\u5b89\u88c5\u63d2\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add jest enzyme enzyme-adapter-react-16 @types/jest @types/enzyme @types/enzyme-adapter-react-16 ts-jest -D\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u9700\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"sass"),", \u6240\u4ee5\u9700\u8981\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"identity-obj-proxy"),"\u624d\u80fd\u4f7f\u5f97\u6d4b\u8bd5\u6b63\u5e38\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add identity-obj-proxy -D\n")),(0,r.kt)("p",null,"\u5feb\u7167\u5e8f\u5217\u5316\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"enzyme-to-json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add enzyme-to-json -D\n")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u6dfb\u52a0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "jest --config jest.config.js --no-cache"\n  }\n}\n')),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"__mocks__"),"\u6587\u4ef6\u5939, \u5e76\u4e14\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u6587\u4ef6\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"fileTransformer.js")),(0,r.kt)("p",null,"\u7528\u4e8e mock \u5176\u4ed6\u6587\u4ef6, \u56fe\u7247\u4e4b\u7c7b\u7684\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// fileTransformer.js\nconst path = require("path");\n\nmodule.exports = {\n  process(src, filename, config, options) {\n    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";\n  },\n};\n')),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u6dfb\u52a0\u4e00\u4e2a\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// jest.config.js\u6587\u4ef6\nmodule.exports = {\n  verbose: true,\n  setupFiles: ["./tests/setup.js"],\n  setupFilesAfterEnv: ["./tests/setupAfterEnv.ts"],\n  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "md"], // \u6587\u4ef6\u6269\u5c55\u540d\n  moduleNameMapper: {\n    "\\\\.(css|scss)$": "identity-obj-proxy", // scss\u6587\u4ef6\u5904\u7406\u7684\u4f9d\u8d56\n  },\n  transform: {\n    "^.+\\\\.tsx?$": "ts-jest",\n    "\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":\n      "<rootDir>/__mocks__/fileTransformer.js",\n  },\n  testRegex: "(/__test__/.*|(\\\\.|/)(test|spec))\\\\.tsx?$", // \u6b63\u5219\u8868\u8fbe\u5f0f\u627e\u5230\u9700\u8981\u6d4b\u8bd5\u7684\u6587\u4ef6\n  globals: {\n    "ts-jest": {\n      tsConfig: "tsconfig.json",\n    },\n  },\n  testPathIgnorePatterns: ["/node_modules/", "dist"], // \u5ffd\u7565\u6d4b\u8bd5\u7684\u6587\u4ef6\u5939\n  collectCoverage: true, // \u6536\u96c6\u8986\u76d6\u7387\n  coverageDirectory: "./coverage", // \u8986\u76d6\u7387\u62a5\u544a\n  snapshotSerializers: ["enzyme-to-json/serializer"], // \u5feb\u7167\u5e8f\u5217\u5316\n};\n')),(0,r.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),"\u6587\u4ef6\u5939"),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"setup.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// setup.js\nconst React = require("react");\n\n// eslint-disable-next-line no-console\nconsole.log("Current React Version:", React.version);\n\n/* eslint-disable global-require */\nif (typeof window !== "undefined") {\n  global.window.resizeTo = (width, height) => {\n    global.window.innerWidth = width || global.window.innerWidth;\n    global.window.innerHeight = height || global.window.innerHeight;\n    global.window.dispatchEvent(new Event("resize"));\n  };\n  global.window.scrollTo = () => {};\n  if (!window.matchMedia) {\n    Object.defineProperty(global.window, "matchMedia", {\n      value: jest.fn((query) => ({\n        matches: query.includes("max-width"),\n        addListener: jest.fn(),\n        removeListener: jest.fn(),\n      })),\n    });\n  }\n}\n\n// \u56e0\u4e3a\u662fReact16\u7248\u672c\u7684\u7f18\u6545, \u9700\u8981\u914d\u7f6eadapter\n// \u914d\u7f6e\u5168\u5c40adapter\nconst Enzyme = require("enzyme");\n\nconst Adapter = require("enzyme-adapter-react-16");\n\nEnzyme.configure({ adapter: new Adapter() });\n\nObject.assign(Enzyme.ReactWrapper.prototype, {\n  findObserver() {\n    return this.find("ResizeObserver");\n  },\n  triggerResize() {\n    const ob = this.findObserver();\n    ob.instance().onResize([{ target: ob.getDOMNode() }]);\n  },\n});\n')),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"setupAfterEnv.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import toMatchRenderedSnapshot from "./matchers/rendered-snapshot";\n\nexpect.extend({\n  toMatchRenderedSnapshot,\n});\n')),(0,r.kt)("p",null,"\u5feb\u7167\u6d4b\u8bd5\u751f\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),"\u7ed3\u6784, \u5e76\u7528\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"__snapshots__"),"\u6587\u4ef6\u91cc, \u901a\u8fc7, \u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\u6765\u5224\u65ad",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),"\u662f\u5426\u53d1\u751f\u6539\u53d8"),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"matchers/rendered-snapshot.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { render } from "enzyme";\nimport { ReactElement } from "react";\n\n// \u5feb\u7167\u6d4b\u8bd5\nexport default function toMatchRenderedSnapshot(\n  this: jest.MatcherUtils,\n  jsx: ReactElement<unknown>\n): { message(): string; pass: boolean } {\n  try {\n    expect(render(jsx)).toMatchSnapshot();\n\n    return {\n      message: () => "expected JSX not to match snapshot",\n      pass: true,\n    };\n  } catch (e) {\n    return {\n      message: () => `expected JSX to match snapshot: ${e.message}`,\n      pass: false,\n    };\n  }\n}\n')),(0,r.kt)("h1",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,r.kt)("h2",{id:"\u6a21\u8303"},"\u6a21\u8303"),(0,r.kt)("p",null,"\u547d\u540d\u89c4\u8303: ",(0,r.kt)("inlineCode",{parentName:"p"},"***.test.tsx")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"index.spec.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'describe("\u6d4b\u8bd5\u5957\u4ef6\u6807\u9898", () => {\n  it("\u6d4b\u8bd5\u6807\u9898", () => {});\n});\n')),(0,r.kt)("h2",{id:"\u5e38\u7528api"},"\u5e38\u7528",(0,r.kt)("inlineCode",{parentName:"h2"},"API")),(0,r.kt)("p",null,"\u6b64\u5904\u4ec5\u4ec5\u5217\u51fa\u6bd4\u8f83\u5e38\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"API")),(0,r.kt)("h2",{id:"jest"},"Jest"),(0,r.kt)("h3",{id:"globals-api"},"globals API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"afterAll(fn, timeout)"),"\uff1a\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u8dd1\u5b8c\u4ee5\u540e\u6267\u884c\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"beforeAll(fn, timeout)"),"\uff1a\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u4e4b\u524d\u6267\u884c\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"afterEach(fn)"),"\uff1a\u5728\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u5b8c\u540e\u6267\u884c\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach(fn)"),"\uff1a\u5728\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u4e4b\u524d\u9700\u8981\u6267\u884c\u7684\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u5e38\u89c1\u65ad\u8a00"},"\u5e38\u89c1\u65ad\u8a00"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toHaveBeenCalled()"),"\uff1a\u7528\u6765\u5224\u65ad mock function \u662f\u5426\u88ab\u8c03\u7528\u8fc7"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toHaveBeenCalledTimes(number)"),"\uff1a\u7528\u6765\u5224\u65ad mock function \u88ab\u8c03\u7528\u7684\u6b21\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resolves"),"\uff1a\u7528\u6765\u53d6\u51fa promise \u4e3a fulfilled \u65f6\u5305\u88f9\u7684\u503c\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rejects"),"\uff1a\u7528\u6765\u53d6\u51fa promise \u4e3a rejected \u65f6\u5305\u88f9\u7684\u503c\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528"),(0,r.kt)("h2",{id:"enzyme"},"Enzyme"),(0,r.kt)("h3",{id:"\u6e32\u67d3\u65b9\u6cd5"},"\u6e32\u67d3\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"shallow"),": \u6d45\u6e32\u67d3, \u5b50\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3, \u6548\u7387\u9ad8, \u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"jQuery"),"\u7684\u65b9\u5f0f\u8bbf\u95ee\u7ec4\u4ef6\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mount"),": \u5b8c\u5168\u6e32\u67d3, \u5c06\u7ec4\u4ef6\u6e32\u67d3\u52a0\u8f7d\u6210\u4e00\u4e2a\u771f\u5b9e\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u8282\u70b9"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"render")," : \u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"React"),"\u7ec4\u4ef6\u6e32\u67d3\u6210\u9759\u6001\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"HTML"),"\u5b57\u7b26\u4e32, \u53ef\u4ee5\u7528\u6765\u5206\u6790",(0,r.kt)("inlineCode",{parentName:"li"},"html"),"\u7ed3\u6784")),(0,r.kt)("p",null,"\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"shallow"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"mount"),"\u8fd4\u56de\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"DOM"),"\u5bf9\u8c61, \u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"simulate"),"\u8fdb\u884c\u4ea4\u4e92\u6a21\u62df, ",(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\u4e0d\u53ef\u4ee5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shallow")," - \u4e00\u822c\u60c5\u51b5\u4e0b\u90fd\u80fd\u6ee1\u8db3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"render")," - \u9700\u8981\u5bf9\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5224\u65ad"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mount")," - \u9700\u8981\u6d4b\u8bd5\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"shallow"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"mount"),"\u65b9\u6cd5\u6e32\u67d3\u7ec4\u4ef6\u4ee5\u540e, \u5728\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"spyOn(instance: Prototype, MethodName: string)"),"\u6765\u76d1\u63a7\u5e76\u4e14\u6d4b\u8bd5\u7c7b\u7684\u539f\u578b\u7684\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"spy"),"\u5b8c\u67d0\u4e00\u4e2a\u51fd\u6570\u4e4b\u540e\u5bf9\u5176\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"mockRestore")),(0,r.kt)("h3",{id:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"simulate(event, mock)"),": \u6a21\u62df\u4e8b\u4ef6, \u7528\u6765\u89e6\u53d1\u4e8b\u4ef6, ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"\u4e3a\u4e8b\u4ef6\u540d\u79f0, ",(0,r.kt)("inlineCode",{parentName:"li"},"mock"),"\u4e3a\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"event object")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find(selector)"),": \u6839\u636e\u9009\u62e9\u5668\u67e5\u627e\u8282\u70b9, ",(0,r.kt)("inlineCode",{parentName:"li"},"selector"),"\u53ef\u4ee5\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"CSS"),"\u4e2d\u7684\u9009\u62e9\u5668, \u6216\u8005\u662f\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570, \u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"display name"),"\u7b49"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"state()"),": \u8fd4\u56de\u6839\u7ec4\u4ef6\u7684\u72b6\u6001, \u4f46\u662f\u5982\u679c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"React Hooks"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"useState"),"\u662f\u65e0\u6cd5\u83b7\u53d6\u5230\u8be5\u72b6\u6001"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"text()"),": \u8fd4\u56de\u5f53\u524d\u7ec4\u4ef6\u7684\u6587\u672c\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"html()"),": \u8fd4\u56de\u5f53\u524d\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"HTML"),"\u4ee3\u7801")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a"},"\u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%stmts"),"\u662f\u8bed\u53e5\u8986\u76d6\u7387\uff08statement coverage\uff09\u8868\u793a\u662f\u4e0d\u662f\u6bcf\u4e2a\u8bed\u53e5\u90fd\u6267\u884c\u4e86\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Branch"),"\u4ee3\u8868\u5206\u652f, \u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"if-else"),"\u5206\u652f\u4e2d\u6ca1\u6709\u6d4b\u8bd5\u5230\u7684"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Funcs"),"\u4ee3\u8868\u51fd\u6570, \u6ca1\u6709\u6d4b\u8bd5\u5230\u7684\u51fd\u6570\u4e5f\u4f1a\u5728\u663e\u793a\u767e\u5206\u6bd4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Lines"),"\u4ee3\u8868\u8986\u76d6\u7684\u884c\u6570, \u663e\u793a\u5df2\u7ecf\u8986\u76d6\u7684\u884c\u6570\u7684\u767e\u5206\u6bd4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Uncovered Line"),": \u8868\u793a\u6d4b\u8bd5\u6ca1\u6709\u8986\u76d6\u5230\u884c\u6570, \u5177\u4f53\u662f\u54ea\u51e0\u884c\u6ca1\u6709\u88ab\u8986\u76d6\u5230"),(0,r.kt)("p",null,"\u4e0b\u9762\u4f1a\u663e\u793a\u901a\u8fc7\u7684\u6d4b\u8bd5\u5957\u4ef6, \u6d4b\u8bd5\u6570\u91cf\u4ee5\u53ca\u5feb\u7167\u6570\u91cf"),(0,r.kt)("h1",{id:"\u76f8\u5173\u8d44\u6599"},"\u76f8\u5173\u8d44\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/zh-Hans/"},"Jest \u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.im/post/5a71413e5188252edb593020"},"\u5bf9 React \u7ec4\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000020058166"},"\u5982\u4f55\u5bf9 react hooks \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.im/post/5b6c39bde51d45195c079d62"},"\u4f7f\u7528 Jest \u8fdb\u884c React \u5355\u5143\u6d4b\u8bd5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000018063747"},"React \u6d4b\u8bd5\u6307\u5357")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/frontend9/fe9-library/issues/244"},"\u4f7f\u7528 jest+enzyme \u6d4b\u8bd5 react \u7ec4\u4ef6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.im/post/5e933cbc6fb9a03c74137865"},"\u7528 Enzyme \u6d4b\u8bd5\u4f7f\u7528 Hooks \u7684 React \u51fd\u6570\u7ec4\u4ef6"))))}d.isMDXComponent=!0}}]);
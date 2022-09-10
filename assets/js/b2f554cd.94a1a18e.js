"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"CSS \u5c45\u4e2d\u65b9\u6848","metadata":{"permalink":"/blog/CSS \u5c45\u4e2d\u65b9\u6848","editUrl":"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-css-margin-middle-solution.md","source":"@site/blog/2022-09-10-css-margin-middle-solution.md","title":"CSS \u5c45\u4e2d\u65b9\u6848","description":"CSS \u5c45\u4e2d\u65b9\u6848 \ud83d\udccf","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"CSS","permalink":"/blog/tags/css"}],"readingTime":2.545,"hasTruncateMarker":false,"authors":[{"name":"justcodebryan","title":"Front End Engineer","url":"https://github.com/justcodebryan","imageURL":"https://github.com/justcodebryan.png","key":"justcodebryan"}],"frontMatter":{"slug":"CSS \u5c45\u4e2d\u65b9\u6848","title":"CSS \u5c45\u4e2d\u65b9\u6848","authors":["justcodebryan"],"tags":["CSS"]},"nextItem":{"title":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","permalink":"/blog/\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898"}},"content":"CSS \u5c45\u4e2d\u65b9\u6848 \ud83d\udccf\\n\\n# \u5143\u7d20\u6c34\u5e73\u5c45\u4e2d\\n\\n\u5c06\u884c\u5185\u5143\u7d20\u5305\u88f9\u5728\u4e00\u4e2a\u5c5e\u6027`display` \u4e3a`block`\u7684\u7236\u5143\u7d20\u4e2d, \u7236\u5143\u7d20\u4e2d\u6dfb\u52a0\\n\\n```css\\n.box {\\n  text-align: center;\\n}\\n```\\n\\n\u5757\u72b6\u5143\u7d20\u89e3\u51b3\u65b9\u6848\\n\\n\u9700\u8981\u4e3a\u7236\u5143\u7d20\u8bbe\u5b9a\u5bbd\u9ad8\\n\\n```css\\n.box {\\n  width: 200px;\\n  margin: 0 auto;\\n}\\n```\\n\\n# \u5143\u7d20\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d\\n\\n\ud83c\udf30`position`\u5143\u7d20\u5df2\u77e5\u5bbd\u5ea6, \u7edd\u5bf9\u5b9a\u4f4d+`margin`\u53cd\u5411\u504f\u79fb`(transform)`\\n\\n```css\\n.wrap {\\n  position: relative;\\n  background-color: orange;\\n  width: 300px;\\n  height: 300px;\\n}\\n.example2 {\\n  background-color: red;\\n  width: 100px;\\n  height: 100px;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  margin: -50px 0 0 -50px;\\n  /* \u7b2c\u4e8c\u79cd: \u5c06margin\u6362\u6210transform, \u5982\u4e0b */\\n  /* transform: translate(-50%, -50%); */\\n}\\n```\\n\\n\ud83c\udf30flex \u5e03\u5c40\\n\\n```css\\n.wrap {\\n  background-color: #ff8c00;\\n  width: 200px;\\n  height: 200px;\\n  display: flex;\\n  justify-content: center; /* \u4f7f\u5b50\u9879\u76ee\u6c34\u5e73\u5c45\u4e2d */\\n  align-items: center; /* \u4f7f\u5b50\u9879\u76ee\u5782\u76f4\u5c45\u4e2d */\\n}\\n.example3 {\\n  background-color: #f00;\\n  width: 100px;\\n  height: 100px;\\n}\\n```\\n\\n\u8fd8\u53ef\u4ee5\u4f7f\u7528 table-cell \u5e03\u5c40, \u4f46\u662f\u56e0\u4e3a\u8be5\u5e03\u5c40\u5bf9\u4e8e\u8d44\u6e90\u7684\u6d88\u8017\u8fc7\u5927, \u73b0\u5728\u57fa\u672c\u6ca1\u6709\u4f7f\u7528, \u4e0d\u5fc5\u4e86\u89e3\\n\\n\ud83c\udf30 \u7edd\u5bf9\u5e03\u5c40\\n\\n```html\\n<div class=\\"wrap\\">\\n  <div class=\\"example3\\">\u5c45\u4e2d\u663e\u793a</div>\\n</div>\\n```\\n\\n```css\\n.wrap {\\n  position: relative;\\n  background-color: orange;\\n  width: 200px;\\n  height: 200px;\\n}\\n.example3 {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: red;\\n  width: 100px;\\n  height: 100px;\\n  margin: auto;\\n}\\n```\\n\\n\ud83c\udf30 \u7ed9\u5b50\u5143\u7d20\u76f8\u5bf9\u5b9a\u4f4d, \u5728\u901a\u8fc7`translateY()`\u5f97\u5230\u5782\u76f4\u5c45\u4e2d\\n\\n```css\\n.wrap {\\n  position: relative;\\n  background-color: orange;\\n  width: 200px;\\n  height: 200px;\\n}\\n.example3 {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  background-color: red;\\n  width: 100px;\\n  height: 100px;\\n  margin: 0 auto;\\n}\\n```\\n\\n\ud83c\udf30 \u5229\u7528`inline-block`\u7684`vertical-align: middle`\u53bb\u5bf9\u9f50`after`\u4f2a\u5143\u7d20\\n\\n\u5c45\u4e2d\u5757\u7684\u5c3a\u5bf8\u53ef\u4ee5\u505a\u5305\u88f9\u6027\u3001\u81ea\u9002\u5e94\u5185\u5bb9\uff0c\u517c\u5bb9\u6027\u4e5f\u76f8\u5f53\u597d\u3002\u7f3a\u70b9\u662f\u6c34\u5e73\u5c45\u4e2d\u9700\u8981\u8003\u8651 inline-block \u95f4\u9694\u4e2d\u7684\u7559\u767d(\u4ee3\u7801\u6362\u884c\u7b26\u9057\u7559\u95ee\u9898)\\n\\n```css\\n.wrap {\\n  text-align: center;\\n  overflow: auto;\\n  width: 200px;\\n  height: 200px;\\n  background-color: orange;\\n}\\n.example3 {\\n  display: inline-block;\\n  background-color: red;\\n  vertical-align: middle;\\n  width: 100px;\\n  height: 100px;\\n}\\n.wrap:after {\\n  content: \\"\\";\\n  display: inline-block;\\n  vertical-align: middle;\\n  height: 100%;\\n  margin-left: -0.25em;\\n  /* To offset spacing. May vary by font */\\n}\\n```\\n\\n\ud83c\udf30`display: flex-box`\\n\\n\u80fd\u89e3\u51b3\u5404\u79cd\u6392\u5217\u5e03\u5c40\u95ee\u9898\\n\\n```css\\n.wrap {\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: -ms-flexbox;\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-align: center;\\n  -moz-box-align: center;\\n  -ms-flex-align: center;\\n  -webkit-align-items: center;\\n  align-items: center;\\n  -webkit-box-pack: center;\\n  -moz-box-pack: center;\\n  -ms-flex-pack: center;\\n  -webkit-justify-content: center;\\n  justify-content: center;\\n  width: 200px;\\n  height: 200px;\\n  background-color: orange;\\n}\\n.example3 {\\n  width: 100px;\\n  height: 100px;\\n  background-color: red;\\n}\\n```"},{"id":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","metadata":{"permalink":"/blog/\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","editUrl":"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-enter-url-question.md","source":"@site/blog/2022-09-10-enter-url-question.md","title":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","description":"1. \u4e3a\u4ec0\u4e48JS\u7684\u89e3\u6790\u4f1a\u963b\u585eDOM Tree\u7684\u89e3\u6790","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"browser-core","permalink":"/blog/tags/browser-core"}],"readingTime":5.185,"hasTruncateMarker":false,"authors":[{"name":"justcodebryan","title":"Front End Engineer","url":"https://github.com/justcodebryan","imageURL":"https://github.com/justcodebryan.png","key":"justcodebryan"}],"frontMatter":{"slug":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","title":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","authors":["justcodebryan"],"tags":["browser-core"]},"prevItem":{"title":"CSS \u5c45\u4e2d\u65b9\u6848","permalink":"/blog/CSS \u5c45\u4e2d\u65b9\u6848"},"nextItem":{"title":"\u524d\u7aefTDD\u521d\u63a2","permalink":"/blog/\u524d\u7aefTDD\u521d\u63a2"}},"content":"1. \u4e3a\u4ec0\u4e48`JS`\u7684\u89e3\u6790\u4f1a\u963b\u585e`DOM Tree`\u7684\u89e3\u6790\\n\\n   \u56e0\u4e3a`JS`\u7684\u89e3\u6790\u8fd0\u884c\u88ab\u9ed8\u8ba4\u4e3a\u6709\u53ef\u80fd\u4f7f\u7528`document.write`\u65b9\u6cd5, `document.write`\u65b9\u6cd5\u4f1a\u5411\u6587\u6863\u6d41\u91cc\u9762\u5199\u5165\u5b57\u8282, \u8fd9\u6837\u7684\u8bdd, \u4f1a\u5f3a\u5236\u5237\u65b0\u5269\u4e0b\u7684\u6587\u6863\\n\\n   \u6240\u4ee5\u4e3a\u4e86\u907f\u514d\u91cd\u590d\u64cd\u4f5c, \u5c31\u5c06\u5269\u4e0b\u7684`dom`\u89e3\u6790\u7ed9\u963b\u585e\u4e86\\n\\n   \u800c\u4e14\u5728\u8fd9\u65f6\u7684`js`\u811a\u672c\u80fd\u591f\u64cd\u4f5c\u524d\u9762\u5df2\u7ecf\u89e3\u6790\u5b8c\u6210\u7684`dom`\u5143\u7d20, \u800c\u4e0d\u80fd\u64cd\u4f5c\u540e\u9762\u8fd8\u672a\u89e3\u6790\u7684`dom`\u5143\u7d20, \u56e0\u4e3a\u8fd8\u672a\u89e3\u6790\u51fa\u6765, `dom`\u5143\u7d20\u8fd8\u4e0d\u5b58\u5728\\n\\n   `document.write`\u4f7f\u7528\u6d41\u7a0b:\\n\\n   1. `document.open`\\n   2. `document.write`\\n   3. `document.close`\\n\\n   \u4ece\u53e6\u5916\u4e00\u4e2a\u89d2\u5ea6\u7406\u89e3, \u5f53\u6d4f\u89c8\u5668\u5728\u89e3\u6790 DOM \u6811\u7684\u65f6\u5019, \u5df2\u7ecf\u8c03\u7528\u4e86`document.open`\u4e86, \u90a3\u4e48\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u4f7f\u7528`document.write`\u53ef\u4ee5\u76f4\u63a5\u5728\u6587\u6863\u4e2d\u95f4\u7684\u4f4d\u7f6e\u5199\u5165\u5185\u5bb9, \u5f53\u6587\u6863\u89e3\u6790\u5b8c\u4e86\u89e6\u53d1`documentloaded`\u7684\u65f6\u5019, \u6d4f\u89c8\u5668\u4f1a\u8c03\u7528`document.close`\u3002\u8fd9\u4e2a\u65f6\u5019\u76f8\u5f53\u4e8e\u5199\u5165\u6587\u4ef6\u5b8c\u6210\u5e76\u4e14\u7ba1\u9053\u5173\u95ed\u4e86\uff0c\u5982\u679c\u8fd8\u8981\u518d\u8fdb\u884c`document.write`\u8fd9\u4e2a\u64cd\u4f5c\u7684\u65f6\u5019, \u9700\u8981\u91cd\u65b0\u8c03\u7528`document.open`\u3002\u56e0\u4e3a\u662f\u7cfb\u7edf\u81ea\u52a8\u8c03\u7528\u7684\uff0c \u7cfb\u7edf\u4e0d\u77e5\u9053\u54ea\u4e2a`document`\uff0c\u6240\u4ee5\u5c31\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u7a7a\u767d\u7684`document` , \u5e76\u4e14\u628a`document.write`\u91cc\u9762\u8981\u5199\u5165\u7684\u5185\u5bb9\u5199\u8fdb\u53bb, \u5e76\u4e14\u8986\u76d6\u6389\u539f\u6765\u7684`document`, \u8fd9\u6837\u5c31\u4f1a\u9020\u6210`documentloaded`\u4e4b\u540e\u8c03\u7528`document.write`\u4f1a\u5c06\u6574\u4e2a\u9875\u9762\u90fd\u8986\u76d6\u6389\u3002\\n\\n2. JS script \u4e0d\u540c\u6807\u7b7e\u7684\u884c\u4e3a(async, defer)\\n\\n   async - \u5f02\u6b65\u52a0\u8f7d, \u540c\u6b65\u6267\u884c\\n\\n   defer - \u5f02\u6b65\u52a0\u8f7d, onload \u4e4b\u540e\u6267\u884c\\n\\n3. CSSOM \u89e3\u6790\u4f1a\u963b\u585e DOM Tree \u7684\u89e3\u6790\u6216\u8005 JS \u7684\u8fd0\u884c\u5417\\n\\n\u8fd9\u91cc\u5171\u6709\u4e24\u79cd\u60c5\u51b5\uff1a\\n\\n1. \u5982\u679c CSS \u5916\u94fe\u6807\u7b7e\u5728\u6587\u4ef6\u7684\u6700\u4e0a\u65b9, \u5f02\u6b65\u4e0b\u8f7d\u89e3\u6790, \u4f46\u662f\u6587\u4ef6\u4e2d\u95f4\u6709\u4e00\u4e2a`script`\u6807\u7b7e, \u5f53\u6574\u4e2a\u6587\u4ef6\u89e3\u6790\u5230\u4e86 script \u6807\u7b7e\u7684\u65f6\u5019, \u5047\u5b9a CSS \u6807\u7b7e\u8fd8\u672a\u4e0b\u8f7d\u5b8c\u6210, \u5982\u679c script \u6807\u7b7e\u91cc\u9762\u6709 get ComptuedStyle \u7684\u64cd\u4f5c, CSS \u7684\u89e3\u6790\u5c31\u4f1a\u963b\u585e JS \u7684\u6267\u884c, \u76f4\u5230 CSS \u89e3\u6790\u5b8c\u6210\u4e86\u4ee5\u540e, \u83b7\u53d6\u4e86\u6b63\u786e\u7684\u6837\u5f0f, \u8fd9\u6837\u8ba1\u7b97\u51fa\u6765\u7684\u7ed3\u679c\u624d\u662f\u6b63\u786e\u7684\u3002\\n\\n```html\\n<html>\\n  <head>\\n    <link src=\\"./index.css\\" />\\n    <title>test app</title>\\n  </head>\\n  <body>\\n    <script src=\\"./test.js\\"><\/script>\\n  </body>\\n</html>\\n```\\n\\n2. \u524d\u9762\u7684\u60c5\u51b5\u540c\u4e0a, \u552f\u4e00\u4e0d\u540c\u7684\u70b9\u5c31\u662f, script \u6807\u7b7e\u91cc\u9762\u6ca1\u6709\u505a get computed style \u7684\u64cd\u4f5c\u3002\u8fd9\u65f6\uff0c\u5c31\u548c\u4e00\u822c\u7684\u64cd\u4f5c\u662f\u4e00\u6837\u7684\u3002\\n\\n3. \u6d4f\u89c8\u5668\u5e76\u884c\u4e0b\u8f7d\u7684\u6700\u5927\u6570\u91cf\\n\\n   \u5404\u4e2a\u6d4f\u89c8\u5668\u7684\u5e76\u884c\u4e0b\u8f7d\u6570\u91cf\u4e0d\u540c, \u4e4b\u524d\u7684\u6700\u5927\u662f 6 \u4e2a\\n\\n   ```markdown\\n   Firefox 2: 2\\n   Firefox 3+: 6\\n   Opera 9.26: 4\\n   Opera 12: 6\\n   Safari 3: 4\\n   Safari 5: 6\\n   IE 7: 2\\n   IE 8: 6\\n   IE 10: 8\\n   Edge: 6\\n   Chrome: 6\\n   ```\\n\\n4. \u4e3a\u4ec0\u4e48\u9700\u8981 document.write \u65b9\u6cd5\\n   \u4ee5\u4e0b\u5185\u5bb9\u6458\u81ea Stack Overflow\\n   When document.write() is executed after page load, it replaces the entire header and body tag with the given parameter value in string.\\n\\n   - document.write (henceforth DW) does not work in XHTML\\n   - ~~DW does not directly modify the DOM, preventing further manipulation~~ _(trying to find evidence of this, but it\'s at best situational)_\\n   - DW executed after the page has finished loading will overwrite the page, or write a new page, or not work\\n   - DW executes where encountered: it cannot inject at a given node point\\n   - DW is effectively writing serialised text which is not the way the DOM works conceptually, and is an easy way to create bugs (.innerHTML has the same problem)\\n\\n   The only seem appropriate usage for document.write() is when working third parties like Google Analytics and such for including their scripts. This is because document.write() is mostly available in any browser. Since third party companies have no control over the user\u2019s browser dependencies (ex. jQuery), document.write() can be used as a fallback or a default method.(\u517c\u5bb9\u6027\u95ee\u9898, \u5f53\u9700\u8981\u52a0\u5165 google analytics \u7b49\u7684\u811a\u672c, \u8fd9\u662f\u6700\u5bb9\u6613\u52a0\u5165\u4f9d\u8d56\u7684\u65b9\u6cd5)\\n\\n5. render tree \u7684\u884c\u4e3a, \u5982\u679c CSS \u53d1\u751f\u4e86\u6539\u53d8\u4ee5\u540e\\n\\n   repaint(\u91cd\u7ed8)\u548c reflow(\u91cd\u6392)\\n\\n6. \u963b\u585e\u6e32\u67d3\u548c\u963b\u585e\u89e3\u6790\\n\\n   \u963b\u585e\u6e32\u67d3: CSS \u7684\u89e3\u6790\u4f1a\u963b\u585e\u6e32\u67d3 -> \u57fa\u4e8e\u4e0d\u8981\u8ba9\u7528\u6237\u770b\u5230\u6ca1\u6709 CSS, \u5373\u6ca1\u6709\u6837\u5f0f\u7684\u9875\u9762, \u4f46\u662f\u4e5f\u4f1a\u6709\u4f8b\u5916\u7684\u60c5\u51b5, \u6709\u53ef\u80fd\u5f88\u4e45\u6ca1\u6709\u8fd4\u56de CSS, \u8fd9\u65f6, CSS \u4e00\u76f4\u65e0\u6cd5\u89e3\u6790, \u90a3\u5c31\u6709\u53ef\u80fd\u51fa\u73b0\u6ca1\u6709\u6837\u5f0f\u7684\u9875\u9762, \u4f46\u662f\u6700\u540e\u63a5\u6536\u5230\u4e86\u9875\u9762 CSS \u5c31\u4f1a\u8ba9\u91cd\u65b0\u5237\u65b0\\n\\n   \u963b\u585e\u89e3\u6790: JS \u7684\u8fd0\u884c\u4f1a\u963b\u585e DOM \u6811\u89e3\u6790\\n\\n   \u5e76\u884c\u4e0b\u8f7d: \u6700\u5927\u6570\u91cf\u4e0b\u8f7d\u91cf -> \u4e0b\u8f7d\u7684\u65f6\u95f4\u548c\u65f6\u673a\u770b\u4ee3\u7801\u7684\u4f4d\u7f6e\u548c\u914d\u7f6e"},{"id":"\u524d\u7aefTDD\u521d\u63a2","metadata":{"permalink":"/blog/\u524d\u7aefTDD\u521d\u63a2","editUrl":"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-fe-tdd.md","source":"@site/blog/2022-09-10-fe-tdd.md","title":"\u524d\u7aefTDD\u521d\u63a2","description":"\u6309\u7167\u8f6f\u4ef6\u5de5\u7a0b\u81ea\u5e95\u800c\u4e0a\u7684\u6982\u5ff5, \u524d\u7aef\u6d4b\u8bd5\u5206\u4e3a\u4ee5\u4e0b\u56db\u7c7b:","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"Front-end Engineering","permalink":"/blog/tags/front-end-engineering"}],"readingTime":8.105,"hasTruncateMarker":false,"authors":[{"name":"justcodebryan","title":"Front End Engineer","url":"https://github.com/justcodebryan","imageURL":"https://github.com/justcodebryan.png","key":"justcodebryan"}],"frontMatter":{"slug":"\u524d\u7aefTDD\u521d\u63a2","title":"\u524d\u7aefTDD\u521d\u63a2","authors":["justcodebryan"],"tags":["Front-end Engineering"]},"prevItem":{"title":"\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898","permalink":"/blog/\u6d45\u8c08\u8f93\u5165URL\u5230\u663e\u793a\u7f51\u7ad9\u90e8\u5206\u95ee\u9898"},"nextItem":{"title":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","permalink":"/blog/Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898"}},"content":"\u6309\u7167\u8f6f\u4ef6\u5de5\u7a0b\u81ea\u5e95\u800c\u4e0a\u7684\u6982\u5ff5, \u524d\u7aef\u6d4b\u8bd5\u5206\u4e3a\u4ee5\u4e0b\u56db\u7c7b:\\n\\n1. \u5355\u5143\u6d4b\u8bd5(Unit Testing)\\n\\n   \u6307\u7684\u662f\u4ee5\u539f\u4ef6\u7684\u5355\u5143\u4e3a\u5355\u4f4d\uff0c\u5bf9\u8f6f\u4ef6\u8fdb\u884c\u6d4b\u8bd5\u3002\u5355\u5143\u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u6a21\u5757\u6216\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u57fa\u672c\u7279\u5f81\u5c31\u662f\u53ea\u8981\u8f93\u5165\u4e0d\u53d8\uff0c\u5fc5\u5b9a\u8fd4\u56de\u540c\u6837\u7684\u8f93\u51fa\u3002\u4e00\u4e2a\u8f6f\u4ef6\u8d8a\u5bb9\u6613\u4e9b\u5355\u5143\u6d4b\u8bd5\uff0c\u5c31\u8868\u660e\u5b83\u7684\u6a21\u5757\u5316\u7ed3\u6784\u8d8a\u597d\uff0c\u7ed9\u6a21\u5757\u4e4b\u95f4\u7684\u8026\u5408\u8d8a\u5f31\u3002React \u7684\u7ec4\u4ef6\u5316\u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u5929\u751f\u9002\u5408\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\\n\\n2. \u96c6\u6210\u6d4b\u8bd5(Integration Testing)\\n\\n   \u5728\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u7840\u4e0a\uff0c\u5c06\u6240\u6709\u6a21\u5757\u6309\u7167\u8bbe\u8ba1\u8981\u6c42\u7ec4\u88c5\u6210\u5b50\u7cfb\u7edf\u6216\u8005\u7cfb\u7edf\uff0c\u8fdb\u884c\u6d4b\u8bd5\\n\\n3. \u7aef\u5bf9\u7aef\u6d4b\u8bd5(E2E Testing)\\n\\n   \u5728\u6b63\u5f0f\u5168\u9762\u7684\u6d4b\u8bd5\u4e4b\u524d\uff0c\u5bf9\u4e3b\u8981\u529f\u80fd\u8fdb\u884c\u7684\u4e0e\u6d4b\u8bd5\uff0c\u786e\u8ba4\u4e3b\u8981\u529f\u80fd\u662f\u5426\u6ee1\u8db3\u9700\u8981\uff0c\u8f6f\u4ef6\u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c\\n\\n4. \u529f\u80fd\u6d4b\u8bd5\\n\\n   \u76f8\u5f53\u4e8e\u662f\u9ed1\u76d2\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u8005\u4e0d\u4e86\u89e3\u7a0b\u5e8f\u7684\u5185\u90e8\u60c5\u51b5\uff0c\u4e0d\u9700\u8981\u5177\u5907\u7f16\u7a0b\u8bed\u8a00\u7684\u4e13\u95e8\u77e5\u8bc6\uff0c\u53ea\u77e5\u9053\u7a0b\u5e8f\u7684\u8f93\u5165\u3001\u8f93\u51fa\u548c\u529f\u80fd\uff0c\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u9488\u5bf9\u8f6f\u4ef6\u754c\u9762\u3001\u529f\u80fd\u548c\u5916\u90e8\u7ed3\u6784\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4e0d\u8003\u8651\u5185\u90e8\u7684\u903b\u8f91\\n\\n\u5efa\u8bae\u7684\u6d4b\u8bd5\u6570\u91cf:\\n\\n\u5355\u5143\u6d4b\u8bd5 > E2E \u6d4b\u8bd5 > \u5feb\u7167\u6d4b\u8bd5\\n\\n\u9009\u578b: `Jest` + `Enzyme` + `enzyme-adapter-react-16`\\n\\n\u5b89\u88c5\u4f9d\u8d56, \u56e0\u4e3a\u662f`React16`\u4ee5\u4e0a\u7684\u7248\u672c, \u6240\u4ee5\u9700\u8981\u5b89\u88c5\u63d2\u4ef6\\n\\n```bash\\nyarn add jest enzyme enzyme-adapter-react-16 @types/jest @types/enzyme @types/enzyme-adapter-react-16 ts-jest -D\\n```\\n\\n\u56e0\u4e3a\u9700\u8981\u4f7f\u7528`sass`, \u6240\u4ee5\u9700\u8981\u6dfb\u52a0`identity-obj-proxy`\u624d\u80fd\u4f7f\u5f97\u6d4b\u8bd5\u6b63\u5e38\u8fd0\u884c\\n\\n```bash\\nyarn add identity-obj-proxy -D\\n```\\n\\n\u5feb\u7167\u5e8f\u5217\u5316\u9700\u8981`enzyme-to-json`\\n\\n```bash\\nyarn add enzyme-to-json -D\\n```\\n\\n\u5728`package.json`\u4e2d\u6dfb\u52a0\\n\\n```json\\n{\\n  \\"scripts\\": {\\n    \\"test\\": \\"jest --config jest.config.js --no-cache\\"\\n  }\\n}\\n```\\n\\n\u5728\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0`__mocks__`\u6587\u4ef6\u5939, \u5e76\u4e14\u521b\u5efa`js`\u6587\u4ef6\u547d\u540d\u4e3a`fileTransformer.js`\\n\\n\u7528\u4e8e mock \u5176\u4ed6\u6587\u4ef6, \u56fe\u7247\u4e4b\u7c7b\u7684\u6587\u4ef6\\n\\n```js\\n// fileTransformer.js\\nconst path = require(\\"path\\");\\n\\nmodule.exports = {\\n  process(src, filename, config, options) {\\n    return \\"module.exports = \\" + JSON.stringify(path.basename(filename)) + \\";\\";\\n  },\\n};\\n```\\n\\n\u5728\u6839\u76ee\u5f55\u6dfb\u52a0\u4e00\u4e2a\u6587\u4ef6`jest.config.js`\\n\\n```js\\n// jest.config.js\u6587\u4ef6\\nmodule.exports = {\\n  verbose: true,\\n  setupFiles: [\\"./tests/setup.js\\"],\\n  setupFilesAfterEnv: [\\"./tests/setupAfterEnv.ts\\"],\\n  moduleFileExtensions: [\\"ts\\", \\"tsx\\", \\"js\\", \\"jsx\\", \\"json\\", \\"md\\"], // \u6587\u4ef6\u6269\u5c55\u540d\\n  moduleNameMapper: {\\n    \\"\\\\\\\\.(css|scss)$\\": \\"identity-obj-proxy\\", // scss\u6587\u4ef6\u5904\u7406\u7684\u4f9d\u8d56\\n  },\\n  transform: {\\n    \\"^.+\\\\\\\\.tsx?$\\": \\"ts-jest\\",\\n    \\"\\\\\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$\\":\\n      \\"<rootDir>/__mocks__/fileTransformer.js\\",\\n  },\\n  testRegex: \\"(/__test__/.*|(\\\\\\\\.|/)(test|spec))\\\\\\\\.tsx?$\\", // \u6b63\u5219\u8868\u8fbe\u5f0f\u627e\u5230\u9700\u8981\u6d4b\u8bd5\u7684\u6587\u4ef6\\n  globals: {\\n    \\"ts-jest\\": {\\n      tsConfig: \\"tsconfig.json\\",\\n    },\\n  },\\n  testPathIgnorePatterns: [\\"/node_modules/\\", \\"dist\\"], // \u5ffd\u7565\u6d4b\u8bd5\u7684\u6587\u4ef6\u5939\\n  collectCoverage: true, // \u6536\u96c6\u8986\u76d6\u7387\\n  coverageDirectory: \\"./coverage\\", // \u8986\u76d6\u7387\u62a5\u544a\\n  snapshotSerializers: [\\"enzyme-to-json/serializer\\"], // \u5feb\u7167\u5e8f\u5217\u5316\\n};\\n```\\n\\n\u5728\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0`tests`\u6587\u4ef6\u5939\\n\\n\u521b\u5efa`setup.js`\\n\\n```js\\n// setup.js\\nconst React = require(\\"react\\");\\n\\n// eslint-disable-next-line no-console\\nconsole.log(\\"Current React Version:\\", React.version);\\n\\n/* eslint-disable global-require */\\nif (typeof window !== \\"undefined\\") {\\n  global.window.resizeTo = (width, height) => {\\n    global.window.innerWidth = width || global.window.innerWidth;\\n    global.window.innerHeight = height || global.window.innerHeight;\\n    global.window.dispatchEvent(new Event(\\"resize\\"));\\n  };\\n  global.window.scrollTo = () => {};\\n  if (!window.matchMedia) {\\n    Object.defineProperty(global.window, \\"matchMedia\\", {\\n      value: jest.fn((query) => ({\\n        matches: query.includes(\\"max-width\\"),\\n        addListener: jest.fn(),\\n        removeListener: jest.fn(),\\n      })),\\n    });\\n  }\\n}\\n\\n// \u56e0\u4e3a\u662fReact16\u7248\u672c\u7684\u7f18\u6545, \u9700\u8981\u914d\u7f6eadapter\\n// \u914d\u7f6e\u5168\u5c40adapter\\nconst Enzyme = require(\\"enzyme\\");\\n\\nconst Adapter = require(\\"enzyme-adapter-react-16\\");\\n\\nEnzyme.configure({ adapter: new Adapter() });\\n\\nObject.assign(Enzyme.ReactWrapper.prototype, {\\n  findObserver() {\\n    return this.find(\\"ResizeObserver\\");\\n  },\\n  triggerResize() {\\n    const ob = this.findObserver();\\n    ob.instance().onResize([{ target: ob.getDOMNode() }]);\\n  },\\n});\\n```\\n\\n\u521b\u5efa`setupAfterEnv.ts`:\\n\\n```typescript\\nimport toMatchRenderedSnapshot from \\"./matchers/rendered-snapshot\\";\\n\\nexpect.extend({\\n  toMatchRenderedSnapshot,\\n});\\n```\\n\\n\u5feb\u7167\u6d4b\u8bd5\u751f\u6210\u4e00\u4e2a`UI`\u7ed3\u6784, \u5e76\u7528\u5b57\u7b26\u4e32\u7684\u5f62\u5f0f\u653e\u5728`__snapshots__`\u6587\u4ef6\u91cc, \u901a\u8fc7, \u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\u6765\u5224\u65ad`UI`\u662f\u5426\u53d1\u751f\u6539\u53d8\\n\\n\u521b\u5efa`matchers/rendered-snapshot.ts`\\n\\n```typescript\\nimport { render } from \\"enzyme\\";\\nimport { ReactElement } from \\"react\\";\\n\\n// \u5feb\u7167\u6d4b\u8bd5\\nexport default function toMatchRenderedSnapshot(\\n  this: jest.MatcherUtils,\\n  jsx: ReactElement<unknown>\\n): { message(): string; pass: boolean } {\\n  try {\\n    expect(render(jsx)).toMatchSnapshot();\\n\\n    return {\\n      message: () => \\"expected JSX not to match snapshot\\",\\n      pass: true,\\n    };\\n  } catch (e) {\\n    return {\\n      message: () => `expected JSX to match snapshot: ${e.message}`,\\n      pass: false,\\n    };\\n  }\\n}\\n```\\n\\n# \u5355\u5143\u6d4b\u8bd5\\n\\n## \u6a21\u8303\\n\\n\u547d\u540d\u89c4\u8303: `***.test.tsx` / `index.spec.tsx`\\n\\n```tsx\\ndescribe(\\"\u6d4b\u8bd5\u5957\u4ef6\u6807\u9898\\", () => {\\n  it(\\"\u6d4b\u8bd5\u6807\u9898\\", () => {});\\n});\\n```\\n\\n## \u5e38\u7528`API`\\n\\n\u6b64\u5904\u4ec5\u4ec5\u5217\u51fa\u6bd4\u8f83\u5e38\u7528\u7684`API`\\n\\n## Jest\\n\\n### globals API\\n\\n`afterAll(fn, timeout)`\uff1a\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u8dd1\u5b8c\u4ee5\u540e\u6267\u884c\u7684\u65b9\u6cd5\\n\\n`beforeAll(fn, timeout)`\uff1a\u6240\u6709\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u4e4b\u524d\u6267\u884c\u7684\u65b9\u6cd5\\n\\n`afterEach(fn)`\uff1a\u5728\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u5b8c\u540e\u6267\u884c\u7684\u65b9\u6cd5\\n\\n`beforeEach(fn)`\uff1a\u5728\u6bcf\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6267\u884c\u4e4b\u524d\u9700\u8981\u6267\u884c\u7684\u65b9\u6cd5\\n\\n### \u5e38\u89c1\u65ad\u8a00\\n\\n`toHaveBeenCalled()`\uff1a\u7528\u6765\u5224\u65ad mock function \u662f\u5426\u88ab\u8c03\u7528\u8fc7\\n\\n`toHaveBeenCalledTimes(number)`\uff1a\u7528\u6765\u5224\u65ad mock function \u88ab\u8c03\u7528\u7684\u6b21\u6570\\n\\n`resolves`\uff1a\u7528\u6765\u53d6\u51fa promise \u4e3a fulfilled \u65f6\u5305\u88f9\u7684\u503c\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528\\n\\n`rejects`\uff1a\u7528\u6765\u53d6\u51fa promise \u4e3a rejected \u65f6\u5305\u88f9\u7684\u503c\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528\\n\\n## Enzyme\\n\\n### \u6e32\u67d3\u65b9\u6cd5\\n\\n1. `shallow`: \u6d45\u6e32\u67d3, \u5b50\u7ec4\u4ef6\u4e0d\u4f1a\u6e32\u67d3, \u6548\u7387\u9ad8, \u53ef\u4ee5\u7528`jQuery`\u7684\u65b9\u5f0f\u8bbf\u95ee\u7ec4\u4ef6\u4fe1\u606f\\n2. `mount`: \u5b8c\u5168\u6e32\u67d3, \u5c06\u7ec4\u4ef6\u6e32\u67d3\u52a0\u8f7d\u6210\u4e00\u4e2a\u771f\u5b9e\u7684`DOM`\u8282\u70b9\\n3. `render` : \u5c06`React`\u7ec4\u4ef6\u6e32\u67d3\u6210\u9759\u6001\u7684`HTML`\u5b57\u7b26\u4e32, \u53ef\u4ee5\u7528\u6765\u5206\u6790`html`\u7ed3\u6784\\n\\n\u56e0\u4e3a`shallow`\u548c`mount`\u8fd4\u56de\u7684\u662f`DOM`\u5bf9\u8c61, \u53ef\u4ee5\u7528`simulate`\u8fdb\u884c\u4ea4\u4e92\u6a21\u62df, `render`\u4e0d\u53ef\u4ee5\\n\\n`shallow` - \u4e00\u822c\u60c5\u51b5\u4e0b\u90fd\u80fd\u6ee1\u8db3\\n\\n`render` - \u9700\u8981\u5bf9\u5b50\u7ec4\u4ef6\u8fdb\u884c\u5224\u65ad\\n\\n`mount` - \u9700\u8981\u6d4b\u8bd5\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\\n\\n\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7`shallow`\u548c`mount`\u65b9\u6cd5\u6e32\u67d3\u7ec4\u4ef6\u4ee5\u540e, \u5728\u901a\u8fc7 `spyOn(instance: Prototype, MethodName: string)`\u6765\u76d1\u63a7\u5e76\u4e14\u6d4b\u8bd5\u7c7b\u7684\u539f\u578b\u7684\u65b9\u6cd5\\n\\n**\u6ce8\u610f**: \u9700\u8981\u5728`spy`\u5b8c\u67d0\u4e00\u4e2a\u51fd\u6570\u4e4b\u540e\u5bf9\u5176\u8fdb\u884c`mockRestore`\\n\\n### \u5e38\u7528\u65b9\u6cd5\\n\\n1. `simulate(event, mock)`: \u6a21\u62df\u4e8b\u4ef6, \u7528\u6765\u89e6\u53d1\u4e8b\u4ef6, `event`\u4e3a\u4e8b\u4ef6\u540d\u79f0, `mock`\u4e3a\u4e00\u4e2a`event object`\\n2. `find(selector)`: \u6839\u636e\u9009\u62e9\u5668\u67e5\u627e\u8282\u70b9, `selector`\u53ef\u4ee5\u662f`CSS`\u4e2d\u7684\u9009\u62e9\u5668, \u6216\u8005\u662f\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570, \u7ec4\u4ef6\u7684`display name`\u7b49\\n3. `state()`: \u8fd4\u56de\u6839\u7ec4\u4ef6\u7684\u72b6\u6001, \u4f46\u662f\u5982\u679c\u4f7f\u7528`React Hooks`\u4e2d\u7684`useState`\u662f\u65e0\u6cd5\u83b7\u53d6\u5230\u8be5\u72b6\u6001\\n4. `text()`: \u8fd4\u56de\u5f53\u524d\u7ec4\u4ef6\u7684\u6587\u672c\u5185\u5bb9\\n5. `html()`: \u8fd4\u56de\u5f53\u524d\u7ec4\u4ef6\u7684`HTML`\u4ee3\u7801\\n\\n## \u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a\\n\\n`%stmts`\u662f\u8bed\u53e5\u8986\u76d6\u7387\uff08statement coverage\uff09\u8868\u793a\u662f\u4e0d\u662f\u6bcf\u4e2a\u8bed\u53e5\u90fd\u6267\u884c\u4e86\uff1f\\n\\n`Branch`\u4ee3\u8868\u5206\u652f, \u6bd4\u5982`if-else`\u5206\u652f\u4e2d\u6ca1\u6709\u6d4b\u8bd5\u5230\u7684\\n\\n`Funcs`\u4ee3\u8868\u51fd\u6570, \u6ca1\u6709\u6d4b\u8bd5\u5230\u7684\u51fd\u6570\u4e5f\u4f1a\u5728\u663e\u793a\u767e\u5206\u6bd4\\n\\n`Lines`\u4ee3\u8868\u8986\u76d6\u7684\u884c\u6570, \u663e\u793a\u5df2\u7ecf\u8986\u76d6\u7684\u884c\u6570\u7684\u767e\u5206\u6bd4\\n\\n`Uncovered Line`: \u8868\u793a\u6d4b\u8bd5\u6ca1\u6709\u8986\u76d6\u5230\u884c\u6570, \u5177\u4f53\u662f\u54ea\u51e0\u884c\u6ca1\u6709\u88ab\u8986\u76d6\u5230\\n\\n\u4e0b\u9762\u4f1a\u663e\u793a\u901a\u8fc7\u7684\u6d4b\u8bd5\u5957\u4ef6, \u6d4b\u8bd5\u6570\u91cf\u4ee5\u53ca\u5feb\u7167\u6570\u91cf\\n\\n# \u76f8\u5173\u8d44\u6599\\n\\n1. [Jest \u5b98\u65b9\u6587\u6863](https://jestjs.io/zh-Hans/)\\n2. [\u5bf9 React \u7ec4\u4ef6\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5](https://juejin.im/post/5a71413e5188252edb593020)\\n3. [\u5982\u4f55\u5bf9 react hooks \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5](https://segmentfault.com/a/1190000020058166)\\n4. [\u4f7f\u7528 Jest \u8fdb\u884c React \u5355\u5143\u6d4b\u8bd5](https://juejin.im/post/5b6c39bde51d45195c079d62)\\n5. [React \u6d4b\u8bd5\u6307\u5357](https://segmentfault.com/a/1190000018063747)\\n6. [\u4f7f\u7528 jest+enzyme \u6d4b\u8bd5 react \u7ec4\u4ef6](https://github.com/frontend9/fe9-library/issues/244)\\n7. [\u7528 Enzyme \u6d4b\u8bd5\u4f7f\u7528 Hooks \u7684 React \u51fd\u6570\u7ec4\u4ef6](https://juejin.im/post/5e933cbc6fb9a03c74137865)"},{"id":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","metadata":{"permalink":"/blog/Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","editUrl":"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-hoisting-of-varibles.md","source":"@site/blog/2022-09-10-hoisting-of-varibles.md","title":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","description":"JavaScript\u4e2d\u7684\u53d8\u91cf\u63d0\u5347\u95ee\u9898\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u9762\u8bd5\u9898\u76ee\uff0c\u5728\u9605\u8bfb\u300a\u4f60\u4e0d\u77e5\u9053\u7684 JavaScript\u300b\u8fd9\u672c\u4e66\u53c8\u6709\u4e86\u65b0\u7684\u611f\u609f\u3002","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"}],"readingTime":4.16,"hasTruncateMarker":false,"authors":[{"name":"justcodebryan","title":"Front End Engineer","url":"https://github.com/justcodebryan","imageURL":"https://github.com/justcodebryan.png","key":"justcodebryan"}],"frontMatter":{"slug":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","title":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","authors":["justcodebryan"],"tags":["javascript"]},"prevItem":{"title":"\u524d\u7aefTDD\u521d\u63a2","permalink":"/blog/\u524d\u7aefTDD\u521d\u63a2"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"`JavaScript`\u4e2d\u7684\u53d8\u91cf\u63d0\u5347\u95ee\u9898\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u9762\u8bd5\u9898\u76ee\uff0c\u5728\u9605\u8bfb\u300a\u4f60\u4e0d\u77e5\u9053\u7684 JavaScript\u300b\u8fd9\u672c\u4e66\u53c8\u6709\u4e86\u65b0\u7684\u611f\u609f\u3002\\n\\n# \u53d8\u91cf\u63d0\u5347\u662f\u4ec0\u4e48\\n\\n\u9996\u5148\u6765\u770b\u4e66\u4e2d\u7684\u4e24\u4e2a\u4f8b\u5b50\uff1a\\n\\n```javascript\\n// example 1\\na = 2;\\nvar a;\\nconsole.log(a); // ans\uff1a2\\n```\\n\\n```javascript\\n// example 2\\nconsole.log(a);\\nvar a = 2; // ans\uff1aundefined\\n```\\n\\n\u8fd9\u4e24\u4e2a\u4f8b\u5b50\u975e\u5e38\u7b80\u5355\uff0c\u89e3\u91ca\u5982\u4e0b\\n\\n1. \u4f8b 1 \u4e2d\u7684`var a`\u53d8\u91cf\u7684\u58f0\u660e\u88ab\u63d0\u5347\u5230\u4e86\u6700\u4e0a\u9762\uff0c\u6240\u4ee5\u5728\u4e0b\u9762\u8fdb\u884c\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u6210\u529f\u5730\u5c06 2 \u8d4b\u7ed9\u4e86`a`\u8fd9\u4e2a\u53d8\u91cf\u3002\u53ef\u4ee5\u770b\u4f5c\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u4ee3\u7801\uff1a\\n\\n```javascript\\nvar a;\\na = 2;\\nconsole.log(a);\\n```\\n\\n2. \u4f8b 2 \u4e2d\u53ef\u4ee5\u50cf\u4e0a\u9762\u4e00\u6837\u5148\u5c06\u53d8\u91cf\u63d0\u5347\u7684\u4ee3\u7801\u5728\u8111\u91cc\u60f3\u4e00\u60f3\uff0c\u5f97\u5230\u4e0b\u9762\u8fd9\u6837\u7684\u4ee3\u7801\uff1a\\n\\n```javascript\\nvar a;\\nconsole.log(a); // \u5b9a\u4e49\u4e86\u53d8\u91cfa\u4f46\u662f\u6ca1\u6709\u7ed9\u5b83\u8d4b\u503c\uff0c\u6240\u4ee5\u5b83\u7684\u503c\u73b0\u5728\u662fundefined\\na = 2;\\n```\\n\\n# \u51fd\u6570\u7684\u53d8\u91cf\u63d0\u5347\\n\\n`js`\u4e2d\u7684\u51fd\u6570\u540c\u6837\u4f1a\u8fdb\u884c\u53d8\u91cf\u63d0\u5347\u8fd9\u4e00\u64cd\u4f5c\uff0c\u4f46\u662f\u51fd\u6570\u6709\u4e24\u79cd\u58f0\u660e\u5f62\u5f0f\\n\\n1. \u51fd\u6570\u58f0\u660e - `function func() { };`\\n2. \u51fd\u6570\u8868\u8fbe\u5f0f - `var func = function() { };`\\n\\n\u9700\u8981\u6ce8\u610f\u7684\u662f\u51fd\u6570\u58f0\u660e\u624d\u4f1a\u5c06\u5176\u6574\u4e2a\u51fd\u6570\u63d0\u5347\u5230\u6574\u4e2a\u811a\u672c\u7684\u6700\u9876\u4e0a\u53bb\u58f0\u660e\uff0c\u4f46\u662f\u51fd\u6570\u8868\u8fbe\u5f0f\u4f1a\u50cf\u524d\u9762\u7684\u53d8\u91cf\u63d0\u5347\u4e00\u6837\uff0c\u5148\u58f0\u660e\u53d8\u91cf\u7136\u540e\u518d\u7ed9\u5b83\u8d4b\u503c\uff0c\u53ea\u4e0d\u8fc7\u662f\u8d4b\u7ed9\u53d8\u91cf\u4e00\u4e2a\u51fd\u6570(\u5b8c\u5168\u53ef\u4ee5\u5c06\u5176\u4e0e\u53d8\u91cf\u63d0\u5347\u4e00\u6837\u5904\u7406)\u3002\u5728\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u53d8\u91cf\u63d0\u5347\u4e2d\uff0c\u5982\u679c\u51fa\u73b0\u4e86\u5148\u8c03\u7528\u7136\u540e\u518d\u58f0\u660e\u7684\u60c5\u51b5\uff0c\u4f1a\u629b\u51fa\u7684\u9519\u8bef\u662f`TypeError`(\u7c7b\u578b\u9519\u8bef), \u800c\u4e0d\u662f`ReferenceError`(\u5f15\u7528\u9519\u8bef)\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7406\u89e3\u4e3a\u5148\u8c03\u7528\u7684\u53d8\u91cf\u7684\u503c\u5e94\u8be5\u4e3a`undefined`\uff0c \u800c`undefined`\u5e76\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e0d\u80fd\u8c03\u7528\uff0c\u6240\u4ee5\u4f1a\u629b\u51fa`TypeError`\u3002\\n\\n\u5373\u4f7f\u662f\u5c06\u4e00\u4e2a\u5177\u540d\u7684\u51fd\u6570\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u4e5f\u662f\u4e0d\u80fd\u5728\u58f0\u660e\u4e4b\u524d\u8c03\u7528\u7684\uff1a\\n\\n```javascript\\n  foo(); // TypeError\\n  bar(); // ReferenceError\\n\\n  var foo = function bar() {\\n    ...\\n  }\\n```\\n\\n\u7ecf\u8fc7\u53d8\u91cf\u63d0\u5347\u4ee5\u540e\uff0c\u4ee3\u7801\u5e94\u8be5\u53d8\u6210\u4ee5\u4e0b\u8fd9\u79cd\u60c5\u51b5\u4e86\uff1a\\n\\n```javascript\\n  var foo;\\n\\n  foo(); // TypeError\\n  bar(); // ReferenceError\\n\\n  foo = function() {\\n    var bar = ...self...\\n  }\\n```\\n\\n\u4e4b\u524d\u5728\u5b66\u4e60\u53d8\u91cf\u63d0\u5347\u8fd9\u4e00\u5757\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u65f6\u5e38\u4f1a\u6709\u7591\u95ee\uff0c\u5982\u679c\u591a\u4e2a\u51fd\u6570\u53d8\u91cf\u63d0\u5347\u5230\u5e95\u4f1a\u53d8\u6210\u4ec0\u4e48\u6837\uff1f\\n\\n```\\n  foo();  // 1\\n\\n  var foo;\\n\\n  function foo() {\\n    console.log(1);\\n  }\\n\\n  foo = function() {\\n    console.log(2);\\n  }\\n```\\n\\n\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5c3d\u7ba1`var foo`\u662f\u5728`function foo() ...`\u58f0\u660e\u4e4b\u524d\u7684\uff0c\u4f46\u662f\u4ed6\u662f\u91cd\u590d\u7684\u58f0\u660e\uff0c\u6240\u4ee5\u88ab\u5ffd\u7565\u4e86\uff0c\u56e0\u6b64\u51fd\u6570\u58f0\u660e\u4f1a\u88ab\u63d0\u5347\u5230\u666e\u901a\u53d8\u91cf\u4e4b\u524d\u3002\u4f46\u662f\u5c3d\u7ba1`var`\u58f0\u660e\u4f1a\u88ab\u5ffd\u7565\u6389\uff0c\u4f46\u662f\u51fa\u73b0\u5728\u540e\u9762\u7684\u51fd\u6570\u58f0\u660e\u8fd8\u662f\u53ef\u4ee5\u8986\u76d6\u6389\u524d\u9762\u7684\\n\\n```\\n  foo();  // 3\\n\\n  function foo() {\\n    console.log(1);\\n  }\\n\\n  var foo = function() {\\n    console.log(2);\\n }\\n\\n  function foo() {\\n    console.log(3);\\n  }\\n```\\n\\n# \u603b\u7ed3\\n\\n- `Javascript`\u7f16\u8bd1\u5668\u4f1a\u5c06`var a = 2`\u770b\u4f5c`var a`\u548c`a = 2`\u4e24\u4e2a\u8fc7\u7a0b\\n- \u51fd\u6570\u548c\u53d8\u91cf\u90fd\u4f1a\u63d0\u5347\\n- \u58f0\u660e\u672c\u8eab\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u662f\u5305\u62ec\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u8d4b\u503c\u5728\u5185\u7684\u8d4b\u503c\u64cd\u4f5c\u4e0d\u4f1a\u63d0\u5347\\n- \u5982\u679c\u51fd\u6570\u58f0\u660e\u548c\u53d8\u91cf\u58f0\u660e\u540c\u65f6\u5b58\u5728\u4e14\u540c\u540d\uff0c\u53d8\u91cf\u7684\u58f0\u660e\u4f1a\u56e0\u4e3a\u91cd\u590d\u88ab\u5ffd\u7565\\n- \u5982\u679c\u591a\u4e2a\u540c\u540d\u7684\u51fd\u6570\u58f0\u660e\uff0c\u540e\u9762\u7684\u58f0\u660e\u4f1a\u8986\u76d6\u6389\u524d\u9762\u7684\u58f0\u660e"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/justcodebryan/blog/tree/main/blog/2022-09-10-welcome/index.md","source":"@site/blog/2022-09-10-welcome/index.md","title":"Welcome","description":"This blog use Docusaurus and React to build up.","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[],"readingTime":0.145,"hasTruncateMarker":false,"authors":[{"name":"justcodebryan","title":"Front End Engineer","url":"https://github.com/justcodebryan","imageURL":"https://github.com/justcodebryan.png","key":"justcodebryan"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["justcodebryan"]},"prevItem":{"title":"Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898","permalink":"/blog/Js\u53d8\u91cf\u63d0\u5347\u95ee\u9898"}},"content":"This blog use [Docusaurus](https://docusaurus.io/) and [React](https://reactjs.org/) to build up.\\n\\nTech Stack mainly used in work:\\n\\n- [React](https://reactjs.org/)\\n- [Next.js](https://nextjs.org/)\\n- [Typescript](https://www.typescriptlang.org/)\\n\\nStart the New Journey in Code!\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)"}]}')}}]);
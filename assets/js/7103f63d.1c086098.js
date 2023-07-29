"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),b=a,f=c["".concat(s,".").concat(b)]||c[b]||d[b]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Job Handling",l={unversionedId:"api-endpoints/job-api",id:"api-endpoints/job-api",title:"Job Handling",description:"This category is related to creating, retrieving, and managing rendering jobs.",source:"@site/docs/api-endpoints/job-api.md",sourceDirName:"api-endpoints",slug:"/api-endpoints/job-api",permalink:"/docs/api-endpoints/job-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-endpoints/job-api.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Image Handling",permalink:"/docs/api-endpoints/image-api"},next:{title:"Scenario Handling",permalink:"/docs/api-endpoints/scenario-api"}},s={},p=[{value:"Create Job",id:"create-job",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Get Job By Id",id:"get-job-by-id",level:3},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Get Job Media",id:"get-job-media",level:3},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"job-handling"},"Job Handling"),(0,a.kt)("p",null,"This category is related to creating, retrieving, and managing rendering jobs."),(0,a.kt)("h3",{id:"create-job"},"Create Job"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/v1/job")),(0,a.kt)("p",null,"Create a new rendering job."),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method: POST"),(0,a.kt)("li",{parentName:"ul"},"Body: JSON raw data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "webhook": {\n        "url": "URL_WHERE_TO_SEND_AFTER_RENDERING",\n        "secret": "BEARER_TOKEN_IF_REQUIRED"\n    },\n    "creation_data": {\n        "image_1": "64c4466cef34a47228f27c9d",\n        "image_2": "64c4466cef34a47228f27c9d",\n        "audio_name": "64c46b64ef34a47228f27cb0",\n        "audio_age": "64c46b74ef34a47228f27cb2",\n        "audio_hobby": "64c46b88ef34a47228f27cb4",\n        "audio_behavior": "64c46b9aef34a47228f27cb6",\n        "audio_advice": "64c46bbbef34a47228f27cb8"\n    },\n    "scenario_id": "12345"\n}\n')),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status Code: 200 OK (on success)")),(0,a.kt)("h3",{id:"get-job-by-id"},"Get Job By Id"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/v1/job/{jobId}")),(0,a.kt)("p",null,"Retrieve information about a specific job by its ID."),(0,a.kt)("h4",{id:"request-1"},"Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method: GET")),(0,a.kt)("h4",{id:"response-1"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status Code: 200 OK (on success)")),(0,a.kt)("h3",{id:"get-job-media"},"Get Job Media"),(0,a.kt)("p",null,"Endpoint: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/v1/job/export/{jobId}")),(0,a.kt)("p",null,"Retrieve the exported media files for a specific job."),(0,a.kt)("h4",{id:"request-2"},"Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method: GET")),(0,a.kt)("h4",{id:"response-2"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status Code: 200 OK (on success)")))}d.isMDXComponent=!0}}]);
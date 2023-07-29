"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:6},a="The Importance of IDs",s={unversionedId:"api-information/id-usage",id:"api-information/id-usage",title:"The Importance of IDs",description:"IDs play a crucial role in identifying and managing resources. Many API responses include unique IDs that are assigned to the resources you upload, such as images and audio files. This tutorial will explain why IDs are important in the API and how to use them effectively in your application.",source:"@site/docs/api-information/id-usage.md",sourceDirName:"api-information",slug:"/api-information/id-usage",permalink:"/docs/api-information/id-usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-information/id-usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"API Information",permalink:"/docs/category/api-information"},next:{title:"Using Docker",permalink:"/docs/api-information/docker-usage"}},u={},l=[{value:"Importance of IDs in PersonalizePro API",id:"importance-of-ids-in-personalizepro-api",level:2},{value:"Usage of IDs in API Endpoints",id:"usage-of-ids-in-api-endpoints",level:2},{value:"Consistency of IDs Across the API",id:"consistency-of-ids-across-the-api",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-importance-of-ids"},"The Importance of IDs"),(0,i.kt)("p",null,"IDs play a crucial role in identifying and managing resources. Many API responses include unique IDs that are assigned to the resources you upload, such as images and audio files. This tutorial will explain why IDs are important in the API and how to use them effectively in your application."),(0,i.kt)("h2",{id:"importance-of-ids-in-personalizepro-api"},"Importance of IDs in PersonalizePro API"),(0,i.kt)("p",null,"IDs are essential for uniquely identifying resources within the PersonalizePro API. When you create or upload a resource (e.g., an image) using the API, the server generates a unique ID for that resource. This ID serves as a reference key for accessing and managing the resource in the future."),(0,i.kt)("p",null,"For example, when you upload an image to the endpoint:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upload Image")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"POST /api/v1/image\n")),(0,i.kt)("p",null,"You will receive a response containing the details of the uploaded image, including its unique ID. The response object might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "64c4466cef34a47228f27c9d",\n    "name": "example_image.jpg",\n    "size": 123456,\n    "created_at": "2023-07-28T12:34:56Z"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field holds the unique identifier for the uploaded image."),(0,i.kt)("h2",{id:"usage-of-ids-in-api-endpoints"},"Usage of IDs in API Endpoints"),(0,i.kt)("p",null,"After receiving the ID for a resource (e.g., image), you should save it in your application for future reference. The saved ID will be used in subsequent API requests to interact with that specific resource."),(0,i.kt)("p",null,"For example, if you want to retrieve or delete the uploaded image, you would use the ID as follows:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Get Image by ID")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /api/v1/image/64c4466cef34a47228f27c9d\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Delete Image by ID")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE /api/v1/image/64c4466cef34a47228f27c9d\n")),(0,i.kt)("p",null,"By including the resource's ID in the API endpoint, you specify which specific resource you want to retrieve or manipulate."),(0,i.kt)("h2",{id:"consistency-of-ids-across-the-api"},"Consistency of IDs Across the API"),(0,i.kt)("p",null,"The use of IDs is consistent throughout the entire PersonalizePro API. Whenever you create or upload a resource (e.g., image, audio), the API will respond with the resource's ID. You must use this ID in subsequent requests when working with that resource. Whether you're creating rendering jobs, managing audio, images, or scenarios, the same pattern of using IDs applies."),(0,i.kt)("p",null,"Always ensure that you retain and correctly use the IDs provided by the API to maintain proper control and management of your resources."),(0,i.kt)("p",null,"In conclusion, IDs are vital in the PersonalizePro API as they uniquely identify resources and allow you to perform various actions on specific resources. Always store and utilize the provided IDs to interact with the API effectively and manage your personalized content successfully."))}d.isMDXComponent=!0}}]);
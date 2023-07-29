"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Using Docker",s={unversionedId:"api-information/docker-usage",id:"api-information/docker-usage",title:"Using Docker",description:"Docker provides a convenient and consistent way to deploy and manage applications, including the PersonalizePro API. This guide will walk you through the steps to use Docker to set up and run the PersonalizePro API on your system.",source:"@site/docs/api-information/docker-usage.md",sourceDirName:"api-information",slug:"/api-information/docker-usage",permalink:"/PersonalizePro-API/docs/api-information/docker-usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-information/docker-usage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Importance of IDs",permalink:"/PersonalizePro-API/docs/api-information/id-usage"},next:{title:"Using the Token System",permalink:"/PersonalizePro-API/docs/api-information/token-usage"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Docker Scripts",id:"docker-scripts",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Production Considerations",id:"production-considerations",level:2},{value:"Our thoughts on the use of Docker",id:"our-thoughts-on-the-use-of-docker",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-docker"},"Using Docker"),(0,o.kt)("p",null,"Docker provides a convenient and consistent way to deploy and manage applications, including the PersonalizePro API. This guide will walk you through the steps to use Docker to set up and run the PersonalizePro API on your system."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you begin, ensure you have the following prerequisites installed on your system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker: Install Docker on your machine by following the official Docker installation guide for your operating system."),(0,o.kt)("li",{parentName:"ul"},"Docker Compose: Docker Compose should be available on your system. It usually comes bundled with Docker on most platforms.")),(0,o.kt)("h2",{id:"docker-scripts"},"Docker Scripts"),(0,o.kt)("p",null,"The PersonalizePro API comes with three Docker scripts that simplify the setup and management of the application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"start.sh:")," This script is used to start the PersonalizePro API. It will set up the entire infrastructure and download necessary files, which might take some time on the first run.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"stop.sh:")," Use this script to stop the running application and gracefully shut down the containers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"rebuild.sh:")," If you make changes to the source code of the PersonalizePro API, you can use this script to rebuild the necessary components. Only the modified files will be rebuilt, making it faster to restart the server."))),(0,o.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,o.kt)("p",null,"Follow these steps to use Docker to run the PersonalizePro API:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigate to the Directory:"),"\nChange your current working directory to the root of the PersonalizePro API project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Start the API:"),"\nExecute the ",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the PersonalizePro API. This will set up the required infrastructure and download necessary files. It might take a while on the first run."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./start.sh\n")),(0,o.kt)("p",{parentName:"li"},"Wait until you see the message indicating that the server is up and running.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Access the API:"),"\nThe API should now be accessible at the specified API endpoint (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),"). You can interact with the API using tools like Postman or cURL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stop the API:"),"\nWhen you want to stop the running application, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"stop.sh")," script."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./stop.sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Making Code Changes:"),"\nIf you make changes to the source code of the PersonalizePro API, you can rebuild the necessary components using the ",(0,o.kt)("inlineCode",{parentName:"p"},"rebuild.sh")," script. This script will only rebuild the modified files, making the process faster."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"./rebuild.sh\n")))),(0,o.kt)("h2",{id:"production-considerations"},"Production Considerations"),(0,o.kt)("p",null,"When deploying the PersonalizePro API in a production environment, make sure to set the appropriate server environment variables. This includes configuring database connections, API keys, and any other sensitive information."),(0,o.kt)("p",null,"Additionally, in a production setup, it is recommended to use HTTPS for secure communication between clients and the API."),(0,o.kt)("h2",{id:"our-thoughts-on-the-use-of-docker"},"Our thoughts on the use of Docker"),(0,o.kt)("p",null,"Using Docker simplifies the setup and management of the PersonalizePro API. With Docker, you can easily start, stop, and rebuild the application, making development and deployment processes smoother. Always ensure that you follow best practices when deploying the application in production and protect sensitive information by setting appropriate environment variables."))}d.isMDXComponent=!0}}]);
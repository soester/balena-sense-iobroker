"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Supported devices",i={unversionedId:"device-support",id:"device-support",title:"Supported devices",description:"balenaSense has been tested to work on the following devices:",source:"@site/docs/04-device-support.md",sourceDirName:".",slug:"/device-support",permalink:"/balena-sense-iobroker/device-support",draft:!1,editUrl:"https://github.com/soester/balena-sense-iobroker/edit/master/docs/04-device-support.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/balena-sense-iobroker/customization"}},s={},p=[{value:"Contributing a new device or sensor",id:"contributing-a-new-device-or-sensor",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supported-devices"},"Supported devices"),(0,a.kt)("p",null,"balenaSense has been tested to work on the following devices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 2Bv1.2"),(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 3B/3B+/3A+"),(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi 4B")),(0,a.kt)("p",null,"Sensors that currently work with balenaSense include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sensor Model"),(0,a.kt)("th",{parentName:"tr",align:null},"Sensor Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BME680"),(0,a.kt)("td",{parentName:"tr",align:null},"Bosch Sensortec BME680 sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BMP180"),(0,a.kt)("td",{parentName:"tr",align:null},"Bosch Sensortec BMP180 sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BMP280"),(0,a.kt)("td",{parentName:"tr",align:null},"Bosch Sensortec BMP280 sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BME280"),(0,a.kt)("td",{parentName:"tr",align:null},"Bosch Sensortec BME280 sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTU21"),(0,a.kt)("td",{parentName:"tr",align:null},"Measurement Specialties HTU21 humidity & temperature sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MS8607"),(0,a.kt)("td",{parentName:"tr",align:null},"TE Connectivity PHT sensor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VEML6070"),(0,a.kt)("td",{parentName:"tr",align:null},"VEML6070 UV A light sensor")))),(0,a.kt)("h2",{id:"contributing-a-new-device-or-sensor"},"Contributing a new device or sensor"),(0,a.kt)("p",null,"We warmly welcome ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sense"},"community contributions")," that help us expand devices that can run balenaSense or I2C sensors that we can add to the project."))}u.isMDXComponent=!0}}]);
(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[765,921],{765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(466),o=r(74),a=r.n(o),c=(r(921),r(586)),l=r(309),i=r(429);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(){return n.createElement(l.S,null,(function(e){var t=e.theme;return n.createElement("div",{className:"instructions-container"},n.createElement("h1",{className:"center-text header-lg"},"Instructions"),n.createElement("ol",{className:"container-sm grid center-text battle-instructions"},n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"Enter two Github users"),n.createElement(c.wN,{className:"bg-".concat(t),color:"rgb(255, 191, 116)",size:140})),n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"Battle"),n.createElement(c.eMV,{className:"bg-".concat(t),color:"#727272",size:140})),n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"See the winners"),n.createElement(c.yyP,{className:"bg-".concat(t),color:"rgb(255, 215, 0)",size:140}))))}))}var w=function(e){m(r,e);var t=b(r);function r(){var e;s(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return v(d(e=t.call.apply(t,[this].concat(o))),"state",{username:""}),v(d(e),"handleSubmit",(function(t){t.preventDefault(),e.props.onSubmit(e.state.username)})),v(d(e),"handleChange",(function(t){e.setState({username:t.target.value})})),e}return p(r,[{key:"render",value:function(){var e=this;return n.createElement(l.S,null,(function(t){var r=t.theme;return n.createElement("form",{className:"column player",onSubmit:e.handleSubmit},n.createElement("label",{htmlFor:"username",className:"player-label"},e.props.label),n.createElement("div",{className:"row player-inputs"},n.createElement("input",{type:"text",id:"username",className:"input-".concat(r),placeholder:"github username",autoComplete:"off",value:e.state.username,onChange:e.handleChange}),n.createElement("button",{className:"btn ".concat("dark"===r?"light-btn":"dark-btn"),type:"submit",disabled:!e.state.username},"Submit")))}))}}]),r}(n.Component);function S(e){var t=e.username,r=e.onReset,o=e.label;return n.createElement(l.S,null,(function(e){var a=e.theme;return n.createElement("div",{className:"column player"},n.createElement("h3",{className:"player-label"},o),n.createElement("div",{className:"row bg-".concat(a)},n.createElement("div",{className:"player-info"},n.createElement("img",{className:"avatar-small",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),n.createElement("a",{href:"https://github.com/".concat(t),className:"link"},t)),n.createElement("button",{className:"btn-clear flex-center",onClick:r},n.createElement(c.G5m,{color:"rgb(194, 57, 42)",size:26}))))}))}w.propTypes={label:a().string.isRequired,onSubmit:a().func.isRequired},S.propTypes={label:a().string.isRequired,onReset:a().func.isRequired,username:a().string.isRequired};var O=function(e){m(r,e);var t=b(r);function r(){var e;s(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return v(d(e=t.call.apply(t,[this].concat(o))),"state",{playerOne:null,playerTwo:null}),v(d(e),"handleSubmit",(function(t,r){e.setState(v({},t,r))})),v(d(e),"handleReset",(function(t){e.setState(v({},t,null))})),e}return p(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.playerOne,o=t.playerTwo;return n.createElement(n.Fragment,null,n.createElement(E,null),n.createElement("div",{className:"players-container"},n.createElement("h1",{className:"center-text header-lg"},"Players"),n.createElement("div",{className:"row space-around"},null===r?n.createElement(w,{label:"Player One!",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):n.createElement(S,{username:r,onReset:function(){return e.handleReset("playerOne")},label:"Player One"}),null===o?n.createElement(w,{label:"Player Two!",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):n.createElement(S,{username:o,onReset:function(){return e.handleReset("playerTwo")},label:"Player Two"})),n.createElement("div",null,r&&o&&n.createElement(i.rU,{className:"btn dark-btn btn-space",to:{pathname:"/battle/results",search:"?playerOne=".concat(r,"&playerTwo=").concat(o)}},"Battle"))))}}]),r}(n.Component)},908:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(466),o=r(74),a=r.n(o),c=r(309);function l(e){var t=e.header,r=e.subheader,o=e.avatar,a=e.href,l=e.name,i=e.children;return n.createElement(c.S,null,(function(e){var c=e.theme;return n.createElement("div",{className:"card bg-".concat(c)},n.createElement("h4",{className:"header-lg center-text"},t),n.createElement("img",{className:"avatar",src:o,alt:"Avatar for ".concat(l)}),r&&n.createElement("h4",{className:"center-text"},r),n.createElement("h2",{className:"center-text"},n.createElement("a",{className:"link",href:a},l)),i)}))}l.propTypes={header:a().string.isRequired,subheader:a().string,avatar:a().string.isRequired,href:a().string.isRequired,name:a().string.isRequired}},921:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(466),o=r(335),a=r(586),c=r(908),l=r(74),i=r.n(l),u=r(396),s=r(346),f=r(851),p=r(429);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){var t=e.profile;return n.createElement("ul",{className:"card-list"},n.createElement("li",null,n.createElement(a.Xws,{color:"rgb(239, 115, 115)",size:22}),t.name),t.location&&n.createElement("li",null,n.createElement(s.Z,{text:"User location"},n.createElement(a.Phk,{color:"rgb(144, 115, 255)",size:22}),t.location)),t.company&&n.createElement("li",null,n.createElement(s.Z,{text:"User company"},n.createElement(a.I8D,{color:"#795548",size:22}),t.company)),n.createElement("li",null,n.createElement(a.I$,{color:"rgb(129, 195, 245)",size:22}),t.followers.toLocaleString()," followers"),n.createElement("li",null,n.createElement(a.wN,{color:"rgb(64, 183, 95)",size:22}),t.following.toLocaleString()," following"))}w.propTypes={profile:i().object.isRequired};var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,r,a,l,i=(a=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(a);if(l){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function s(){var e;y(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(g(e=i.call.apply(i,[this].concat(r))),"state",{winner:null,loser:null,error:null,loading:!0}),e}return t=s,(r=[{key:"componentDidMount",value:function(){var e=this,t=f.parse(this.props.location.search),r=t.playerOne,n=t.playerTwo;(0,o.N)([r,n]).then((function(t){e.setState({winner:t[0],loser:t[1],error:null,loading:!1})})).catch((function(t){var r=t.message;e.setState({error:r,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,o=e.error;return!0===e.loading?n.createElement(u.Z,null):o?n.createElement("p",{className:"center-text error"},o):n.createElement(n.Fragment,null,n.createElement("div",{className:"grid space-around container-sm"},n.createElement(c.Z,{header:t.score===r.score?"Tie":"Winner",subheader:"Score: ".concat(t.score.toLocaleString()),avatar:t.profile.avatar_url,href:t.profile.html_url,name:t.profile.login},n.createElement(w,{profile:t.profile})),n.createElement(c.Z,{header:t.score===r.score?"Tie":"Loser",subheader:"Score: ".concat(r.score.toLocaleString()),avatar:r.profile.avatar_url,href:r.profile.html_url,name:r.profile.login},n.createElement(w,{profile:r.profile}))),n.createElement(p.rU,{to:"/battle",className:" btn dark-btn btn-space"},"Reset"))}}])&&b(t.prototype,r),s}(n.Component);u.Z.defaultProps={text:"Loading",speed:300}},346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(466),o=r(74),a=r.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(y,e);var t,r,o,a,c=(o=y,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(a){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function y(){var e;l(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(f(e=c.call.apply(c,[this].concat(r))),"state",{hovering:!1}),m(f(e),"mouseOver",(function(){return e.setState({hovering:!0})})),m(f(e),"mouseOut",(function(){return e.setState({hovering:!1})})),e}return t=y,(r=[{key:"render",value:function(){return n.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&i(t.prototype,r),y}(n.Component),b={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function h(e){var t=e.text,r=e.children;return n.createElement(y,null,(function(e){return n.createElement("div",{style:b.container},!0===e&&n.createElement("div",{style:b.tooltip},t),r)}))}h.propTypes={text:a().string.isRequired}},335:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{N:()=>u,Q:()=>s});var o="?client_id=".concat("","&client_secret=").concat("");function a(e,t){return"Not found"===e?"".concat(t," doesn't exist"):e}function c(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(a(t.message,e));return t}))}function l(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function i(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(a(e.message,t));return e}))),c(e)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];return{profile:a,score:l(a.followers,c)}}));var t}function u(e){return Promise.all([i(e[0]),i(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))}function s(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}},377:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),l=0;l<c.length;l++){var i=c[l];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},851:(e,t,r)=>{"use strict";const n=r(221),o=r(377),a=r(374);function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function s(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function m(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&i(r,e).includes(e.arrayFormatSeparator);r=a?i(r,e):r;const c=o||a?r.split(e.arrayFormatSeparator).map((t=>i(t,e))):null===r?r:i(r,e);n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:i(c,t),r(i(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:i(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=s(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),c=Object.assign(a,e.query);let i=t.stringify(c,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${l(e.fragmentIdentifier,r)}`),`${n}${i}${u}`}},374:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},221:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[51],{908:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(466),o=r(74),c=r.n(o),a=r(309);function i(e){var t=e.header,r=e.subheader,o=e.avatar,c=e.href,i=e.name,u=e.children;return n.createElement(a.S,null,(function(e){var a=e.theme;return n.createElement("div",{className:"card bg-".concat(a)},n.createElement("h4",{className:"header-lg center-text"},t),n.createElement("img",{className:"avatar",src:o,alt:"Avatar for ".concat(i)}),r&&n.createElement("h4",{className:"center-text"},r),n.createElement("h2",{className:"center-text"},n.createElement("a",{className:"link",href:c},i)),u)}))}i.propTypes={header:c().string.isRequired,subheader:c().string,avatar:c().string.isRequired,href:c().string.isRequired,name:c().string.isRequired}},51:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(466),o=r(74),c=r.n(o),a=r(335),i=r(586),u=r(908),s=r(396),l=r(346);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=e.selected,r=e.onUpdateLanguage;return n.createElement("ul",{className:"flex-center"},["All","Javascript","Ruby","Java","CSS","Python"].map((function(e){return n.createElement("li",{key:e},n.createElement("button",{className:"btn-clear nav-link",style:e===t?{color:"gold"}:null,onClick:function(){return r(e)}},e))})))}function w(e){var t=e.repos;return n.createElement("ul",{className:"grid space-around"},t.map((function(e,t){e.name;var r=e.owner,o=e.html_url,c=e.stargazers_count,a=e.forks,s=e.open_issues,f=r.login,p=r.avatar_url;return n.createElement("li",{key:o,className:"repo bg-light"},n.createElement(u.Z,{header:"#".concat(t+1),avatar:p,href:o,name:f},n.createElement("ul",{className:"card-list"},n.createElement("li",null,n.createElement(l.Z,{text:"User name"},n.createElement(i.Xws,{color:"rgb(255,191,116)",size:22}),n.createElement("a",{href:"https://github.com/".concat(f)},f))),n.createElement("li",null,n.createElement(i.QJe,{color:"rgb(255,215,0)",size:22}),c.toLocaleString()," stars"),n.createElement("li",null,n.createElement(i.FEF,{color:"rgb(129,195,245)",size:22}),a.toLocaleString()," forks"),n.createElement("li",null,n.createElement(i.gJy,{color:"rgb(241,138,147)",size:22}),s.toLocaleString()," open"))))})))}E.propTypes={selected:c().string.isRequired,onUpdateLanguage:c().func.isRequired},w.propTypes={repos:c().array.isRequired};var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,r,o,c,i=(o=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(c){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function u(){var e;y(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return O(d(e=i.call.apply(i,[this].concat(r))),"state",{selectedLanguage:"All",repos:{},error:null}),O(d(e),"updatedLanguage",(function(t){e.setState({selectedLanguage:t,error:null}),e.state.repos[t]||(0,a.Q)(t).then((function(r){e.setState((function(e){return{repos:m(m({},e.repos),{},O({},t,r))}}))})).catch((function(t){console.warn("Error fetching repos: ",t),e.setState({error:"There was an error fetching the repositories."})}))})),O(d(e),"isLoading",(function(){var t=e.state,r=t.selectedLanguage,n=t.repos;return t.error,!n[r]&&null===e.state.error})),e}return t=u,(r=[{key:"componentDidMount",value:function(){this.updatedLanguage(this.state.selectedLanguage)}},{key:"render",value:function(){var e=this.state,t=e.selectedLanguage,r=e.repos,o=e.error;return n.createElement(n.Fragment,null,n.createElement(E,{selected:t,onUpdateLanguage:this.updatedLanguage}),this.isLoading()&&n.createElement(s.Z,{text:"Fetching Repos"}),o&&n.createElement("p",{className:"center-text error"},o),r[t]&&n.createElement(w,{repos:r[t]}))}}])&&h(t.prototype,r),u}(n.Component)},346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(466),o=r(74),c=r.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,e);var t,r,o,c,a=(o=y,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(c){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function y(){var e;i(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(f(e=a.call.apply(a,[this].concat(r))),"state",{hovering:!1}),m(f(e),"mouseOver",(function(){return e.setState({hovering:!0})})),m(f(e),"mouseOut",(function(){return e.setState({hovering:!1})})),e}return t=y,(r=[{key:"render",value:function(){return n.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&u(t.prototype,r),y}(n.Component),h={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function b(e){var t=e.text,r=e.children;return n.createElement(y,null,(function(e){return n.createElement("div",{style:h.container},!0===e&&n.createElement("div",{style:h.tooltip},t),r)}))}b.propTypes={text:c().string.isRequired}},335:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{N:()=>s,Q:()=>l});var o="?client_id=".concat("","&client_secret=").concat("");function c(e,t){return"Not found"===e?"".concat(t," doesn't exist"):e}function a(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(c(t.message,e));return t}))}function i(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function u(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(c(e.message,t));return e}))),a(e)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];return{profile:c,score:i(c.followers,a)}}));var t}function s(e){return Promise.all([u(e[0]),u(e[1])]).then((function(e){return function(e){return e.sort((function(e,t){return t.score-e.score}))}(e)}))}function l(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}}}]);
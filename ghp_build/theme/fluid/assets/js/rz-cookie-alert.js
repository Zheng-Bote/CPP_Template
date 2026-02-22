const n="en",d='Auch diese Webseite mag Cookies...&nbsp;<small><a href="https://de.wikipedia.org/wiki/HTTP-Cookie" title="Wikipedia: https://de.wikipedia.org/wiki/HTTP-Cookie">Wikipedia</a></small>',r='This website also likes cookies...&nbsp;<small><a href="https://en.wikipedia.org/wiki/HTTP_cookie" title="Wikipedia: https://en.wikipedia.org/wiki/HTTP-Cookie">Wikipedia</a></small>',c=`
.container {
	margin: 0 auto;
	color: rgb(255, 255, 255);
	background-color: rgb(178, 034, 034);
	padding: 1em 1.8em;
	width: 90%;
	font-family: Helvetica, Calibri, Arial, sans-serif;
}
.footer {
	//position: fixed;
	left: 0px;
	bottom:0px;
}
.button {
	color: rgb(255, 255, 255);
	background-color: transparent;
	border-color: rgb(255, 255, 255);
	padding: 5px; 40px;
	margin-right: 50px;
	cursor: pointer;
	float: right;
}
`;function l(a,t,s){var e=new Date;e.setTime(e.getTime()+s*24*60*60*1e3);var o="expires="+e.toUTCString();document.cookie=a+"="+t+";"+o+";path=/"}function h(a){for(var t=a+"=",s=decodeURIComponent(document.cookie),e=s.split(";"),o=0;o<e.length;o++){for(var i=e[o];i.charAt(0)==" ";)i=i.substring(1);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return""}class p extends HTMLElement{constructor(){super(),this.locale_en="en",this.locale_de="de",this.language=localStorage.getItem("language")||n,this.language==="en"?this._message=r:this._message=d,this.attachShadow({mode:"open"})}connectedCallback(){h("CookieAlert")==="y"?this.style.visibility="hidden":this.createComponent()}disconnectedCallback(){this.shadowRoot.getElementById("clickableItem").removeEventListener("click",this.handleClick)}attributeChangedCallback(t,s,e){s!==e&&t==="message"&&(this._message=e,this.updateMessage())}static get observedAttributes(){return["message"]}get message(){return this._message}set message(t){this._message=t,this.setAttribute("message",t),this.updateMessage()}updateMessage(){try{this.shadowRoot.querySelector("span").innerHTML=this._message}catch{}}createComponent(){const t=document.createElement("style");t.appendChild(document.createTextNode(c)),this.shadowRoot.appendChild(t);const s=document.createElement("span"),e=document.createElement("div");e.classList.add("container","footer"),e.appendChild(s);const o=document.createElement("button");o.classList.add("button"),o.innerText="Close",o.addEventListener("click",()=>{this.style.visibility="hidden"}),e.appendChild(o);const i=document.createElement("button");i.classList.add("button"),i.innerText="Accept",i.addEventListener("click",()=>{this.style.visibility="hidden",l("CookieAlert","y",90)}),e.appendChild(i),this.shadowRoot.appendChild(e),this.shadowRoot.addEventListener("mouseover",()=>{e.style.backgroundColor="rgb(35, 122, 152)"}),this.shadowRoot.addEventListener("mouseout",()=>{e.style.backgroundColor=""}),this.updateMessage()}}customElements.define("rz-cookie-alert",p);

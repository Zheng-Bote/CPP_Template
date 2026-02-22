const s=`

  ul.breadcrumb {
    padding: 2px 10px;
    list-style: none;
    background-color: var(--background-color-header);
    border-bottom: var(--border-width) var(--border-style) var(--border-color-header);
  }
  ul.breadcrumb li {
    display: inline;
    font-size: var(--font-size-small);
  }
  ul.breadcrumb li + li:before {
    padding: 4px;
    color: var(--font-color);
    content: ">";
  }
  ul.breadcrumb li a {
    color: var(--font-color);
    text-decoration: none;

    padding-right: 0em;
    background: "";
    no-repeat right;
    background-size: 0;
  }
  ul.breadcrumb li a:hover {
    color: var(--font-color);
    text-decoration: underline;
  }

`;class u extends HTMLElement{static get observedAttributes(){return["window_location"]}constructor(){super()}connectedCallback(){this.render()}attributeChangedCallback(t,o,i){this.render()}rmEmpty(t){if(t.length>0)return t}render(){const t=window.location,o=t.origin+"/",i=t.pathname;let a=i.split("/");const e=a.filter(this.rmEmpty);i.endsWith(".html")&&(e.length=e.length-1);const d=document.createElement("style");d.textContent=s,this.appendChild(d);const n=document.createElement("ul");if(n.classList.add("breadcrumb"),n.innerHTML=`<li><a href="${o}" title="${o}">Main</a>`,a.length===0)return;const c=[];for(let r=0;r<e.length;r++){c.push(e[r]);let l=o;l+=c.join("/"),r===e.length-1?i.endsWith(".html")?n.innerHTML+=`<li><a href="${l}" title="${l}">${e[r]}</a></li>`:n.innerHTML+=`<li>${e[r]}</li>`:n.innerHTML+=`<li><a href="${l}" title="${l}">${e[r]}</a></li>`}this.appendChild(n)}}customElements.define("rz-breadcrumbs",u);

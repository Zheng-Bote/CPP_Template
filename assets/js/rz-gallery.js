import{c as J,p as K,t as k,s as i,a as n,b as x,e as z,f as L,h as s,r as d,u as M,j as A}from"./custom-element.js";import{a as N}from"./css.js";import{i as B}from"./if.js";import{s as a}from"./attributes2.js";import{p as o}from"./props.js";var O=k('<br><a download="" class="svelte-3k3gue">Download</a>',1),Q=k('<figcaption class="svelte-3k3gue"><h3> </h3> <!></figcaption>'),T=k('<div class="rz-img-gallery-item svelte-3k3gue"><figure class="svelte-3k3gue"><picture><source media="(max-width: 480px)"> <source media="(max-width: 680px)"> <source media="(max-width: 800px)"> <source media="(max-width: 1024px)"> <source media="(min-width: 1025px)"> <img class="svelte-3k3gue"></picture> <!></figure></div>');const U={hash:"svelte-3k3gue",code:`
/*
:root {
  --rz-gallery-border: 1px solid black;
  --rz-gallery-gap: 1.5em;
  --rz-gallery-item-border-radius: 0.4em;
  --rz-gallery-items-per-row: 1;
}

.rz-img-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: var(--rz-gallery-gap);
}

@media only screen and (width >= 1024px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 4;
  }
}
@media only screen and (768px < width < 1024px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 3;
  }
}
@media only screen and (540px < width < 768px) {
  .rz-img-gallery {
    --rz-gallery-items-per-row: 2;
  }
}
*/img.svelte-3k3gue {max-width:100%;vertical-align:middle;height:auto;}.rz-img-gallery-item.svelte-3k3gue {flex:0 0
    calc(
      100% / var(--rz-gallery-items-per-row) - var(--rz-gallery-gap) *
        (var(--rz-gallery-items-per-row) - 1) / var(--rz-gallery-items-per-row)
    );border:var(--rz-gallery-border);border-radius:var(--rz-gallery-item-border-radius);& figure:where(.svelte-3k3gue) {margin:0;}& figcaption:where(.svelte-3k3gue) {
    /*margin: 0.5rem;*/padding:0.5rem;background-color:var( --rz-gallery-caption-bg-color);color:var(--rz-gallery-caption-text-color);border-bottom-left-radius:var(--rz-gallery-item-border-radius);border-bottom-right-radius:var(--rz-gallery-item-border-radius);}& img:where(.svelte-3k3gue) {aspect-ratio:3 / 2;object-fit:contain;border-radius:var(--rz-gallery-item-border-radius);}&:hover {figcaption:where(.svelte-3k3gue) {opacity:1;}}a:where(.svelte-3k3gue):link, a:where(.svelte-3k3gue):active, a:where(.svelte-3k3gue):visited {color:var(--font-color);
    /*font-style: italic;*/}}`};function V($,l){K(l,!1),N($,U);let t=o(l,"img_path",12,"img/"),r=o(l,"img",12),g=o(l,"img_ext",12),m=o(l,"title",12),c=o(l,"desc",12),v=o(l,"divfigcaption",12,"yes"),u=o(l,"download_enabled",12,"yes");var p=T(),P=n(p),_=n(P),W=n(_),j=i(W,2),D=i(j,2),E=i(D,2),R=i(E,2),f=i(R,2);d(_);var C=i(_,2);{var F=e=>{var y=Q(),b=n(y),G=n(b,!0);d(b);var S=i(b),H=i(S);{var I=w=>{var q=O(),h=i(M(q));x(()=>{a(h,"href",`${t()??""}${r()??""}${g()??""}`),a(h,"alt",r()),a(h,"title",`${r()??""}${g()??""}`)}),z(w,q)};B(H,w=>{u()==="yes"&&w(I)})}d(y),x(()=>{A(G,m()),A(S,` ${c()??""} `)}),z(e,y)};B(C,e=>{v()==="yes"&&e(F)})}return d(P),d(p),x(()=>{a(W,"srcset",`${t()??""}/WebP/${r()??""}__480.webp`),a(j,"srcset",`${t()??""}/WebP/${r()??""}__680.webp`),a(D,"srcset",`${t()??""}/WebP/${r()??""}__800.webp`),a(E,"srcset",`${t()??""}/WebP/${r()??""}__1024.webp`),a(R,"srcset",`${t()??""}/WebP/${r()??""}__1280.webp`),a(f,"src",`${t()??""}${r()??""}${g()??""}`),a(f,"alt",r()),a(f,"title",`${r()??""}${g()??""}`)}),z($,p),L({get img_path(){return t()},set img_path(e){t(e),s()},get img(){return r()},set img(e){r(e),s()},get img_ext(){return g()},set img_ext(e){g(e),s()},get title(){return m()},set title(e){m(e),s()},get desc(){return c()},set desc(e){c(e),s()},get divfigcaption(){return v()},set divfigcaption(e){v(e),s()},get download_enabled(){return u()},set download_enabled(e){u(e),s()}})}customElements.define("rz-gallery",J(V,{img_path:{},img:{},img_ext:{},title:{},desc:{},divfigcaption:{},download_enabled:{}},[],[],!0));

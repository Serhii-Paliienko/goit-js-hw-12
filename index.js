import{a as z,S as H,i as a}from"./assets/vendor-DqB7j7Ix.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const P="51393425-8a18948338a29ff5722d3f1bb",R="https://pixabay.com/api/";async function m(t,i=1){const r={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15},{data:n}=await z.get(R,{params:r});return n}const w=document.querySelector(".gallery"),b=document.querySelector(".loader"),M=document.querySelector(".load-more"),x=new H(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function g(t){const i=t.map(({webformatURL:r,largeImageURL:n,tags:e,likes:o,views:l,comments:B,downloads:q})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img class="gallery-image" src="${r}" alt="${e}" loading="lazy"/>
    </a>
    <ul class="info">
    <li class="info-item">
      <svg class="icon icon-likes" viewBox="0 0 24 24" width="20" height="20">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 
                 2.09C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <p>${o}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-views" viewBox="0 0 24 24" width="20" height="20">
        <path d="M12 6a9.77 9.77 0 0 0-9.71 
                 8A9.77 9.77 0 0 0 12 22a9.77 
                 9.77 0 0 0 9.71-8A9.77 
                 9.77 0 0 0 12 6zm0 14a7.77 
                 7.77 0 0 1-7.71-6A7.77 
                 7.77 0 0 1 12 8a7.77 7.77 
                 0 0 1 7.71 6A7.77 7.77 0 0 1 12 20zm0-10a4 
                 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 
                 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
      </svg>
      <p>${l}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-comments" viewBox="0 0 24 24" width="20" height="20">
        <path d="M21 6h-2v9H7v2h9l5 5V6zM17 
                 2H3c-1.1 0-2 .9-2 2v14l4-4h12c1.1 
                 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
      <p>${B}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-downloads" viewBox="0 0 24 24" width="20" height="20">
        <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 
                 7 7-7z"/>
      </svg>
      <p>${q}</p>
    </li>
  </ul>
  </li>
  `).join("");w.insertAdjacentHTML("beforeend",i),x.refresh()}function E(){w.innerHTML=""}function f(){b.classList.remove("hidden")}function p(){b.classList.add("hidden")}function S(){M.classList.remove("hidden")}function y(){M.classList.add("hidden")}const h=document.querySelector(".form"),A=h.elements["search-text"],u=document.querySelector(".load-more"),L=["nature","animals","travel","food","technology","people","architecture","beauty"];let s=1,d="",c=0;const v=15;h.addEventListener("submit",O);u.addEventListener("click",C);document.addEventListener("DOMContentLoaded",$);async function $(){E(),y(),f();try{d=L[Math.floor(Math.random()*L.length)],s=1;const t=await m(d,s);c=t.totalHits,g(t.hits),c>v&&S()}catch{a.error({message:"Error loading random images.",position:"topRight"})}finally{p()}}async function O(t){t.preventDefault();const i=A.value.trim();if(!i){a.warning({message:"Please enter a search query",position:"topRight"});return}d=i,s=1,E(),y(),f();try{const r=await m(d,s);if(c=r.totalHits,r.hits.length===0){h.reset(),a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.hits),h.reset(),a.success({message:`${c} images found`,position:"topRight"}),c>v&&S()}catch{a.error({message:"Error loading. Please try again later.",position:"topRight"})}finally{p()}}async function C(){u.disabled=!0,s+=1,f();try{const t=await m(d,s);g(t.hits),s*v>=c&&(y(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),_()}catch{a.error({message:"Error loading additional images.",position:"topRight"})}finally{u.disabled=!1,p()}}function _(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:i}=t.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

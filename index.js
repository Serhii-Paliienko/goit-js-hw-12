import{a as q,S as z,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const H="51393425-8a18948338a29ff5722d3f1bb",R="https://pixabay.com/api/";async function u(t,o=1){const i={key:H,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return q.get(R,{params:i}).then(r=>r.data)}const w=document.querySelector(".gallery"),M=document.querySelector(".loader"),b=document.querySelector(".load-more"),x=new z(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function f(t){const o=t.map(({webformatURL:i,largeImageURL:r,tags:e,likes:a,views:d,comments:S,downloads:B})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img class="gallery-image" src="${i}" alt="${e}" loading="lazy"/>
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
      <p>${a}</p>
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
      <p>${d}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-comments" viewBox="0 0 24 24" width="20" height="20">
        <path d="M21 6h-2v9H7v2h9l5 5V6zM17 
                 2H3c-1.1 0-2 .9-2 2v14l4-4h12c1.1 
                 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
      <p>${S}</p>
    </li>
    <li class="info-item">
      <svg class="icon icon-downloads" viewBox="0 0 24 24" width="20" height="20">
        <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 
                 7 7-7z"/>
      </svg>
      <p>${B}</p>
    </li>
  </ul>
  </li>
  `).join("");w.insertAdjacentHTML("beforeend",o),x.refresh()}function E(){w.innerHTML=""}function g(){M.classList.remove("hidden")}function p(){M.classList.add("hidden")}function P(){b.classList.remove("hidden")}function y(){b.classList.add("hidden")}const v=document.querySelector(".form"),A=v.elements["search-text"],h=document.querySelector(".load-more"),L=["nature","animals","travel","food","technology","people","architecture","beauty"];let s=1,l="",c=0;const m=15;v.addEventListener("submit",O);h.addEventListener("click",D);document.addEventListener("DOMContentLoaded",$);async function $(){E(),y(),g();try{l=L[Math.floor(Math.random()*L.length)],c=(await u(l,1)).totalHits;const i=Math.ceil(c/m);s=Math.floor(Math.random()*i)+1;const r=await u(l,s);f(r.hits),s*m<c&&P()}catch(t){console.error(t),n.error({message:"Error loading random images.",position:"topRight"})}finally{p()}}async function O(t){t.preventDefault();const o=A.value.trim();if(!o){n.warning({message:"Please enter a search query",position:"topRight"});return}l=o,s=1,y(),g();try{const i=await u(l,s);if(c=i.totalHits,i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}E(),f(i.hits),n.success({message:`${c} images found`,position:"topRight"}),c>m&&P()}catch{n.error({message:"Error loading. Please try again later.",position:"topRight"})}finally{p(),v.reset()}}async function D(){s+=1,h.disabled=!0,g();try{const t=await u(l,s);f(t.hits),s*m>=c&&(y(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),C()}catch{n.error({message:"Error loading additional images.",position:"topRight"})}finally{p(),h.classList.contains("hidden")||(h.disabled=!1)}}function C(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

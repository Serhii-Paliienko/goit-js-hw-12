import{a as q,S as R,i as s}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const $="51393425-8a18948338a29ff5722d3f1bb",B="https://pixabay.com/api/";async function u(t,o=1){const a={key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return q.get(B,{params:a}).then(i=>i.data)}const b=document.querySelector(".gallery"),E=document.querySelector(".loader"),M=document.querySelector(".load-more"),O=new R(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function h(t){const o=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:d,comments:v,downloads:w})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${a}" alt="${e}"/>
    </a>
    <ul class="info">
      <li class="info-item">
        <h4>👍</h4>
        <p>${r}</p>
      </li>
      <li class="info-item">
        <h4>👁️</h4>
        <p>${d}</p>
      </li>
      <li class="info-item">
        <h4>💬</h4>
        <p>${v}</p>
      </li>
      <li class="info-item">
        <h4>⬇️</h4>
        <p>${w}</p>
      </li>
    </ul>
  </li>
  `).join("");b.insertAdjacentHTML("beforeend",o),O.refresh()}function P(){b.innerHTML=""}function m(){E.classList.remove("hidden")}function g(){E.classList.add("hidden")}function S(){M.classList.remove("hidden")}function p(){M.classList.add("hidden")}const y=document.querySelector(".form"),x=y.elements["search-text"],D=document.querySelector(".load-more"),L=["nature","animals","travel","food","technology","people","architecture","beauty","babies"];let n=1,c="",l=0;const f=15;y.addEventListener("submit",A);D.addEventListener("click",_);document.addEventListener("DOMContentLoaded",H);async function H(){P(),p(),m();try{c=L[Math.floor(Math.random()*L.length)],l=(await u(c,1)).totalHits;const a=Math.ceil(l/f);n=Math.floor(Math.random()*a)+1;const i=await u(c,n);h(i.hits),n*f<l&&S()}catch(t){console.error(t),s.error({message:"Error loading random images.",position:"topRight"})}finally{g()}}async function A(t){t.preventDefault();const o=x.value.trim();if(!o){s.warning({message:"Please enter a search query",position:"topRight"});return}c=o,n=1,p(),m();try{const a=await u(c,n);if(l=a.totalHits,a.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(),h(a.hits),s.success({message:`${l} images found`,position:"topRight"}),l>f&&S()}catch{s.error({message:"Error loading. Please try again later.",position:"topRight"})}finally{g(),y.reset()}}async function _(){n+=1,m();try{const t=await u(c,n);h(t.hits),n*f>=l&&(p(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),I()}catch{s.error({message:"Error loading additional images.",position:"topRight"})}finally{g()}}function I(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

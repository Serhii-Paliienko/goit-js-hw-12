import{a as R,S as $,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const B="51393425-8a18948338a29ff5722d3f1bb",O="https://pixabay.com/api/";async function f(t,o=1){const a={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return R.get(O,{params:a}).then(i=>i.data)}const E=document.querySelector(".gallery"),M=document.querySelector(".loader"),P=document.querySelector(".load-more"),x=new $(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function m(t){const o=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:d,comments:w,downloads:q})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
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
        <p>${w}</p>
      </li>
      <li class="info-item">
        <h4>⬇️</h4>
        <p>${q}</p>
      </li>
    </ul>
  </li>
  `).join("");E.insertAdjacentHTML("beforeend",o),x.refresh()}function S(){E.innerHTML=""}function g(){M.classList.remove("hidden")}function p(){M.classList.add("hidden")}function v(){P.classList.remove("hidden")}function y(){P.classList.add("hidden")}const L=document.querySelector(".form"),D=L.elements["search-text"],u=document.querySelector(".load-more"),b=["nature","animals","travel","food","technology","people","architecture","beauty"];let s=1,c="",l=0;const h=15;L.addEventListener("submit",A);u.addEventListener("click",_);document.addEventListener("DOMContentLoaded",H);async function H(){S(),y(),g();try{c=b[Math.floor(Math.random()*b.length)],l=(await f(c,1)).totalHits;const a=Math.ceil(l/h);s=Math.floor(Math.random()*a)+1;const i=await f(c,s);m(i.hits),s*h<l&&v()}catch(t){console.error(t),n.error({message:"Error loading random images.",position:"topRight"})}finally{p()}}async function A(t){t.preventDefault();const o=D.value.trim();if(!o){n.warning({message:"Please enter a search query",position:"topRight"});return}c=o,s=1,y(),g();try{const a=await f(c,s);if(l=a.totalHits,a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(),m(a.hits),n.success({message:`${l} images found`,position:"topRight"}),l>h&&v()}catch{n.error({message:"Error loading. Please try again later.",position:"topRight"})}finally{p(),L.reset()}}async function _(){s+=1,u.disabled=!0,g();try{const t=await f(c,s);m(t.hits),s*h>=l&&(y(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),I()}catch{n.error({message:"Error loading additional images.",position:"topRight"})}finally{p(),u.classList.contains("hidden")||(u.disabled=!1)}}function I(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

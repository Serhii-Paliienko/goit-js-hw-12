import{a as m,S as h,i as a}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="51393425-8a18948338a29ff5722d3f1bb",g="https://pixabay.com/api/";function y(i){const r={key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new h(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img class="gallery-image" src="${o}" alt="${e}"/>
    </a>
    <ul class="info">
      <li class="info-item">
        <h4>👍</h4>
        <p>${t}</p>
      </li>
      <li class="info-item">
        <h4>👁️</h4>
        <p>${s}</p>
      </li>
      <li class="info-item">
        <h4>💬</h4>
        <p>${f}</p>
      </li>
      <li class="info-item">
        <h4>⬇️</h4>
        <p>${p}</p>
      </li>
    </ul>
  </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function P(){c.innerHTML=""}function S(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const l=document.querySelector(".form"),E=l.elements["search-text"];l.addEventListener("submit",i=>{i.preventDefault();const r=E.value.trim();if(!r){a.warning({message:"Please enter a search query",position:"topRight"});return}P(),S(),y(r).then(o=>{o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(o.hits),l.reset())}).catch(o=>{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map

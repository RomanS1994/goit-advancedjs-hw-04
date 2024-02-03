import{a as c}from"./assets/vendor-1b0a9daf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l="42159732-a54f57e537715c3d1f59422b1",f="https://pixabay.com/api/";async function u(r,o){const n={key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};return await c.get(f,{params:n})}const d={form:document.querySelector(".search-form"),container:document.querySelector(".gallery")},{form:p,container:m}=d;p.addEventListener("submit",y);let g=2;function y(r){r.preventDefault();const{value:o}=r.target.elements.searchQuery;console.log(o),u(o,g).then(n=>m.insertAdjacentHTML("beforeend",h(n.data.hits)))}function h(r){return r.map(({webformatURL:o,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:a})=>`<div class="photo-card">
    <img src="${o}" alt="${i}" loading="lazy" />
  <div class="info">
      <p class="info-item">
          <b>Likes: ${e}</b>
      </p>
          <p class="info-item">
      <b>Views: ${t}</b>
      </p>
      <p class="info-item">
          <b>Comments: ${s}</b>
      </p>
      <p class="info-item">
          <b>Downloads: ${a}</b>
      </p>
  </div>
</div>
  `).join("")}
//# sourceMappingURL=commonHelpers.js.map

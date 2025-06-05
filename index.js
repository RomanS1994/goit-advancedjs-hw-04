import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f={list:document.querySelector(".gallery"),form:document.querySelector(".form")};function m(i){const s=i.map(({webformatURL:o,largeImageURL:t,tags:e,likes:r,views:n,comments:u,downloads:d})=>`
      <li class="card">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <ul class="description-list">
          <li class="description-item">
            <h2 class="description-title">Likes</h2>
            <p class="description-text">${r}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Views</h2>
            <p class="description-text">${n}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Comments</h2>
            <p class="description-text">${u}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Downloads</h2>
            <p class="description-text">${d}</p>
          </li>
        </ul>
      </li>`).join("");f.list.innerHTML=s}const c=document.querySelector(".loader");function h(){c.classList.remove("hidden")}function g(){c.classList.add("hidden")}l.settings({position:"topRight",messageColor:"#FAFAFB",iconColor:"#FAFAFB",backgroundColor:"#B51B1B"});const y="42159732-a54f57e537715c3d1f59422b1";function L(i){const o=`https://pixabay.com/api/?${new URLSearchParams({q:i,key:y,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return h(),fetch(o).then(t=>{if(t.ok)return t.json();throw new Error(t.status)}).then(t=>{if(t.total)m(t.hits);else{l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(t=>console.log(t)).finally(()=>{g()})}const a=document.querySelector("form");let S=new p(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",b);function b(i){i.preventDefault();const s=i.target.elements[0].value.trim();a.reset(),s&&L(s).then(()=>{S.refresh()})}
//# sourceMappingURL=index.js.map

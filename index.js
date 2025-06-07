import{i as l,a as p,S as m}from"./assets/vendor-DFCQGEf1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();l.settings({position:"topRight",messageColor:"#FAFAFB",iconColor:"#FAFAFB",backgroundColor:"#B51B1B"});const f="42159732-a54f57e537715c3d1f59422b1",h=async i=>{const r=`https://pixabay.com/api/?${new URLSearchParams({q:i,key:f,image_type:"photo",orientation:"horizontal",safesearch:!0})}`,o=await p.get(r);if(o.data.total)return o.data.hits;l.show({message:"Sorry, there are no images matching your search query. Please try again!"})},y={list:document.querySelector(".gallery"),form:document.querySelector(".form")};function g(i){const s=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:d,downloads:u})=>`
      <li class="card">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${r}" alt="${e}" />
        </a>
        <ul class="description-list">
          <li class="description-item">
            <h2 class="description-title">Likes</h2>
            <p class="description-text">${t}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Views</h2>
            <p class="description-text">${a}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Comments</h2>
            <p class="description-text">${d}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Downloads</h2>
            <p class="description-text">${u}</p>
          </li>
        </ul>
      </li>`).join("");y.list.innerHTML=s}const L={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery")},{loader:n,form:c,list:S}=L;function b(){n.classList.remove("hidden")}function $(){n.classList.add("hidden")}function q(){S.innerHTML=""}let w=new m(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",x);function x(i){q(),i.preventDefault();const s=i.target.elements[0].value.trim();s&&(b(),h(s).then(r=>{r&&(g(r),w.refresh())}).catch(r=>console.log(r.message)).finally(()=>{$()}),c.reset())}
//# sourceMappingURL=index.js.map

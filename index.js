import{a as B,i as l,S as M}from"./assets/vendor-CrlV4O_2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const q="42159732-a54f57e537715c3d1f59422b1",g=async(r,e)=>{const o=`https://pixabay.com/api/?${new URLSearchParams({page:e,per_page:15,q:r,key:q,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return await B.get(o)};function a(r){return r.map(({webformatURL:e,largeImageURL:i,tags:o,likes:t,views:s,comments:n,downloads:v})=>`
      <li class="card">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${e}" alt="${o}" />
        </a>
        <ul class="description-list">
          <li class="description-item">
            <h2 class="description-title">Likes</h2>
            <p class="description-text">${t}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Views</h2>
            <p class="description-text">${s}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Comments</h2>
            <p class="description-text">${n}</p>
          </li>
          <li class="description-item">
            <h2 class="description-title">Downloads</h2>
            <p class="description-text">${v}</p>
          </li>
        </ul>
      </li>`).join("")}l.settings({position:"topRight",messageColor:"#FAFAFB",iconColor:"#FAFAFB",backgroundColor:"#B51B1B"});const h={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery"),btnMore:document.querySelector(".more")},{loader:y,form:L,list:p,btnMore:f}=h;function b(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}function A(){f.classList.remove("hidden")}function S(){f.classList.add("hidden")}function $(){p.innerHTML=""}let d=new M(".gallery a",{captionsData:"alt",captionDelay:250}),c="",u=1,m=15;function x(r){r.preventDefault(),u=1,c=r.target.elements[0].value.trim(),c&&($(),b(),g(c,u).then(({data:e})=>{if(e.total)if(e.totalHits<=15){const i=a(e.hits);h.list.innerHTML=i,d.refresh(),S(),l.show({message:"We're sorry, but you've reached the end of search results."})}else{const i=a(e.hits);h.list.innerHTML=i,d.refresh(),A()}else{l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(e=>console.log(e.message)).finally(()=>{w()}),L.reset())}function C(){c&&(u+=1,m+=15,b(),g(c,u).then(({data:r})=>{if(r.totalHits<=m){const e=a(r.hits);p.insertAdjacentHTML("beforeend",e),d.refresh(),S(),l.show({message:"We're sorry, but you've reached the end of search results."});return}else{const e=a(r.hits);p.insertAdjacentHTML("beforeend",e),d.refresh();let o=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}}).catch(r=>console.log(r.message)).finally(()=>{w()}))}L.addEventListener("submit",x);f.addEventListener("click",C);
//# sourceMappingURL=index.js.map

import{a as B,i as a,S as M}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const q="42159732-a54f57e537715c3d1f59422b1",L=async(o,t)=>{const i=`https://pixabay.com/api/?${new URLSearchParams({page:t,per_page:15,q:o,key:q,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return await B.get(i)};function d(o){return o.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:n,downloads:v})=>`
      <li class="card">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${t}" alt="${i}" />
        </a>
        <ul class="description-list">
          <li class="description-item">
            <h2 class="description-title">Likes</h2>
            <p class="description-text">${e}</p>
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
      </li>`).join("")}a.settings({position:"topRight",messageColor:"#FAFAFB",iconColor:"#FAFAFB",backgroundColor:"#B51B1B"});const h={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery"),btnMore:document.querySelector(".more")},{loader:b,form:w,list:m,btnMore:g}=h;function S(){b.classList.remove("hidden")}function l(){b.classList.add("hidden")}function A(){g.classList.remove("hidden")}function f(){g.classList.add("hidden")}function P(){m.innerHTML=""}let u=new M(".gallery a",{captionsData:"alt",captionDelay:250}),c="",p=1,y=15;async function $(o){if(f(),o.preventDefault(),p=1,c=o.target.elements[0].value.trim(),!c){a.show({message:"Please enter your search parameters"});return}P(),S();try{const t=await L(c,p),{data:r}=t;if(console.log(t),r.total)if(r.totalHits<=15){const i=d(r.hits);h.list.innerHTML=i,u.refresh(),f(),a.show({message:"We're sorry, but you've reached the end of search results."})}else{const i=d(r.hits);h.list.innerHTML=i,u.refresh(),A()}else{a.show({message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}}catch(t){console.log(t.message),l()}l(),w.reset()}async function x(){if(c){p+=1,y+=15,S();try{const o=await L(c,p),{data:t}=o;if(t.totalHits<=y){const r=d(t.hits);m.insertAdjacentHTML("beforeend",r),u.refresh(),f(),a.show({message:"We're sorry, but you've reached the end of search results."});return}else{const r=d(t.hits);m.insertAdjacentHTML("beforeend",r),u.refresh();let e=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}}catch(o){console.log(o.message)}l()}}w.addEventListener("submit",$);g.addEventListener("click",x);
//# sourceMappingURL=index.js.map

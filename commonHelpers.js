import{a as v,i as c,S}from"./assets/vendor-b52d9f5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const M={form:document.querySelector(".search-form"),loadMoreVar:document.querySelector("#column1"),infiniteScroll:document.querySelector("#column2"),container:document.querySelector(".modal-content"),guard:document.querySelector(".js-guard"),loadMore:document.querySelector(".load-more")},{form:p,loadMoreVar:q,infiniteScroll:O,container:h,guard:$,loadMore:w}=M;q.addEventListener("click",k);function k(){h.classList.add("is-hidden"),p.classList.remove("is-hidden"),$.classList.add("is-hidden")}O.addEventListener("click",A);function A(){h.classList.add("is-hidden"),p.classList.remove("is-hidden"),w.remove()}const E="42159732-a54f57e537715c3d1f59422b1",H="https://pixabay.com/api/";async function m(n,t){const r={key:E,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40};try{const s=await v.get(H,{params:r});if(s.data.total)return s;c.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(s){console.error(s.message)}}const j={form:document.querySelector(".search-form"),container:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")},{form:g,container:d,loadMore:u,guard:y}=j,x=new S(".gallery a",{captionsData:"alt",captionDelay:350,animationSpeed:600});g.addEventListener("submit",P);u.addEventListener("click",R);let l=1,b="",a=0;async function P(n){n.preventDefault(),a=0,d.textContent="",u.classList.add("is-hidden");const{value:t}=n.target.elements.searchQuery;try{const r=await m(t,l),{hits:s}=r.data;t.trim()?(c.success({title:"Ok!",message:`Hooray! We found ${r.data.totalHits} images.`,position:"topRight"}),d.insertAdjacentHTML("beforeend",f(s)),x.refresh(),u.classList.remove("is-hidden"),a+=s.length,I.observe(y)):c.error({title:"Oops!",message:"Please enter a search query to find images.",position:"topRight"})}catch(r){console.dir(r.message)}g.reset()}function f(n){return n.map(({webformatURL:t,largeImageURL:r,tags:s,likes:e,views:o,comments:i,downloads:L})=>`
        <div class="photo-card">
        <a href="${r}"><img src="${t}" alt="${s}" loading="lazy " /></a>
  <div class="info">
      <p class="info-item">
          <b>Likes: </b>${e}
      </p>
          <p class="info-item">
      <b>Views </b>${o}
      </p>
      <p class="info-item">
          <b>Comments </b>${i}
      </p>
      <p class="info-item">
          <b>Downloads
         </b>${L}
      </p>
  </div>
</div>
  `).join("")}async function R(){l++;const n=await m(b,l),{hits:t,totalHits:r}=n.data;d.insertAdjacentHTML("beforeend",f(t)),console.log(n),a+=t.length,console.log(a),a>=r&&(u.classList.add("is-hidden"),c.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}const D={root:null,rootMargin:"300px",threshold:0},I=new IntersectionObserver(T,D);async function T(n,t){await Promise.all(n.map(async r=>{if(r.isIntersecting){console.log("yes"),l++;const s=await m(b,l),{hits:e,totalHits:o}=s.data;d.insertAdjacentHTML("beforeend",f(e)),a+=e.length,console.log(a),a>=o&&(t.unobserve(y),c.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}))}
//# sourceMappingURL=commonHelpers.js.map

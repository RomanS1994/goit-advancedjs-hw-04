import{a as v,i as l,S}from"./assets/vendor-b52d9f5e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M={form:document.querySelector(".search-form"),loadMoreVar:document.querySelector("#column1"),infiniteScroll:document.querySelector("#column2"),container:document.querySelector(".modal-content"),guard:document.querySelector(".js-guard"),loadMore:document.querySelector(".load-more")},{form:h,loadMoreVar:q,infiniteScroll:O,container:g,guard:$,loadMore:w}=M;q.addEventListener("click",k);function k(){g.classList.add("is-hidden"),h.classList.remove("is-hidden"),$.classList.add("is-hidden")}O.addEventListener("click",A);function A(){g.classList.add("is-hidden"),h.classList.remove("is-hidden"),w.remove()}const E="42159732-a54f57e537715c3d1f59422b1",H="https://pixabay.com/api/";async function f(r,t){const s={key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40};try{const n=await v.get(H,{params:s});if(n.data.total)return n;l.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(n){console.error(n.message)}}const j={form:document.querySelector(".search-form"),container:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")},{form:y,container:u,loadMore:m,guard:b}=j,x=new S(".gallery a",{captionsData:"alt",captionDelay:350,animationSpeed:600});y.addEventListener("submit",P);m.addEventListener("click",R);let d=1,c="",a=0;async function P(r){r.preventDefault(),a=0,u.textContent="",m.classList.add("is-hidden"),c=r.target.elements.searchQuery.value;try{const t=await f(c,d),{hits:s}=t.data;c.trim()?(l.success({title:"Ok!",message:`Hooray! We found ${t.data.totalHits} images.`,position:"topRight"}),u.insertAdjacentHTML("beforeend",p(s)),x.refresh(),m.classList.remove("is-hidden"),a+=s.length,I.observe(b)):l.error({title:"Oops!",message:"Please enter a search query to find images.",position:"topRight"})}catch(t){console.dir(t.message)}y.reset()}function p(r){return r.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:o,comments:i,downloads:L})=>`
        <div class="photo-card">
        <a href="${s}"><img src="${t}" alt="${n}" loading="lazy " /></a>
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
  `).join("")}async function R(){d++;const r=await f(c,d),{hits:t,totalHits:s}=r.data;u.insertAdjacentHTML("beforeend",p(t)),console.log(r),a+=t.length,console.log(a),a>=s&&(m.classList.add("is-hidden"),l.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}const D={root:null,rootMargin:"300px",threshold:0},I=new IntersectionObserver(T,D);async function T(r,t){await Promise.all(r.map(async s=>{if(s.isIntersecting){console.log("yes"),d++;const n=await f(c,d),{hits:e,totalHits:o}=n.data;u.insertAdjacentHTML("beforeend",p(e)),a+=e.length,console.log(a),a>=o&&(t.unobserve(b),l.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}))}
//# sourceMappingURL=commonHelpers.js.map

import{a as v,i as d,S}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const M={form:document.querySelector(".search-form"),loadMoreVar:document.querySelector("#column1"),infiniteScroll:document.querySelector("#column2"),container:document.querySelector(".modal-content"),guard:document.querySelector(".js-guard"),loadMore:document.querySelector(".load-more")},{form:h,loadMoreVar:q,infiniteScroll:O,container:g,guard:$,loadMore:w}=M;q.addEventListener("click",k);function k(){g.classList.add("is-hidden"),h.classList.remove("is-hidden"),$.classList.add("is-hidden")}O.addEventListener("click",A);function A(){g.classList.add("is-hidden"),h.classList.remove("is-hidden"),w.remove()}const E="42159732-a54f57e537715c3d1f59422b1",H="https://pixabay.com/api/";async function f(r,o){const s={key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};try{const n=await v.get(H,{params:s});if(n.data.total)return n;d.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(n){console.error(n.message)}}const j={form:document.querySelector(".search-form"),container:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")},{form:y,container:u,loadMore:m,guard:b}=j,x=new S(".gallery a",{captionsData:"alt",captionDelay:350,animationSpeed:600});y.addEventListener("submit",P);m.addEventListener("click",R);let i=1,l="",a=0;async function P(r){r.preventDefault(),a=0,i=1,u.textContent="",m.classList.add("is-hidden"),l=r.target.elements.searchQuery.value;try{const o=await f(l,i),{hits:s}=o.data;l.trim()?(d.success({title:"Ok!",message:`Hooray! We found ${o.data.totalHits} images.`,position:"topRight"}),u.insertAdjacentHTML("beforeend",p(s)),x.refresh(),m.classList.remove("is-hidden"),a+=s.length,I.observe(b)):d.error({title:"Oops!",message:"Please enter a search query to find images.",position:"topRight"})}catch(o){console.dir(o.message)}y.reset()}function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:t,comments:c,downloads:L})=>`
        <div class="photo-card">
        <a href="${s}"><img src="${o}" alt="${n}" loading="lazy " /></a>
  <div class="info">
      <p class="info-item">
          <b>Likes: </b>${e}
      </p>
          <p class="info-item">
      <b>Views </b>${t}
      </p>
      <p class="info-item">
          <b>Comments </b>${c}
      </p>
      <p class="info-item">
          <b>Downloads
         </b>${L}
      </p>
  </div>
</div>
  `).join("")}async function R(){i++;const r=await f(l,i),{hits:o,totalHits:s}=r.data;u.insertAdjacentHTML("beforeend",p(o)),console.log(r),a+=o.length,console.log(a),a>=s&&(m.classList.add("is-hidden"),d.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}const D={root:null,rootMargin:"500px",threshold:0},I=new IntersectionObserver(T,D);async function T(r,o){await Promise.all(r.map(async s=>{if(s.isIntersecting){console.log("yes"),i++;const n=await f(l,i),{hits:e,totalHits:t}=n.data;u.insertAdjacentHTML("beforeend",p(e)),a+=e.length,console.log(a),a>=t&&(o.unobserve(b),d.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}))}console.log(a);
//# sourceMappingURL=commonHelpers.js.map

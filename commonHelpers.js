import{a as M,i,S as q}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const O={form:document.querySelector(".search-form"),loadMoreVar:document.querySelector("#column1"),infiniteScroll:document.querySelector("#column2"),container:document.querySelector(".modal-content"),guard:document.querySelector(".js-guard"),loadMore:document.querySelector(".load-more")},{form:g,loadMoreVar:$,infiniteScroll:w,container:y,guard:k,loadMore:A}=O;$.addEventListener("click",E);function E(){y.classList.add("is-hidden"),g.classList.remove("is-hidden"),k.classList.add("is-hidden")}w.addEventListener("click",H);function H(){y.classList.add("is-hidden"),g.classList.remove("is-hidden"),A.remove()}const R="42159732-a54f57e537715c3d1f59422b1",j="https://pixabay.com/api/",b=40;async function p(s,o){const r={key:R,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:b};try{const n=await M.get(j,{params:r});if(n.data.total)return n;i.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(n){console.error(n.message)}}const x={form:document.querySelector(".search-form"),container:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more"),guard:document.querySelector(".js-guard")},{form:L,container:u,loadMore:m,guard:v}=x,f=new q(".gallery a",{captionsData:"alt",captionDelay:350,animationSpeed:600});L.addEventListener("submit",P);m.addEventListener("click",D);let c=1,d="",a=0;async function P(s){s.preventDefault(),a=0,c=1,u.textContent="",m.classList.add("is-hidden"),d=s.target.elements.searchQuery.value.trim();try{if(d){const o=await p(d,c),{hits:r}=o.data;console.log(r.length),i.success({title:"Ok!",message:`Hooray! We found ${o.data.totalHits} images.`,position:"topRight"}),u.insertAdjacentHTML("beforeend",h(r)),f.refresh(),a+=r.length,r.length>=b?(m.classList.remove("is-hidden"),_.observe(v)):(f.refresh(),i.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}else i.error({title:"Oops!",message:"Please enter a search query to find images.",position:"topRight"})}catch(o){console.dir(o.message)}L.reset()}function h(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:l,downloads:S})=>`
        <div class="photo-card">
        <a href="${r}"><img src="${o}" alt="${n}" loading="lazy " /></a>
  <div class="info">
      <p class="info-item">
          <b>Likes: </b>${e}
      </p>
          <p class="info-item">
      <b>Views </b>${t}
      </p>
      <p class="info-item">
          <b>Comments </b>${l}
      </p>
      <p class="info-item">
          <b>Downloads
         </b>${S}
      </p>
  </div>
</div>
  `).join("")}async function D(){c++;const s=await p(d,c),{hits:o,totalHits:r}=s.data;u.insertAdjacentHTML("beforeend",h(o)),console.log(s),a+=o.length,f.refresh(),console.log(a),a>=r&&(m.classList.add("is-hidden"),i.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}const I={root:null,rootMargin:"500px",threshold:0},_=new IntersectionObserver(T,I);async function T(s,o){await Promise.all(s.map(async r=>{if(r.isIntersecting){console.log("yes"),c++;const n=await p(d,c),{hits:e,totalHits:t}=n.data;u.insertAdjacentHTML("beforeend",h(e)),a+=e.length,f.refresh(),console.log(a),a>=t&&(o.unobserve(v),i.error({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}))}
//# sourceMappingURL=commonHelpers.js.map
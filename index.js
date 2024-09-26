import{a as l,S as d,i as c}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m="46069437-f48122ef32c6bd1c27031b929";async function f(a){const t=`${u}?key=${m}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await l.get(t)).data}catch{throw new Error("Sorry, there are no images matching your search query. Please try again!")}}const y=new d(".gallery a",{captionsData:"alt",captionDelay:200});function p({webformatURL:a,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:i}){return`
    <div class="card">
      <div class="card-image">
        <a href="${t}" class="gallery-item-link">
          <img src="${a}" alt="${o}" />
        </a>
      </div>
      <div class="card-body">
        <p class="card-text">Likes ${n}</p>
        <p class="card-text">Views ${e}</p>
        <p class="card-text">Comments ${r}</p>
        <p class="card-text">Downloads ${i}</p>
      </div>
    </div>`}function g(a,t){const o=a.map(p).join("");t.innerHTML=o,y.refresh()}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",h);async function h(a){a.preventDefault();const t=a.currentTarget.elements.query.value.trim();if(t===""){c.show({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",position:"bottomCenter"});return}s.gallery.innerHTML="",L();try{const o=await f(t);o.hits.length===0?c.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",position:"bottomCenter"}):g(o.hits,s.gallery)}catch{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#ef4040",position:"bottomCenter"})}finally{b(),s.form.reset()}}function L(){s.loader.classList.remove("hidden")}function b(){s.loader.classList.add("hidden")}
//# sourceMappingURL=index.js.map

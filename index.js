import{a as m,S as g,i as y}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function h(s){let i=`https://pixabay.com/api/?key=46450573-9b5e41256c0ad0f1dd9121c30&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return(await m.get(`${i}`)).data}const d=document.querySelector(".wrapp"),l=document.querySelector(".list");function c(s,r){if(s.total===0){l.innerHTML="";return}else{f();const i=s.hits.map(t=>`<li class="list-item"><a href="${t.largeImageURL}" data-source="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" /></a>
          <div class="wrapp-items">
          <div class="info-item"><p class="bold">Likes</p>
          <p>${t.likes}</p>
          </div>
          <div class="info-item"><p class="bold">Views</p>
          <p>${t.views}</p>
          </div>
          <div class="info-item"><p class="bold">Comments</p>
          <p>${t.comments}</p>
          </div>
          <div class="info-item"><p class="bold">Downloads</p>
          <p>${t.downloads}</p>
          </div>

          </div></li>`).join("");return l.innerHTML=i,r.refresh(),console.log(s.total),!0}}function v(){d.style.display="block"}function f(){d.style.display="none"}let u=new g(".list a",{captions:!0,captionsData:"alt",captionDelay:250,loop:!0});const L=document.querySelector(".form"),p=document.querySelector(".user-input");let n;L.addEventListener("submit",s=>{s.preventDefault(),p.value.trim()?n=p.value.trim():n=void 0,n&&(v(),h(n).then(r=>{if(c(r,u))return console.log(r),c(r,u);throw new Error("Test error!")}).catch(r=>{y.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:18,messageLineHeight:30,position:"topRight"}),f()}))});
//# sourceMappingURL=index.js.map

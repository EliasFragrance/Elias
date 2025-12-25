// active nav highlight + simple reveal animation
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    if(a.getAttribute("href") === path) a.classList.add("active");
  });

  const els = document.querySelectorAll(".fade-up");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.12 });

  els.forEach(el=>io.observe(el));
})();


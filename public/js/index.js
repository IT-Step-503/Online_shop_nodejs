document.querySelector(".modal button").addEventListener("click", (e)=>{
    e.target.parentElement.classList.toggle("hidden");
});

document.querySelector(".order").addEventListener("click", ()=>{
    document.querySelector(".modal").classList.toggle("hidden");
});
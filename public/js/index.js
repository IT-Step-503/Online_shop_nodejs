document.querySelector(".m_click").addEventListener("click", (e)=>{
    document.querySelector(".nav_menu").classList.add(".m_hidden", false);
    console.log(e);
});


document.querySelector(".modal button").addEventListener("click", (e)=>{
    e.target.parentElement.classList.toggle("hidden");
});

document.querySelector(".order").addEventListener("click", ()=>{
    document.querySelector(".modal").classList.toggle("hidden");
});


const toogleBtn = document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

toogleBtn.addEventListener("click", function(){
    const c = links.classList;
    // if(c.contains("show-links")){
    //     links.classList.remove("show-links");
    // }
    // else{
    //    c.add("show-links");
    // }

    c.toggle("show-links");
})
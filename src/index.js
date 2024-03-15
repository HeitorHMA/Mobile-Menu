 function openMenu(){
    const openButton = document.querySelector("#mobileOpen");
    openButton.addEventListener("click", function(){
        const mobileMenu = document.querySelector("#mobilemen");
        mobileMenu.classList.remove("hiding");
        document.getElementById("mobileOpen").style.display = "none"
    })
 }
 openMenu()
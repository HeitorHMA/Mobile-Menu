 function openMenu(){
    let isOpen = false;
    const openButton = document.querySelector("#mobileOpen");
    openButton.addEventListener("click", function(){
    if(isOpen == false){
        isOpen=true;
        for(let i=0;i<6;i++){
        const mobileMenu = document.querySelector("#mobilemenu");
        const menuButton1 = document.createElement("div");
        menuButton1.classList.add("element-div");
        menuButton1.innerHTML = '<button class="label-btn">Test Link</button> <button class ="icon-btn">T1</button>';
        mobileMenu.appendChild(menuButton1);
    openButton.innerHTML= "";
    openButton.innerHTML= "-";
        }}
    else {
            isOpen = false;
            const gridDiv = document.querySelector("#mobilemenu")
            const elements = document.querySelectorAll(".element-div")
            elements.forEach((function(element){
                gridDiv.removeChild(element)
    openButton.innerHTML= "";
    openButton.innerHTML = "+";
            }))}})}
 
 openMenu()
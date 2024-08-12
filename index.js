let menu = document.querySelector(".icon")
let links = document.querySelector(".link-container")
// let icon = document.querySelector(".icon")
// let crossIcon = document.querySelector("cross-icons")
let flag = false


menu.addEventListener("click", () => {
    // console.log("Hello")
    flag = !flag
    console.log(flag)
    if(flag){
        links.style.display= "block"
        // setAtribute.menu= "image2.jpeg"
    }else{
        links.style.display = "none"
        // menu.src = "icon.html"
    }
})

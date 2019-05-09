let mybutton = document.getElementById("toclick")
function event() {
    let h1 = document.querySelector("#hi")
    h1.innerHTML = "<p>blob</p>"
}
mybutton.addEventListener("click", event)

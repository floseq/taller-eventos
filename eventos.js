function saludar(event) {
    alert("Hola!");
    event.stopPropagation();
}

const div = document.querySelector("div");
div.addEventListener("click",() => {
    alert("Hola! Soy el div")
});
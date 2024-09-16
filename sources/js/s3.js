s3 = Array.from(document.getElementById("section-3").children).splice(1);

function hover(element){
    s3.forEach(element => {
        element.classList.remove("active")
    });
    element.classList.add("active");
}
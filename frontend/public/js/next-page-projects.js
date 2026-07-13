const previousProject = document.getElementById("previousProject");
const nextProject = document.getElementById("nextProject");

const containerProject = document.querySelector(".box-projects");

nextProject.addEventListener("click", function(){
    containerProject.scrollBy({
        left: 480,
        behavior: 'smooth'
    })
});

previousProject.addEventListener("click", function(){
    containerProject.scrollBy({
        left: -480,
        behavior: 'smooth'
    })
});

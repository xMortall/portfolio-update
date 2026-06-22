function changeTagColor(){
    const completedContent = document.getElementById("completed");

    const completedContentClean = completedContent
    .textContent
    .trim()
    .toLowerCase();

    if (completedContentClean == "completed") {
        completedContent.style.color = "green";
        completedContent.style.borderColor = "green";
    } else {
        completedContent.style.color = "red";
        completedContent.style.borderColor = "red";
    }
}

changeTagColor();
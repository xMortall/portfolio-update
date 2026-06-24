/*

* @file: completed-or-not.js
* @description: Script for changing the color of the completed or not tag.
* @author: Emanuel Borges

* @date: 2026-06-24

* @version: 1.0.0
*/

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
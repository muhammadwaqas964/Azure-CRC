document.addEventListener("DOMContentLoaded", function() {
    var counterContainer = document.querySelector("#counter");
    var visitCount = localStorage.getItem("page_view");

    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = Number(visitCount) + 1;
    }
    localStorage.setItem("page_view", visitCount);
    counterContainer.innerHTML = visitCount;
});


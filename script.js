const goals = document.querySelectorAll(".goal");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        console.log("A goal was clicked!");
    });
});

const goals = document.querySelectorAll(".goal");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        const goalName = goal.querySelector("span").textContent;
        console.log(goalName + " was clicked!");
    });
});

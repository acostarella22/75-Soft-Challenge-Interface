const goals = document.querySelectorAll(".goal");
const goalStatus = document.querySelector("#goal-status");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        const goalName = goal.querySelector("span").textContent;
        
        console.log(goalName + " was clicked!");
        
        goalStatus.textContent = goalName + " completed!";
    });
});

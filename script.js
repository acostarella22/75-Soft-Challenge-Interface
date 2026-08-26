const goals = document.querySelectorAll(".goal");
const goalStatus = document.querySelector("#goal-status");

goals.forEach(function(goal) {
    goal.addEventListener("click", function() {
        const goalName = goal.querySelector("span").textContent;
        const checkbox = goal.querySelector("input");
        
        console.log(goalName + " was clicked!");
        console.log(checkbox.checked);
        
        if (checkbox.checked) {
    goalStatus.textContent = goalName + " completed!";
} else {
    goalStatus.textContent = goalName + " not completed.";
}
    });
});

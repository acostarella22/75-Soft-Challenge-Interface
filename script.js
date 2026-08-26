const goals = document.querySelectorAll(".goal");
const goalStatus = document.querySelector("#goal-status");
const workoutName = document.querySelector("#workout-name");
const workoutType = document.querySelector("#workout-type");

goals.forEach(function(goal) {

const goalName = goal.querySelector("span").textContent;
const checkbox = goal.querySelector("input");
const savedState = localStorage.getItem(goalName);
    
    if (savedState === "true") {
    checkbox.checked = true;
}
    
    goal.addEventListener("click", function() {
        const goalName = goal.querySelector("span").textContent;
        const checkbox = goal.querySelector("input");
        
        console.log(goalName + " was clicked!");
        console.log(checkbox.checked);
        
        if (checkbox.checked) {
    goalStatus.textContent = goalName + " completed!";
    localStorage.setItem(goalName, "true");
} else {
    goalStatus.textContent = goalName + " not completed.";
    localStorage.setItem(goalName, "false");
}
    });
});

const challengeData = {
    1: {
        date: "August 24, 2026",
        workout: "Long Run #1",
        workoutType: "Run",
        workoutDetails: "3 × 1 mile with 0.25 mile rest between intervals, plus 0.25 mile warm-up and cooldown."
    },

    2: {
        date: "August 25, 2026",
        workout: "Cycle 1 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 1 full-body circuit. Complete 3 rotations with 1 minute rest between exercises."
    },

    3: {
        date: "August 26, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    }
};

const currentDay = 1;
const today = challengeData[currentDay];

console.log(today);

workoutName.textContent = today.workout;
workoutType.textContent = today.workoutType;

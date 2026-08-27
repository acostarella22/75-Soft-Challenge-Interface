const goals = document.querySelectorAll(".goal");
const goalStatus = document.querySelector("#goal-status");
const workoutName = document.querySelector("#workout-name");
const workoutType = document.querySelector("#workout-type");
const workoutDetails = document.querySelector("#workout-details");
const nextDayButton = document.querySelector("#next-day");
const previousDayButton = document.querySelector("#previous-day");
const dayNumber = document.querySelector("#day-number");
const currentDate = document.querySelector("#current-date");

let currentDay = 1;

goals.forEach(function(goal) {

const goalName = goal.querySelector("span").textContent;
const checkbox = goal.querySelector("input");
const savedState = localStorage.getItem("day-" + currentDay + "-" + goalName);
    
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

const today = challengeData[currentDay];

console.log(today);

function updateInterface() {
    const today = challengeData[currentDay];

    dayNumber.textContent = "Day " + currentDay + " of 75";
    currentDate.textContent = today.date;
    
    workoutName.textContent = today.workout;
    workoutType.textContent = today.workoutType;
    workoutDetails.textContent = today.workoutDetails;
}

updateInterface();

nextDayButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentDay < 75) {
        currentDay = currentDay + 1;
        updateInterface();
    }

    console.log("Current day:", currentDay);
});

previousDayButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentDay > 1) {
        currentDay = currentDay - 1;
        updateInterface();
    }

    console.log("Current day:", currentDay);
});

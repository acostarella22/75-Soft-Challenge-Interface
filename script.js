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

    goal.addEventListener("click", function() {
    
    const goalName = goal.querySelector("span").textContent;
    const checkbox = goal.querySelector("input");
        
    if (checkbox.checked) {
        goalStatus.textContent = goalName + " completed!";
        localStorage.setItem("day-" + currentDay + "-" + goalName, "true");
    } else {
    goalStatus.textContent = goalName + " not completed.";
   localStorage.setItem("day-" + currentDay + "-" + goalName, "false");
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
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    4: {
        date: "August 27, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    5: {
        date: "August 28, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    6: {
        date: "August 29, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    7: {
        date: "August 30, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    8: {
        date: "August 31, 2026",
        workout: "Long Run #2",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    9: {
        date: "September 1, 2026",
        workout: "Cycle 2 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 2 full-body circuit."
    },

    10: {
        date: "September 2, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    11: {
        date: "September 3, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    12: {
        date: "September 4, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    13: {
        date: "September 5, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    14: {
        date: "September 6, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    15: {
        date: "September 7, 2026",
        workout: "Long Run #3",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    16: {
        date: "September 8, 2026",
        workout: "Cycle 3 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 3 full-body circuit."
    },

    17: {
        date: "September 9, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    18: {
        date: "September 10, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    19: {
        date: "September 11, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    20: {
        date: "September 12, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    21: {
        date: "September 13, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    22: {
        date: "September 14, 2026",
        workout: "Long Run #4",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    23: {
        date: "September 15, 2026",
        workout: "Cycle 4 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 4 full-body circuit."
    },

    24: {
        date: "September 16, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    25: {
        date: "September 17, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    26: {
        date: "September 18, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    27: {
        date: "September 19, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    28: {
        date: "September 20, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    29: {
        date: "September 21, 2026",
        workout: "Long Run #5",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    30: {
        date: "September 22, 2026",
        workout: "Cycle 5 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 5 full-body circuit."
    },

    31: {
        date: "September 23, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    32: {
        date: "September 24, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    33: {
        date: "September 25, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    34: {
        date: "September 26, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    35: {
        date: "September 27, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    36: {
        date: "September 28, 2026",
        workout: "Long Run #6",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    37: {
        date: "September 29, 2026",
        workout: "Cycle 6 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 6 full-body circuit."
    },

    38: {
        date: "September 30, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    39: {
        date: "October 1, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    40: {
        date: "October 2, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    41: {
        date: "October 3, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    42: {
        date: "October 4, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    43: {
        date: "October 5, 2026",
        workout: "Long Run #7",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    44: {
        date: "October 6, 2026",
        workout: "Cycle 7 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 7 full-body circuit."
    },

    45: {
        date: "October 7, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    46: {
        date: "October 8, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    47: {
        date: "October 9, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    48: {
        date: "October 10, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    49: {
        date: "October 11, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    50: {
        date: "October 12, 2026",
        workout: "Long Run #8",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    51: {
        date: "October 13, 2026",
        workout: "Cycle 8 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 8 full-body circuit."
    },

    52: {
        date: "October 14, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    53: {
        date: "October 15, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    54: {
        date: "October 16, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    55: {
        date: "October 17, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    56: {
        date: "October 18, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    57: {
        date: "October 19, 2026",
        workout: "Long Run #9",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    58: {
        date: "October 20, 2026",
        workout: "Cycle 9 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 9 full-body circuit."
    },

    59: {
        date: "October 21, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    60: {
        date: "October 22, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    61: {
        date: "October 23, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    62: {
        date: "October 24, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    63: {
        date: "October 25, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    64: {
        date: "October 26, 2026",
        workout: "Long Run #10",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    65: {
        date: "October 27, 2026",
        workout: "Cycle 10 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 10 full-body circuit."
    },

    66: {
        date: "October 28, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    67: {
        date: "October 29, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    68: {
        date: "October 30, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    },

    69: {
        date: "October 31, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    70: {
        date: "November 1, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    71: {
        date: "November 2, 2026",
        workout: "Long Run #11",
        workoutType: "Run",
        workoutDetails: "Long run."
    },

    72: {
        date: "November 3, 2026",
        workout: "Cycle 11 Lift",
        workoutType: "Lift",
        workoutDetails: "Cycle 11 full-body circuit."
    },

    73: {
        date: "November 4, 2026",
        workout: "Optional Rest",
        workoutType: "Rest",
        workoutDetails: "Optional recovery day. No scheduled workout."
    },

    74: {
        date: "November 5, 2026",
        workout: "Yoga",
        workoutType: "Yoga",
        workoutDetails: "Yoga class."
    },

    75: {
        date: "November 6, 2026",
        workout: "Interval Run",
        workoutType: "Run",
        workoutDetails: "Interval running workout."
    }
};

function updateInterface() {
    const today = challengeData[currentDay];

    dayNumber.textContent = "Day " + currentDay + " of 75";
    currentDate.textContent = today.date;
    
    workoutName.textContent = today.workout;
    workoutType.textContent = today.workoutType;
    workoutDetails.textContent = today.workoutDetails;
    goals.forEach(function(goal) {
    const goalName = goal.querySelector("span").textContent;
    const checkbox = goal.querySelector("input");
    const savedState = localStorage.getItem("day-" + currentDay + "-" + goalName);

    checkbox.checked = savedState === "true";
});
}

updateInterface();

nextDayButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentDay < 75) {
        currentDay = currentDay + 1;
        updateInterface();
    }

});

previousDayButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentDay > 1) {
        currentDay = currentDay - 1;
        updateInterface();
    }

    console.log("Current day:", currentDay);
});

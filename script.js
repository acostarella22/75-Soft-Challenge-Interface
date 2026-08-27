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

const challengeData = {};

const startDate = new Date("2026-08-24T00:00:00");

const longRunWorkouts = [
    {
        name: "Long Run #1",
        details: "3 × 1 mile with 0.25 mile rest between intervals, plus 0.25 mile warm-up and cooldown."
    },
    {
        name: "Long Run #2",
        details: "3 × 1 mile with 0.25 mile rest between intervals, plus 0.25 mile warm-up and cooldown."
    },
    {
        name: "Long Run #3",
        details: "2 × 1.25 mile + 1 × 0.5 mile with 0.25 mile rest between intervals, plus 0.25 mile warm-up and cooldown."
    },
    {
        name: "Long Run #4",
        details: "2 × 1.25 mile + 1 × 0.5 mile with 0.25 mile rest between intervals, plus 0.25 mile warm-up and cooldown."
    },
    {
        name: "Long Run #5",
        details: "2 × 1.5 mile with 0.25 mile rest between intervals, plus warm-up and cooldown."
    }
];

const intervalWorkouts = [
    {
        name: "Interval Run #1",
        details: "4 × 0.5 mile with 0.25 mile rest between intervals, plus warm-up and cooldown."
    },
    {
        name: "Interval Run #2",
        details: "4 × 0.5 mile with 0.25 mile rest between intervals, plus warm-up and cooldown. Progress speed as appropriate."
    },
    {
        name: "Interval Run #3",
        details: "4 × 0.75 mile with 0.25 mile rest between intervals, plus warm-up and cooldown."
    },
    {
        name: "Interval Run #4",
        details: "4 × 0.75 mile with 0.25 mile rest between intervals, plus warm-up and cooldown. Progress speed as appropriate."
    }
];

const liftCycles = [
    {
        name: "Cycle 1 Lift",
        details: "PT Warm Up: Windshield Wipers (both ways), Cat Cows, Cobra, Child's Pose, Thread the Needle, Pelvic Tilts, Bird Dogs, Dead Bugs, Sciatic Nerve Glides. Main workout: DB Box Squats 3×15×8–15; DB Rows 3×15×12–20; Triangle Push Ups 3×10; Monster Walks 3×15 steps each way with green band; SL Bridge Holds 3×15 seconds each leg; Plank Slides 3×10 each side. Finish with static stretch cooldown."
    },
    {
        name: "Cycle 2 Lift",
        details: "PT Warm Up: Windshield Wipers (both ways), Cat Cows, Cobra, Child's Pose, Thread the Needle, Pelvic Tilts, Bird Dogs, Dead Bugs, Sciatic Nerve Glides. Main workout: DB Box Squats 3×10×15–20; Shoulder Presses 3×10–15×12–15; Gorilla Rows 3×15 each side ×20; Walking Lunges 3×12 each side ×10; Plank with Side Reach 3×10 each side; Hip Thrust on bench 3×15×20–30. Finish with static stretch cooldown."
    },
    {
        name: "Cycle 3 Lift",
        details: "PT Warm Up: Windshield Wipers (both ways), Cat Cows, Cobra, Child's Pose, Thread the Needle, Pelvic Tilts, Bird Dogs, Dead Bugs, Sciatic Nerve Glides. Main workout: DB Box Squats 3×15×15–25; Band Rows 3×15 with red band; Push Ups 3×10–15; SL Hip Thrust on bench 3×10 each leg; Overhead Lunge 3×12 each leg; Weight Transfers 3×10 each way. Finish with static stretch cooldown."
    }
];

for (let day = 1; day <= 75; day++) {

    const date = new Date(startDate);
    date.setDate(startDate.getDate() + day - 1);

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    const cycleDay = ((day - 1) % 7) + 1;

    let workout;
    let workoutType;
    let workoutDetails;

    if (cycleDay === 1) {

        const longRunNumber = Math.floor((day - 1) / 7);
        const workoutIndex = Math.min(longRunNumber, longRunWorkouts.length - 1);

        workout = longRunWorkouts[workoutIndex].name;
        workoutType = "Run";
        workoutDetails = longRunWorkouts[workoutIndex].details;

    } else if (cycleDay === 2) {

        const liftNumber = Math.floor((day - 1) / 7);
        const cycleIndex = Math.floor(liftNumber / 3) % 3;

        workout = liftCycles[cycleIndex].name;
        workoutType = "Lift";
        workoutDetails = liftCycles[cycleIndex].details;

    } else if (cycleDay === 3) {

        workout = "Optional Rest";
        workoutType = "Rest";
        workoutDetails = "Optional recovery day. No scheduled workout.";

    } else if (cycleDay === 4) {

        workout = "Yoga";
        workoutType = "Yoga";
        workoutDetails = "Yoga at JCU or a mobility session.";

    } else if (cycleDay === 5) {

        const intervalNumber = Math.floor((day - 1) / 7);
        const workoutIndex = Math.min(intervalNumber, intervalWorkouts.length - 1);

        workout = intervalWorkouts[workoutIndex].name;
        workoutType = "Run";
        workoutDetails = intervalWorkouts[workoutIndex].details;

    } else {

        workout = "Optional Rest";
        workoutType = "Rest";
        workoutDetails = "Optional recovery day. No scheduled workout.";
    }

    challengeData[day] = {
        date: formattedDate,
        workout: workout,
        workoutType: workoutType,
        workoutDetails: workoutDetails
    };
}

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

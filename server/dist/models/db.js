"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSplit = exports.getSplits = void 0;
const workouts = {
    "splits": {
        "ppl": {
            "push": {
                "chestPress": "Inclined Dumbbell",
                "chestFly": "Inclined Dumbbell",
                "lateralRaise": "Dumbbell",
                "shoulderPress": "Shoulder Press Machine",
                "tricepIsolation": "Tricep Pulldown"
            },
            "pull": {
                "verticalPull": "Wide-grip Lateral Bar",
                "horizontalPull": "Close-grip cable",
                "rearDeltOne": "Rope Face Pull",
                "rearDeltTwo": "Rear-delt Dumbbell Fly",
                "bicepIsolation": "Inclined Dumbbell Curl"
            },
            "legs": {
                "kneeFlexion": "Leg Curls",
                "quadIsolation": "Leg Extensions",
                "hipHinge": "Barbell RDL",
                "hipFlexorOne": "Hip Abductors",
                "hipFlexorTwo": "Hip Adductor",
                "calfIsolation": "Calf Extension Macine",
                "gluteIsolation": "Hip Thrust Machine"
            }
        },
        "bro": {
            "chest": {
                "inclineBenchPress": "Barbell Bench Press",
                "flatFly": "Dumbbell Fly",
                "cableCrossover": "Low-to-High Cable Crossover"
            },
            "back": {
                "latPulldown": "Wide Grip Lat Pulldown",
                "seatedRow": "Cable Row",
                "deadlift": "Barbell Deadlift"
            },
            "shoulders": {
                "overheadPress": "Barbell Overhead Press",
                "sideLateralRaise": "Dumbbell Lateral Raise",
                "reversePecDeck": "Machine Rear Delt Fly"
            },
            "arms": {
                "bicepCurl": "Barbell Bicep Curl",
                "hammerCurl": "Dumbbell Hammer Curl",
                "skullCrusher": "EZ Bar Skull Crusher"
            },
            "legs": {
                "squat": "Barbell Squat",
                "legPress": "Leg Press Machine",
                "standingCalfRaise": "Machine Calf Raise"
            }
        },
        "ul": {
            "upper": {
                "benchPress": "Flat Dumbbell Press",
                "bentOverRow": "Barbell Row",
                "inclinePress": "Incline Dumbbell Press",
                "latPulldown": "Underhand Pulldown",
                "lateralRaise": "Dumbbell Lateral Raise"
            },
            "lower": {
                "backSquat": "Barbell Squat",
                "romanianDeadlift": "Dumbbell RDL",
                "legCurl": "Seated Leg Curl",
                "calfRaise": "Seated Calf Raise"
            }
        }
    }
};
const getSplits = () => {
    return Object.keys(workouts.splits);
};
exports.getSplits = getSplits;
const getSplit = (split) => {
    return workouts.splits[split];
};
exports.getSplit = getSplit;

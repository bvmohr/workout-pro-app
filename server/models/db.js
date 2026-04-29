let workouts = {
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
            "TBD":{}
        },
        "ul": {
            "TBD":{}
        }
    }
};

const getSplits = () => {
    const splits = Object.keys(workouts.splits);
    return splits;
};

const getSplit = (split) => {
    return workouts.splits[split];
};

module.exports = {
    getSplits,
    getSplit
}
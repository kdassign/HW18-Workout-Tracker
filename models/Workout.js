const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date()},
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a name for type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout name"
      },
      duration: {
        type: Number,
        required: "Enter a name for duration"
      },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ]
});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
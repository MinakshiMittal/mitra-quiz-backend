const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  quizName: {
    type: String,
    required: true
  },
  quizCoverImageURL: {
    type: String,
    required: true
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    options: [{
      option: {
        type: String,
        required: true
      },
      points: {
        type: Number,
        required: true
      }
    }]
  }]
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = { Quiz };
const express = require("express");
const router = express.Router();
const { Quiz } = require("../models/quiz.model");

router.route("/")
.get(async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    console.log(quizzes);
    quizzes.map((quiz) => {
      console.log("hey", quiz)
    })
    res.json({success: true, quizzes:[...quizzes]});
  } catch (error) {
    res.status(500).json({success: false, message: "Unable to get quizzes", errorMessage: error.message});
  }
})
.post(async (req, res) => {
  try {
    const quiz = req.body;
    const NewQuiz = Quiz(quiz);
    await NewQuiz.save();
    res.json({success: true, quiz});
  } catch (error) {
      res.status(500).json({
        success: true,
        message: "Unable to save new quiz",
        errorMessage: error.message
      });
  }
});

module.exports = router;
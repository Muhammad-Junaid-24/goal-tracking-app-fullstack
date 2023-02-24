const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
} = require("../constants/constants");
const {
  findByIdAndDelete,
  findByIdAndUpdate,
} = require("../models/goal-model");
const Goal = require("../models/goal-model");

const getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(API_STATUS_CODES.SUCCESS).json(goals);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const setGoal = async (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    return res.status(API_STATUS_CODES.ERROR_CODE).json("Goal cannot be blank");
  }
  console.log(goal);

  try {
    const newGoal = Goal.create({ goal: goal });
    res.status(API_STATUS_CODES.SUCCESS).json(newGoal);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const deleteGoal = async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(id);

  if (!goal) {
    return res.status(API_STATUS_CODES.ERROR_CODE).json("Goal not found");
  }
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);
    res.status(API_STATUS_CODES.SUCCESS).json(deletedGoal);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const updateGoal = async (req, res) => {
  const { goal } = req.body;
  const id = req.params.id;

  const goalToUpdate = await Goal.findById(id);
  //   console.log(goalToUpdate);
  if (!goalToUpdate) {
    return res.status(API_STATUS_CODES.ERROR_CODE).json("Goal not found");
  }

  try {
    console.log(goal);
    const updatedGoal = await Goal.findByIdAndUpdate(id, goal);
    console.log(updatedGoal);
    res.status(API_STATUS_CODES.SUCCESS).json(updatedGoal);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};

module.exports = { getAllGoals, setGoal, deleteGoal, updateGoal };

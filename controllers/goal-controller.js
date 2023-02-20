const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
} = require("../constants/constants");

const getAllGoals = async (req, res) => {
  try {
    res.status(API_STATUS_CODES.SUCCESS).json(RESPONSE_MESSAGES.SUCCESS);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const setGoal = async (req, res) => {
  const { goal } = req.body;
  if (!goal) {
    res.status(API_STATUS_CODES.ERROR_CODE).json("Goal cannot be blank");
    return;
  }
  console.log(goal);

  try {
    res.status(API_STATUS_CODES.SUCCESS).json(RESPONSE_MESSAGES.GOAL_SET);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const deleteGoal = async (req, res) => {
  try {
    res
      .status(API_STATUS_CODES.SUCCESS)
      .json(`${RESPONSE_MESSAGES.GOAL_DELETED} with id ${req.params.id}`);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};
const updateGoal = async (req, res) => {
  try {
    res
      .status(API_STATUS_CODES.SUCCESS)
      .json(`${RESPONSE_MESSAGES.GOAL_UPDATED} with id ${req.params.id}`);
  } catch (error) {
    res.status(API_STATUS_CODES.INTERNAL_SERVER_ERROR).json(error.message);
  }
};

module.exports = { getAllGoals, setGoal, deleteGoal, updateGoal };

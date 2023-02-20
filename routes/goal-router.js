const express = require('express');
const goalRouter = express.Router();
const {getAllGoals, setGoal, deleteGoal, updateGoal} = require('../controllers/goal-controller')

goalRouter.get("/", getAllGoals)
goalRouter.post("/", setGoal)
goalRouter.put("/:id", updateGoal)
goalRouter.delete("/:id", deleteGoal)

module.exports = {goalRouter}
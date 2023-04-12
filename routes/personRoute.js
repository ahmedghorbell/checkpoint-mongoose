// Require express 
const express = require("express")
const { test, addPerson, getPerson, getPersonByID, deletePeron, updatePerson, getPersonByFood, getPersonsByName, getBurritoLovers } = require("../controllers/person")

// Require personSchema
const Person = require("../models/person")

// Require router from express 
const router = express.Router()

// Creating routes 
// Test route 
router.get("/test", test)

// AddPerson route
router.post("/add_person", addPerson)

// Get person by name
router.get("/get_by_name/:name", getPersonsByName)

// GetPerson route
router.get("/get_person", getPerson)

// Get person by favorite food
router.get("/get_by_food/:food", getPersonByFood);

// GetById 
router.get("/get_one/:_id", getPersonByID)

// DeleteById 
router.delete("/delete_person/:_id", deletePeron)

// UpdatePerson
router.put("/update/:_id", updatePerson)

// GetBurritoLovers
router.get("/burrito_lovers", getBurritoLovers);

// Export routes 
module.exports = router ;
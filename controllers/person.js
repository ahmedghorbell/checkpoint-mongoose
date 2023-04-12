// Require schema person
const Person = require("../models/person");
const { trace } = require("../routes/personRoute");

// Test
exports.test = async (req, res) => {
  try {
    res.send("This is a test function !!");
  } catch (error) {
    console.log(error);
  }
};

// Add person
exports.addPerson = async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;
    const newPerson = new Person({ name, age, favoriteFoods });
    await newPerson.save();
    res.status(200).send({ msg: "Person added successfully", newPerson });
  } catch (error) {
    res.status(400).send({ msg: "this is an error", error });
  }
};

//Get person by name
exports.getPersonsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const persons = await Person.find({ name: name });
    if (persons.length === 0) {
      res.status(400).send({ msg: "No persons found with this name" });
    }
    res.status(200).send(persons);
  } catch (error) {
    res.status(400).send({ msg: "Error while searching persons by name", error });
  }
};

// Get person
exports.getPerson = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).send(persons);
  } catch (error) {
    res.status(400).send({ msg: "this is an error", error });
  }
};

// Get person by favorite food
exports.getPersonByFood = async (req, res) => {
    try {
      const { food } = req.params;
      const person = await Person.findOne({ favoriteFoods: food });
      if (!person) {
        res.status(400).send({ msg: "Person not found" });
      }
      res.status(200).send(person);
    } catch (error) {
      res.status(400).send({ msg: "this is an error", error });
    }
  };
  
// Get person by id
exports.getPersonByID = async (req, res) => {
  try {
    const { _id } = req.params;
    const persons = await Person.findById({ _id });
    if (!persons) {
      res.status(400).send({ msg: "Person not found" });
    }
    res.status(200).send(persons);
  } catch (error) {
    res.status(400).send({ msg: "this is an error", error });
  }
};

// Delete person
exports.deletePeron = async (req, res) => {
  try {
    const { _id } = req.params;
    await Person.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "Person deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: "this is an error", error });
  }
};

// Update person
exports.updatePerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const newPerson = req.body;
    await Person.updateOne({ _id }, {$set: newPerson});
    res.status(200).send({ msg: "Person updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: "this is an error", error });
  }
};

// Get burrito lovers
exports.getBurritoLovers = (req, res) => {
  Person.find({ favoriteFoods: 'burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec((err, data) => {
  if (err) {
  return res.status(400).json({ error: err });
  }
  return res.status(200).json(data);
  });
  };

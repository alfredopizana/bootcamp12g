const Cell = require('../models/cells')

function getAll () {
  return Cell.find()
}
function getById (id) {
  return Cell.findById(id)
}
function create ({ name, mentors }) {
  return Cell.create({ name, mentors })
}
function addSubitemById (id, mentors) {
  const newMentors = {
    $push: { mentors }
  }
  const options = { new: true, runValidators: true }
  return Cell.findByIdAndUpdate(id, newMentors, options)
}
function deleteSubitemById ({ name, mentors }) {

}
module.exports = {
  getAll,
  getById,
  create,
  addSubitemById,
  deleteSubitemById
}

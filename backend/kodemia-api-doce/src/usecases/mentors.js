const Mentor = require('../models/mentors')

function getAll () {
  return Mentor.find()
}
function getById (id) {
  return Mentor.findById(id)
}
function create ({ name, lastName, modules, gender }) {
  return Mentor.create({ name, lastName, modules, gender })
}
function updateById (id, newData) {
  return Mentor.findByIdAndUpdate(id, newData, { new: true, runValidators: true })
}
function deleteById (id) {
  return Mentor.findByIdAndDelete(id)
}
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}


module.exports = {
    index
}


let projects = require("../db/projects")

function index(req, res) {
    fra.render(res, "home")
}
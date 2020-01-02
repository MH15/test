
module.exports = {
    index
}


let projects = require("../db/projects")

function index(req, res) {
    app.render(res, "parser", {
        test: "bitch"
    })
}
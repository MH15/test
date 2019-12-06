
module.exports = {
    get
}


let sample = {
    tits: "a",
    b: "C"
}

let projects = require("../db/projects")


function get(req, res, params) {
    console.log("EN ROUTE")
    console.log(params)

    // return the first matching project
    let found = projects.filter((current) => {
        return current.link === params.link
    })[0]


    console.log(found)

    res.writeHead(200, { "Content-Type": "application/json" });
    // res.write("suck it"); // You Can Call Response.write Infinite Times BEFORE response.end
    res.end(JSON.stringify(found));
    // fra.render(res, "home")
}

function getAll(req, res) {
    console.log("sending all projects to client")
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(projects));
}
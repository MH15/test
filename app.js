/**
 * This is the starting point for your app.
 */
const { Framework } = require("neanderthal")

global.app = new Framework(__dirname, true)

console.log(app)



// Ensure all files are built before serving

var hrstart = process.hrtime()

// app.buildAllComponents()

// renderComponent


hrend = process.hrtime(hrstart)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

// console.log(app.render)



// app.serve(8000)
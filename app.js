/**
 * This is the starting point for your app.
 */
const { Framework } = require("spacecobra")

global.fra = new Framework(__dirname, true)

// console.log(fra)



// Ensure all files are built before serving

var hrstart = process.hrtime()

fra.buildAllComponents()


hrend = process.hrtime(hrstart)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

console.log(fra.render)

fra.serve(8000)
/**
 * This is the starting point for your app.
 */
const { Framework } = require("/Users/matthewhall/Documents/Projects/Framework/neanderthal")

global.app = new Framework(__dirname, true)
// app.store(db) to link framework with db module

// console.log(app)



app.serve(8000)


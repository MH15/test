/**
 * This is the starting point for your app.
 */
const { Framework } = require("neanderthal")

global.app = new Framework(__dirname, true)

// console.log(app)



// Ensure all files are built before serving

var hrstart = process.hrtime()

// app.buildAllComponents()

// renderComponent


hrend = process.hrtime(hrstart)
// console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

// console.log(app.render)

let a = {
    object: {
        key: "tits",
        value: {
            race: {
                value: 0.9
            }
        },
        array: [
            "a",
            {
                a: "tits"
            }
        ]
    }
}

let splitter = "object.key.value"
let split = splitter.split(".")
console.log(split)

let found = null

for (let s of split) {
    // found
}


console.log(getProp(a, "object.key"))
console.log(getProp(a, "object.array.[1]"))


// app.serve(8000)

/** Get a nested property from an object without returning any errors.
 * If the property or property chain doesn't exist, undefined is returned.
 * Property names with spaces may use either dot or bracket "[]" notation.
 * Note that bracketed property names without surrounding quotes will fail the lookup.
 *      e.g. embedded variables are not supported.
 * @param {object} obj The object to check
 * @param {string} prop The property or property chain to get (e.g. obj.prop1.prop1a or obj['prop1'].prop2)
 * @returns {*|undefined} The value of the objects property or undefined if the property doesn't exist
 */
function getProp(obj, prop) {
    if (typeof obj !== 'object') throw 'getProp: obj is not an object'
    if (typeof prop !== 'string') throw 'getProp: prop is not a string'

    // Replace [] notation with dot notation
    prop = prop.replace(/\[["'`](.*)["'`]\]/g, ".$1")

    return prop.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : undefined
    }, obj || self)
} // --- end of fn getProp() --- //
/*
let re = /[a-zA-Z0-9\-:_]/g
let s = 'v-if="insp'
console.log(s.match(re))
let g = 'v:if="insp'
console.log(g.match(re))
let r = 'v_if="insp'
console.log(r.match(re))
*/

let data = "aaaaa csackdsv;sa\nsacjsalcasd"

console.log("data:", data)

for (let char of data) {
    console.log(`"${char}"`, char == "\n")
}
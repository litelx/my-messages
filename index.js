const fs = require('fs')
const http = require('http')
const url = require('url')

let userUrl = process.argv[2]
let directory = process.argv[3]
// console.log(process.argv)
// console.log(url , directory)

// check if directory is given
if (!directory) return

// check if directory exists
if (!fs.existsSync(directory)) return

if (!userUrl) return

const uri = url.parse(userUrl)
// console.log(uri)
let options = {method: 'HEAD', host: uri.host, port: uri.port, path: uri.path}
let req = http.request(options, function(r) {
    console.log(JSON.stringify(r.headers))
})
req.end()
// https://www.wallashops.co.il/ 
// c:/users/yuo/"working space"/my-messages
'use strict'

const fs = require('fs')
const sass = require('sass')
const path = require('path')
const ROOT_PATH = path.join(__dirname, '../src/lib')

function readFileList (currentPath) {
  const files = fs.readdirSync(currentPath)
  files.forEach((file) => {
    const childPath = path.join(currentPath, file)
    const stat = fs.statSync(childPath)
    if (stat.isDirectory()) {
      readFileList(childPath)
    } else {
      if (file === 'index.scss') {
        const res = sass.compile(childPath, { style: 'compressed' }).css
        fs.writeFileSync(
          childPath.replace('\\src\\lib', '\\dist').substring(0, childPath.length - 7) + 'css', // windows file
          res,
          'utf-8',
          function (error) {
            console.log(error)
          }
        )
      }
    }
  })
}

readFileList(ROOT_PATH)

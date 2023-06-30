'use strict'

const fs = require('fs')
const sass = require('sass')
const path = require('path')
const ENTRY_PATH = path.join(__dirname, '../src/lib') // 入口
const SASS_FILE_NAME = 'index.scss' // 编译文件名

function sassCompile (path) {
  return sass.compile(path, { style: 'compressed' }).css
}

function pathTransform (path) {
  switch (process.platform) {
    case 'darwin':
      return path.replace('/src/lib', '/dist').substring(0, path.length - 7) + 'css' // mac
    case 'win32':
      return path.replace('\\src/lib', '\\dist').substring(0, path.length - 7) + 'css' // windows
  }
}

function fileWrite (path) {
  fs.writeFileSync(pathTransform(path), sassCompile(path), 'utf-8', function (error) {
    console.log(error)
  })
}

function readFileList (currentPath) {
  const files = fs.readdirSync(currentPath)
  files.forEach((file) => {
    const childPath = path.join(currentPath, file)
    const stat = fs.statSync(childPath)
    if (stat.isDirectory()) readFileList(childPath)
    else if (file === SASS_FILE_NAME) fileWrite(childPath)
  })
}

readFileList(ENTRY_PATH)

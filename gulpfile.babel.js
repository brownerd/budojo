import gulp from 'gulp'
import budo from 'budo'
import browserify from 'browserify'
import babs from 'babelify'

import filesystem from 'fs'
import yargs from 'yargs'
import once from 'once'
import openURL from 'opn'

import todo from 'gulp-todo'

const babelify = babs.configure({
  presets: ['es2015']
})

const browser = 'google chrome canary'
const argv = yargs
    .usage('Usage: -d [string] -f [num]')
    .argv

// http://stackoverflow.com/questions/20822273/best-way-to-get-folder-and-file-list-in-javascript
var getAllFilesFromFolder = function(dir = 'js', num = 1) {
  var results = []
  filesystem.readdirSync(`./${dir}`).forEach(function(file) {
    results.push(`./${dir}/${file}`)
  })
  // Since the directory has a .DS_store file, we don't neet to reduce 'num' by 1. coolish.
  return results[(num)]
}


const entry = getAllFilesFromFolder(argv.d, argv.f)
const outfile = 'bundle.js'


//the development task
gulp.task('default', function(cb) {

  var ready = function(){}

  //dev server
  budo(entry, {
    serve: entry,     // end point for our <script> tag
    stream: process.stdout, // pretty-print requests
    live: true,             // live reload & CSS injection
    //dir: 'app',             // directory to serve
    //open: argv.open,        // whether to open the browser
    browserify: {
      transform: babelify   //browserify transforms
    }
  }).on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    ready()
  })
})



//////////
// TODO //
//////////

gulp.task('todo', () => {
 gulp.src(['./js/*.js', './gulpfile.babel.js'])
   .pipe(todo({
     customTags: ['NOTES']
   }))
   .pipe(gulp.dest('.'))
   // -> Will output a TODO.md with your todos
})

// Just a task for Console loggin stuff
gulp.task('clog', function() {
  console.log( entry );
})

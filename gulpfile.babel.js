import budo from 'budo'
import errorify from 'errorify'
import garnish from 'garnish'
import gulp from 'gulp'
import yargs from 'yargs'
import once from 'once'
import openURL from 'opn'
import watchify from 'watchify'
import babelify from 'babelify'

const browser = 'google chrome'
const argv = yargs
    .usage('Usage: -f [num]')
    .argv

const docs = [
  '01-index.js',
  '02-another-file.js'
]

const entry = `./${docs[argv.f - 1]}`

//the development task
gulp.task('default', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo( entry, {
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',            //directory to serve
    //transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    ready()
  })
})

// Just a task for Console loggin stuff
gulp.task('clog', function() {
  console.log( entry );
})

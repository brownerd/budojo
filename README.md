# BUDOJO

A little repo for running JS in the browser lickity split. This is awesome for anyone trying to get the most out of JS tutorials.


## Usage

1. clone the repo
1. run `npm i`
1. run `gulp`. This will open the first file in the `js` directory and enable liveReloading too.

*Optionally, if you run `gulp -f 2` it will open the second file in the `js` directory*
*And if you run `gulp -d js2 -f 3` it will open the third file in the `js2` directory*

## Why does this exist?

I just want to write some JS in a file and see the output in the browser and/or console. I can do that with this little setup. I no longer need to create an html file with all the fixings just to hack some js.

I've used CodeRunner and the NODE REPL, but that only gives me console output. I like this because I can also output to the browser window with liveReloading too.

I added YARGS to this set up that lets me specify the directory and file that I want to open up in the browser from the command line.

Since I'm still in that tutorial heavy phase of JS learning, I can just dump a bunch of JS lessons in the js directory and work on them one at a time by running `gulp -f` and the file's index number. I don't need to specify file names at all.

It has proven to be a fast and flexible way to get the most out of JS tutorials.

## Resources
- [Beginning client and server JavaScript with io.js or Node.js](https://www.youtube.com/watch?v=Ads1A7pn2LI) - Fround out about budo fron this video
- [mattdesl/budo-gulp-starter](https://github.com/mattdesl/budo-gulp-starter/blob/master/gulpfile.js) - Largely fashioned from this stater
- [Budo](https://www.npmjs.com/package/budo)



## Change log

- v3.0.0 - Keeping up with updates to Budo, Babel, Gulp and budo-gulp-starter. Added Gulp Todo.
- v2.0.0 - Added Gulp, and Yargs and more. I wanted to be able to work with more files. And I wanted to be able to launch any one of them from the command line.
- v1.0.0 - Just a simple app for running one js file using budo

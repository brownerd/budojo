# BUDOJO

A little repo for running js in the browser lickity split

1. clone the repo
1. run `npm i`
1. run `gulp -f 1`
1. Edit the `index.js` file, save it and watch it update in the browser

## More info
So, I just want to write some JS in a file and see the output in the browser. I can do that with this little setup. I no longer need to create an html file with all the fixings just to hack some js.

I've used CodeRunner and the NODE REPL, but that only gives me console output. I like this becuase I can also output to the browser window too. And I can do liveReloading.

## Resources
- [Beginning client and server JavaScript with io.js or Node.js](https://www.youtube.com/watch?v=Ads1A7pn2LI) - Fround out about budo fron this video
- [mattdesl/budo-gulp-starter](https://github.com/mattdesl/budo-gulp-starter/blob/master/gulpfile.js) - Largely fashioned from this stater
- [Budo](https://www.npmjs.com/package/budo)


## Change log

- v2.0.0 - Added Gulp, and Yargs and more. I wanted to be able to work with more files. And I wanted to be able to launch any one of them from the command line.
- v1.0.0 - Just a simple app for running one js file using budo

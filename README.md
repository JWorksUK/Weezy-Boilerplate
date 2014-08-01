Weezy Boilerplate
=================

A blank site.

## Getting started

install grunt & bower

```dash
$ npm install -g grunt-cli bower
```

Install Grunt dependencies

```dash
$ npm install && bower install
```

### Config

Initial config, these files may need to be update continuously as the project grows.

Edit ```package.json```

```json
{
    "name" : "xxxxxxxx",
    "version" : "1.0.0",
    "author" : {
        "name" : "xxxxxxxx",
        "email" : "xx@xxxxxxxx.xxx",
        "url" : "http://www.xxxxxxxx.com/"
    },
```

Change the ```name``` of the package in the ```bower.json``` file

```json
{
    "name": "xxxxxxxx",
    "version": "1.0.0",
```

Edit ```www/humans.txt``` update project details.


## Grunt

### Watch
Watchs scss and js files for changes and compiles
```dash
$ grunt watch
```

### Build
Builds css and js files
```dash
$ grunt build
```

# grunt-moonwalker

> Executes Selenium IDE (selenese) tests and get a report of the execution.

This tool needs a Selenium standalone or grid server to be executed.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-moonwalker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-moonwalker');
```

## The "moonwalker" task

### Overview
In your project's Gruntfile, add a section named `moonwalker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  moonwalker: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.selenium
type: `Object`
Default value: `{ host: 'localhost', port: 4444 }`

Determine the host and port where the selenium server (standalone or grid) is reachable.

#### options.desiredCapabilities
type: `Array`
Default value: `[ { browserName: 'firefox' } ]`

Determine the [desired capabilities](https://code.google.com/p/selenium/wiki/DesiredCapabilities) where the test will be executed.

#### options.phantomjs
type: `Object`
Default value: `{ host: 'localhost', port: 8910 }`

Determine the host and port where the Ghostdriver is reachable.

#### options.reporter
type: `Array||Function`
Default value: `console.log`

Determine the reporter to show the messages of execution. This version uses by default `console.log` but a junit reporter has been provided aswell.
Reporters could be a function or an array, where the first element of the array is the name of the reporter and the rest of elements are the arguments
used by the reporter.

#### options.saucelabs
type: `Object`
Default value: `{ host: 'ondemand.saucelabs.com', port: 80 }`
Requires to define :
 - `accesskey`
 - `username`

Determine the connection data to access to your account of saucelabs. Is required to add the `accesskey` and `username`.

### Usage Examples

#### Default Config
In this example, the default config is used to execute the selenese test.

```js
grunt.initConfig({
  moonwalker: {
    success: {
      src: [
        'path/to/the/selenese/test'
      ]
    }
  }
})
```

When this code is executed it will try to connect to a Selenium server in localhost port 4444 if the server is not reachable
it will throw an error else it will execute the tests using Firefox so it's important to have Firefox installed aswell.
We encourage to use the [filter `isFile`](http://gruntjs.com/configuring-tasks) using wildcards.
This test will execute one test in one browser.

#### Extended Config without junit report
In this example, we are adding more specific configuration to execute the selenese tests inside `seleneseTests` folder in two different browsers, Chrome and PhantomJS.

```js
grunt.initConfig({
  moonwalker: {
    success: {
      src: [
        'path/to/the/seleneseTests/**'
      ],
      filter: 'isFile',
      options: {
        desiredCapabilities: [
          {
            browserName: 'chrome'
          },
          {
            browserName: 'phantomjs'
          }
        ]
      }
    }
  }
})

When this code is executed it will try to connect to a Selenium server in localhost port 4444 if the server is not reachable
it will throw an error, it will also will try to connect to the GhostDriver in localhost port 8910 if GhostDriever is not reachable
it will throw an error else it will execute the tests using Chrome and Phantomjs so it's important to have Chrome and Phantomjs installed aswell.
We use the [filter `isFile`](http://gruntjs.com/configuring-tasks) using wildcards to avoid iterate over folders.
This test will execute all the tests inside the folder in two browsers.

#### Extended Config with junit report
In this example, we are adding more specific configuration to execute the selenese tests inside `seleneseTests` folder in two different browsers, Chrome and PhantomJS and get a junit compatible report.

```js
grunt.initConfig({
  moonwalker: {
    success: {
      src: [
        'path/to/the/seleneseTests/**'
      ],
      filter: 'isFile',
      options: {
        desiredCapabilities: [
          {
            browserName: 'chrome'
          },
          {
            browserName: 'phantomjs'
          }
        ],
        reporter: ['junit', 'path/where/save/the/report.xml']
      }
    }
  }
})

When this code is executed it will try to connect to a Selenium server in localhost port 4444 if the server is not reachable
it will throw an error, it will also will try to connect to the GhostDriver in localhost port 8910 if GhostDriever is not reachable
it will throw an error else it will execute the tests using Chrome and Phantomjs so it's important to have Chrome and Phantomjs installed aswell.
We use the [filter `isFile`](http://gruntjs.com/configuring-tasks) using wildcards to avoid iterate over folders.
The reporter will save all the information about the execution of tests in junit compatible report.
This test will execute all the tests inside the folder in two browsers and creates a junit xml compatible report.

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 0.0.1: First release.

var moonwalker = require('moonwalker');
var launcher = moonwalker.launcher;
var reporters = moonwalker.reporters;

module.exports = function (grunt){
    grunt.registerMultiTask('moonwalker', 'Tool to launch Selenium IDE HTML files tests', function (){
        var done = this.async();
        var reporter;
        var options = this.options({
            selenium: {
                host: 'localhost',
                port: 4444
            },
            desiredCapabilities: [
                {
                    browserName: 'firefox'
                }
            ],
            reporter: false
        });
        if(options.reporter){
            if(typeof options.reporter === 'function'){
                reporter = options.reporter;
            }else{
                reporter = reporters[options.reporter[0]](options.reporter[1]);
            }
        }else{
            reporter = console.log;
        }
        this.files.forEach(function (file){
            launcher(file.src, options, reporter, done);
        });
    });
};
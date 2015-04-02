/**
 * grunt file to optimize pictures automatically
 */
module.exports = function(grunt) {
    grunt.initConfig({
        imageoptim: {
            myTask: {
                src: ['img', 'view/images']
            }
        }
    });
    grunt.loadNpmTasks('grunt-imageoptim');
};
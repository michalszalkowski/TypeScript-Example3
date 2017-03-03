module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                src: ["ts/*.ts"],
                dest: 'js/main.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};
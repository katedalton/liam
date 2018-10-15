
module.exports = (grunt) ->
  
  grunt.initConfig
    watch:
      files:
        ['src/*.ts']
      tasks:
        ['ts']
    ts:
      default:
        src: ['src/*.ts']
        tslint:   './tslint.json'
        tsconfig: './tsconfig.json'
  
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-ts'

  grunt.registerTask 'default', ['watch']

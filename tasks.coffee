
module.exports = (grunt) ->
  
  grunt.initConfig
    watch:
      files:
        ['src/*.ts', 'src/**/*.ts']
      tasks:
        ['ts']
    ts:
      dist:
        src: ['src/*.ts', 'src/**/*.ts']
        tslint:   './tslint.json'
        tsconfig: './tsconfig.json'
        outDir:   './dist/'
      bin:
        dist: ['cli/*.ts', 'cli/**/*.ts']
        tslint:   './tslint.json'
        tsconfig: './tsconfig.json'
        outDir:   './bin/'
  
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-ts'

  grunt.registerTask 'default', ['watch']

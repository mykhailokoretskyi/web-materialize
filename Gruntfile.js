'use strict';

var webpack = require('webpack');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        webpack: {
            dev: {
                entry: {
                    index: './jsx/entry/index.jsx',
                },
                output: {
                    path: './public/js/',
                    filename: '[name].js',
                },
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            loader: "babel-loader",
                            query: {compact: false}
                        }
                    ]
                },
                stats: {
                    // Configure the console output
                    colors: true,
                    //modules: true,
                    //reasons: true,
                },
                progress: true,
                keepalive: true,
                plugins: [
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.OccurenceOrderPlugin(true),
                ]
            }
        },
        watch: {
            scripts: {
                files: ['jsx/**/*.jsx'],
                tasks: ['webpack'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['webpack']);
};

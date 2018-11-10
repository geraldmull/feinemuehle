// entry point app.js in src -> output

// set path to current 
// > node webpack.config.js
// C:\projects_react\react-course-project\indecision-app

// source map setup: cheap-module-eval-source-map
// -> fast, not for production

// switch 


const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// install loader

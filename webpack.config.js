var path = require('path');

module.exports = {
    entry: './src/glsl-canvas/glsl-canvas.ts',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts and js files.
            test: /\.(ts|js)?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
        }],
    }
};
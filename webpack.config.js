const path = require('path');

module.exports = {
    entry: {
        renderer: './src/front/renderer.ts',
        detailPageRenderer: './src/front/detailPageRenderer.ts',
        updatePageRenderer: './src/front/updateRenderer.ts'
},
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
};
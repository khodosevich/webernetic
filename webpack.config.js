const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (args) => {
    return {
        mode: args.mode,
        entry: './src/index.ts',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist')
            },
            compress: true,
            port: 3000
        }
    }
};
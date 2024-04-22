const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    entry: {
        main: './src/main.js',
    },

    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}],
                        ]
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: true,
                  },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[name][ext]'
                },
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './assets/icons/[name][ext]'
                },
            },
            {
                test: /\.(woff|ttf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]'
                },
            },
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd,
                removeComments: isProd,
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
}
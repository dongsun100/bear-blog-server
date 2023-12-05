
const nodeExternals = require('webpack-node-externals');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    const isProduction = env.mode === 'production'

    return {
        target: 'node',
        mode: env.mode,
        entry: "./src/server.ts",
        devtool: isProduction ? false: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new Dotenv({
                path: `.env${isProduction ? '.prod' : ''}`,
            }),
        ],
        resolve: {
            extensions: [".mjs", ".tsx", ".ts", ".js"],
        },
        output: {
            filename: "server.js",
            path: path.resolve(__dirname, "dist"),
        },
        externalsPresets: { node: true },
        externals: [nodeExternals()], 
        optimization: {
            minimize: false
        }
    }
}


const nodeExternals = require('webpack-node-externals');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    const isProduction = env.mode === 'production'

    return {
        target: 'node',
        mode: env.mode,
        entry: {
            server: "./src/server.ts",
            server_stop:"./src/server.stop.ts",
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, "bin"),
            clean: true,
        },
        devtool: isProduction ? false: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test:/\.js$/,
                    exclude : /node_modules/,
                    use:'babel-loader',
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

        externalsPresets: { node: true },
        externals: [nodeExternals()], 
        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        chunks: 'initial',
                        name: 'vendor',
                        enforce: true,
                    },
                }
            }
        }
    }
}

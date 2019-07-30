const path = require('path');

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: './dist'
    },
    entry: path.resolve(__dirname, "src", "public", "js", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    {
                        loader: "babel-loader",
                        query: {
                            "presets": ["@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    }
}